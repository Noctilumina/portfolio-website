import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { SECRET_IDS, cheerOnce, isComplete, loadFound, markFound } from './progress';

const KEY = 'pixel-hero-secrets-v1';

beforeEach(() => localStorage.clear());
afterEach(() => vi.restoreAllMocks());

describe('saved secret progress', () => {
  test('starts empty when nothing is stored', () => {
    expect(loadFound().size).toBe(0);
  });

  test('a find is saved and read back', () => {
    const found = loadFound();
    markFound(found, 'owl');
    expect(localStorage.getItem(KEY)).toBe('["owl"]');
    expect(loadFound().has('owl')).toBe(true);
  });

  test('finding the same secret twice is not new', () => {
    const found = loadFound();
    markFound(found, 'owl');
    expect(markFound(found, 'owl')).toEqual({ isNew: false, complete: false });
  });

  test('the fifth find completes the set', () => {
    const found = loadFound();
    const results = SECRET_IDS.map((id) => markFound(found, id));
    expect(results.at(-1)).toEqual({ isNew: true, complete: true });
    expect(results.slice(0, -1).every((r) => !r.complete)).toBe(true);
    expect(isComplete(found)).toBe(true);
  });

  test('unknown ids are ignored', () => {
    const found = loadFound();
    expect(markFound(found, 'foo')).toEqual({ isNew: false, complete: false });
    expect(localStorage.getItem(KEY)).toBeNull();
  });

  test('a corrupt stored value reads as empty', () => {
    localStorage.setItem(KEY, 'not json');
    expect(loadFound().size).toBe(0);
  });

  test('blocked storage still lets secrets be found for this visit', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    const found = loadFound();
    expect(found.size).toBe(0);
    expect(markFound(found, 'owl')).toEqual({ isNew: true, complete: false });
    expect(found.has('owl')).toBe(true);
  });
});

describe('the "+1"', () => {
  test('shows the first time a secret is found on this visit, even if it was found on an earlier one', () => {
    const cheered = new Set();
    expect(cheerOnce(cheered, 'constellation')).toBe(true);
    expect(cheerOnce(cheered, 'constellation')).toBe(false);
    expect(cheerOnce(cheered, 'owl')).toBe(true);
  });
});
