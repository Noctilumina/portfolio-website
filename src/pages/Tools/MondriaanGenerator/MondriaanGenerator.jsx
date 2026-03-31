import { useState, useRef, useCallback } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import styles from './MondriaanGenerator.module.css';

const MONDRIAAN_COLORS = [
  { name: 'White', value: '#FFFFFF' },
  { name: 'Red', value: '#D42029' },
  { name: 'Blue', value: '#1B3F8B' },
  { name: 'Yellow', value: '#F7D816' },
  { name: 'Black', value: '#1A1A1A' },
];

const LINE_COLOR = '#1A1A1A';

function generateGrid(cols, rows, density, palette) {
  const cells = [];
  const colWidths = [];
  const rowHeights = [];

  for (let c = 0; c < cols; c++) {
    colWidths.push(0.5 + Math.random() * 2);
  }
  for (let r = 0; r < rows; r++) {
    rowHeights.push(0.5 + Math.random() * 2);
  }

  const totalW = colWidths.reduce((a, b) => a + b, 0);
  const totalH = rowHeights.reduce((a, b) => a + b, 0);
  const normW = colWidths.map(w => (w / totalW) * 100);
  const normH = rowHeights.map(h => (h / totalH) * 100);

  // Merge some cells to create the characteristic uneven Mondriaan look
  const merged = new Set();

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = `${r}-${c}`;
      if (merged.has(key)) continue;

      let spanC = 1;
      let spanR = 1;

      // Randomly merge with neighbor
      if (Math.random() < 0.3 && c + 1 < cols && !merged.has(`${r}-${c + 1}`)) {
        spanC = 2;
        if (Math.random() < 0.2 && c + 2 < cols && !merged.has(`${r}-${c + 2}`)) {
          spanC = 3;
        }
      }
      if (Math.random() < 0.25 && r + 1 < rows) {
        let canMerge = true;
        for (let sc = 0; sc < spanC; sc++) {
          if (merged.has(`${r + 1}-${c + sc}`)) canMerge = false;
        }
        if (canMerge) spanR = 2;
      }

      // Mark merged cells
      for (let sr = 0; sr < spanR; sr++) {
        for (let sc = 0; sc < spanC; sc++) {
          if (sr === 0 && sc === 0) continue;
          merged.add(`${r + sr}-${c + sc}`);
        }
      }

      // Pick color: mostly white, some colored based on density
      let color = palette[0].value; // white
      if (Math.random() < density / 100) {
        const colorOptions = palette.slice(1); // non-white colors
        color = colorOptions[Math.floor(Math.random() * colorOptions.length)].value;
      }

      let x = 0;
      for (let i = 0; i < c; i++) x += normW[i];
      let y = 0;
      for (let i = 0; i < r; i++) y += normH[i];
      let w = 0;
      for (let i = c; i < c + spanC && i < cols; i++) w += normW[i];
      let h = 0;
      for (let i = r; i < r + spanR && i < rows; i++) h += normH[i];

      cells.push({ x, y, w, h, color, spanC, spanR });
    }
  }

  return cells;
}

function MondriaanSVG({ cells, lineWidth, width, height, svgRef }) {
  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      className={styles.canvas}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width={width} height={height} fill="#FFFFFF" />
      {cells.map((cell, i) => (
        <rect
          key={i}
          x={(cell.x / 100) * width}
          y={(cell.y / 100) * height}
          width={(cell.w / 100) * width}
          height={(cell.h / 100) * height}
          fill={cell.color}
          stroke={LINE_COLOR}
          strokeWidth={lineWidth}
        />
      ))}
    </svg>
  );
}

export default function MondriaanGenerator() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const svgRef = useRef(null);

  const [cols, setCols] = useState(5);
  const [rows, setRows] = useState(5);
  const [density, setDensity] = useState(30);
  const [lineWidth, setLineWidth] = useState(6);
  const [svgWidth, setSvgWidth] = useState(600);
  const [svgHeight, setSvgHeight] = useState(600);
  const [palette, setPalette] = useState(MONDRIAAN_COLORS.map(c => ({ ...c, enabled: true })));
  const [cells, setCells] = useState(() => generateGrid(5, 5, 30, MONDRIAAN_COLORS));
  const [seed, setSeed] = useState(0);

  const regenerate = useCallback(() => {
    const enabledPalette = palette.filter(c => c.enabled);
    if (enabledPalette.length === 0) return;
    setCells(generateGrid(cols, rows, density, enabledPalette));
    setSeed(s => s + 1);
  }, [cols, rows, density, palette]);

  const toggleColor = (index) => {
    setPalette(prev => prev.map((c, i) => i === index ? { ...c, enabled: !c.enabled } : c));
  };

  const exportSVG = () => {
    const svg = svgRef.current;
    if (!svg) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mondriaan.svg';
    a.click();
    URL.revokeObjectURL(url);
  };

  const printSVG = () => {
    const svg = svgRef.current;
    if (!svg) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<!DOCTYPE html><html><head><title>Mondriaan</title><style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;}svg{max-width:100%;max-height:100vh;}@page{margin:1cm;}</style></head><body>${source}</body></html>`);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 300);
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Mondriaan Generator</h1>
        <p className={styles.subtitle}>Generate compositions in the style of Piet Mondriaan. Adjust the grid, colors, and export as SVG.</p>
      </div>

      <div className={styles.workspace}>
        {/* Controls */}
        <aside className={styles.controls}>
          <div className={styles.fieldset}>
            <span className={styles.legend}>Grid</span>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Columns</span>
              <div className={styles.sliderRow}>
                <input type="range" min={2} max={10} value={cols} onChange={(e) => setCols(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{cols}</span>
              </div>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Rows</span>
              <div className={styles.sliderRow}>
                <input type="range" min={2} max={10} value={rows} onChange={(e) => setRows(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{rows}</span>
              </div>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Color density</span>
              <div className={styles.sliderRow}>
                <input type="range" min={0} max={80} value={density} onChange={(e) => setDensity(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{density}%</span>
              </div>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Line width</span>
              <div className={styles.sliderRow}>
                <input type="range" min={1} max={20} value={lineWidth} onChange={(e) => setLineWidth(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{lineWidth}px</span>
              </div>
            </label>
          </div>

          <div className={styles.fieldset}>
            <span className={styles.legend}>Size</span>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Width</span>
              <div className={styles.sliderRow}>
                <input type="range" min={200} max={1200} step={50} value={svgWidth} onChange={(e) => setSvgWidth(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{svgWidth}</span>
              </div>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Height</span>
              <div className={styles.sliderRow}>
                <input type="range" min={200} max={1200} step={50} value={svgHeight} onChange={(e) => setSvgHeight(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{svgHeight}</span>
              </div>
            </label>
          </div>

          <div className={styles.fieldset}>
            <span className={styles.legend}>Palette</span>
            <div className={styles.paletteGrid}>
              {palette.map((color, i) => (
                <button
                  key={color.name}
                  className={`${styles.paletteSwatch} ${!color.enabled ? styles.paletteSwatchDisabled : ''}`}
                  style={{ background: color.value }}
                  onClick={() => toggleColor(i)}
                  title={`${color.name} (${color.enabled ? 'on' : 'off'})`}
                />
              ))}
            </div>
          </div>

          <button className={styles.generateBtn} onClick={regenerate}>Generate</button>

          <div className={styles.exportBtns}>
            <button className={styles.exportBtn} onClick={exportSVG}>Download SVG</button>
            <button className={styles.exportBtn} onClick={printSVG}>Print / PDF</button>
          </div>
        </aside>

        {/* Preview */}
        <div className={styles.preview}>
          <MondriaanSVG
            cells={cells}
            lineWidth={lineWidth}
            width={svgWidth}
            height={svgHeight}
            svgRef={svgRef}
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
