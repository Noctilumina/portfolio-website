// Draws the placeholder hero scene (night sky, moon, hills, a tree) at art resolution.
// `layoutScene` decides where everything sits without drawing; `buildScene` paints it
// and returns the picture plus the points the animation and the secrets need.

import { bayer, fbm, seededRandom, toRgb } from '../../utils/pixel';

const SKY = ['#0d0b24', '#16123b', '#211852', '#2e1f6b', '#41287f', '#5a3190', '#7a3a96', '#a2468f'].map(toRgb);
const LEAVES = ['#102a35', '#1d4a52', '#2f7468', '#69b08a'].map(toRgb);
const STAR = toRgb('#f3ecff');
const STAR_DIM = toRgb('#9b8ad1');
const MOON = toRgb('#fff1c9');
const MOON_SHADE = toRgb('#e8c98f');
const FAR = toRgb('#2a1d55');
const FAR_RIM = toRgb('#4b3486');
const NEAR = toRgb('#120d26');
const NEAR_RIM = toRgb('#33245e');
const OWL = toRgb('#0b1a22');
const OWL_EYE = toRgb('#c9b25a');
const BURROW = toRgb('#06040f');
const CONSTELLATION_STAR = toRgb('#e4dcff');

// Owl silhouette, anchored so its eyes sit one row above `owl.y`.
const OWL_SHAPE = ['#...#', '#####', '#e#e#', '#####', '.###.', '.###.'];

// Sitting-cat outline for the constellation secret: two pointed ears, head, body, tail.
const CAT_STARS = [[0, 0], [3, 2], [6, 0], [-1, 5], [7, 5], [-2, 13], [8, 13], [12, 9]];
const CAT_LINES = [[0, 1], [1, 2], [0, 3], [2, 4], [3, 5], [4, 6], [5, 6], [6, 7]];

function makeLayer(W, H) {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(W, H);
  const put = (x, y, c) => {
    x |= 0;
    y |= 0;
    if (x < 0 || y < 0 || x >= W || y >= H) return;
    const i = (y * W + x) * 4;
    img.data[i] = c[0];
    img.data[i + 1] = c[1];
    img.data[i + 2] = c[2];
    img.data[i + 3] = 255;
  };
  const commit = () => ctx.putImageData(img, 0, 0);
  return { canvas, ctx, put, commit };
}

/** Whether a point (relative to the moon's centre) is on the lit crescent. */
export function moonLit(dx, dy, r) {
  if (dx * dx + dy * dy > r * r) return false;
  const bx = dx + r * 0.55;
  const by = dy - r * 0.25;
  return bx * bx + by * by >= (r * 0.9) ** 2;
}

/**
 * Where everything sits, without drawing anything: the ground line, the tree, the
 * area kept clear for the name, and the anchor points of the five secrets.
 */
export function layoutScene(W, H) {
  const narrow = W < 200;
  const horizon = H * (narrow ? 0.8 : 0.78);
  const ridge = (x) => horizon - 6 - fbm(x * 0.02, 3.1) * H * 0.14;
  const groundAt = (x) =>
    Math.floor(horizon + 4 - Math.sin((x / W) * Math.PI * 1.2 + 0.4) * H * 0.05 - fbm(x * 0.03, 9.7) * 6);

  // The name is centred in the sky; on phones it spans nearly the full width.
  const titleBand = narrow
    ? { x0: W * 0.04, x1: W * 0.96, y0: H * 0.22, y1: H * 0.46 }
    : { x0: W * 0.25, x1: W * 0.75, y0: H * 0.12, y1: H * 0.4 };

  const moon = {
    x: Math.round(narrow ? W * 0.78 : W * 0.16),
    y: Math.round(H * (narrow ? 0.14 : 0.2)),
    r: narrow ? 9 : 13,
  };

  const treeX = Math.round(narrow ? W * 0.5 : W * 0.78);
  const tree = {
    x: treeX,
    baseY: groundAt(treeX) + 1,
    scale: Math.min(H * (narrow ? 0.33 : 0.42), W * (narrow ? 0.55 : 0.28)),
  };
  const lightDir = moon.x < tree.x ? -1 : 1;
  const shape = treeShape(tree);
  const crown = { x: tree.x, y: tree.baseY - tree.scale * 0.62, rx: tree.scale * 0.55, ry: tree.scale * 0.35 };

  // Owl: in the leaf cluster closest to the middle of the crown, tucked into its shadow side.
  const dist = (c) => Math.hypot(c[0] - crown.x, c[1] - crown.y);
  const [cx, cy, cr] = shape.clusters.reduce((best, c) => (dist(c) < dist(best) ? c : best));
  const owl = { x: Math.round(cx - lightDir * cr * 0.3), y: Math.round(cy + cr * 0.1) };

  // Constellation: a quiet corner of the sky away from the moon, the crown and the name.
  const cs = 1.5;
  const origin = narrow ? { x: W * 0.12, y: H * 0.1 } : { x: W * 0.86, y: H * 0.08 }; // below the menu bar
  const constellation = CAT_STARS.map(([x, y]) => ({ x: Math.round(origin.x + x * cs), y: Math.round(origin.y + y * cs) }));
  // No ordinary stars in this patch, so the cat's own stars aren't lost among them.
  const xs = constellation.map((p) => p.x);
  const ys = constellation.map((p) => p.y);
  const constellationBox = { x0: Math.min(...xs) - 3, x1: Math.max(...xs) + 3, y0: Math.min(...ys) - 3, y1: Math.max(...ys) + 3 };

  const burrowX = Math.round(narrow ? W * 0.22 : W * 0.45);
  const burrow = { x: burrowX, y: groundAt(burrowX) };

  return {
    W,
    H,
    narrow,
    horizon,
    ridge,
    groundAt,
    titleBand,
    tree,
    lightDir,
    shape,
    crown,
    constellationLines: CAT_LINES,
    constellationBox,
    anchors: { owl, moon, constellation, burrow, treeX },
  };
}

export function buildScene(W, H) {
  const L = layoutScene(W, H);
  const { narrow, horizon, ridge, groundAt } = L;
  const { moon, owl, constellation, burrow } = L.anchors;
  const rand = seededRandom(7);
  const bg = makeLayer(W, H);

  // Sky: banded by noise so it reads as painted swirls, dithered between neighbouring colours.
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let t = y / horizon + (fbm(x * 0.035, y * 0.06) - 0.5) * 0.32;
      t = Math.max(0, Math.min(0.999, t)) * (SKY.length - 1);
      const i = Math.floor(t);
      bg.put(x, y, SKY[Math.min(SKY.length - 1, t - i > bayer(x, y) ? i + 1 : i)]);
    }
  }

  // Stars: the bright ones are handed to the animation layer so they can twinkle.
  const twinkles = [];
  const stars = [];
  for (let k = 0; k < (W * H) / 260; k++) {
    const x = (rand() * W) | 0;
    const y = (rand() ** 1.6 * horizon * 0.8) | 0;
    const bright = rand() < 0.3;
    const box = L.constellationBox;
    if (x >= box.x0 - 3 && x <= box.x1 + 3 && y >= box.y0 - 3 && y <= box.y1 + 3) continue; // room for a sparkle's arms too
    bg.put(x, y, bright ? STAR : STAR_DIM);
    stars.push({ x, y });
    if (rand() < 0.06) {
      bg.put(x - 1, y, STAR_DIM);
      bg.put(x + 1, y, STAR_DIM);
      bg.put(x, y - 1, STAR_DIM);
      bg.put(x, y + 1, STAR_DIM);
      bg.put(x, y, STAR);
    } else if (bright) {
      twinkles.push({ x, y, phase: (rand() * 8) | 0 });
    }
  }
  // The constellation's stars are a shade off from the rest: a hint for a curious eye.
  constellation.forEach((p) => {
    bg.put(p.x, p.y, CONSTELLATION_STAR);
    stars.push(p);
  });

  // Moon: a crescent, kept clear of the name.
  for (let y = -moon.r; y <= moon.r; y++) {
    for (let x = -moon.r; x <= moon.r; x++) {
      if (!moonLit(x, y, moon.r)) continue;
      bg.put(moon.x + x, moon.y + y, (x + y) / moon.r > 0.35 ? MOON_SHADE : MOON);
    }
  }

  // Hills: a far ridge and the near ground, each with a one-pixel rim light.
  for (let x = 0; x < W; x++) {
    const r = ridge(x) | 0;
    const g = groundAt(x);
    for (let y = r; y < H; y++) bg.put(x, y, y === r ? FAR_RIM : FAR);
    for (let y = g; y < H; y++) bg.put(x, y, y === g ? NEAR_RIM : NEAR);
  }

  // Burrow: a hole dug into the hillside. The ground's rim light dips into it, a few
  // grains of dug-up earth lie beside it, and the opening is the darkest thing on the hill.
  const hole = narrow ? ['.###.', '#####', '.###.'] : ['.####.', '######', '######', '.####.'];
  const hw = hole[0].length;
  hole.forEach((row, ry) => {
    [...row].forEach((ch, rx) => {
      if (ch === '#') bg.put(burrow.x + rx - Math.floor(hw / 2), burrow.y + ry, BURROW);
    });
  });
  bg.put(burrow.x - Math.floor(hw / 2) - 1, burrow.y, NEAR_RIM);
  bg.put(burrow.x + hw - Math.floor(hw / 2), burrow.y, NEAR_RIM);
  [[-hw, 1], [hw - 1, 2], [-hw + 1, 2]].forEach(([dx, dy]) => bg.put(burrow.x + dx, burrow.y + dy, NEAR_RIM));
  bg.commit();
  bg.ctx.drawImage(drawTree(W, H, L), 0, 0);

  // Owl: a dark shape in the leaves (ear tufts, round body); only two faint eyes give it away.
  const owlLayer = makeLayer(W, H);
  OWL_SHAPE.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (ch !== '.') owlLayer.put(owl.x + x - 2, owl.y + y - 3, ch === 'e' ? OWL_EYE : OWL);
    });
  });
  owlLayer.commit();
  bg.ctx.drawImage(owlLayer.canvas, 0, 0);

  return { ...L, background: bg.canvas, twinkles, stars };
}

/** Branch segments and leaf-cluster positions for the tree, from a fixed seed. */
function treeShape(tree) {
  const rand = seededRandom(11);
  const segments = [];
  const clusters = [];
  const branch = (x, y, ang, len, w, depth) => {
    const x2 = x + Math.cos(ang) * len;
    const y2 = y + Math.sin(ang) * len;
    segments.push([x, y, x2, y2, w, len]);
    if (depth === 0 || len < 4) {
      clusters.push([x2, y2, Math.max(4, len * 0.9)]);
      return;
    }
    const n = depth > 3 ? 2 : 2 + (rand() < 0.5 ? 1 : 0);
    for (let k = 0; k < n; k++) {
      const spread = (k - (n - 1) / 2) * (0.55 + rand() * 0.25);
      branch(x2, y2, ang + spread + (rand() - 0.5) * 0.3, len * (0.68 + rand() * 0.12), Math.max(0, w * 0.62), depth - 1);
    }
  };
  branch(tree.x, tree.baseY, -Math.PI / 2 - 0.06, tree.scale * 0.32, Math.max(2, tree.scale * 0.045), 5);
  return { segments, clusters };
}

function drawTree(W, H, L) {
  const layer = makeLayer(W, H);
  const { segments, clusters } = L.shape;
  const disc = (cx, cy, r, c) => {
    for (let y = -r; y <= r; y++) for (let x = -r; x <= r; x++) if (x * x + y * y <= r * r + r) layer.put(cx + x, cy + y, c);
  };
  segments.forEach(([x, y, x2, y2, w, len]) => {
    const steps = Math.ceil(len);
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      disc(x + (x2 - x) * t, y + (y2 - y) * t, Math.max(0, Math.round(w * (1 - t * 0.35))), NEAR);
    }
  });

  // Leaves: dark base, then lighter layers shifted toward the moon, each with a noisy edge.
  [[0, 0, 1], [1, 0.18, 0.82], [2, 0.34, 0.6], [3, 0.5, 0.34]].forEach(([ci, shift, size]) => {
    clusters.forEach(([cx, cy, r]) => {
      const rr = r * size;
      const ox = cx + L.lightDir * r * shift;
      const oy = cy - r * shift;
      for (let y = -rr - 2; y <= rr + 2; y++) {
        for (let x = -rr - 2; x <= rr + 2; x++) {
          const edge = rr * (0.8 + fbm((ox + x) * 0.25, (oy + y) * 0.25) * 0.45);
          if (x * x + y * y <= edge * edge) layer.put(ox + x, oy + y, LEAVES[ci]);
        }
      }
    });
  });

  layer.commit();
  return layer.canvas;
}
