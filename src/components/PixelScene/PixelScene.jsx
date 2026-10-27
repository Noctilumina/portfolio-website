import { useEffect, useRef } from 'react';
import { buildScene, moonLit } from './scene';
import { constellationHint, hintLines } from './game/hint';
import { GROW_TICKS, REVEAL_R, clickStar, createSky, drawnLines, hoverLines, litStars, nearestStar, revealed } from './game/constellation';
import { SPRITES, drawSprite } from './sprites';
import { SECRET_IDS, cheerOnce, isComplete, loadFound, markFound } from './game/progress';
import { isTap, resolveClick } from './game/hit';
import { activeStar, createAmbient, starPoints, stepAmbient } from './game/ambient';
import { popupFrame, spawnPlusOne, spawnSparkle, stepPopups } from './game/popups';
import { glowLevels } from './game/glow';
import { catSprite, catY, createCat, isJumpKey, isSteerKey, jump, releasedSteerKey, stepCat } from './game/cat';
import { artSize, needsRebuild } from './game/size';
import { prefersReducedMotion, toRgb } from '../../utils/pixel';
import styles from './PixelScene.module.css';

const STAR_BRIGHT = toRgb('#ffffff');
const STAR_OFF = toRgb('#5a4a9a');
const STAR_GLOW = toRgb('#c4b5f0');
const LEAF = toRgb('#69b08a');
const LEAF_DARK = toRgb('#2f7468');
const CONSTELLATION_LINE = toRgb('#7f6fc0');
const CONSTELLATION_HOVER = toRgb('#5e519c'); // dimmer: only a glimpse of the outline
const TICK_MS = 110; // stepped animation, ~9 frames a second, like a sprite
const STILL_TICKS = 11; // reduced motion: a reaction shows one still frame for about 1.2s

// What each secret does when clicked: a list of [sprite, frame] per tick.
const REACTIONS = {
  owl: [
    ...[1, 2, 2, 1, 0].map((f) => ['owlBlink', f]),
    ...[0, 0, 0, 1, 1, 2, 2, 2, 1, 1].map((f) => ['owlTurn', f]),
  ],
  moonRabbit: Array(20).fill(['moonRabbit', 0]),
  burrow: [1, 2, 2, 2, 2, 2, 2, 2, 1, 0].map((f) => ['mousePeek', f]),
  constellation: Array(10).fill(null), // the finished cat flashes
};
const STILL = { owl: ['owlBlink', 2], moonRabbit: ['moonRabbit', 0], burrow: ['mousePeek', 2], constellation: null };

/**
 * Placeholder hero art, drawn at low resolution and scaled up with crisp pixels.
 * Stars twinkle; now and then a leaf falls or a star shoots past.
 * Five secrets hide in the scene, and finding all of them brings out a cat.
 */
export default function PixelScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    const reduced = prefersReducedMotion();
    const found = loadFound();
    const cheered = new Set(); // secrets that got their "+1" on this visit
    let scene = null;
    let W = 0;
    let H = 0;
    let px = 4;
    let size = null;
    let press = null; // where the current pointer press started, to tell a tap from a swipe
    let frame = 0;
    let timer = null;
    let visible = true;
    let pointer = null;
    let cat = null;
    const keys = { left: false, right: false };
    const reactions = new Map(); // secret id -> tick it started
    const popups = [];
    const sky = createSky(); // which of the cat's stars have been clicked this visit
    // Without a mouse there is no hover, so the cat's stars light up by themselves now and then.
    const hoverless = window.matchMedia?.('(hover: none)').matches ?? false;
    const ambient = createAmbient(Math.random, performance.now());
    // With reduced motion the shooting star holds still halfway along its path.
    const starTime = (now) => (reduced && ambient.star ? ambient.star.start + 750 : now);

    const build = () => {
      const rect = host.getBoundingClientRect();
      const next = artSize(rect.width, rect.height);
      if (!needsRebuild(size, next)) return;
      size = next;
      ({ px, W, H } = next);
      canvas.width = W;
      canvas.height = H;
      // Whole-number scale keeps every art pixel the same size; the hero clips the overhang.
      canvas.style.width = `${W * px}px`;
      canvas.style.height = `${H * px}px`;
      scene = buildScene(W, H);
      // A returning visitor who already found everything gets their cat back, sitting.
      if (!cat && isComplete(found)) cat = createCat(scene, { reduced: true });
      draw();
    };

    const dot = (x, y, c, alpha = 1) => {
      ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;
      ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
    };

    const line = (a, b, c, alpha = 1) => {
      const n = Math.max(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
      for (let i = 0; i <= n; i++) dot(a.x + ((b.x - a.x) * i) / n, a.y + ((b.y - a.y) * i) / n, c, alpha);
    };

    const drawReaction = (id, tick) => {
      const { anchors } = scene;
      if (id === 'constellation') {
        anchors.constellation.forEach((s) => {
          dot(s.x, s.y, STAR_BRIGHT);
          if (reduced || tick % 4 < 2) [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([dx, dy]) => dot(s.x + dx, s.y + dy, STAR_GLOW));
        });
        return;
      }
      const [name, f] = reduced ? STILL[id] : REACTIONS[id][tick];
      if (id === 'owl') drawSprite(ctx, SPRITES[name], f, anchors.owl.x, anchors.owl.y + 2);
      if (id === 'burrow') drawSprite(ctx, SPRITES[name], f, anchors.burrow.x, anchors.burrow.y + 1);
      if (id === 'moonRabbit') {
        // sits on the thick part of the crescent and is only drawn where the moon is lit
        const { moon } = anchors;
        drawSprite(ctx, SPRITES[name], f, moon.x + Math.round(moon.r * 0.5), moon.y + Math.round(moon.r * 0.3), false,
          (x, y) => moonLit(x - moon.x, y - moon.y, moon.r));
      }
    };

    const draw = () => {
      if (!scene) return;
      const now = performance.now();
      ctx.drawImage(scene.background, 0, 0);

      if (!reduced) {
        scene.twinkles.forEach((s) => {
          const step = (frame + s.phase * 3) % 24;
          if (step === 0) dot(s.x, s.y, STAR_OFF);
          else if (step === 1) {
            dot(s.x, s.y, STAR_BRIGHT);
            dot(s.x - 1, s.y, STAR_OFF);
            dot(s.x + 1, s.y, STAR_OFF);
          }
        });
      }

      // Stars near the mouse brighten a little.
      glowLevels(scene.stars, pointer).forEach((level, i) => {
        const s = scene.stars[i];
        dot(s.x, s.y, STAR_BRIGHT);
        if (level === 2) [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([dx, dy]) => dot(s.x + dx, s.y + dy, STAR_GLOW));
      });

      const star = activeStar(ambient, starTime(now));
      if (star) {
        const pts = starPoints(star, starTime(now));
        pts.forEach((p, i) => dot(p.x, p.y, i < 2 ? STAR_BRIGHT : STAR_GLOW, p.alpha));
        // a 2px head with a faint glow around it, so the streak catches the eye
        const h = pts[0];
        dot(h.x, h.y - 1, STAR_BRIGHT);
        [[-1, 0], [1, -1], [0, 1], [0, -2]].forEach(([dx, dy]) => dot(h.x + dx, h.y + dy, STAR_GLOW, 0.6));
      }

      if (ambient.leaf && !reduced) {
        const { x, y, landed } = ambient.leaf;
        const fade = landed >= 0 ? 0.6 - landed * 0.3 : 1;
        dot(x, y, LEAF, fade);
        dot(x + 1, y, LEAF_DARK, fade);
      }

      // The cat's lines grow out of every star clicked so far; stars they reach light up.
      const cs = scene.anchors.constellation;
      drawnLines(sky, scene.constellationLines, frame, reduced ? 1 : GROW_TICKS).forEach(({ from, to, t }) => {
        const a = cs[from];
        const b = cs[to];
        line(a, { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }, CONSTELLATION_LINE);
      });
      litStars(sky, scene.constellationLines, frame, reduced ? 1 : GROW_TICKS).forEach((i) => dot(cs[i].x, cs[i].y, STAR_BRIGHT));

      // Near the mouse, only the cat's stars within reach show themselves, with the lines between them.
      const shown = revealed(cs, pointer, REVEAL_R);
      hoverLines(scene.constellationLines, shown).forEach(([a, b]) => {
        if (!sky.clicked.has(a) && !sky.clicked.has(b)) line(cs[a], cs[b], CONSTELLATION_HOVER);
      });
      shown.forEach((i) => {
        dot(cs[i].x, cs[i].y, STAR_BRIGHT);
        [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([dx, dy]) => dot(cs[i].x + dx, cs[i].y + dy, STAR_GLOW, 0.7));
      });

      // Hint on touch screens: now and then the constellation's stars light up one after another.
      if (hoverless && !reduced && !reactions.has('constellation') && sky.clicked.size === 0) {
        const lit = constellationHint(frame, cs.length);
        hintLines(scene.constellationLines, lit).forEach(([a, b]) => line(cs[a], cs[b], CONSTELLATION_LINE, 0.55));
        cs.slice(0, lit).forEach((s, i) => {
          dot(s.x, s.y, STAR_BRIGHT);
          if (i === lit - 1) [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([dx, dy]) => dot(s.x + dx, s.y + dy, STAR_GLOW));
        });
      }

      reactions.forEach((start, id) => drawReaction(id, frame - start));

      if (cat) {
        const { name, frame: f } = catSprite(cat);
        drawSprite(ctx, SPRITES[name], f, cat.x, catY(cat, scene) - 1, cat.facing < 0);
      }

      popups.forEach((p) => {
        if (p.kind === 'plus') drawSprite(ctx, SPRITES.plusOne, 0, p.x, p.y);
        else drawSprite(ctx, SPRITES.sparkle, popupFrame(p), p.x, p.y + 2);
      });
    };

    const step = () => {
      frame++;
      const now = performance.now();
      // The shooting star is a secret, so it still comes with reduced motion (as a still streak).
      stepAmbient(ambient, now, scene, Math.random);
      reactions.forEach((start, id) => {
        const length = reduced ? STILL_TICKS : REACTIONS[id].length;
        if (frame - start >= length) reactions.delete(id);
      });
      stepPopups(popups);
      if (cat) stepCat(cat, { dir: (keys.right ? 1 : 0) - (keys.left ? 1 : 0) }, scene, { reduced });
      draw();
    };

    const start = () => {
      if (timer || !visible || document.hidden) return;
      timer = setInterval(step, TICK_MS);
    };
    const stop = () => {
      clearInterval(timer);
      timer = null;
    };

    const found1 = (id, x, y) => {
      const { complete } = markFound(found, id);
      if (cheerOnce(cheered, id)) {
        spawnSparkle(popups, x, y);
        spawnPlusOne(popups, x, y - 4);
      }
      if (complete && !cat) cat = createCat(scene, { reduced });
    };

    const toArt = (e) => {
      const rect = host.getBoundingClientRect();
      return { x: (e.clientX - rect.left) / px, y: (e.clientY - rect.top) / px };
    };

    // Act on release, and only for a tap: a swipe that starts on the hero is someone scrolling.
    const onPointerDown = (e) => {
      press = { x: e.clientX, y: e.clientY, button: e.button, cancelled: false };
    };
    const onPointerCancel = () => {
      if (press) press.cancelled = true;
    };
    const onPointerUp = (e) => {
      const down = press;
      press = null;
      if (!scene || !down || !isTap(down, { x: e.clientX, y: e.clientY }, down.cancelled)) return;
      const p = toArt(e);
      const id = resolveClick(p, scene, ambient, starTime(performance.now()), { touch: e.pointerType !== 'mouse' });
      if (id === 'shootingStar') {
        ambient.star = null; // caught
        found1('shootingStar', Math.round(p.x), Math.round(p.y));
        draw();
        return;
      }
      if (id === 'constellation') {
        const cs = scene.anchors.constellation;
        const i = nearestStar(p, cs, e.pointerType !== 'mouse' ? 8 : 5);
        if (i >= 0 && clickStar(sky, i, frame, scene.constellationLines, cs.length).complete) {
          reactions.set(id, frame);
          // the "+1" rises from under the cat, clear of the menu above it
          const b = scene.constellationBox;
          found1(id, Math.round((b.x0 + b.x1) / 2) - 2, b.y1 + 4);
        }
        draw();
        return;
      }
      if (id) {
        reactions.set(id, frame);
        const a = id === 'moonRabbit' ? scene.anchors.moon : scene.anchors[id];
        found1(id, a.x, a.y - 4);
        draw();
        return;
      }
      // a tap on the cat makes it jump; a tap on the ground near the hill sends it there
      if (cat && Math.hypot(p.x - cat.x, p.y - (catY(cat, scene) - 4)) <= (e.pointerType !== 'mouse' ? 9 : 6)) jump(cat);
      else if (cat && p.y > scene.groundAt(Math.round(p.x)) - 8) cat.target = Math.round(p.x);
    };

    const onPointerMove = (e) => {
      pointer = e.pointerType === 'mouse' ? toArt(e) : null;
    };
    const onPointerLeave = () => {
      pointer = null;
    };

    const onKeyDown = (e) => {
      // Space and up only belong to the cat while the hero is mostly on screen; past that they scroll.
      if (cat && visible && isJumpKey(e) && host.getBoundingClientRect().bottom > window.innerHeight * 0.5) {
        jump(cat);
        e.preventDefault();
        return;
      }
      const dir = isSteerKey(e);
      if (!dir || !cat || !visible) return;
      if (dir < 0) keys.left = true;
      else keys.right = true;
      e.preventDefault();
    };
    const onKeyUp = (e) => {
      const dir = releasedSteerKey(e);
      if (dir < 0) keys.left = false;
      if (dir > 0) keys.right = false;
    };
    // A key released while the page lost focus never sends keyup, so let go of everything.
    const releaseKeys = () => {
      keys.left = keys.right = false;
    };

    const onVisibility = () => {
      if (document.hidden) {
        stop();
        releaseKeys();
      } else start();
    };

    build();
    start();

    const resize = new ResizeObserver(() => build());
    resize.observe(host);
    const seen = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else {
        stop();
        releaseKeys();
      }
    });
    seen.observe(host);
    host.addEventListener('pointerdown', onPointerDown);
    host.addEventListener('pointerup', onPointerUp);
    host.addEventListener('pointercancel', onPointerCancel);
    host.addEventListener('pointermove', onPointerMove);
    host.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', releaseKeys);
    document.addEventListener('visibilitychange', onVisibility);

    if (import.meta.env.DEV) {
      // Testing helpers: __hero.reset(), __hero.star(), __hero.unlock()
      window.__hero = {
        reset: () => {
          found.clear();
          try {
            localStorage.removeItem('pixel-hero-secrets-v1');
          } catch {
            // storage blocked
          }
          cat = null;
        },
        star: () => {
          ambient.nextStarAt = performance.now();
        },
        unlock: () => SECRET_IDS.forEach((id) => found1(id, W / 2, H / 2)),
        // read-only views for automated checks
        cat: () => cat && { x: cat.x, y: catY(cat, scene), air: cat.air, state: cat.state },
        starHead: () => {
          const now = starTime(performance.now());
          const s = activeStar(ambient, now);
          return s && starPoints(s, now)[0];
        },
        layout: () => ({ px, anchors: scene.anchors, titleBand: scene.titleBand, constellationBox: scene.constellationBox }),
      };
    }

    return () => {
      stop();
      resize.disconnect();
      seen.disconnect();
      host.removeEventListener('pointerdown', onPointerDown);
      host.removeEventListener('pointerup', onPointerUp);
      host.removeEventListener('pointercancel', onPointerCancel);
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', releaseKeys);
      document.removeEventListener('visibilitychange', onVisibility);
      if (import.meta.env.DEV) delete window.__hero;
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.scene} aria-hidden="true" />;
}
