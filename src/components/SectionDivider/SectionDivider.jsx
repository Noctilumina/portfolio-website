import { useMemo } from 'react';
import styles from './SectionDivider.module.css';

export default function SectionDivider({ flip = false, color = 'var(--color-primary)' }) {
  const dots = useMemo(() => {
    const result = [];
    const spacing = 10;
    const maxRadius = spacing / 2 + 2;

    const angle = Math.atan2(-84, 1440);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const uCount = 160;

    for (let ui = -5; ui < uCount; ui++) {
      for (let vi = -8; vi <= 2; vi++) {
        const u = ui * spacing;
        const vOffset = ui % 2 === 0 ? 0 : spacing / 2;
        const v = vi * spacing + vOffset;

        const x = u * cos - v * sin;
        const y = u * sin + v * cos + 140;

        if (x < -10 || x > 1450 || y < -10 || y > 155) continue;

        // closeness: 1 at solid edge, 0 far above
        let closeness;
        if (v >= 0) {
          closeness = 1;
        } else {
          closeness = 1 - Math.abs(v) / 70;
          if (closeness <= 0.05) continue;
        }

        // Every dot gets placed — size varies. True halftone.
        const radius = Math.pow(closeness, 2.5) * maxRadius;
        result.push({ x, y, radius, key: `${ui}-${vi}` });
      }
    }
    return result;
  }, []);

  return (
    <div className={`${styles.divider} ${flip ? styles.flip : ''}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="xMinYMin slice"
        className={styles.svg}
        role="presentation"
      >
        <polygon
          points="0,140 1440,56 1440,140"
          fill={color}
        />
        {dots.map((dot) => (
          <circle
            key={dot.key}
            cx={dot.x}
            cy={dot.y}
            r={dot.radius}
            fill={color}
          />
        ))}
      </svg>
    </div>
  );
}
