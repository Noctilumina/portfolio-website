// Things that happen in the hero on their own: a leaf that lets go of the tree and a
// shooting star. Both are rare. The star is slow and forgiving to catch (secret 5).

export const STAR_MS = 1500;
const STAR_TAIL = 10;
const between = (rand, lo, hi) => lo + rand() * (hi - lo);

export function createAmbient(rand, now) {
  return {
    nextLeafAt: now + between(rand, 15000, 30000),
    nextStarAt: now + between(rand, 6000, 12000), // early, so a short visit still sees one
    star: null,
    leaf: null,
  };
}

const inBand = (x, y, b, pad) => x >= b.x0 - pad && x <= b.x1 + pad && y >= b.y0 - pad && y <= b.y1 + pad;

/** A diagonal path through open sky: inside the picture, above the hills, clear of the name. */
function pickStarPath(scene, rand) {
  const { W, H, titleBand, groundAt, narrow } = scene;
  const len = W * (narrow ? 0.3 : 0.16);
  for (let attempt = 0; attempt < 60; attempt++) {
    const dir = rand() < 0.5 ? 1 : -1;
    const x0 = between(rand, 2, W - 3);
    const y0 = between(rand, H * 0.04, H * 0.55);
    const x1 = x0 + dir * len * 0.9;
    const y1 = y0 + len * 0.45;
    if (x1 < 0 || x1 >= W) continue;
    if (y1 > groundAt(Math.round(x1)) - 10) continue;
    let clear = true;
    for (let t = 0; t <= 1 && clear; t += 0.02) {
      if (inBand(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, titleBand, 2)) clear = false;
    }
    if (clear) return { x0, y0, x1, y1 };
  }
  return null;
}

export function stepAmbient(state, now, scene, rand) {
  if (state.star && now > state.star.start + STAR_MS) state.star = null;
  if (!state.star && now >= state.nextStarAt) {
    // A star whose moment passed while the timer was paused is skipped, not shown late.
    const path = now - state.nextStarAt <= STAR_MS ? pickStarPath(scene, rand) : null;
    if (path) state.star = { start: now, ...path };
    state.nextStarAt = now + between(rand, 12000, 25000);
  }

  if (state.leaf) {
    const leaf = state.leaf;
    if (leaf.landed >= 0) {
      leaf.landed++;
      if (leaf.landed >= 2) state.leaf = null;
    } else {
      leaf.age++;
      leaf.y += 1;
      if (leaf.age % 2 === 0) leaf.x += Math.floor(leaf.age / 4) % 2 ? -1 : 1; // stepped side-to-side drift
      if (leaf.y >= scene.groundAt(Math.round(leaf.x))) leaf.landed = 0;
    }
  } else if (now >= state.nextLeafAt) {
    const { crown } = scene;
    const a = between(rand, 0.15, 0.85) * Math.PI; // somewhere on the lower edge of the crown
    state.leaf = { x: Math.round(crown.x + Math.cos(a) * crown.rx), y: Math.round(crown.y + Math.sin(a) * crown.ry), age: 0, landed: -1 };
    state.nextLeafAt = now + between(rand, 15000, 30000);
  }
  return state;
}

export const activeStar = (state, now) => (state.star && now <= state.star.start + STAR_MS ? state.star : null);

/** The head first, then the tail behind it, fading out. */
export function starPoints(star, now) {
  const p = Math.min(1, Math.max(0, (now - star.start) / STAR_MS));
  const dx = star.x1 - star.x0;
  const dy = star.y1 - star.y0;
  const len = Math.hypot(dx, dy);
  const hx = star.x0 + dx * p;
  const hy = star.y0 + dy * p;
  return Array.from({ length: STAR_TAIL + 1 }, (_, i) => ({
    x: hx - (dx / len) * i,
    y: hy - (dy / len) * i,
    alpha: 1 - i / (STAR_TAIL + 1),
  }));
}

export function hitStar(state, point, now, tolerance = 6) {
  const star = activeStar(state, now);
  if (!star) return false;
  return starPoints(star, now).some((s) => Math.hypot(point.x - s.x, point.y - s.y) <= tolerance);
}
