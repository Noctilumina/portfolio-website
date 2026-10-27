import { useEffect, useRef } from 'react';
import { buildScene } from './scene';
import { SPRITES, drawSprite } from './sprites';
import { SECRET_IDS, isComplete, loadFound, markFound } from './game/progress';
import { hitTest } from './game/hit';
import { activeStar, createAmbient, hitStar, starPoints, stepAmbient } from './game/ambient';
import { popupFrame, spawnPlusOne, spawnSparkle, stepPopups } from './game/popups';
import { glowLevels } from './game/glow';
import { catSprite, catY, createCat, isSteerKey, stepCat } from './game/cat';
import { prefersReducedMotion, seededRandom, toRgb } from '../../utils/pixel';
import styles from './PixelScene.module.css';

const FIREFLY = toRgb('#ffe08a');
const FIREFLY_GLOW = toRgb('#b88a3a');
const STAR_BRIGHT = toRgb('#ffffff');
const STAR_OFF = toRgb('#5a4a9a');
const STAR_GLOW = toRgb('#c4b5f0');
const LEAF = toRgb('#69b08a');
const LEAF_DARK = toRgb('#2f7468');
const CONSTELLATION_LINE = toRgb('#7f6fc0');
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
  constellation: Array(7 + 20).fill(null), // lines appear one per tick, hold, then vanish
};
const STILL = { owl: ['owlBlink', 2], moonRabbit: ['moonRabbit', 0], burrow: ['mousePeek', 2], constellation: null };

/**
 * Placeholder hero art, drawn at low resolution and scaled up with crisp pixels.
 * Stars twinkle and fireflies wander; now and then a leaf falls or a star shoots past.
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
    let scene = null;
    let flies = [];
    let W = 0;
    let H = 0;
    let px = 4;
    let frame = 0;
    let timer = null;
    let visible = true;
    let pointer = null;
    let cat = null;
    const keys = { left: false, right: false };
    const reactions = new Map(); // secret id -> tick it started
    const popups = [];
    const ambient = createAmbient(Math.random, performance.now());
    // With reduced motion the shooting star holds still halfway along its path.
    const starTime = (now) => (reduced && ambient.star ? ambient.star.start + 750 : now);

    const build = () => {
      const rect = host.getBoundingClientRect();
      // art pixels grow on big screens so the scene keeps its detail level instead of looking empty
      px = Math.max(3, Math.round(Math.min(rect.width, rect.height * 1.6) / 360));
      const nextW = Math.max(1, Math.ceil(rect.width / px));
      const nextH = Math.max(1, Math.ceil(rect.height / px));
      if (scene && nextW === W && nextH === H) return; // building the scene is the expensive part
      W = nextW;
      H = nextH;
      canvas.width = W;
      canvas.height = H;
      // Whole-number scale keeps every art pixel the same size; the hero clips the overhang.
      canvas.style.width = `${W * px}px`;
      canvas.style.height = `${H * px}px`;
      scene = buildScene(W, H);
      const rand = seededRandom(3);
      const { crown } = scene;
      flies = Array.from({ length: 16 }, () => {
        const home = { x: crown.x + (rand() - 0.5) * crown.rx * 2.4, y: crown.y + (rand() - 0.5) * crown.ry * 3 };
        return { ...home, home, phase: (rand() * 6) | 0 };
      });
      // A returning visitor who already found everything gets their cat back, sitting.
      if (!cat && isComplete(found)) cat = createCat(scene, { reduced: true });
      draw();
    };

    const dot = (x, y, c, alpha = 1) => {
      ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;
      ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
    };

    const line = (a, b, c) => {
      const n = Math.max(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
      for (let i = 0; i <= n; i++) dot(a.x + ((b.x - a.x) * i) / n, a.y + ((b.y - a.y) * i) / n, c);
    };

    const drawReaction = (id, tick) => {
      const { anchors } = scene;
      if (id === 'constellation') {
        const shown = reduced ? scene.constellationLines.length : Math.min(scene.constellationLines.length, tick + 1);
        scene.constellationLines.slice(0, shown).forEach(([a, b]) => line(anchors.constellation[a], anchors.constellation[b], CONSTELLATION_LINE));
        anchors.constellation.forEach((s) => dot(s.x, s.y, STAR_BRIGHT));
        return;
      }
      const [name, f] = reduced ? STILL[id] : REACTIONS[id][tick];
      if (id === 'owl') drawSprite(ctx, SPRITES[name], f, anchors.owl.x, anchors.owl.y + 2);
      if (id === 'burrow') drawSprite(ctx, SPRITES[name], f, anchors.burrow.x, anchors.burrow.y - 1);
      if (id === 'moonRabbit') drawSprite(ctx, SPRITES[name], f, anchors.moon.x + Math.round(anchors.moon.r * 0.4), anchors.moon.y + 3);
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
      if (star) starPoints(star, starTime(now)).forEach((p, i) => dot(p.x, p.y, i === 0 ? STAR_BRIGHT : STAR_GLOW, p.alpha));

      if (ambient.leaf && !reduced) {
        const { x, y, landed } = ambient.leaf;
        const fade = landed >= 0 ? 0.6 - landed * 0.3 : 1;
        dot(x, y, LEAF, fade);
        dot(x + 1, y, LEAF_DARK, fade);
      }

      reactions.forEach((start, id) => drawReaction(id, frame - start));

      flies.forEach((f) => {
        const on = reduced || (frame + f.phase) % 6 !== 0;
        if (!on) return;
        if ((frame + f.phase) % 3 === 0) {
          dot(f.x - 1, f.y, FIREFLY_GLOW);
          dot(f.x + 1, f.y, FIREFLY_GLOW);
          dot(f.x, f.y - 1, FIREFLY_GLOW);
          dot(f.x, f.y + 1, FIREFLY_GLOW);
        }
        dot(f.x, f.y, FIREFLY);
      });

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
      flies.forEach((f) => {
        f.x += (f.home.x - f.x) * 0.04 + (Math.random() - 0.5) * 1.6;
        f.y += (f.home.y - f.y) * 0.04 + (Math.random() - 0.5) * 1.6;
      });
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
      const { isNew, complete } = markFound(found, id);
      if (isNew) {
        spawnSparkle(popups, x, y);
        spawnPlusOne(popups, x, y - 4);
      }
      if (complete && !cat) cat = createCat(scene, { reduced });
    };

    const toArt = (e) => {
      const rect = host.getBoundingClientRect();
      return { x: (e.clientX - rect.left) / px, y: (e.clientY - rect.top) / px };
    };

    const onPointerDown = (e) => {
      if (!scene) return;
      const p = toArt(e);
      const now = performance.now();
      if (hitStar(ambient, p, starTime(now))) {
        ambient.star = null; // caught
        found1('shootingStar', Math.round(p.x), Math.round(p.y));
        draw();
        return;
      }
      const id = hitTest(p, scene, { touch: e.pointerType !== 'mouse' });
      if (id) {
        reactions.set(id, frame);
        const a = id === 'constellation' ? scene.anchors.constellation[0] : id === 'moonRabbit' ? scene.anchors.moon : scene.anchors[id];
        found1(id, a.x, a.y - 4);
        draw();
        return;
      }
      if (cat && p.y > scene.groundAt(Math.round(p.x)) - 8) cat.target = Math.round(p.x);
    };

    const onPointerMove = (e) => {
      pointer = e.pointerType === 'mouse' ? toArt(e) : null;
    };
    const onPointerLeave = () => {
      pointer = null;
    };

    const onKey = (e) => {
      const dir = isSteerKey(e);
      if (!dir) return;
      const down = e.type === 'keydown';
      if (down && (!cat || !visible)) return;
      if (dir < 0) keys.left = down;
      else keys.right = down;
      if (down) e.preventDefault();
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    build();
    start();

    const resize = new ResizeObserver(() => build());
    resize.observe(host);
    const seen = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else {
        stop();
        keys.left = keys.right = false;
      }
    });
    seen.observe(host);
    host.addEventListener('pointerdown', onPointerDown);
    host.addEventListener('pointermove', onPointerMove);
    host.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', onKey);
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
        cat: () => cat && { x: cat.x, state: cat.state },
        starHead: () => {
          const now = starTime(performance.now());
          const s = activeStar(ambient, now);
          return s && starPoints(s, now)[0];
        },
        layout: () => ({ px, anchors: scene.anchors, titleBand: scene.titleBand }),
      };
    }

    return () => {
      stop();
      resize.disconnect();
      seen.disconnect();
      host.removeEventListener('pointerdown', onPointerDown);
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('keyup', onKey);
      document.removeEventListener('visibilitychange', onVisibility);
      if (import.meta.env.DEV) delete window.__hero;
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.scene} aria-hidden="true" />;
}
