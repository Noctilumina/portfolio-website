import { useRef, useEffect, useState } from 'react';
import styles from './SectionDivider.module.css';

function generateDitherImage(color, width, height) {
  const canvas = document.createElement('canvas');
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  // Resolve CSS variable color
  const temp = document.createElement('div');
  temp.style.color = color;
  document.body.appendChild(temp);
  const resolved = getComputedStyle(temp).color;
  document.body.removeChild(temp);

  ctx.fillStyle = resolved;

  // Solid polygon below diagonal
  const diagY0 = height;
  const diagY1 = height * 0.4;
  ctx.beginPath();
  ctx.moveTo(0, diagY0);
  ctx.lineTo(width, diagY1);
  ctx.lineTo(width, height);
  ctx.closePath();
  ctx.fill();

  // Halftone dots along diagonal
  const spacing = 10;
  const maxRadius = spacing / 2 + 2;
  const angle = Math.atan2(diagY1 - diagY0, width);
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const uCount = Math.ceil(Math.sqrt(width * width + height * height) / spacing) + 10;

  for (let ui = -5; ui < uCount; ui++) {
    for (let vi = -8; vi <= 2; vi++) {
      const u = ui * spacing;
      const vOffset = ui % 2 === 0 ? 0 : spacing / 2;
      const v = vi * spacing + vOffset;

      const x = u * cos - v * sin;
      const y = u * sin + v * cos + diagY0;

      if (x < -maxRadius || x > width + maxRadius || y < -maxRadius || y > height + maxRadius) continue;

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

  return canvas.toDataURL('image/png');
}

export default function SectionDivider({ flip = false, color = 'var(--color-primary)' }) {
  const [src, setSrc] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const render = () => {
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      if (width > 0 && height > 0) {
        setSrc(generateDitherImage(color, width, height));
      }
    };

    render();

    const observer = new ResizeObserver(render);
    observer.observe(el);
    return () => observer.disconnect();
  }, [color]);

  return (
    <div
      ref={containerRef}
      className={`${styles.divider} ${flip ? styles.flip : ''}`}
      aria-hidden="true"
    >
      {src && <img src={src} className={styles.image} alt="" />}
    </div>
  );
}
