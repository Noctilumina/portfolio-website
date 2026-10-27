// How big one art pixel is on screen, and how many art pixels cover the hero.

export function artSize(width, height) {
  // art pixels grow on big screens so the scene keeps its detail level instead of looking empty
  const px = Math.max(3, Math.round(Math.min(width, height * 1.6) / 360));
  return { px, W: Math.max(1, Math.ceil(width / px)), H: Math.max(1, Math.ceil(height / px)) };
}

/** Rebuilding the scene is the expensive part, so only when the art grid or pixel size changes. */
export const needsRebuild = (prev, next) => !prev || prev.W !== next.W || prev.H !== next.H || prev.px !== next.px;
