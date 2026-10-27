import { expect, test } from 'vitest';
import { HINT_EVERY, HINT_HOLD, constellationHint } from './hint';

test('most of the time no constellation star is hinted', () => {
  expect(constellationHint(40, 8)).toBe(0);
});

test('every so often the stars light up one after another and stay lit for a moment', () => {
  const start = HINT_EVERY * 2;
  expect([0, 1, 2, 7].map((i) => constellationHint(start + i, 8))).toEqual([1, 2, 3, 8]);
  expect(constellationHint(start + 8 + HINT_HOLD - 1, 8)).toBe(8);
  expect(constellationHint(start + 8 + HINT_HOLD, 8)).toBe(0);
});

test('the hint comes roughly every 13 seconds at 110ms a tick', () => {
  expect(HINT_EVERY * 110).toBeGreaterThanOrEqual(12000);
  expect(HINT_EVERY * 110).toBeLessThanOrEqual(15000);
});
