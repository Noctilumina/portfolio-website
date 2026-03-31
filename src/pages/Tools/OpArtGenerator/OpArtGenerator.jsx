import { useState, useRef, useCallback, useEffect } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import styles from './OpArtGenerator.module.css';

const PATTERN_TYPES = [
  { id: 'moire', label: 'Moire Circles' },
  { id: 'warpedGrid', label: 'Warped Grid' },
  { id: 'concentricRings', label: 'Concentric Rings' },
  { id: 'checkerboardWarp', label: 'Checkerboard Warp' },
  { id: 'waveInterference', label: 'Wave Interference' },
];

/* ── Drawing functions ── */

function drawMoireCircles(ctx, w, h, freq, amp, lineW, fg, bg, time) {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = fg;
  ctx.lineWidth = lineW;

  const cx = w / 2;
  const cy = h / 2;
  const maxR = Math.hypot(cx, cy);
  const spacing = Math.max(4, (maxR / freq));
  const offsetX = (amp / 100) * 30 * Math.cos(time);
  const offsetY = (amp / 100) * 30 * Math.sin(time);

  // First set of circles
  for (let r = spacing; r < maxR; r += spacing) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Second set offset
  for (let r = spacing; r < maxR; r += spacing) {
    ctx.beginPath();
    ctx.arc(cx + offsetX, cy + offsetY, r, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawWarpedGrid(ctx, w, h, freq, amp, lineW, fg, bg, time) {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = fg;
  ctx.lineWidth = lineW;

  const spacing = Math.max(6, w / freq);
  const amplitude = (amp / 100) * spacing * 1.5;

  // Vertical lines with sin distortion
  for (let x = 0; x <= w; x += spacing) {
    ctx.beginPath();
    for (let y = 0; y <= h; y += 2) {
      const dx = Math.sin((y / h) * Math.PI * 2 * (freq / 10) + time) * amplitude;
      if (y === 0) ctx.moveTo(x + dx, y);
      else ctx.lineTo(x + dx, y);
    }
    ctx.stroke();
  }

  // Horizontal lines with cos distortion
  for (let y = 0; y <= h; y += spacing) {
    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const dy = Math.cos((x / w) * Math.PI * 2 * (freq / 10) + time) * amplitude;
      if (x === 0) ctx.moveTo(x, y + dy);
      else ctx.lineTo(x, y + dy);
    }
    ctx.stroke();
  }
}

function drawConcentricRings(ctx, w, h, freq, amp, lineW, fg, bg, time) {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2;
  const maxR = Math.hypot(cx, cy);
  const numRings = freq;
  const spacing = maxR / numRings;

  for (let i = 0; i < numRings; i++) {
    const r = (i + 1) * spacing;
    // Vary thickness based on amplitude to create depth illusion
    const thicknessFactor = 1 + (amp / 100) * 3 * Math.sin((i / numRings) * Math.PI * 4 + time);
    const currentWidth = Math.max(0.5, lineW * Math.abs(thicknessFactor));

    ctx.strokeStyle = fg;
    ctx.lineWidth = currentWidth;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawCheckerboardWarp(ctx, w, h, freq, amp, lineW, fg, bg, time) {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  const size = Math.max(6, w / freq);
  const cx = w / 2;
  const cy = h / 2;
  const maxDist = Math.hypot(cx, cy);
  const strength = (amp / 100) * 2;

  for (let row = 0; row < h / size + 1; row++) {
    for (let col = 0; col < w / size + 1; col++) {
      const x = col * size;
      const y = row * size;

      // Apply spherical distortion from center
      const dx = x + size / 2 - cx;
      const dy = y + size / 2 - cy;
      const dist = Math.hypot(dx, dy);
      const normDist = dist / maxDist;

      const warpFactor = 1 + strength * Math.sin(normDist * Math.PI + time);
      const warpedSize = size * warpFactor;

      const warpedX = cx + (dx) * warpFactor - warpedSize / 2;
      const warpedY = cy + (dy) * warpFactor - warpedSize / 2;

      if ((row + col) % 2 === 0) {
        ctx.fillStyle = fg;
      } else {
        ctx.fillStyle = bg;
      }

      ctx.fillRect(warpedX, warpedY, warpedSize, warpedSize);

      // Draw grid lines
      if (lineW > 0) {
        ctx.strokeStyle = fg;
        ctx.lineWidth = Math.max(0.5, lineW * 0.3);
        ctx.strokeRect(warpedX, warpedY, warpedSize, warpedSize);
      }
    }
  }
}

function drawWaveInterference(ctx, w, h, freq, amp, lineW, fg, bg, time) {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = fg;
  ctx.lineWidth = lineW;

  const amplitude = (amp / 100) * (h / 4);
  const waveFreq = freq / 5;

  // First wave set - horizontal
  for (let i = -20; i <= h + 20; i += Math.max(4, 60 / freq * 3)) {
    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const y = i + Math.sin((x / w) * Math.PI * 2 * waveFreq + time) * amplitude;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Second wave set - rotated
  for (let i = -20; i <= w + 20; i += Math.max(4, 60 / freq * 3)) {
    ctx.beginPath();
    for (let y = 0; y <= h; y += 2) {
      const x = i + Math.cos((y / h) * Math.PI * 2 * waveFreq + time * 0.7) * amplitude;
      if (y === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}

const DRAW_FNS = {
  moire: drawMoireCircles,
  warpedGrid: drawWarpedGrid,
  concentricRings: drawConcentricRings,
  checkerboardWarp: drawCheckerboardWarp,
  waveInterference: drawWaveInterference,
};

/* ── Component ── */

export default function OpArtGenerator() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  const [patternType, setPatternType] = useState('moire');
  const [frequency, setFrequency] = useState(20);
  const [amplitude, setAmplitude] = useState(50);
  const [lineWidth, setLineWidth] = useState(2);
  const [fgColor, setFgColor] = useState('#1a1a1a');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [animate, setAnimate] = useState(false);
  const previewRef = useRef(null);

  const getCanvasSize = useCallback(() => {
    const container = previewRef.current;
    if (!container) return { w: 600, h: 600 };
    const rect = container.getBoundingClientRect();
    return { w: Math.floor(rect.width) || 600, h: Math.floor(rect.height) || 600 };
  }, []);

  const draw = useCallback((time = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { w, h } = getCanvasSize();
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    const fn = DRAW_FNS[patternType];
    if (fn) fn(ctx, w, h, frequency, amplitude, lineWidth, fgColor, bgColor, time);
  }, [patternType, frequency, amplitude, lineWidth, fgColor, bgColor, getCanvasSize]);

  // Static redraw when params change
  useEffect(() => {
    if (!animate) draw(0);
  }, [draw, animate]);

  // Resize observer
  useEffect(() => {
    const container = previewRef.current;
    if (!container) return;
    const observer = new ResizeObserver(() => { if (!animate) draw(0); });
    observer.observe(container);
    return () => observer.disconnect();
  }, [draw, animate]);

  // Animation loop
  useEffect(() => {
    if (!animate) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      animRef.current = null;
      return;
    }

    let startTime = null;
    const loop = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      draw(elapsed);
      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      animRef.current = null;
    };
  }, [animate, draw]);

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const exportPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `opart-${patternType}.png`;
    a.click();
  };

  const exportSVG = () => {
    // SVG export for static patterns — reconstruct as SVG manually is complex,
    // so we embed the canvas as a base64 image in SVG
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const w = canvas.width;
    const h = canvas.height;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <image href="${dataUrl}" width="${w}" height="${h}"/>
</svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `opart-${patternType}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const printCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<!DOCTYPE html><html><head><title>Op Art</title><style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;}img{max-width:100%;max-height:100vh;}@page{margin:1cm;}</style></head><body><img src="${dataUrl}" /></body></html>`);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 300);
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Op Art Generator</h1>
        <p className={styles.subtitle}>Generate optical illusion patterns. Adjust parameters, toggle animation, and export your creation.</p>
      </div>

      <div className={styles.workspace}>
        {/* Controls */}
        <aside className={styles.controls}>
          <div className={styles.fieldset}>
            <span className={styles.legend}>Pattern</span>
            <select
              className={styles.select}
              value={patternType}
              onChange={(e) => setPatternType(e.target.value)}
            >
              {PATTERN_TYPES.map((pt) => (
                <option key={pt.id} value={pt.id}>{pt.label}</option>
              ))}
            </select>
          </div>

          <div className={styles.fieldset}>
            <span className={styles.legend}>Parameters</span>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Frequency / Density</span>
              <div className={styles.sliderRow}>
                <input type="range" min={1} max={50} value={frequency} onChange={(e) => setFrequency(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{frequency}</span>
              </div>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Amplitude / Distortion</span>
              <div className={styles.sliderRow}>
                <input type="range" min={0} max={100} value={amplitude} onChange={(e) => setAmplitude(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{amplitude}</span>
              </div>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Line Thickness</span>
              <div className={styles.sliderRow}>
                <input type="range" min={1} max={10} value={lineWidth} onChange={(e) => setLineWidth(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{lineWidth}px</span>
              </div>
            </label>
          </div>

          <div className={styles.fieldset}>
            <span className={styles.legend}>Colors</span>
            <div className={styles.colorRow}>
              <span className={styles.colorLabel}>Foreground</span>
              <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className={styles.colorInput} />
            </div>
            <div className={styles.colorRow}>
              <span className={styles.colorLabel}>Background</span>
              <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className={styles.colorInput} />
            </div>
          </div>

          <div className={styles.fieldset}>
            <span className={styles.legend}>Animation</span>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" checked={animate} onChange={(e) => setAnimate(e.target.checked)} />
              <span>Animate pattern</span>
            </label>
          </div>

          <div className={styles.exportBtns}>
            <button className={styles.exportBtn} onClick={exportPNG}>PNG</button>
            <button className={styles.exportBtn} onClick={exportSVG}>SVG</button>
            <button className={styles.exportBtn} onClick={printCanvas}>Print</button>
          </div>
        </aside>

        {/* Preview */}
        <div ref={previewRef} className={styles.preview}>
          <canvas
            ref={canvasRef}
            className={styles.canvas}
          />
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          {t('tools.backHome')}
        </button>
      </div>
    </main>
  );
}
