import { expect, test } from 'vitest';
import { artSize, needsRebuild } from './size';

test('art pixels grow with the screen and the art covers it', () => {
  expect(artSize(1440, 900)).toEqual({ px: 4, W: 360, H: 225 });
  expect(artSize(375, 812)).toEqual({ px: 3, W: 125, H: 271 });
});

test('a resize that keeps the art size but changes the pixel size still rebuilds', () => {
  const a = artSize(1080, 900);
  const b = artSize(1440, 1200);
  expect([a.W, a.H]).toEqual([b.W, b.H]);
  expect(a.px).not.toBe(b.px);
  expect(needsRebuild(a, b)).toBe(true);
  expect(needsRebuild(a, { ...a })).toBe(false);
  expect(needsRebuild(null, a)).toBe(true);
});
