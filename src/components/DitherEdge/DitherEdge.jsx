import { useEffect, useRef } from 'react';
import { bayer, fbm, prefersReducedMotion, resolveColor, toRgb, valueNoise } from '../../utils/pixel';
import styles from './DitherEdge.module.css';

const STEPS = 12; // the dissolve moves in visible steps rather than smoothly
const MAX_BLEED = 0.55; // how much of the upper colour still hangs on when the edge enters the screen

/**
 * Pixel-dither transition between two section colours. The edge wanders like a coastline,
 * and while it scrolls up the screen the upper colour dissolves away pixel by pixel.
 * `from` / `to` take a colour or a custom property name such as '--px-s1'.
 */
export default function DitherEdge({ from, to, seed = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const host = ref.current;
    const canvas = host.firstChild;
    const ctx = canvas.getContext('2d');
    const reduced = prefersReducedMotion();
    let W = 0;
    let H = 0;
    let base = null; // per-pixel "how much of the upper colour belongs here"
    let lastShift = -1;
    let raf = 0;
    let colA = [0, 0, 0];
    let colB = [0, 0, 0];

    const build = () => {
      // same pixel size as the hero art
      const px = Math.max(3, Math.round(Math.min(window.innerWidth, window.innerHeight * 1.6) / 360));
      W = Math.max(1, Math.ceil(host.offsetWidth / px));
      H = Math.max(1, Math.ceil(host.offsetHeight / px));
      canvas.width = W;
      canvas.height = H;
      canvas.style.width = `${W * px}px`;
      canvas.style.height = `${H * px}px`;
      colA = toRgb(resolveColor(host, from));
      colB = toRgb(resolveColor(host, to));
      base = new Float32Array(W * H);
      for (let y = 0; y < H; y++) {
        const t = y / (H - 1 || 1);
        for (let x = 0; x < W; x++) {
          const wobble = (fbm(x * 0.045 + seed * 17, seed * 3.3) - 0.5) * 0.9 + (valueNoise(x * 0.3, seed) - 0.5) * 0.15;
          // the wobble fades out at both ends so the seams with the sections stay clean
          base[y * W + x] = 1 - t + wobble * 0.6 * Math.sin(Math.PI * t);
        }
      }
      lastShift = -1;
      update();
    };

    const paint = (shift) => {
      const img = ctx.createImageData(W, H);
      const d = img.data;
      for (let y = 0; y < H; y++) {
        // the bleed only reaches down, the bottom row always belongs to the lower colour
        const reach = shift * (1 - y / (H - 1 || 1));
        for (let x = 0; x < W; x++) {
          const c = base[y * W + x] + reach > bayer(x, y) ? colA : colB;
          const i = (y * W + x) * 4;
          d[i] = c[0];
          d[i + 1] = c[1];
          d[i + 2] = c[2];
          d[i + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
    };

    // 0 when the edge sits in the upper half of the screen, MAX_BLEED as it enters at the bottom.
    const update = () => {
      raf = 0;
      let shift = 0;
      if (!reduced) {
        const top = host.getBoundingClientRect().top;
        const vh = window.innerHeight;
        const p = Math.min(1, Math.max(0, (vh - top) / (vh * 0.5)));
        shift = Math.round((1 - p) * STEPS) / STEPS * MAX_BLEED;
      }
      if (shift === lastShift) return;
      lastShift = shift;
      paint(shift);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    build();
    const resize = new ResizeObserver(build);
    resize.observe(host);
    if (!reduced) window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      resize.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [from, to, seed]);

  return (
    <div ref={ref} className={styles.edge} aria-hidden="true">
      <canvas className={styles.canvas} />
    </div>
  );
}
