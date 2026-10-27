import { describe, expect, test } from 'vitest';
import { seededRandom } from '../../../utils/pixel';
import { layoutScene } from '../scene';
import { activeStar, createAmbient, hitStar, starPoints, stepAmbient, STAR_MS } from './ambient';

const scene = layoutScene(360, 225);

/** Steps the ambient state at 110ms ticks until a shooting star appears. */
function untilStar(state, rand, now = 0) {
  while (!state.star) {
    now += 110;
    stepAmbient(state, now, scene, rand);
  }
  return now;
}

const segmentHitsBand = (s, b) => {
  for (let t = 0; t <= 1; t += 0.01) {
    const x = s.x0 + (s.x1 - s.x0) * t;
    const y = s.y0 + (s.y1 - s.y0) * t;
    if (x >= b.x0 && x <= b.x1 && y >= b.y0 && y <= b.y1) return true;
  }
  return false;
};

describe('shooting star', () => {
  test('the first one comes 6 to 12 seconds in, so a short visit still sees one', () => {
    const rand = seededRandom(1);
    const state = createAmbient(rand, 0, scene);
    const now = untilStar(state, rand);
    expect(state.star.start).toBe(now);
    expect(now).toBeGreaterThanOrEqual(6000);
    expect(now).toBeLessThanOrEqual(12000 + 110);
  });

  test('after that one comes every 12 to 25 seconds', () => {
    const rand = seededRandom(7);
    const state = createAmbient(rand, 0, scene);
    const first = untilStar(state, rand);
    stepAmbient(state, first + 1600, scene, rand);
    const second = untilStar(state, rand, first + 1600);
    expect(second - first).toBeGreaterThanOrEqual(12000);
    expect(second - first).toBeLessThanOrEqual(25000 + 220);
  });

  test('the streak is long enough to notice: a 2px head and a 10px tail', () => {
    const rand = seededRandom(8);
    const state = createAmbient(rand, 0, scene);
    untilStar(state, rand);
    expect(starPoints(state.star, state.star.start + 700)).toHaveLength(11);
  });

  test('it is on screen for 1.5 seconds', () => {
    const rand = seededRandom(2);
    const state = createAmbient(rand, 0, scene);
    untilStar(state, rand);
    const { start } = state.star;
    expect(STAR_MS).toBe(1500);
    expect(activeStar(state, start + 1499)).not.toBeNull();
    expect(activeStar(state, start + 1501)).toBeNull();
  });

  test('after a long pause no stale star is left and the next one is in the future', () => {
    const rand = seededRandom(3);
    const state = createAmbient(rand, 0, scene);
    untilStar(state, rand);
    const later = state.star.start + 60000;
    stepAmbient(state, later, scene, rand);
    expect(activeStar(state, later)).toBeNull();
    expect(state.nextStarAt).toBeGreaterThan(later);
  });

  test.each([[360, 225], [125, 271]])('at %ix%i its path never crosses the name and stays above the hills', (W, H) => {
    const sc = layoutScene(W, H);
    for (let seed = 0; seed < 200; seed++) {
      const rand = seededRandom(seed);
      const state = createAmbient(rand, 0, sc);
      let now = 0;
      while (!state.star) {
        now += 110;
        stepAmbient(state, now, sc, rand);
      }
      const s = state.star;
      expect(segmentHitsBand(s, sc.titleBand), `seed ${seed}`).toBe(false);
      expect(s.y1).toBeLessThanOrEqual(sc.groundAt(Math.round(s.x1)) - 10);
      expect(Math.min(s.x0, s.x1)).toBeGreaterThanOrEqual(0);
      expect(Math.max(s.x0, s.x1)).toBeLessThan(sc.W);
    }
  });

  test('a click near any part of the streak catches it', () => {
    const rand = seededRandom(4);
    const state = createAmbient(rand, 0, scene);
    untilStar(state, rand);
    const now = state.star.start + 700;
    const pts = starPoints(state.star, now);
    const head = pts[0];
    const tailEnd = pts.at(-1);
    expect(hitStar(state, tailEnd, now)).toBe(true);
    expect(hitStar(state, { x: head.x + 5, y: head.y }, now)).toBe(true);
    // 7px off the streak, perpendicular to its direction
    const dx = state.star.x1 - state.star.x0;
    const dy = state.star.y1 - state.star.y0;
    const len = Math.hypot(dx, dy);
    expect(hitStar(state, { x: head.x - (dy / len) * 7, y: head.y + (dx / len) * 7 }, now)).toBe(false);
  });

  test('a finished star cannot be caught', () => {
    const rand = seededRandom(5);
    const state = createAmbient(rand, 0, scene);
    untilStar(state, rand);
    const { x1, y1, start } = state.star;
    expect(hitStar(state, { x: x1, y: y1 }, start + 1600)).toBe(false);
  });
});

describe('falling leaf', () => {
  test('the first one falls 15 to 30 seconds in, then lands and disappears', () => {
    const rand = seededRandom(6);
    const state = createAmbient(rand, 0, scene);
    let now = 0;
    while (!state.leaf) {
      now += 110;
      stepAmbient(state, now, scene, rand);
    }
    expect(now).toBeGreaterThanOrEqual(15000);
    expect(now).toBeLessThanOrEqual(30000 + 110);

    let ticksAfterLanding = -1;
    while (state.leaf) {
      now += 110;
      stepAmbient(state, now, scene, rand);
      if (ticksAfterLanding >= 0) ticksAfterLanding++;
      else if (state.leaf && state.leaf.y >= scene.groundAt(Math.round(state.leaf.x))) ticksAfterLanding = 0;
    }
    expect(ticksAfterLanding).toBeGreaterThanOrEqual(0);
    expect(ticksAfterLanding).toBeLessThanOrEqual(3);
  });
});
