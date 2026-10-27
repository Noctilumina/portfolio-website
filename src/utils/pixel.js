// Small helpers shared by the pixel-art canvases (hero scene, dither edges).

const BAYER_8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

/** Ordered-dither threshold in (0, 1) for an art pixel. */
export const bayer = (x, y) => (BAYER_8[y & 7][x & 7] + 0.5) / 64;

/** Deterministic random generator, so a scene looks the same on every load. */
export function seededRandom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function hash(x, y) {
  let h = (x * 374761393 + y * 668265263) >>> 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0;
  return (h ^ (h >>> 16)) / 4294967296;
}

/** Smooth value noise in [0, 1]. */
export function valueNoise(x, y) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

/** Three octaves of value noise, roughly in [0, 1]. */
export const fbm = (x, y) =>
  valueNoise(x, y) * 0.55 + valueNoise(x * 2.1, y * 2.1) * 0.3 + valueNoise(x * 4.3, y * 4.3) * 0.15;

/** '#rrggbb' or 'rgb(r, g, b)' to [r, g, b]. */
export function toRgb(color) {
  const c = color.trim();
  if (c.startsWith('#')) {
    return [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];
  }
  const m = c.match(/\d+/g);
  return m ? [Number(m[0]), Number(m[1]), Number(m[2])] : [0, 0, 0];
}

/** Resolve a custom property name ('--px-sky') or a literal colour against an element. */
export function resolveColor(el, value) {
  return value.startsWith('--') ? getComputedStyle(el).getPropertyValue(value).trim() : value;
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
