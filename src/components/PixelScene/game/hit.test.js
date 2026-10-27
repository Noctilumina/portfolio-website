import { describe, expect, test } from 'vitest';
import { layoutScene } from '../scene';
import { hitTest, isTap, resolveClick } from './hit';

describe.each([[360, 225], [125, 271]])('clicking secrets at %ix%i', (W, H) => {
  const scene = layoutScene(W, H);
  const { owl, moon, constellation, burrow } = scene.anchors;

  test('a click on each secret finds it', () => {
    expect(hitTest(owl, scene, { touch: false })).toBe('owl');
    expect(hitTest(burrow, scene, { touch: false })).toBe('burrow');
    expect(hitTest({ x: moon.x, y: moon.y }, scene, { touch: false })).toBe('moonRabbit');
    expect(hitTest(constellation[3], scene, { touch: false })).toBe('constellation');
  });

  test('the moon counts out to just past its edge', () => {
    expect(hitTest({ x: moon.x + moon.r + 2, y: moon.y }, scene, { touch: false })).toBe('moonRabbit');
    expect(hitTest({ x: moon.x + moon.r + 4, y: moon.y }, scene, { touch: false })).toBeNull();
  });

  test.each(['owl', 'burrow'])('%s: a mouse click 6px off misses, a tap 6px off still finds it', (id) => {
    const a = scene.anchors[id];
    const off = { x: a.x + 6, y: a.y };
    expect(hitTest(off, scene, { touch: false })).toBeNull();
    expect(hitTest(off, scene, { touch: true })).toBe(id);
  });

  test('clicks on the name never hit anything', () => {
    const b = scene.titleBand;
    expect(hitTest({ x: (b.x0 + b.x1) / 2, y: (b.y0 + b.y1) / 2 }, scene, { touch: true })).toBeNull();
  });
});

describe('resolving a click', () => {
  const scene = layoutScene(360, 225);
  const b = scene.titleBand;
  // a star whose streak ends right at the edge of the name band
  const ambient = { star: { start: 0, x0: b.x0 - 40, y0: b.y0 + 5, x1: b.x0 - 2, y1: b.y0 + 5 } };

  test('a click inside the name band never catches the star', () => {
    expect(resolveClick({ x: b.x0 + 3, y: b.y0 + 5 }, scene, ambient, 1500, { touch: true })).toBeNull();
  });

  test('a click on the streak outside the band catches it', () => {
    expect(resolveClick({ x: b.x0 - 4, y: b.y0 + 5 }, scene, ambient, 1500, { touch: false })).toBe('shootingStar');
  });

  test('other secrets still resolve', () => {
    expect(resolveClick(scene.anchors.owl, scene, { star: null }, 0, { touch: false })).toBe('owl');
  });
});

describe('telling a tap from a swipe', () => {
  const down = { x: 100, y: 100, button: 0 };
  test('a press that barely moves is a tap', () => {
    expect(isTap(down, { x: 106, y: 103 }, false)).toBe(true);
  });
  test('a press that travels is a swipe', () => {
    expect(isTap(down, { x: 100, y: 140 }, false)).toBe(false);
  });
  test('a press the browser took over for scrolling is not a tap', () => {
    expect(isTap(down, { x: 100, y: 100 }, true)).toBe(false);
  });
  test('right and middle clicks are not taps', () => {
    expect(isTap({ ...down, button: 2 }, { x: 100, y: 100 }, false)).toBe(false);
  });
});
