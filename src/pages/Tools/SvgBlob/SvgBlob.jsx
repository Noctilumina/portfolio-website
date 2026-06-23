import { useState, useCallback, useMemo } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import styles from './SvgBlob.module.css';

// ── Seeded RNG ─────────────────────────────────────────────────────────────

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// ── Blob generation ────────────────────────────────────────────────────────

function generateBlobPath(complexity, randomness, size, seed) {
  const points = [];
  const pointCount = complexity;

  // Generate points around circle with randomized radii
  for (let i = 0; i < pointCount; i++) {
    const angle = (i / pointCount) * Math.PI * 2;
    const baseRadius = size / 2;
    const variance = randomness * baseRadius * 0.6;
    const rnd = seededRandom(seed + i * 0.1);
    const radius = baseRadius + (rnd - 0.5) * 2 * variance;

    points.push({
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      angle,
    });
  }

  // Smooth closed curve: each vertex is a quadratic control point and the
  // midpoints between vertices are the on-curve anchors. This pulls the curve
  // outward through smooth arcs instead of drawing straight segments.
  const startX = (points[pointCount - 1].x + points[0].x) / 2;
  const startY = (points[pointCount - 1].y + points[0].y) / 2;
  let pathData = `M ${startX.toFixed(2)} ${startY.toFixed(2)}`;

  for (let i = 0; i < pointCount; i++) {
    const curr = points[i];
    const next = points[(i + 1) % pointCount];
    const midX = (curr.x + next.x) / 2;
    const midY = (curr.y + next.y) / 2;
    pathData += ` Q ${curr.x.toFixed(2)} ${curr.y.toFixed(2)} ${midX.toFixed(2)} ${midY.toFixed(2)}`;
  }

  pathData += ' Z';
  return pathData;
}

function generateSVG(blobPath, fillColor, gradientAngle, gradientColor2, useGradient, dropShadow) {
  const gradientId = 'blobGradient';
  const angleRad = (gradientAngle * Math.PI) / 180;
  const x2 = Math.cos(angleRad);
  const y2 = Math.sin(angleRad);

  let defs = '';
  if (useGradient) {
    defs = `
    <defs>
      <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="${x2 * 100}%" y2="${y2 * 100}%">
        <stop offset="0%" style="stop-color:${fillColor};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${gradientColor2};stop-opacity:1" />
      </linearGradient>
    </defs>`;
  }

  const pathFill = useGradient ? `url(#${gradientId})` : fillColor;
  const filterStr = dropShadow ? ' filter="url(#shadow)"' : '';
  const shadowDef = dropShadow
    ? `<filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.3" />
      </filter>`
    : '';

  const fullDefs = defs + (shadowDef ? `<defs>${shadowDef}</defs>` : '');

  return `<svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
${fullDefs}
  <path d="${blobPath}" fill="${pathFill}"${filterStr} />
</svg>`;
}

// ── Copy to clipboard utility ──────────────────────────────────────────────

function copyToClipboard(text, onCopied) {
  navigator.clipboard.writeText(text).then(() => {
    onCopied();
  });
}

// ── Main component ─────────────────────────────────────────────────────────

export default function SvgBlob() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();

  const [complexity, setComplexity] = useState(6);
  const [randomness, setRandomness] = useState(0.5);
  const [size, setSize] = useState(80);
  const [fillColor, setFillColor] = useState('#E91E63');
  const [useGradient, setUseGradient] = useState(false);
  const [gradientColor2, setGradientColor2] = useState('#9C27B0');
  const [gradientAngle, setGradientAngle] = useState(45);
  const [seed, setSeed] = useState(12345);
  const [dropShadow, setDropShadow] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const blobPath = useMemo(
    () => generateBlobPath(complexity, randomness, size, seed),
    [complexity, randomness, size, seed]
  );

  const svgString = useMemo(
    () => generateSVG(blobPath, fillColor, gradientAngle, gradientColor2, useGradient, dropShadow),
    [blobPath, fillColor, gradientAngle, gradientColor2, useGradient, dropShadow]
  );

  const clipPathCSS = useMemo(() => {
    return `clip-path: path('${blobPath}');`;
  }, [blobPath]);

  const handleRandomize = useCallback(() => {
    setSeed(Math.floor(Math.random() * 1000000));
  }, []);

  const handleCopySVG = useCallback(() => {
    copyToClipboard(svgString, () => {
      setCopiedType('svg');
      setTimeout(() => setCopiedType(null), 2000);
    });
  }, [svgString]);

  const handleCopyPath = useCallback(() => {
    copyToClipboard(blobPath, () => {
      setCopiedType('path');
      setTimeout(() => setCopiedType(null), 2000);
    });
  }, [blobPath]);

  const handleCopyClipPath = useCallback(() => {
    copyToClipboard(clipPathCSS, () => {
      setCopiedType('clippath');
      setTimeout(() => setCopiedType(null), 2000);
    });
  }, [clipPathCSS]);

  const handleDownloadSVG = useCallback(() => {
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blob-${seed}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }, [svgString, seed]);

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('svgBlob.heading')}</h1>
        <p className={styles.subtitle}>{t('svgBlob.subtitle')}</p>
      </div>

      <div className={styles.workspace}>
        {/* Controls */}
        <aside className={styles.controls}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Shape</legend>
            <div className={styles.row}>
              <span className={styles.label}>Complexity</span>
              <span className={styles.value}>{complexity}</span>
            </div>
            <input
              type="range"
              min="3"
              max="12"
              value={complexity}
              onChange={e => setComplexity(Number(e.target.value))}
              className={styles.slider}
            />

            <div className={styles.row} style={{ marginTop: 'var(--space-3)' }}>
              <span className={styles.label}>Randomness</span>
              <span className={styles.value}>{randomness.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={randomness}
              onChange={e => setRandomness(Number(e.target.value))}
              className={styles.slider}
            />

            <div className={styles.row} style={{ marginTop: 'var(--space-3)' }}>
              <span className={styles.label}>Size</span>
              <span className={styles.value}>{size}</span>
            </div>
            <input
              type="range"
              min="30"
              max="160"
              value={size}
              onChange={e => setSize(Number(e.target.value))}
              className={styles.slider}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Fill</legend>
            <div className={styles.row}>
              <span className={styles.label}>Mode</span>
              <select
                value={useGradient ? 'gradient' : 'solid'}
                onChange={e => setUseGradient(e.target.value === 'gradient')}
                className={styles.select}
              >
                <option value="solid">Solid</option>
                <option value="gradient">Gradient</option>
              </select>
            </div>

            <div className={styles.row} style={{ marginTop: 'var(--space-2)' }}>
              <span className={styles.label}>Color</span>
              <input
                type="color"
                value={fillColor}
                onChange={e => setFillColor(e.target.value)}
                className={styles.colorInput}
              />
            </div>

            {useGradient && (
              <>
                <div className={styles.row}>
                  <span className={styles.label}>Color 2</span>
                  <input
                    type="color"
                    value={gradientColor2}
                    onChange={e => setGradientColor2(e.target.value)}
                    className={styles.colorInput}
                  />
                </div>
                <div className={styles.row}>
                  <span className={styles.label}>Angle</span>
                  <span className={styles.value}>{gradientAngle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={gradientAngle}
                  onChange={e => setGradientAngle(Number(e.target.value))}
                  className={styles.slider}
                />
              </>
            )}
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Effects</legend>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={dropShadow}
                onChange={e => setDropShadow(e.target.checked)}
              />
              <span>Drop shadow</span>
            </label>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Seed</legend>
            <div className={styles.row}>
              <span className={styles.label}>Value</span>
              <span className={styles.value} style={{ fontSize: 'var(--text-xs)' }}>
                {seed}
              </span>
            </div>
            <input
              type="number"
              value={seed}
              onChange={e => setSeed(Number(e.target.value))}
              className={styles.seedInput}
            />
            <button className={styles.randomizeBtn} onClick={handleRandomize}>
              🎲 Randomize
            </button>
          </fieldset>
        </aside>

        {/* Preview */}
        <div className={styles.main}>
          <div className={styles.previewContainer}>
            <div
              className={styles.previewSvg}
              dangerouslySetInnerHTML={{ __html: svgString }}
            />
          </div>

          <div className={styles.outputsSection}>
            <h3 className={styles.outputsTitle}>Export</h3>
            <div className={styles.outputButtonGroup}>
              <button
                className={styles.outputBtn}
                onClick={handleCopySVG}
                title="Copy full SVG code"
              >
                {copiedType === 'svg' ? '✓ Copied SVG' : 'Copy SVG'}
              </button>
              <button
                className={styles.outputBtn}
                onClick={handleCopyPath}
                title="Copy path d attribute"
              >
                {copiedType === 'path' ? '✓ Copied path' : 'Copy path'}
              </button>
              <button
                className={styles.outputBtn}
                onClick={handleCopyClipPath}
                title="Copy CSS clip-path"
              >
                {copiedType === 'clippath' ? '✓ Copied clip-path' : 'Copy clip-path'}
              </button>
              <button
                className={`${styles.outputBtn} ${styles.downloadBtn}`}
                onClick={handleDownloadSVG}
                title="Download as SVG file"
              >
                ↓ Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button
          className={styles.backButton}
          onClick={() => startTransition(Routes.TOOLS)}
        >
          {t('svgBlob.backTools')}
        </button>
      </div>
    </main>
  );
}
