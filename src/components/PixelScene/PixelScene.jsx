import { useEffect, useRef } from 'react';
import { buildScene } from './scene';
import { prefersReducedMotion, seededRandom, toRgb } from '../../utils/pixel';
import styles from './PixelScene.module.css';

const FIREFLY = toRgb('#ffe08a');
const FIREFLY_GLOW = toRgb('#b88a3a');
const STAR_BRIGHT = toRgb('#ffffff');
const STAR_OFF = toRgb('#5a4a9a');
const TICK_MS = 110; // stepped animation, ~9 frames a second, like a sprite

/**
 * Placeholder hero art, drawn at low resolution and scaled up with crisp pixels.
 * Stars twinkle and fireflies wander around the tree.
 */
export default function PixelScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    const reduced = prefersReducedMotion();
    let scene = null;
    let flies = [];
    let W = 0;
    let H = 0;
    let frame = 0;
    let timer = null;
    let visible = true;

    const build = () => {
      const rect = host.getBoundingClientRect();
      // art pixels grow on big screens so the scene keeps its detail level instead of looking empty
      const px = Math.max(3, Math.round(Math.min(rect.width, rect.height * 1.6) / 360));
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
      flies = Array.from({ length: 16 }, (_, i) => {
        const home = { x: crown.x + (rand() - 0.5) * crown.rx * 2.4, y: crown.y + (rand() - 0.5) * crown.ry * 3 };
        return { ...home, home, phase: (rand() * 6) | 0 };
      });
      draw();
    };

    const dot = (x, y, c) => {
      ctx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`;
      ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
    };

    const draw = () => {
      if (!scene) return;
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
    };

    const step = () => {
      frame++;
      flies.forEach((f) => {
        f.x += (f.home.x - f.x) * 0.04 + (Math.random() - 0.5) * 1.6;
        f.y += (f.home.y - f.y) * 0.04 + (Math.random() - 0.5) * 1.6;
      });
      draw();
    };

    const start = () => {
      if (reduced || timer || !visible || document.hidden) return;
      timer = setInterval(step, TICK_MS);
    };
    const stop = () => {
      clearInterval(timer);
      timer = null;
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    build();
    start();

    const resize = new ResizeObserver(() => build());
    resize.observe(host);
    const seen = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    seen.observe(host);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      resize.disconnect();
      seen.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.scene} aria-hidden="true" />;
}
