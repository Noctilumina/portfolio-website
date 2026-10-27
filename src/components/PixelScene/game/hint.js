// A gentle hint for the constellation secret: every ~13 seconds its stars light up one
// after another and the whole cat shows for a moment, so a curious eye can spot it.

export const HINT_EVERY = 120; // ticks between hints (110ms each)
export const HINT_HOLD = 18; // ticks the full outline stays lit

/** How many of the constellation's stars are lit on this tick (0 = no hint right now). */
export function constellationHint(frame, count) {
  const t = frame % HINT_EVERY;
  if (t < count) return t + 1;
  return t < count + HINT_HOLD ? count : 0;
}

/** The outline's lines whose two stars are both lit, so the cat draws itself star by star. */
export const hintLines = (lines, lit) => lines.filter(([a, b]) => a < lit && b < lit);
