import { describe, expect, test } from 'vitest';
import { layoutScene } from './scene';

const SIZES = [
  [360, 225], // 1440x900 desktop
  [125, 271], // 375x812 phone
  [271, 174], // 812x520 landscape phone
  [384, 216], // 1920x1080
];

const inBand = (p, b) => p.x >= b.x0 && p.x <= b.x1 && p.y >= b.y0 && p.y <= b.y1;

describe.each(SIZES)('scene layout at %ix%i', (W, H) => {
  const s = layoutScene(W, H);
  const { owl, moon, constellation, burrow, treeX } = s.anchors;
  const points = [owl, moon, burrow, ...constellation];

  test('every secret sits inside the picture', () => {
    for (const p of points) {
      expect(p.x).toBeGreaterThanOrEqual(0);
      expect(p.x).toBeLessThan(W);
      expect(p.y).toBeGreaterThanOrEqual(0);
      expect(p.y).toBeLessThan(H);
    }
  });

  test('no secret sits under the name', () => {
    for (const p of points) expect(inBand(p, s.titleBand)).toBe(false);
  });

  test('the burrow is dug into the ground line', () => {
    expect(Math.abs(burrow.y - Math.round(s.groundAt(burrow.x)))).toBeLessThanOrEqual(1);
  });

  test('the burrow keeps clear of the trunk', () => {
    expect(Math.abs(burrow.x - treeX)).toBeGreaterThanOrEqual(12);
  });

  test('the owl hides inside the crown', () => {
    const c = s.crown;
    expect(Math.abs(owl.x - c.x)).toBeLessThanOrEqual(c.rx);
    expect(Math.abs(owl.y - c.y)).toBeLessThanOrEqual(c.ry * 1.5);
  });

  test('the constellation is a group of 6 to 8 stars with lines between them', () => {
    expect(constellation.length).toBeGreaterThanOrEqual(6);
    expect(constellation.length).toBeLessThanOrEqual(8);
    for (const [a, b] of s.constellationLines) {
      expect(constellation[a]).toBeDefined();
      expect(constellation[b]).toBeDefined();
    }
  });

  test('the layout is the same every time', () => {
    expect(layoutScene(W, H).anchors).toEqual(s.anchors);
  });
});
