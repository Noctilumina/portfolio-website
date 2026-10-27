// The cat constellation is found star by star: each click lights a star and grows its lines
// out toward its neighbours; once every star is lit the cat is complete. Hovering near it
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

export const createSky = () => ({ clicked: new Map() }); // star index -> tick it was clicked

export function clickStar(sky, i, tick, count) {
  const isNew = !sky.clicked.has(i);
  if (isNew) sky.clicked.set(i, tick);
  return { isNew, complete: isNew && sky.clicked.size === count };
}

/** Lines to draw: from the star clicked first toward the other, t = how far along (0..1]. */
export function drawnLines(sky, lines, tick, grow) {
  const out = [];
  lines.forEach(([a, b]) => {
    const ta = sky.clicked.get(a);
    const tb = sky.clicked.get(b);
    if (ta === undefined && tb === undefined) return;
    const [from, to, start] = tb === undefined || (ta !== undefined && ta <= tb) ? [a, b, ta] : [b, a, tb];
    out.push({ from, to, t: Math.min(1, (tick - start + 1) / grow) });
  });
  return out;
}

/** Indices of the stars within reach of the mouse (none without a mouse). */
export const revealed = (stars, pointer, reach) =>
  pointer ? stars.flatMap((s, i) => (dist(pointer, s) <= reach ? [i] : [])) : [];

/** The outline's lines whose two stars are both revealed by the mouse. */
export const hoverLines = (lines, shown) => lines.filter(([a, b]) => shown.includes(a) && shown.includes(b));
