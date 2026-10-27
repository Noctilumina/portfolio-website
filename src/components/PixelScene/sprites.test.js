import { describe, expect, test } from 'vitest';
import { PALETTE, SPRITES } from './sprites';

const NAMES = ['owlBlink', 'owlTurn', 'moonRabbit', 'mousePeek', 'catWalk', 'catSit', 'catTail', 'plusOne', 'sparkle'];
const FRAME_COUNTS = { owlBlink: 3, owlTurn: 3, moonRabbit: 1, mousePeek: 4, catWalk: 4, catSit: 2, catTail: 2, plusOne: 1, sparkle: 3 };

describe('sprites', () => {
  test('every sprite the scene uses exists with its frame count', () => {
    for (const name of NAMES) expect(SPRITES[name]?.frames.length, name).toBe(FRAME_COUNTS[name]);
  });

  test.each(NAMES)('%s frames are the declared size and only use palette colours', (name) => {
    const { w, h, frames } = SPRITES[name];
    for (const frame of frames) {
      expect(frame.length).toBe(h);
      for (const row of frame) {
        expect(row.length).toBe(w);
        for (const ch of row) if (ch !== '.') expect(PALETTE[ch], `${name} uses '${ch}'`).toBeDefined();
      }
    }
  });
});
