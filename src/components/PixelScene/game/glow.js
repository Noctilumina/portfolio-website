// Stars near the mouse pointer brighten a little: level 2 right under it, level 1 nearby.

export function glowLevels(stars, pointer, radius = 18) {
  const levels = new Map();
  if (!pointer) return levels;
  stars.forEach((s, i) => {
    const d = Math.hypot(s.x - pointer.x, s.y - pointer.y);
    if (d <= 6) levels.set(i, 2);
    else if (d <= radius) levels.set(i, 1);
  });
  return levels;
}
