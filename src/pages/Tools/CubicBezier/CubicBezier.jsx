import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import { useI18n } from '../../../i18n/I18nContext';
import styles from './CubicBezier.module.css';

// ── Presets ───────────────────────────────────────────────────────────────

const PRESETS = {
  linear: { x1: 0, y1: 0, x2: 1, y2: 1, label: 'linear' },
  ease: { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1, label: 'ease' },
  easeIn: { x1: 0.42, y1: 0, x2: 1, y2: 1, label: 'ease-in' },
  easeOut: { x1: 0, y1: 0, x2: 0.58, y2: 1, label: 'ease-out' },
  easeInOut: { x1: 0.42, y1: 0, x2: 0.58, y2: 1, label: 'ease-in-out' },
  easeOutBack: { x1: 0.175, y1: 0.885, x2: 0.32, y2: 1.275, label: 'easeOutBack' },
  easeOutElastic: { x1: 0.175, y1: 0.885, x2: 0.32, y2: 1.15, label: 'easeOutElastic' },
};

// ── Cubic Bezier Math ──────────────────────────────────────────────────────

// Solve t from x using Newton-Raphson or bisection
function solveCubicBezierForT(x, x1, x2, tolerance = 0.001) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;

  let t = x; // Initial guess
  for (let i = 0; i < 10; i++) {
    const t2 = t * t;
    const t3 = t2 * t;
    const mt = 1 - t;

    // Bezier curve at parameter t
    const bx = 3 * mt * mt * t * x1 + 3 * mt * t2 * x2 + t3;

    // Derivative (for Newton-Raphson)
    const dbx = 3 * mt * mt * (x1 - 0) + 6 * mt * t * (x2 - x1) + 3 * t2 * (1 - x2);

    if (Math.abs(dbx) < 1e-6) break;

    const nextT = t - (bx - x) / dbx;
    if (Math.abs(nextT - t) < tolerance) break;
    t = nextT;
  }
  return Math.max(0, Math.min(1, t));
}

// Get Y value from X using cubic bezier curve
function cubicBezierY(x, x1, y1, x2, y2) {
  const t = solveCubicBezierForT(x, x1, x2);
  const t2 = t * t;
  const t3 = t2 * t;
  const mt = 1 - t;
  return 3 * mt * mt * t * y1 + 3 * mt * t2 * y2 + t3;
}

// Generate SVG path for cubic bezier curve
function generateCurvePathD(x1, y1, x2, y2, width, height) {
  const points = [];
  const step = 1 / 100;
  for (let i = 0; i <= 1; i += step) {
    const y = cubicBezierY(i, x1, y1, x2, y2);
    const px = i * width;
    const py = (1 - Math.max(0, Math.min(1, y))) * height;
    points.push(px === 0 && i === 0 ? `M${px},${py}` : `L${px},${py}`);
  }
  return points.join(' ');
}

// ── Main Component ────────────────────────────────────────────────────────

export default function CubicBezier() {
  const { startTransition } = usePageTransition();
  const { t } = useI18n();
  const [x1, setX1] = useState(0.25);
  const [y1, setY1] = useState(0.1);
  const [x2, setX2] = useState(0.25);
  const [y2, setY2] = useState(1);
  const [duration, setDuration] = useState(1000);
  const [playing, setPlaying] = useState(false);
  const [playKey, setPlayKey] = useState(0);

  const svgSize = 240;
  const svgInnerSize = 200;
  const padding = (svgSize - svgInnerSize) / 2;

  const handleP1Drag = useCallback((e) => {
    e.preventDefault();
    const svg = e.currentTarget.closest('svg');
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const onMove = (me) => {
      const px = me.clientX - rect.left - padding;
      const py = me.clientY - rect.top - padding;
      const nx = Math.max(0, Math.min(1, px / svgInnerSize));
      const ny = 1 - Math.max(0, Math.min(2, py / svgInnerSize));
      setX1(nx);
      setY1(ny);
    };
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  }, [padding, svgInnerSize]);

  const handleP2Drag = useCallback((e) => {
    e.preventDefault();
    const svg = e.currentTarget.closest('svg');
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const onMove = (me) => {
      const px = me.clientX - rect.left - padding;
      const py = me.clientY - rect.top - padding;
      const nx = Math.max(0, Math.min(1, px / svgInnerSize));
      const ny = 1 - Math.max(0, Math.min(2, py / svgInnerSize));
      setX2(nx);
      setY2(ny);
    };
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  }, [padding, svgInnerSize]);

  const handlePreset = useCallback((preset) => {
    setX1(preset.x1);
    setY1(preset.y1);
    setX2(preset.x2);
    setY2(preset.y2);
  }, []);

  const handlePlay = useCallback(() => {
    setPlaying(true);
    setPlayKey(k => k + 1);
    setTimeout(() => setPlaying(false), duration);
  }, [duration]);

  const cubicBezierStr = `cubic-bezier(${x1.toFixed(3)}, ${y1.toFixed(3)}, ${x2.toFixed(3)}, ${y2.toFixed(3)})`;
  const transitionStr = `transition-timing-function: ${cubicBezierStr};`;

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      // Toast or silent success
    }).catch(err => {
      console.error('Copy failed:', err);
    });
  };

  const curvePathD = useMemo(
    () => generateCurvePathD(x1, y1, x2, y2, svgInnerSize, svgInnerSize),
    [x1, y1, x2, y2, svgInnerSize]
  );

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('cubicBezier.heading')}</h1>
        <p className={styles.subtitle}>{t('cubicBezier.subtitle')}</p>
      </div>

      <div className={styles.container}>
        {/* ── Editor ── */}
        <div className={styles.editor}>
          <div className={styles.svgWrapper}>
            <svg
              className={styles.bezierSvg}
              width={svgSize}
              height={svgSize}
              viewBox={`0 0 ${svgSize} ${svgSize}`}
            >
              {/* Background grid/frame */}
              <defs>
                <marker
                  id="arrowStart"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="5"
                  orient="auto"
                >
                  <circle cx="5" cy="5" r="1.5" fill="#666" />
                </marker>
                <marker
                  id="arrowEnd"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="5"
                  orient="auto"
                >
                  <circle cx="5" cy="5" r="1.5" fill="#666" />
                </marker>
              </defs>

              {/* Border frame */}
              <rect
                x={padding}
                y={padding}
                width={svgInnerSize}
                height={svgInnerSize}
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="3"
              />

              {/* Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((v, i) => (
                <g key={i}>
                  <line
                    x1={padding + v * svgInnerSize}
                    y1={padding}
                    x2={padding + v * svgInnerSize}
                    y2={padding + svgInnerSize}
                    stroke="#ddd"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1={padding}
                    y1={padding + v * svgInnerSize}
                    x2={padding + svgInnerSize}
                    y2={padding + v * svgInnerSize}
                    stroke="#ddd"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                </g>
              ))}

              {/* Diagonal reference line (linear) */}
              <line
                x1={padding}
                y1={padding + svgInnerSize}
                x2={padding + svgInnerSize}
                y2={padding}
                stroke="#ccc"
                strokeWidth="1.5"
                strokeDasharray="4,4"
                opacity="0.4"
              />

              {/* Control lines P1/P2 to endpoints */}
              <line
                x1={padding}
                y1={padding + svgInnerSize}
                x2={padding + x1 * svgInnerSize}
                y2={padding + (1 - y1) * svgInnerSize}
                stroke="var(--color-primary)"
                strokeWidth="1.5"
                opacity="0.4"
                strokeDasharray="3,3"
              />
              <line
                x1={padding + x2 * svgInnerSize}
                y1={padding + (1 - y2) * svgInnerSize}
                x2={padding + svgInnerSize}
                y2={padding}
                stroke="var(--color-primary)"
                strokeWidth="1.5"
                opacity="0.4"
                strokeDasharray="3,3"
              />

              {/* Cubic bezier curve */}
              <path
                d={curvePathD}
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2.5"
              />

              {/* Control point P1 */}
              <circle
                cx={padding + x1 * svgInnerSize}
                cy={padding + (1 - y1) * svgInnerSize}
                r="5"
                fill="var(--color-primary)"
                stroke="var(--color-border)"
                strokeWidth="2"
                onMouseDown={handleP1Drag}
                onTouchStart={handleP1Drag}
                className={styles.controlPoint}
                title="P1"
              />

              {/* Control point P2 */}
              <circle
                cx={padding + x2 * svgInnerSize}
                cy={padding + (1 - y2) * svgInnerSize}
                r="5"
                fill="var(--color-primary)"
                stroke="var(--color-border)"
                strokeWidth="2"
                onMouseDown={handleP2Drag}
                onTouchStart={handleP2Drag}
                className={styles.controlPoint}
                title="P2"
              />

              {/* Start point (0,0) */}
              <circle cx={padding} cy={padding + svgInnerSize} r="4" fill="#666" opacity="0.6" />

              {/* End point (1,1) */}
              <circle cx={padding + svgInnerSize} cy={padding} r="4" fill="#666" opacity="0.6" />
            </svg>
          </div>

          {/* Values display */}
          <div className={styles.values}>
            <div className={styles.valueRow}>
              <span className={styles.valueLabel}>P1 (x, y)</span>
              <span className={styles.valueText}>({x1.toFixed(3)}, {y1.toFixed(3)})</span>
            </div>
            <div className={styles.valueRow}>
              <span className={styles.valueLabel}>P2 (x, y)</span>
              <span className={styles.valueText}>({x2.toFixed(3)}, {y2.toFixed(3)})</span>
            </div>
          </div>
        </div>

        {/* ── Preview ── */}
        <div className={styles.preview}>
          <div className={styles.previewHeader}>
            <h3 className={styles.previewTitle}>PREVIEW</h3>
            <div className={styles.durationControl}>
              <label htmlFor="duration-input" className={styles.durationLabel}>Duration (ms):</label>
              <input
                id="duration-input"
                type="number"
                min="100"
                max="5000"
                step="100"
                value={duration}
                onChange={(e) => setDuration(Math.max(100, parseInt(e.target.value) || 1000))}
                className={styles.durationInput}
              />
            </div>
          </div>

          <div className={styles.previewBox}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${styles.previewItem} ${playing ? styles.previewItemActive : ''}`}
                style={{
                  animation: playing ? `slideLeft ${duration}ms ${cubicBezierStr} forwards` : 'none',
                  animationDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>

          <button className={styles.playButton} onClick={handlePlay}>
            {playing ? '▶ ANIMATING...' : '▶ PLAY'}
          </button>
        </div>

        {/* ── Presets ── */}
        <div className={styles.presetsSection}>
          <h3 className={styles.presetsTitle}>PRESETS</h3>
          <div className={styles.presetGrid}>
            {Object.entries(PRESETS).map(([key, preset]) => (
              <button
                key={key}
                className={styles.presetButton}
                onClick={() => handlePreset(preset)}
                title={`Load preset: ${preset.label}`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Output ── */}
        <div className={styles.outputSection}>
          <h3 className={styles.outputTitle}>OUTPUT</h3>
          <div className={styles.outputBox}>
            <code className={styles.outputCode}>{cubicBezierStr}</code>
            <button
              className={styles.copyButton}
              onClick={() => handleCopy(cubicBezierStr, 'cubic-bezier')}
              title="Copy cubic-bezier value"
            >
              COPY
            </button>
          </div>
          <div className={styles.outputBox}>
            <code className={styles.outputCode}>{transitionStr}</code>
            <button
              className={styles.copyButton}
              onClick={() => handleCopy(transitionStr, 'css')}
              title="Copy CSS transition-timing-function"
            >
              COPY
            </button>
          </div>
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button
          className={styles.backButton}
          onClick={() => startTransition(Routes.TOOLS)}
        >
          {t('cubicBezier.backTools')}
        </button>
      </div>

      {/* Animation keyframes injected via style tag */}
      <style>
        {`
          @keyframes slideLeft {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(100vw);
            }
          }
        `}
      </style>
    </main>
  );
}
