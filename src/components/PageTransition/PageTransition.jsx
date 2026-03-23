import { useRef, useEffect, useCallback } from 'react';
import styles from './PageTransition.module.css';

export function DitherCanvas({ mode, onComplete }) {
  const canvasRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const spacing = 18;
    const cols = Math.ceil(w / spacing) + 1;
    const rows = Math.ceil(h / spacing) + 1;
    const maxRadius = spacing + 2;
    const duration = mode === 'cover' ? 200 : 400;
    const staggerRange = mode === 'cover' ? 250 : 500;

    const primaryColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary').trim() || '#E91E63';

    let animId;
    startRef.current = null;

    // If no onComplete, just draw a solid filled frame (hold state)
    if (!onComplete) {
      ctx.fillStyle = primaryColor;
      ctx.fillRect(0, 0, w, h);
      return;
    }

    function draw(now) {
      if (startRef.current === null) {
        startRef.current = now;
      }
      const elapsed = now - startRef.current;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = primaryColor;

      let allDone = true;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing + (r % 2 === 0 ? 0 : spacing / 2);
          const y = r * spacing;

          const diagonal = (x / w + y / h) / 2;
          const delay = diagonal * staggerRange;
          const localElapsed = elapsed - delay;

          let progress;
          if (localElapsed <= 0) {
            progress = mode === 'cover' ? 0 : 1;
            allDone = false;
          } else if (localElapsed >= duration) {
            progress = mode === 'cover' ? 1 : 0;
          } else {
            const t = localElapsed / duration;
            const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            progress = mode === 'cover' ? eased : 1 - eased;
            allDone = false;
          }

          const radius = progress * maxRadius;
          if (radius > 0.3) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      if (!allDone) {
        animId = requestAnimationFrame(draw);
      } else {
        if (onComplete) onComplete();
      }
    }

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, [mode, onComplete]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
