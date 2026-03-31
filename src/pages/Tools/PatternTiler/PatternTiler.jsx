import { useState, useRef, useCallback, useEffect } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import styles from './PatternTiler.module.css';

const SHAPES = {
  triangle: (ctx, x, y, size, fill, stroke, strokeWidth) => {
    ctx.beginPath();
    ctx.moveTo(x, y - size / 2);
    ctx.lineTo(x + size / 2, y + size / 2);
    ctx.lineTo(x - size / 2, y + size / 2);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (strokeWidth > 0) { ctx.strokeStyle = stroke; ctx.lineWidth = strokeWidth; ctx.stroke(); }
  },
  square: (ctx, x, y, size, fill, stroke, strokeWidth) => {
    ctx.fillStyle = fill;
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
    if (strokeWidth > 0) { ctx.strokeStyle = stroke; ctx.lineWidth = strokeWidth; ctx.strokeRect(x - size / 2, y - size / 2, size, size); }
  },
  diamond: (ctx, x, y, size, fill, stroke, strokeWidth) => {
    ctx.beginPath();
    ctx.moveTo(x, y - size / 2);
    ctx.lineTo(x + size / 2, y);
    ctx.lineTo(x, y + size / 2);
    ctx.lineTo(x - size / 2, y);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (strokeWidth > 0) { ctx.strokeStyle = stroke; ctx.lineWidth = strokeWidth; ctx.stroke(); }
  },
  hexagon: (ctx, x, y, size, fill, stroke, strokeWidth) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const px = x + (size / 2) * Math.cos(angle);
      const py = y + (size / 2) * Math.sin(angle);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (strokeWidth > 0) { ctx.strokeStyle = stroke; ctx.lineWidth = strokeWidth; ctx.stroke(); }
  },
  circle: (ctx, x, y, size, fill, stroke, strokeWidth) => {
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
    if (strokeWidth > 0) { ctx.strokeStyle = stroke; ctx.lineWidth = strokeWidth; ctx.stroke(); }
  },
  star: (ctx, x, y, size, fill, stroke, strokeWidth) => {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? size / 2 : size / 4;
      const angle = (Math.PI / 5) * i - Math.PI / 2;
      const px = x + r * Math.cos(angle);
      const py = y + r * Math.sin(angle);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (strokeWidth > 0) { ctx.strokeStyle = stroke; ctx.lineWidth = strokeWidth; ctx.stroke(); }
  },
};

const PATTERN_TYPES = ['grid', 'brick', 'diagonal', 'radial'];
const SHAPE_NAMES = Object.keys(SHAPES);

export default function PatternTiler() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const canvasRef = useRef(null);
  const previewRef = useRef(null);

  const [shape, setShape] = useState('hexagon');
  const [patternType, setPatternType] = useState('grid');
  const [tileSize, setTileSize] = useState(40);
  const [rotation, setRotation] = useState(0);
  const [gap, setGap] = useState(4);
  const [fillColor, setFillColor] = useState('#E91E63');
  const [strokeColor, setStrokeColor] = useState('#1A1A1A');
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [fillMode, setFillMode] = useState('fill'); // 'fill' = edge-to-edge with clipping, 'fit' = whole tiles only

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = previewRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');

    // Size canvas to fill its container
    const rect = container.getBoundingClientRect();
    const size = Math.floor(Math.min(rect.width, rect.height));
    const canvasSize = size > 0 ? size : 600;
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    const step = tileSize + gap;
    const drawShape = SHAPES[shape];
    if (!drawShape) return;

    const positions = [];

    const isFill = fillMode === 'fill';
    const pad = isFill ? step * 2 : 0;
    const half = tileSize / 2;

    if (patternType === 'grid') {
      for (let y = isFill ? -pad : half; y < canvasSize + pad; y += step) {
        for (let x = isFill ? -pad : half; x < canvasSize + pad; x += step) {
          if (!isFill && (x - half < 0 || x + half > canvasSize || y - half < 0 || y + half > canvasSize)) continue;
          positions.push([x, y]);
        }
      }
    } else if (patternType === 'brick') {
      let row = 0;
      for (let y = isFill ? -pad : half; y < canvasSize + pad; y += step) {
        const offset = row % 2 === 0 ? 0 : step / 2;
        for (let x = (isFill ? -pad : half) + offset; x < canvasSize + pad; x += step) {
          if (!isFill && (x - half < 0 || x + half > canvasSize || y - half < 0 || y + half > canvasSize)) continue;
          positions.push([x, y]);
        }
        row++;
      }
    } else if (patternType === 'diagonal') {
      for (let y = isFill ? -pad : half; y < canvasSize + pad; y += step) {
        for (let x = isFill ? -pad : half; x < canvasSize + pad; x += step) {
          const dx = x + (y / step) * (step / 3);
          if (!isFill && (dx - half < 0 || dx + half > canvasSize || y - half < 0 || y + half > canvasSize)) continue;
          positions.push([dx, y]);
        }
      }
    } else if (patternType === 'radial') {
      const cx = canvasSize / 2;
      const cy = canvasSize / 2;
      const maxR = canvasSize * 0.7;
      for (let r = step; r < maxR; r += step) {
        const count = Math.floor((2 * Math.PI * r) / step);
        for (let i = 0; i < count; i++) {
          const angle = (2 * Math.PI / count) * i;
          positions.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
        }
      }
    }

    positions.forEach(([x, y]) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      drawShape(ctx, 0, 0, tileSize, fillColor, strokeColor, strokeWidth);
      ctx.restore();
    });
  }, [shape, patternType, tileSize, rotation, gap, fillColor, strokeColor, strokeWidth, bgColor, fillMode]);

  useEffect(() => { draw(); }, [draw]);

  useEffect(() => {
    const container = previewRef.current;
    if (!container) return;
    const observer = new ResizeObserver(() => draw());
    observer.observe(container);
    return () => observer.disconnect();
  }, [draw]);

  const exportPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'pattern.png';
    a.click();
  };

  const exportSVG = () => {
    // Simple SVG export with the pattern as embedded image
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const w = canvas.width;
    const h = canvas.height;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><image href="${dataUrl}" width="${w}" height="${h}"/></svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'pattern.svg';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const handlePrint = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<!DOCTYPE html><html><head><title>Pattern</title><style>
      html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;}
      img{width:100vw;height:100vh;object-fit:cover;display:block;}
      @page{size:A4;margin:0;}
    </style></head><body><img src="${canvas.toDataURL('image/png')}"/></body></html>`);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 300);
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Pattern Tiler</h1>
        <p className={styles.subtitle}>Create repeating geometric patterns. Choose a shape, layout, and colors, then export.</p>
      </div>

      <div className={styles.workspace}>
        <aside className={styles.controls}>
          <div className={styles.fieldset}>
            <span className={styles.legend}>Shape</span>
            <select className={styles.select} value={shape} onChange={(e) => setShape(e.target.value)}>
              {SHAPE_NAMES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
            </select>
          </div>

          <div className={styles.fieldset}>
            <span className={styles.legend}>Layout</span>
            <select className={styles.select} value={patternType} onChange={(e) => setPatternType(e.target.value)}>
              {PATTERN_TYPES.map(p => <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>)}
            </select>
            <div className={styles.modeToggle}>
              <button className={`${styles.modeBtn} ${fillMode === 'fill' ? styles.modeBtnActive : ''}`} onClick={() => setFillMode('fill')}>Edge to Edge</button>
              <button className={`${styles.modeBtn} ${fillMode === 'fit' ? styles.modeBtnActive : ''}`} onClick={() => setFillMode('fit')}>Whole Tiles</button>
            </div>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Tile size</span>
              <div className={styles.sliderRow}>
                <input type="range" min={10} max={100} value={tileSize} onChange={(e) => setTileSize(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{tileSize}px</span>
              </div>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Gap</span>
              <div className={styles.sliderRow}>
                <input type="range" min={0} max={30} value={gap} onChange={(e) => setGap(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{gap}px</span>
              </div>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Rotation</span>
              <div className={styles.sliderRow}>
                <input type="range" min={0} max={360} value={rotation} onChange={(e) => setRotation(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{rotation}°</span>
              </div>
            </label>
          </div>

          <div className={styles.fieldset}>
            <span className={styles.legend}>Colors</span>
            <label className={styles.colorLabel}>Fill <input type="color" value={fillColor} onChange={(e) => setFillColor(e.target.value)} className={styles.colorInput} /></label>
            <label className={styles.colorLabel}>Stroke <input type="color" value={strokeColor} onChange={(e) => setStrokeColor(e.target.value)} className={styles.colorInput} /></label>
            <label className={styles.colorLabel}>Background <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className={styles.colorInput} /></label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Stroke width</span>
              <div className={styles.sliderRow}>
                <input type="range" min={0} max={8} value={strokeWidth} onChange={(e) => setStrokeWidth(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{strokeWidth}px</span>
              </div>
            </label>
          </div>

          <div className={styles.exportBtns}>
            <button className={styles.exportBtn} onClick={exportPNG}>PNG</button>
            <button className={styles.exportBtn} onClick={exportSVG}>SVG</button>
            <button className={styles.exportBtn} onClick={handlePrint}>Print</button>
          </div>
        </aside>

        <div ref={previewRef} className={styles.preview}>
          <canvas ref={canvasRef} className={styles.canvas} />
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
