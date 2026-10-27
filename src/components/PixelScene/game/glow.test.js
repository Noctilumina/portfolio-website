import { expect, test } from 'vitest';
import { glowLevels } from './glow';

const stars = [{ x: 100, y: 50 }];

test('a star right under the pointer glows brightest', () => {
  expect(glowLevels(stars, { x: 100, y: 50 }).get(0)).toBe(2);
});

test('a star a little way off glows softly', () => {
  expect(glowLevels(stars, { x: 112, y: 50 }).get(0)).toBe(1);
});

test('a star far from the pointer does not glow', () => {
  expect(glowLevels(stars, { x: 130, y: 50 }).has(0)).toBe(false);
});

test('no pointer means no glow', () => {
  expect(glowLevels(stars, null).size).toBe(0);
});
