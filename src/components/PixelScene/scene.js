// Draws the placeholder hero scene (night sky, moon, hills, a tree) at art resolution.
// Returns a static background, a few tree frames for the sway, and the points the
// animation layer needs (stars that twinkle, where the fireflies live).

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

export const SWAY_FRAMES = [0, 1, 2, 1, 0, -1, -2, -1];

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
  return { canvas, put, commit };
}

export function buildScene(W, H) {
  const narrow = W < 200;
  const rand = seededRandom(7);
  const horizon = H * (narrow ? 0.8 : 0.78);

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
  for (let k = 0; k < (W * H) / 260; k++) {
    const x = (rand() * W) | 0;
    const y = (rand() ** 1.6 * horizon * 0.8) | 0;
    const bright = rand() < 0.3;
    bg.put(x, y, bright ? STAR : STAR_DIM);
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

  // Moon: a crescent, kept clear of the name.
  const moon = { x: narrow ? W * 0.78 : W * 0.16, y: H * (narrow ? 0.14 : 0.2), r: narrow ? 9 : 13 };
  for (let y = -moon.r; y <= moon.r; y++) {
    for (let x = -moon.r; x <= moon.r; x++) {
      if (x * x + y * y > moon.r * moon.r) continue;
      const ox = x + moon.r * 0.55;
      const oy = y - moon.r * 0.25;
      if (ox * ox + oy * oy < (moon.r * 0.9) ** 2) continue;
      bg.put(moon.x + x, moon.y + y, (x + y) / moon.r > 0.35 ? MOON_SHADE : MOON);
    }
  }

  // Hills: a far ridge and the near ground, each with a one-pixel rim light.
  const ridge = (x) => horizon - 6 - fbm(x * 0.02, 3.1) * H * 0.14;
  const ground = (x) => horizon + 4 - Math.sin((x / W) * Math.PI * 1.2 + 0.4) * H * 0.05 - fbm(x * 0.03, 9.7) * 6;
  for (let x = 0; x < W; x++) {
    const r = ridge(x) | 0;
    const g = ground(x) | 0;
    for (let y = r; y < H; y++) bg.put(x, y, y === r ? FAR_RIM : FAR);
    for (let y = g; y < H; y++) bg.put(x, y, y === g ? NEAR_RIM : NEAR);
  }
  bg.commit();

  // Tree: same seed for every frame, so only the sway changes between frames.
  const tree = {
    x: narrow ? W * 0.5 : W * 0.76,
    baseY: ground((narrow ? W * 0.5 : W * 0.76) | 0) + 1,
    scale: Math.min(H * (narrow ? 0.33 : 0.5), W * (narrow ? 0.55 : 0.3)),
  };
  const lightDir = moon.x < tree.x ? -1 : 1;
  const frames = [-2, -1, 0, 1, 2].map((sway) => drawTree(W, H, tree, sway, lightDir));

  return {
    background: bg.canvas,
    treeFrames: frames,
    twinkles,
    crown: { x: tree.x, y: tree.baseY - tree.scale * 0.62, rx: tree.scale * 0.55, ry: tree.scale * 0.35 },
  };
}

function drawTree(W, H, tree, sway, lightDir) {
  const layer = makeLayer(W, H);
  const rand = seededRandom(11);
  const clusters = [];

  const disc = (cx, cy, r, c) => {
    for (let y = -r; y <= r; y++) for (let x = -r; x <= r; x++) if (x * x + y * y <= r * r + r) layer.put(cx + x, cy + y, c);
  };

  // Higher branches bend further, like wind moving the crown more than the trunk.
  const branch = (x, y, ang, len, w, depth) => {
    const bend = sway * (5 - depth) * 0.012;
    const x2 = x + Math.cos(ang + bend) * len;
    const y2 = y + Math.sin(ang + bend) * len;
    const steps = Math.ceil(len);
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      disc(x + (x2 - x) * t, y + (y2 - y) * t, Math.max(0, Math.round(w * (1 - t * 0.35))), NEAR);
    }
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

  // Leaves: dark base, then lighter layers shifted toward the moon, each with a noisy edge.
  [[0, 0, 1], [1, 0.18, 0.82], [2, 0.34, 0.6], [3, 0.5, 0.34]].forEach(([ci, shift, size]) => {
    clusters.forEach(([cx, cy, r]) => {
      const rr = r * size;
      const ox = cx + lightDir * r * shift;
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
