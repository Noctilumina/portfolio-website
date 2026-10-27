// The reward cat: trots along the hill, steered by keys or a tap, and jumps on up/W/space
// or a tap on the cat. While it sits it blinks and flicks its tail now and then (not with
// reduced motion).

export const WALK_SPEED = 3; // art pixels a tick
export const JUMP_ARC = [3, 5, 6, 7, 7, 6, 5, 3, 0]; // height above the ground, tick by tick

const between = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));

export const restX = (scene) => Math.round(scene.W * (scene.narrow ? 0.15 : 0.2));
const clampX = (x, scene) => Math.min(scene.W - 4, Math.max(3, x));

export function createCat(scene, { reduced }) {
  return {
    x: reduced ? restX(scene) : 0,
    state: reduced ? 'idle' : 'enter',
    facing: 1,
    frame: 0,
    target: null,
    air: -1, // tick of the jump it is in, -1 on the ground
    idleTicks: 0,
    nextBlink: between(30, 50),
    nextTail: between(40, 70),
  };
}

export function stepCat(cat, input, scene, { reduced }) {
  const walk = (dir, most = WALK_SPEED) => {
    cat.x = clampX(cat.x + dir * Math.min(WALK_SPEED, most), scene);
    cat.facing = dir;
    cat.frame++;
  };

  if (cat.state === 'enter') {
    walk(1, restX(scene) - cat.x);
    if (cat.x >= restX(scene)) cat.state = 'idle';
    return cat;
  }

  if (cat.air >= 0) cat.air = cat.air + 1 < JUMP_ARC.length ? cat.air + 1 : -1;

  if (input.dir) {
    cat.target = null;
    cat.state = 'walk';
    walk(input.dir);
  } else if (cat.target !== null && clampX(Math.round(cat.target), scene) !== cat.x) {
    // a tap past the edge walks to the edge, then counts as arrived
    const to = clampX(Math.round(cat.target), scene);
    cat.state = 'walk';
    walk(Math.sign(to - cat.x), Math.abs(to - cat.x));
  } else {
    cat.target = null;
    if (cat.state !== 'idle') {
      cat.state = 'idle';
      cat.idleTicks = 0;
    }
    cat.idleTicks++;
  }
  cat.x = clampX(cat.x, scene);

  if (cat.state === 'idle' && !reduced) {
    if (cat.idleTicks >= cat.nextBlink + 1) cat.nextBlink = cat.idleTicks + between(30, 50);
    if (cat.idleTicks >= cat.nextTail + 3) cat.nextTail = cat.idleTicks + between(40, 70);
  }
  cat.reduced = reduced;
  return cat;
}

/** Starts a jump; only from the ground, and not while it is still walking in. */
export function jump(cat) {
  if (cat.air >= 0 || cat.state === 'enter') return false;
  cat.air = 0;
  return true;
}

export const catY = (cat, scene) => Math.round(scene.groundAt(cat.x)) - (cat.air >= 0 ? JUMP_ARC[cat.air] : 0);

/** Which sprite and frame to draw for the cat right now. */
export function catSprite(cat) {
  if (cat.air >= 0) return { name: 'catWalk', frame: 1 }; // legs stretched out mid-leap
  if (cat.state === 'enter' || cat.state === 'walk') return { name: 'catWalk', frame: cat.frame % 4 };
  if (!cat.reduced) {
    if (cat.idleTicks === cat.nextBlink) return { name: 'catSit', frame: 1 };
    if (cat.idleTicks >= cat.nextTail && cat.idleTicks < cat.nextTail + 3) return { name: 'catTail', frame: 1 };
  }
  return { name: 'catSit', frame: 0 };
}

const TYPING = ['INPUT', 'TEXTAREA', 'SELECT'];

/** -1 / 1 for keys that steer the cat, 0 for everything else (so the page keeps scrolling). */
export function isSteerKey(e) {
  if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return 0;
  const t = e.target;
  if (t && (TYPING.includes(t.tagName) || t.isContentEditable)) return 0;
  const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  if (k === 'ArrowLeft' || k === 'a') return -1;
  if (k === 'ArrowRight' || k === 'd') return 1;
  return 0;
}

/** Up, W or space make the cat jump, with the same guards as steering. */
export function isJumpKey(e) {
  if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return false;
  const t = e.target;
  if (t && (TYPING.includes(t.tagName) || t.isContentEditable)) return false;
  return e.key === 'ArrowUp' || e.key === ' ' || e.key.toLowerCase() === 'w';
}

/** For key releases: any steering key counts, whatever is focused or held, so the cat never walks on by itself. */
export function releasedSteerKey(e) {
  const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  if (k === 'ArrowLeft' || k === 'a') return -1;
  if (k === 'ArrowRight' || k === 'd') return 1;
  return 0;
}
