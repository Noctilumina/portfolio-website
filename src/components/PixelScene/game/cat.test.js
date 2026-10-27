import { describe, expect, test } from 'vitest';
import { layoutScene } from '../scene';
import { JUMP_ARC, WALK_SPEED, catSprite, catY, createCat, isJumpKey, isSteerKey, jump, releasedSteerKey, restX, stepCat } from './cat';

const scene = layoutScene(360, 225);
const still = { dir: 0 };
const run = (cat, n, input = still, sc = scene, opts = { reduced: false }) => {
  for (let i = 0; i < n; i++) stepCat(cat, input, sc, opts);
};

describe('the cat', () => {
  test('with reduced motion it simply sits at its spot', () => {
    const cat = createCat(scene, { reduced: true });
    expect(cat.state).toBe('idle');
    expect(cat.x).toBe(restX(scene));
  });

  test('otherwise it walks in from the left edge to its spot', () => {
    const cat = createCat(scene, { reduced: false });
    expect(cat.state).toBe('enter');
    expect(cat.x).toBeLessThanOrEqual(3);
    run(cat, restX(scene));
    expect(cat.state).toBe('idle');
    expect(cat.x).toBe(restX(scene));
  });

  test('holding right walks three pixels a tick', () => {
    expect(WALK_SPEED).toBe(3);
    const cat = createCat(scene, { reduced: true });
    const x = cat.x;
    run(cat, 10, { dir: 1 });
    expect(cat.x).toBe(x + 30);
    expect(cat.facing).toBe(1);
    expect(cat.state).toBe('walk');
  });

  test('it never walks off the picture, even after the picture shrinks', () => {
    const cat = createCat(scene, { reduced: true });
    run(cat, 1000, { dir: 1 });
    expect(cat.x).toBe(scene.W - 4);
    const small = layoutScene(125, 271);
    run(cat, 1, still, small);
    expect(cat.x).toBeLessThanOrEqual(small.W - 4);
    run(cat, 1000, { dir: -1 }, small);
    expect(cat.x).toBe(3);
  });

  test('a tap target walks it there and then it sits', () => {
    const cat = createCat(scene, { reduced: true });
    cat.target = cat.x + 7;
    run(cat, 3); // 3 + 3 + 1: it doesn't overshoot
    expect(cat.x).toBe(restX(scene) + 7);
    run(cat, 1);
    expect(cat.target).toBeNull();
    expect(cat.state).toBe('idle');
  });

  test('a tap past the edge walks to the edge and stops', () => {
    const cat = createCat(scene, { reduced: true });
    cat.target = scene.W + 50;
    run(cat, 1000);
    expect(cat.x).toBe(scene.W - 4);
    expect(cat.state).toBe('idle');
    expect(cat.target).toBeNull();
  });

  test('stands on the ground line', () => {
    const cat = createCat(scene, { reduced: true });
    expect(catY(cat, scene)).toBe(Math.round(scene.groundAt(cat.x)));
  });

  test('with reduced motion it never blinks or flicks its tail', () => {
    const cat = createCat(scene, { reduced: true });
    const first = catSprite(cat);
    for (let i = 0; i < 200; i++) {
      stepCat(cat, still, scene, { reduced: true });
      expect(catSprite(cat)).toEqual(first);
    }
  });

  test('otherwise it blinks now and then while sitting', () => {
    const cat = createCat(scene, { reduced: true });
    const seen = new Set();
    for (let i = 0; i < 200; i++) {
      stepCat(cat, still, scene, { reduced: false });
      seen.add(JSON.stringify(catSprite(cat)));
    }
    expect(seen.size).toBeGreaterThan(1);
  });
});

describe('jumping', () => {
  test('a jump lifts it off the ground in an arc and lands it again', () => {
    const cat = createCat(scene, { reduced: true });
    const ground = catY(cat, scene);
    expect(jump(cat)).toBe(true);
    const heights = [];
    for (let i = 0; i < JUMP_ARC.length; i++) {
      stepCat(cat, still, scene, { reduced: true });
      heights.push(ground - catY(cat, scene));
    }
    expect(Math.max(...heights)).toBeGreaterThanOrEqual(6);
    expect(heights.at(-1)).toBe(0);
    expect(catY(cat, scene)).toBe(ground);
  });

  test('it cannot jump again while in the air', () => {
    const cat = createCat(scene, { reduced: true });
    jump(cat);
    stepCat(cat, still, scene, { reduced: true });
    expect(jump(cat)).toBe(false);
    run(cat, JUMP_ARC.length);
    expect(jump(cat)).toBe(true);
  });

  test('it can be steered in the air', () => {
    const cat = createCat(scene, { reduced: true });
    const x = cat.x;
    jump(cat);
    run(cat, 3, { dir: 1 });
    expect(cat.x).toBe(x + 9);
    expect(catSprite(cat).name).toBe('catWalk');
  });

  test('it cannot jump while still walking in', () => {
    const cat = createCat(scene, { reduced: false });
    expect(jump(cat)).toBe(false);
  });
});

describe('jump keys', () => {
  const key = (k, extra = {}) => ({ key: k, target: document.body, ...extra });

  test('up, W and space jump', () => {
    for (const k of ['ArrowUp', 'w', 'W', ' ']) expect(isJumpKey(key(k)), k).toBe(true);
  });

  test('other keys, typing and shortcuts are left alone', () => {
    for (const k of ['ArrowDown', 'PageDown', 'a']) expect(isJumpKey(key(k)), k).toBe(false);
    expect(isJumpKey(key(' ', { target: document.createElement('input') }))).toBe(false);
    expect(isJumpKey(key('ArrowUp', { ctrlKey: true }))).toBe(false);
  });
});

describe('steering keys', () => {
  const key = (k, extra = {}) => ({ key: k, target: document.body, ...extra });

  test('left/right and A/D steer', () => {
    expect(isSteerKey(key('ArrowLeft'))).toBe(-1);
    expect(isSteerKey(key('a'))).toBe(-1);
    expect(isSteerKey(key('ArrowRight'))).toBe(1);
    expect(isSteerKey(key('D'))).toBe(1);
  });

  test('scrolling keys are left alone', () => {
    for (const k of ['ArrowDown', 'ArrowUp', ' ', 'PageDown']) expect(isSteerKey(key(k))).toBe(0);
  });

  test('typing in a field is left alone', () => {
    expect(isSteerKey(key('ArrowLeft', { target: document.createElement('input') }))).toBe(0);
    expect(isSteerKey(key('a', { target: document.createElement('textarea') }))).toBe(0);
  });

  test('shortcuts with modifiers are left alone', () => {
    expect(isSteerKey(key('ArrowLeft', { ctrlKey: true }))).toBe(0);
    expect(isSteerKey(key('ArrowLeft', { altKey: true }))).toBe(0);
  });
});

describe('releasing a steering key', () => {
  test('counts even with a modifier held or focus in a field', () => {
    expect(releasedSteerKey({ key: 'ArrowRight', shiftKey: true })).toBe(1);
    expect(releasedSteerKey({ key: 'D', target: document.createElement('input') })).toBe(1);
    expect(releasedSteerKey({ key: 'a', metaKey: true })).toBe(-1);
    expect(releasedSteerKey({ key: 'ArrowDown' })).toBe(0);
  });
});
