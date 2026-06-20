/**
 * Broad-nib pen renderer.
 *
 * A glyph stroke is a CENTERLINE (a list of points). We "ink" it by sweeping a
 * broad nib — a short line segment held at a fixed angle — along that centerline.
 * Where the stroke runs across the nib it is thick; where it runs along the nib
 * it thins to a hairline. That is what a real broad pen does, and it means
 * thickness is a consequence of direction, not a shape we draw by hand.
 *
 * On top of that we add human variation so no two strokes are identical and no
 * stroke is a perfectly symmetric taper:
 *   - per-stroke nib-angle jitter
 *   - an ASYMMETRIC width envelope (different cadence at each end, fattest point
 *     not in the middle)
 *   - low-frequency width noise (pressure wobble)
 *   - a gentle centerline waver (the pen never travels perfectly straight)
 *   - a minimum-width floor with round ends, so hairlines stay inked and the
 *     quick ends curve slightly instead of stopping dead.
 *
 * All randomness is seeded, so a given glyph always renders the same way.
 */

const TAU = Math.PI * 2;
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function cr(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;
  return {
    x: 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
    y: 0.5 * ((2 * p1.y) + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
  };
}

/** Catmull-Rom resample of a polyline into a smooth point list. */
function sample(pts, closed, subdiv) {
  let P = pts.map((p) => ({ x: p[0], y: p[1] }));
  if (P.length === 2) {
    // a straight 2-point stroke: insert a midpoint so it can waver a little
    P = [P[0], { x: (P[0].x + P[1].x) / 2, y: (P[0].y + P[1].y) / 2 }, P[1]];
  }
  const n = P.length;
  const get = (i) => {
    if (closed) return P[((i % n) + n) % n];
    if (i < 0) return { x: 2 * P[0].x - P[1].x, y: 2 * P[0].y - P[1].y };
    if (i >= n) return { x: 2 * P[n - 1].x - P[n - 2].x, y: 2 * P[n - 1].y - P[n - 2].y };
    return P[i];
  };
  const out = [];
  const segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const p0 = get(i - 1); const p1 = get(i); const p2 = get(i + 1); const p3 = get(i + 2);
    for (let s = 0; s < subdiv; s++) out.push(cr(p0, p1, p2, p3, s / subdiv));
  }
  if (!closed) out.push(get(segs));
  return out;
}

const f1 = (v) => Math.round(v * 10) / 10;

/**
 * Ink one stroke. Returns { fill, center, minWidth, closed }:
 *   fill   — filled outline of the broad-nib ribbon ('d')
 *   center — the (wavered) centerline, stroked thin to floor the hairlines
 */
export function strokeToPaths(stroke, opts = {}) {
  const broad = opts.broad ?? 15;
  const minWidth = opts.minWidth ?? 3.2;
  const nibAngle = opts.nibAngle ?? -0.61; // ~ -35deg
  const closed = !!stroke.closed;
  const rnd = mulberry32(opts.seed ?? 1);

  const pts = sample(stroke.pts, closed, 10);
  const n = pts.length;

  const ang = nibAngle + (rnd() - 0.5) * 0.24;
  const nx = Math.cos(ang);
  const ny = Math.sin(ang);

  // asymmetric width envelope + pressure noise (human cadence)
  const startW = 0.45 + rnd() * 0.5;
  const endW = 0.45 + rnd() * 0.5;
  const bulge = 0.22 + rnd() * 0.5;
  const nAmp = (rnd() - 0.5) * 0.4;
  const nFreq = 2 + Math.floor(rnd() * 4);
  const nPh = rnd() * TAU;
  // centerline waver
  const wAmp = 0.4 + rnd() * 0.7;
  const wFreq = 1 + Math.floor(rnd() * 3);
  const wPh = rnd() * TAU;

  const widthAt = (t) => {
    const env = t < bulge ? lerp(startW, 1, t / (bulge || 1)) : lerp(1, endW, (t - bulge) / ((1 - bulge) || 1));
    const noise = 1 + nAmp * Math.sin(nFreq * t * TAU + nPh);
    return clamp(env * noise, 0.18, 1.3);
  };

  const left = [];
  const right = [];
  const cen = [];
  for (let i = 0; i < n; i++) {
    const t = closed ? i / n : i / (n - 1 || 1);
    const p = pts[i];
    const a = pts[Math.max(0, i - 1)];
    const b = pts[Math.min(n - 1, i + 1)];
    let tx = b.x - a.x;
    let ty = b.y - a.y;
    const tl = Math.hypot(tx, ty) || 1;
    tx /= tl; ty /= tl;
    const wob = wAmp * Math.sin(wFreq * t * TAU + wPh);
    const cx = p.x + -ty * wob;
    const cy = p.y + tx * wob;
    const half = (broad / 2) * widthAt(t);
    left.push([cx + nx * half, cy + ny * half]);
    right.push([cx - nx * half, cy - ny * half]);
    cen.push([cx, cy]);
  }

  const polyTo = (arr) => arr.map(([x, y], i) => `${i ? 'L' : 'M'}${f1(x)},${f1(y)}`).join('');

  let fill;
  if (closed) {
    // annulus: outer loop then inner loop, even-odd fill
    fill = `${polyTo(left)}Z${polyTo(right.slice().reverse())}Z`;
  } else {
    fill = `${polyTo(left)}${right.slice().reverse().map(([x, y]) => `L${f1(x)},${f1(y)}`).join('')}Z`;
  }
  const center = polyTo(cen) + (closed ? 'Z' : '');
  return { fill, center, minWidth, closed };
}

/** Serialize one stroke to an SVG string (for export). */
export function strokeToSvgString(stroke, opts = {}) {
  const { fill, center, minWidth, closed } = strokeToPaths(stroke, opts);
  const rule = closed ? ' fill-rule="evenodd"' : '';
  return `<path d="${fill}" fill="currentColor" stroke="none"${rule}/>`
    + `<path d="${center}" fill="none" stroke="currentColor" stroke-width="${minWidth}" stroke-linecap="round" stroke-linejoin="round"/>`;
}
