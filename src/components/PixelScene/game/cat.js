// The reward cat: walks along the hill one art pixel per tick, steered by keys or a tap.
// While it sits it blinks and flicks its tail now and then (not with reduced motion).

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
    idleTicks: 0,
    nextBlink: between(30, 50),
    nextTail: between(40, 70),
  };
}

export function stepCat(cat, input, scene, { reduced }) {
  const walk = (dir) => {
    cat.x = clampX(cat.x + dir, scene);
    cat.facing = dir;
    cat.frame++;
  };

  if (cat.state === 'enter') {
    walk(1);
    if (cat.x < restX(scene)) cat.x++; // trots in at double speed
    if (cat.x >= restX(scene)) cat.state = 'idle';
    return cat;
  }

  if (input.dir) {
    cat.target = null;
    cat.state = 'walk';
    walk(input.dir);
  } else if (cat.target !== null && clampX(Math.round(cat.target), scene) !== cat.x) {
    // a tap past the edge walks to the edge, then counts as arrived
    cat.state = 'walk';
    walk(Math.sign(clampX(Math.round(cat.target), scene) - cat.x));
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

export const catY = (cat, scene) => Math.round(scene.groundAt(cat.x));

/** Which sprite and frame to draw for the cat right now. */
export function catSprite(cat) {
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

/** For key releases: any steering key counts, whatever is focused or held, so the cat never walks on by itself. */
export function releasedSteerKey(e) {
  const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  if (k === 'ArrowLeft' || k === 'a') return -1;
  if (k === 'ArrowRight' || k === 'd') return 1;
  return 0;
}
