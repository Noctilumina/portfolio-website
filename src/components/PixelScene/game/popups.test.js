import { expect, test } from 'vitest';
import { popupFrame, spawnPlusOne, spawnSparkle, stepPopups } from './popups';

test('a "+1" rises one pixel a tick and is gone after 8 ticks', () => {
  const list = [];
  spawnPlusOne(list, 40, 50);
  stepPopups(list);
  expect(list[0].y).toBe(49);
  for (let i = 0; i < 6; i++) stepPopups(list);
  expect(list).toHaveLength(1);
  stepPopups(list);
  expect(list).toHaveLength(0);
});

test('a sparkle plays its 3 frames and is gone', () => {
  const list = [];
  spawnSparkle(list, 10, 10);
  expect(popupFrame(list[0])).toBe(0);
  stepPopups(list);
  expect(popupFrame(list[0])).toBe(1);
  stepPopups(list);
  expect(popupFrame(list[0])).toBe(2);
  stepPopups(list);
  expect(list).toHaveLength(0);
});
