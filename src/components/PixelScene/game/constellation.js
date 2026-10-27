// The cat constellation is found by connecting the dots: a click lights a star and grows its
// lines out to its neighbours, which light up when a line reaches them. Once every star is
// lit the cat is complete and the rest of its outline draws itself. Hovering near it
// reveals only the stars close to the mouse.

export const GROW_TICKS = 4; // ticks a line takes to reach the next star
export const REVEAL_R = 14; // art pixels around the mouse in which the cat's stars show

const dist = (p, s) => Math.hypot(p.x - s.x, p.y - s.y);

/** Index of the closest star within reach of the point, or -1. */
export function nearestStar(point, stars, reach) {
  let best = -1;
  stars.forEach((s, i) => {
    if (dist(point, s) <= reach && (best < 0 || dist(point, s) < dist(point, stars[best]))) best = i;
  });
  return best;
}

// clicked: star index -> tick it was clicked; doneAt: tick every star was lit
export const createSky = () => ({ clicked: new Map(), doneAt: undefined });

const reached = (sky, lines) => {
  const lit = new Set(sky.clicked.keys());
  lines.forEach(([a, b]) => {
    if (sky.clicked.has(a)) lit.add(b);
    if (sky.clicked.has(b)) lit.add(a);
  });
  return lit;
};

export function clickStar(sky, i, tick, lines, count) {
  const isNew = !sky.clicked.has(i);
  if (isNew) sky.clicked.set(i, tick);
  const complete = sky.doneAt === undefined && reached(sky, lines).size === count;
  if (complete) sky.doneAt = tick;
  return { isNew, complete };
}

/** Lines to draw: from the star clicked first toward the other, t = how far along (0..1]. */
export function drawnLines(sky, lines, tick, grow) {
  const out = [];
  lines.forEach(([a, b]) => {
    const ta = sky.clicked.get(a);
    const tb = sky.clicked.get(b);
    if (ta === undefined && tb === undefined) {
      if (sky.doneAt !== undefined) out.push({ from: a, to: b, t: Math.min(1, (tick - sky.doneAt + 1) / grow) });
      return;
    }
    const [from, to, start] = tb === undefined || (ta !== undefined && ta <= tb) ? [a, b, ta] : [b, a, tb];
    out.push({ from, to, t: Math.min(1, (tick - start + 1) / grow) });
  });
  return out;
}

/** Stars that are lit: clicked ones, and those a fully grown line has reached. */
export function litStars(sky, lines, tick, grow) {
  const lit = new Set(sky.clicked.keys());
  drawnLines(sky, lines, tick, grow).forEach(({ from, to, t }) => {
    if (t === 1) lit.add(from).add(to);
  });
  return [...lit].sort((a, b) => a - b);
}

/** Indices of the stars within reach of the mouse (none without a mouse). */
export const revealed = (stars, pointer, reach) =>
  pointer ? stars.flatMap((s, i) => (dist(pointer, s) <= reach ? [i] : [])) : [];

/** The outline's lines whose two stars are both revealed by the mouse. */
export const hoverLines = (lines, shown) => lines.filter(([a, b]) => shown.includes(a) && shown.includes(b));
