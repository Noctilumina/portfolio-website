import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { usePageTransition } from '../../../App';
import { useI18n } from '../../../i18n/I18nContext';
import { Routes } from '../../../constants/routes';
import styles from './MeshGradient.module.css';

// ── Utility functions ──────────────────────────────────────────────────────

function generateRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function generateRandomPoints(count, width, height) {
  const points = [];
  for (let i = 0; i < count; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      color: generateRandomColor(),
    });
  }
  return points;
}

function buildGradientCSS(points, baseColor, blurAmount) {
  if (points.length === 0) {
    return { background: baseColor };
  }

  // Calculate max distance from center for radius scaling
  const maxDist = Math.max(
    Math.sqrt(points.reduce((max, p) => Math.max(max, p.x * p.x + p.y * p.y), 0)),
    1
  );

  const gradients = points.map(p => {
    const radius = Math.sqrt(p.x * p.x + p.y * p.y) + maxDist * 0.5;
    return `radial-gradient(circle at ${(p.x * 100)}% ${(p.y * 100)}%, ${p.color} 0%, rgba(0,0,0,0) ${radius}px)`;
  });

  return {
    backgroundColor: baseColor,
    backgroundImage: gradients.join(', '),
    filter: blurAmount > 0 ? `blur(${blurAmount}px)` : undefined,
  };
}

function buildGradientCSSString(points, baseColor, blurAmount) {
  const css = buildGradientCSS(points, baseColor, blurAmount);
  let str = `background-color: ${baseColor};`;
  if (css.backgroundImage) {
    str += `\nbackground-image: ${css.backgroundImage};`;
  }
  if (css.filter) {
    str += `\nfilter: ${css.filter};`;
  }
  return str;
}

// ── Main component ────────────────────────────────────────────────────────

export default function MeshGradient() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();

  // Canvas state
  const [aspectRatio, setAspectRatio] = useState('16-9');
  const [baseColor, setBaseColor] = useState('#1a1a1a');
  const [blurAmount, setBlurAmount] = useState(8);
  const [filmGrain, setFilmGrain] = useState(false);

  // Points state
  const [points, setPoints] = useState([
    { x: 20, y: 30, color: '#E91E63' },
    { x: 80, y: 70, color: '#00BCD4' },
  ]);
  const [selectedPointIdx, setSelectedPointIdx] = useState(null);

  // Canvas refs
  const previewRef = useRef(null);
  const downloadCanvasRef = useRef(null);

  const ASPECT_RATIOS = {
    '16-9': { w: 16, h: 9 },
    '1-1': { w: 1, h: 1 },
    '4-3': { w: 4, h: 3 },
  };

  // Compute preview dimensions
  const maxPreviewWidth = 600;
  const ratio = ASPECT_RATIOS[aspectRatio];
  const previewWidth = Math.min(maxPreviewWidth, window.innerWidth - 300);
  const previewHeight = (previewWidth / ratio.w) * ratio.h;

  // Scale from preview coords to 0-100 percentage
  const screenToPercent = useCallback((screenX, screenY, rect) => {
    if (!rect) return { x: 0, y: 0 };
    return {
      x: Math.max(0, Math.min(100, ((screenX - rect.left) / rect.width) * 100)),
      y: Math.max(0, Math.min(100, ((screenY - rect.top) / rect.height) * 100)),
    };
  }, []);

  // Handle preview click to add point
  const handlePreviewClick = useCallback((e) => {
    const rect = previewRef.current?.getBoundingClientRect();
    if (!rect || points.length >= 8) return;

    // Check if clicked on existing point
    const clickX = e.clientX;
    const clickY = e.clientY;
    const pointSize = 12;
    for (let i = 0; i < points.length; i++) {
      const px = rect.left + (points[i].x / 100) * rect.width;
      const py = rect.top + (points[i].y / 100) * rect.height;
      if (Math.hypot(clickX - px, clickY - py) < pointSize) {
        setSelectedPointIdx(i);
        return;
      }
    }

    // Add new point
    const { x, y } = screenToPercent(clickX, clickY, rect);
    const newPoint = { x, y, color: generateRandomColor() };
    setPoints([...points, newPoint]);
    setSelectedPointIdx(points.length);
  }, [points, screenToPercent]);

  // Handle point dragging
  const handlePreviewMouseDown = useCallback((e) => {
    const rect = previewRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clickX = e.clientX;
    const clickY = e.clientY;
    const pointSize = 12;

    // Find clicked point
    let dragIdx = -1;
    for (let i = 0; i < points.length; i++) {
      const px = rect.left + (points[i].x / 100) * rect.width;
      const py = rect.top + (points[i].y / 100) * rect.height;
      if (Math.hypot(clickX - px, clickY - py) < pointSize) {
        dragIdx = i;
        break;
      }
    }

    if (dragIdx === -1) {
      handlePreviewClick(e);
      return;
    }

    setSelectedPointIdx(dragIdx);

    const onMove = (me) => {
      const { x, y } = screenToPercent(me.clientX, me.clientY, rect);
      setPoints(prev => {
        const next = [...prev];
        next[dragIdx] = { ...next[dragIdx], x, y };
        return next;
      });
    };

    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [points, screenToPercent, handlePreviewClick]);

  // Delete selected point
  const deleteSelectedPoint = useCallback(() => {
    if (selectedPointIdx === null || points.length <= 2) return;
    const next = points.filter((_, i) => i !== selectedPointIdx);
    setPoints(next);
    setSelectedPointIdx(null);
  }, [selectedPointIdx, points]);

  // Update selected point color
  const updateSelectedColor = useCallback((color) => {
    if (selectedPointIdx === null) return;
    setPoints(prev => {
      const next = [...prev];
      next[selectedPointIdx] = { ...next[selectedPointIdx], color };
      return next;
    });
  }, [selectedPointIdx]);

  // Randomize points
  const randomize = useCallback(() => {
    const count = Math.max(2, Math.min(8, Math.floor(Math.random() * 7) + 2));
    const newPoints = generateRandomPoints(count, 100, 100);
    setPoints(newPoints);
    setSelectedPointIdx(null);
    setBaseColor(generateRandomColor());
    setBlurAmount(Math.floor(Math.random() * 12) + 2);
  }, []);

  // Copy CSS to clipboard
  const copyCSSToClipboard = useCallback(() => {
    const css = buildGradientCSSString(points, baseColor, blurAmount);
    navigator.clipboard.writeText(css).then(() => {
      // Flash feedback could go here
      alert('CSS copied to clipboard!');
    });
  }, [points, baseColor, blurAmount]);

  // Download PNG
  const downloadPNG = useCallback(() => {
    const canvas = downloadCanvasRef.current;
    if (!canvas) return;

    const width = 1920;
    const height = (width / ratio.w) * ratio.h;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, width, height);

    // Draw radial gradients
    const maxDist = Math.max(
      Math.sqrt(points.reduce((max, p) => max + p.x * p.x + p.y * p.y, 0) / Math.max(1, points.length)),
      1
    );

    points.forEach(p => {
      const px = (p.x / 100) * width;
      const py = (p.y / 100) * height;
      const radius = Math.sqrt(p.x * p.x + p.y * p.y) + maxDist * 1.2;

      const grad = ctx.createRadialGradient(px, py, 0, px, py, radius);
      grad.addColorStop(0, p.color);
      grad.addColorStop(1, p.color + '00');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    });

    // Apply film grain if enabled
    if (filmGrain) {
      const noiseData = ctx.getImageData(0, 0, width, height);
      const data = noiseData.data;
      for (let i = 0; i < data.length; i += 4) {
        const grain = Math.random() * 40 - 20;
        data[i] += grain;
        data[i + 1] += grain;
        data[i + 2] += grain;
      }
      ctx.putImageData(noiseData, 0, 0);
    }

    canvas.toBlob(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mesh-gradient-${Date.now()}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
  }, [points, baseColor, filmGrain, ratio.w, ratio.h]);

  const gradientStyle = useMemo(
    () => buildGradientCSS(points, baseColor, blurAmount),
    [points, baseColor, blurAmount]
  );

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('meshGradient.heading')}</h1>
        <p className={styles.subtitle}>{t('meshGradient.subtitle')}</p>
      </div>

      <div className={styles.workspace}>
        {/* ── Controls ── */}
        <aside className={styles.controls}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Canvas</legend>
            <div className={styles.aspectRow}>
              {Object.keys(ASPECT_RATIOS).map(key => (
                <button
                  key={key}
                  className={`${styles.aspectBtn} ${aspectRatio === key ? styles.aspectBtnActive : ''}`}
                  onClick={() => setAspectRatio(key)}
                >
                  {key.replace('-', ':')}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Base Color</legend>
            <div className={styles.colorPickerRow}>
              <input
                type="color"
                value={baseColor}
                onChange={e => setBaseColor(e.target.value)}
                className={styles.colorInput}
              />
              <span className={styles.colorValue}>{baseColor.toUpperCase()}</span>
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Blur</legend>
            <div className={styles.row}>
              <span className={styles.value}>{blurAmount}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={24}
              value={blurAmount}
              onChange={e => setBlurAmount(Number(e.target.value))}
              className={styles.slider}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Effects</legend>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={filmGrain}
                onChange={e => setFilmGrain(e.target.checked)}
              />
              Film grain
            </label>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Points</legend>
            <div className={styles.row}>
              <span className={styles.label}>Total</span>
              <span className={styles.value}>{points.length} / 8</span>
            </div>
            {selectedPointIdx !== null && (
              <div className={styles.pointEditorWrap}>
                <div className={styles.row}>
                  <span className={styles.label}>Color</span>
                  <input
                    type="color"
                    value={points[selectedPointIdx].color}
                    onChange={e => updateSelectedColor(e.target.value)}
                    className={styles.colorInput}
                  />
                </div>
                <button className={styles.deleteBtn} onClick={deleteSelectedPoint}>
                  Delete point
                </button>
              </div>
            )}
          </fieldset>

          <button className={styles.randomizeBtn} onClick={randomize}>
            Randomize
          </button>

          <button className={styles.copyBtn} onClick={copyCSSToClipboard}>
            Copy CSS
          </button>

          <button className={styles.downloadBtn} onClick={downloadPNG}>
            Download PNG
          </button>
        </aside>

        {/* ── Preview ── */}
        <div className={styles.main}>
          <div
            ref={previewRef}
            className={styles.preview}
            style={{
              width: previewWidth,
              height: previewHeight,
              ...gradientStyle,
            }}
            onMouseDown={handlePreviewMouseDown}
          >
            {/* Render point handles */}
            {points.map((point, idx) => (
              <div
                key={idx}
                className={`${styles.pointHandle} ${idx === selectedPointIdx ? styles.pointHandleSelected : ''}`}
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  background: point.color,
                }}
                title={`Point ${idx + 1}: ${point.color}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          {t('meshGradient.backTools')}
        </button>
      </div>

      {/* Hidden canvas for download */}
      <canvas ref={downloadCanvasRef} style={{ display: 'none' }} />
    </main>
  );
}
