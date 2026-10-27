import { describe, expect, test } from 'vitest';
import { layoutScene } from '../scene';
import { hitTest } from './hit';

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
