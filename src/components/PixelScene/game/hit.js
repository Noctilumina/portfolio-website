// Which secret (if any) a click lands on, in art pixels. Taps get a bigger target than a mouse.
// The shooting star moves, so it is checked separately (see ambient.js).

const inBand = (p, b) => p.x >= b.x0 && p.x <= b.x1 && p.y >= b.y0 && p.y <= b.y1;
const near = (p, a, r) => Math.hypot(p.x - a.x, p.y - a.y) <= r;

export function hitTest(point, scene, { touch }) {
  if (inBand(point, scene.titleBand)) return null;
  const r = touch ? 8 : 5;
  const { owl, moon, constellation, burrow } = scene.anchors;
  if (near(point, owl, r)) return 'owl';
  if (near(point, burrow, r)) return 'burrow';
  if (near(point, moon, moon.r + 2)) return 'moonRabbit';
  if (constellation.some((s) => near(point, s, r))) return 'constellation';
  return null;
}
