import { useRef, useEffect } from 'react';
import styles from './SectionDivider.module.css';

export default function SectionDivider({ flip = false, color = 'var(--color-primary)' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    // Resolve CSS variable color
    const temp = document.createElement('div');
    temp.style.color = color;
    document.body.appendChild(temp);
    const resolved = getComputedStyle(temp).color;
    document.body.removeChild(temp);

    ctx.fillStyle = resolved;

    // Draw solid polygon below diagonal
    const diagY0 = h;
    const diagY1 = h * 0.4;
    ctx.beginPath();
    ctx.moveTo(0, diagY0);
    ctx.lineTo(w, diagY1);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // Draw halftone dots along diagonal edge
    const spacing = 10;
    const maxRadius = spacing / 2 + 2;
    const angle = Math.atan2(diagY1 - diagY0, w);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const uCount = Math.ceil(Math.sqrt(w * w + h * h) / spacing) + 10;

    for (let ui = -5; ui < uCount; ui++) {
      for (let vi = -8; vi <= 2; vi++) {
        const u = ui * spacing;
        const vOffset = ui % 2 === 0 ? 0 : spacing / 2;
        const v = vi * spacing + vOffset;

        const x = u * cos - v * sin;
        const y = u * sin + v * cos + diagY0;

        if (x < -maxRadius || x > w + maxRadius || y < -maxRadius || y > h + maxRadius) continue;

        let closeness;
        if (v >= 0) {
          closeness = 1;
        } else {
          closeness = 1 - Math.abs(v) / 70;
          if (closeness <= 0.05) continue;
        }

        const radius = Math.pow(closeness, 2.5) * maxRadius;
        if (radius > 0.3) {
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }, [color]);

  return (
    <div className={`${styles.divider} ${flip ? styles.flip : ''}`} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
