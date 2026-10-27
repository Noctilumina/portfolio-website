import { describe, expect, test } from 'vitest';
import { GROW_TICKS, hoverLines, litStars, REVEAL_R, clickStar, createSky, drawnLines, nearestStar, revealed } from './constellation';

const stars = [{ x: 10, y: 10 }, { x: 14, y: 12 }, { x: 18, y: 10 }, { x: 9, y: 17 }];
const lines = [[0, 1], [1, 2], [0, 3], [2, 3]];

describe('picking a star', () => {
  test('a click picks the closest star within reach', () => {
    expect(nearestStar({ x: 13, y: 12 }, stars, 5)).toBe(1);
    expect(nearestStar({ x: 11, y: 10 }, stars, 5)).toBe(0);
  });

  test('a click too far from every star picks none', () => {
    expect(nearestStar({ x: 40, y: 40 }, stars, 5)).toBe(-1);
  });
});

describe('clicking stars', () => {
  test('connecting the dots completes it: every star lit by a click or by a line reaching it', () => {
    const sky = createSky();
    expect(clickStar(sky, 0, 1, lines, stars.length)).toEqual({ isNew: true, complete: false }); // lights 0, 1, 3
    expect(clickStar(sky, 0, 2, lines, stars.length)).toEqual({ isNew: false, complete: false });
    expect(clickStar(sky, 2, 3, lines, stars.length)).toEqual({ isNew: true, complete: true }); // lights 2: all lit
  });

  test('a star lights up when a line reaches it', () => {
    const sky = createSky();
    clickStar(sky, 0, 10, lines, stars.length);
    expect(litStars(sky, lines, 10, GROW_TICKS)).toEqual([0]);
    expect(litStars(sky, lines, 10 + GROW_TICKS, GROW_TICKS)).toEqual([0, 1, 3]);
  });

  test('once complete, the rest of the outline draws itself', () => {
    const more = [...lines, [1, 3]]; // 1-3 touches neither clicked star
    const sky = createSky();
    clickStar(sky, 0, 10, more, stars.length);
    expect(drawnLines(sky, more, 30, GROW_TICKS)).toHaveLength(2);
    clickStar(sky, 2, 20, more, stars.length);
    const drawn = drawnLines(sky, more, 20 + GROW_TICKS, GROW_TICKS);
    expect(drawn).toHaveLength(more.length);
    expect(drawn.every((l) => l.t === 1)).toBe(true);
  });

  test('nothing is drawn before a star is clicked', () => {
    expect(drawnLines(createSky(), lines, 10, GROW_TICKS)).toEqual([]);
  });

  test('lines grow out of a clicked star toward its neighbours', () => {
    const sky = createSky();
    clickStar(sky, 0, 10, lines, stars.length);
    const first = drawnLines(sky, lines, 10, GROW_TICKS);
    expect(first.map((l) => [l.from, l.to])).toEqual([[0, 1], [0, 3]]);
    expect(first.every((l) => l.t > 0 && l.t < 1)).toBe(true);
    const later = drawnLines(sky, lines, 10 + GROW_TICKS, GROW_TICKS);
    expect(later.every((l) => l.t === 1)).toBe(true);
  });

  test('a line between two clicked stars grows from the one clicked first', () => {
    const sky = createSky();
    clickStar(sky, 1, 10, lines, stars.length);
    clickStar(sky, 0, 20, lines, stars.length);
    const l = drawnLines(sky, lines, 20, GROW_TICKS).find((x) => (x.from === 1 && x.to === 0) || (x.from === 0 && x.to === 1));
    expect(l).toMatchObject({ from: 1, to: 0, t: 1 });
  });

  test('lines no clicked star touches stay hidden', () => {
    const sky = createSky();
    clickStar(sky, 0, 10, lines, stars.length);
    const drawn = drawnLines(sky, lines, 30, GROW_TICKS).map((l) => [l.from, l.to].sort().join('-'));
    expect(drawn).not.toContain('1-2');
    expect(drawn).not.toContain('2-3');
  });
});

describe('hovering', () => {
  test('only the stars within reach of the mouse are revealed', () => {
    expect(revealed(stars, { x: 10, y: 10 }, 5)).toEqual([0, 1]);
    expect(revealed(stars, { x: 60, y: 60 }, REVEAL_R)).toEqual([]);
    expect(revealed(stars, null, REVEAL_R)).toEqual([]);
  });
});

describe('hover lines', () => {
  test('a line shows when both its stars are revealed by the mouse', () => {
    expect(hoverLines(lines, [0, 1])).toEqual([[0, 1]]);
    expect(hoverLines(lines, [0, 1, 3])).toEqual([[0, 1], [0, 3]]);
    expect(hoverLines(lines, [2])).toEqual([]);
  });
});
