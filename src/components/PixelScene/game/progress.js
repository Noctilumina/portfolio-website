// Which hero secrets this visitor has found. Saved in the browser; when storage is
// blocked (private mode, strict tracking protection) progress lives for this visit only.

export const SECRET_IDS = ['owl', 'moonRabbit', 'constellation', 'burrow', 'shootingStar'];

const KEY = 'pixel-hero-secrets-v1';

export function loadFound() {
  try {
    const ids = JSON.parse(localStorage.getItem(KEY));
    return new Set(Array.isArray(ids) ? ids.filter((id) => SECRET_IDS.includes(id)) : []);
  } catch {
    return new Set();
  }
}

export const isComplete = (found) => SECRET_IDS.every((id) => found.has(id));

/** Records a find in `found` and saves it. `isNew` is false for repeats and unknown ids. */
export function markFound(found, id) {
  if (!SECRET_IDS.includes(id) || found.has(id)) return { isNew: false, complete: false };
  found.add(id);
  try {
    localStorage.setItem(KEY, JSON.stringify([...found]));
  } catch {
    // storage blocked: keep the find in memory only
  }
  return { isNew: true, complete: isComplete(found) };
}
