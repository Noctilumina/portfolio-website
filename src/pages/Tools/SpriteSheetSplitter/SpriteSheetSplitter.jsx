import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import styles from './SpriteSheetSplitter.module.css';

// ── Image processing utils ─────────────────────────────────────────────────────

function colorDist(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

function detectBgColor(data, width, height) {
  const step = Math.max(1, Math.floor(Math.min(width, height) / 20));
  let r = 0, g = 0, b = 0, n = 0;
  for (let x = 0; x < width; x += step) {
    let pi = (0 * width + x) * 4; r += data[pi]; g += data[pi+1]; b += data[pi+2]; n++;
    pi = ((height-1) * width + x) * 4; r += data[pi]; g += data[pi+1]; b += data[pi+2]; n++;
  }
  for (let y = step; y < height - step; y += step) {
    let pi = (y * width + 0) * 4; r += data[pi]; g += data[pi+1]; b += data[pi+2]; n++;
    pi = (y * width + (width-1)) * 4; r += data[pi]; g += data[pi+1]; b += data[pi+2]; n++;
  }
  return [Math.round(r/n), Math.round(g/n), Math.round(b/n)];
}

function detectGrid(data, width, height, tolerance = 30) {
  const bg = detectBgColor(data, width, height);
  const [bgR, bgG, bgB] = bg;

  const colScore = new Float32Array(width);
  for (let x = 0; x < width; x++) {
    let n = 0;
    for (let y = 0; y < height; y++) {
      const pi = (y * width + x) * 4;
      if (colorDist(data[pi], data[pi+1], data[pi+2], bgR, bgG, bgB) <= tolerance) n++;
    }
    colScore[x] = n / height;
  }

  const rowScore = new Float32Array(height);
  for (let y = 0; y < height; y++) {
    let n = 0;
    for (let x = 0; x < width; x++) {
      const pi = (y * width + x) * 4;
      if (colorDist(data[pi], data[pi+1], data[pi+2], bgR, bgG, bgB) <= tolerance) n++;
    }
    rowScore[y] = n / width;
  }

  function findDividers(scores, size) {
    const divs = [];
    let inRun = false, runStart = 0;
    const threshold = 0.80;
    for (let i = 0; i < size; i++) {
      if (scores[i] >= threshold && !inRun) { inRun = true; runStart = i; }
      else if (scores[i] < threshold && inRun) {
        inRun = false;
        const mid = Math.floor((runStart + i) / 2);
        if (mid > 2 && mid < size - 3) divs.push(mid);
      }
    }
    return divs;
  }

  const colDivs = findDividers(colScore, width);
  const rowDivs = findDividers(rowScore, height);

  return {
    cols: Math.max(1, colDivs.length + 1),
    rows: Math.max(1, rowDivs.length + 1),
    colDivs,
    rowDivs,
    bgColor: bg,
  };
}

function removeBackground(srcData, width, height, bgColor, tolerance) {
  const [bgR, bgG, bgB] = bgColor;
  const out = new Uint8ClampedArray(srcData);
  const visited = new Uint8Array(width * height);
  const queue = [];

  const enqueue = (x, y) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = y * width + x;
    if (visited[idx]) return;
    const pi = idx * 4;
    if (out[pi + 3] === 0) return;
    if (colorDist(out[pi], out[pi+1], out[pi+2], bgR, bgG, bgB) > tolerance) return;
    visited[idx] = 1;
    queue.push(x, y);
  };

  for (let x = 0; x < width; x++) { enqueue(x, 0); enqueue(x, height - 1); }
  for (let y = 1; y < height - 1; y++) { enqueue(0, y); enqueue(width - 1, y); }

  let qi = 0;
  const runBFS = () => {
    while (qi < queue.length) {
      const x = queue[qi++], y = queue[qi++];
      out[(y * width + x) * 4 + 3] = 0;
      enqueue(x+1, y); enqueue(x-1, y);
      enqueue(x, y+1); enqueue(x, y-1);
    }
  };
  runBFS();

  // Second pass: seed from any unvisited interior background pixel (e.g. inside a circle).
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (visited[idx]) continue;
      const pi = idx * 4;
      if (out[pi + 3] === 0) continue;
      if (colorDist(out[pi], out[pi+1], out[pi+2], bgR, bgG, bgB) > tolerance) continue;
      enqueue(x, y);
      runBFS();
    }
  }

  return out;
}

function extractTile(sourceData, srcW, srcH, x0, y0, x1, y1, adj, bgColor, tolerance) {
  const ax0 = Math.max(0, x0 - (adj?.l ?? 0));
  const ax1 = Math.min(srcW, x1 + (adj?.r ?? 0));
  const ay0 = Math.max(0, y0 - (adj?.t ?? 0));
  const ay1 = Math.min(srcH, y1 + (adj?.b ?? 0));
  const tw = ax1 - ax0, th = ay1 - ay0;
  if (tw <= 0 || th <= 0) return { data: new Uint8ClampedArray(4), width: 1, height: 1 };

  const tilePixels = new Uint8ClampedArray(tw * th * 4);
  for (let ty = 0; ty < th; ty++) {
    for (let tx = 0; tx < tw; tx++) {
      const si = ((ay0 + ty) * srcW + (ax0 + tx)) * 4;
      const di = (ty * tw + tx) * 4;
      tilePixels[di]   = sourceData[si];
      tilePixels[di+1] = sourceData[si+1];
      tilePixels[di+2] = sourceData[si+2];
      tilePixels[di+3] = sourceData[si+3];
    }
  }
  const processed = tolerance > 0
    ? removeBackground(tilePixels, tw, th, bgColor, tolerance)
    : tilePixels;
  return { data: processed, width: tw, height: th };
}

function makeEvenDivs(n, size) {
  return Array.from({ length: n - 1 }, (_, i) => Math.round((i + 1) * size / n));
}

function buildRects(imgW, imgH, colDivs, rowDivs) {
  const ce = [0, ...colDivs, imgW];
  const re = [0, ...rowDivs, imgH];
  const rects = [];
  for (let r = 0; r < re.length - 1; r++)
    for (let c = 0; c < ce.length - 1; c++)
      rects.push({ x0: ce[c], y0: re[r], x1: ce[c+1], y1: re[r+1] });
  return rects;
}

// ── TileCard ───────────────────────────────────────────────────────────────────

const ZERO_ADJ = { t: 0, r: 0, b: 0, l: 0 };
const HANDLE_SPAN = 10;

function TileCard({ sourceData, srcW, srcH, rect, bgColor, tolerance, name, index, adj, onAdjChange, onNameChange, onDownload }) {
  const canvasRef = useRef(null);
  const maxPreview = 160;

  const tile = useMemo(
    () => extractTile(sourceData, srcW, srcH, rect.x0, rect.y0, rect.x1, rect.y1, adj, bgColor, tolerance),
    [sourceData, srcW, srcH, rect, adj, bgColor, tolerance]
  );

  const scale = Math.min(1, maxPreview / Math.max(tile.width, tile.height));
  const dw = Math.round(tile.width * scale);
  const dh = Math.round(tile.height * scale);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = tile.width;
    canvas.height = tile.height;
    canvas.getContext('2d').putImageData(new ImageData(tile.data, tile.width, tile.height), 0, 0);
  }, [tile]);

  const startEdgeDrag = useCallback((edge) => (e) => {
    e.preventDefault();
    const sx = e.clientX, sy = e.clientY;
    const sa = { ...adj };
    // source px per display px at drag start
    const spx = tile.width / Math.max(1, dw);
    const spy = tile.height / Math.max(1, dh);
    const onMove = (me) => {
      const dx = me.clientX - sx, dy = me.clientY - sy;
      const na = { ...sa };
      if (edge === 't') na.t = sa.t + Math.round(-dy * spy);
      if (edge === 'b') na.b = sa.b + Math.round(dy * spy);
      if (edge === 'l') na.l = sa.l + Math.round(-dx * spx);
      if (edge === 'r') na.r = sa.r + Math.round(dx * spx);
      onAdjChange(na);
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [adj, dw, dh, tile.width, tile.height, onAdjChange]);

  const hasAdj = adj.t !== 0 || adj.r !== 0 || adj.b !== 0 || adj.l !== 0;

  return (
    <div className={styles.tileCard}>
      {/* Outer wrapper with HANDLE_SPAN padding on each side for drag handles */}
      <div style={{ position: 'relative', width: dw + HANDLE_SPAN * 2, height: dh + HANDLE_SPAN * 2, flexShrink: 0 }}>
        <div className={styles.tilePreview} style={{ position: 'absolute', left: HANDLE_SPAN, top: HANDLE_SPAN, width: dw, height: dh }}>
          <canvas ref={canvasRef} className={styles.tileCanvas} style={{ width: dw, height: dh }} />
        </div>
        <div
          className={`${styles.handle} ${styles.handleT} ${adj.t !== 0 ? styles.handleNonzero : ''}`}
          style={{ left: HANDLE_SPAN, width: dw }}
          onMouseDown={startEdgeDrag('t')}
          title={`Top edge · drag up to expand, down to shrink (${adj.t > 0 ? '+' : ''}${adj.t}px)`}
        />
        <div
          className={`${styles.handle} ${styles.handleB} ${adj.b !== 0 ? styles.handleNonzero : ''}`}
          style={{ left: HANDLE_SPAN, width: dw }}
          onMouseDown={startEdgeDrag('b')}
          title={`Bottom edge · drag down to expand, up to shrink (${adj.b > 0 ? '+' : ''}${adj.b}px)`}
        />
        <div
          className={`${styles.handle} ${styles.handleL} ${adj.l !== 0 ? styles.handleNonzero : ''}`}
          style={{ top: HANDLE_SPAN, height: dh }}
          onMouseDown={startEdgeDrag('l')}
          title={`Left edge · drag left to expand, right to shrink (${adj.l > 0 ? '+' : ''}${adj.l}px)`}
        />
        <div
          className={`${styles.handle} ${styles.handleR} ${adj.r !== 0 ? styles.handleNonzero : ''}`}
          style={{ top: HANDLE_SPAN, height: dh }}
          onMouseDown={startEdgeDrag('r')}
          title={`Right edge · drag right to expand, left to shrink (${adj.r > 0 ? '+' : ''}${adj.r}px)`}
        />
      </div>
      {hasAdj && (
        <div className={styles.adjBadges}>
          {adj.t !== 0 && <span>↑{adj.t > 0 ? '+' : ''}{adj.t}</span>}
          {adj.b !== 0 && <span>↓{adj.b > 0 ? '+' : ''}{adj.b}</span>}
          {adj.l !== 0 && <span>←{adj.l > 0 ? '+' : ''}{adj.l}</span>}
          {adj.r !== 0 && <span>→{adj.r > 0 ? '+' : ''}{adj.r}</span>}
        </div>
      )}
      <div className={styles.tileFooter}>
        <input
          className={styles.tileName}
          value={name}
          onChange={e => onNameChange(e.target.value)}
          placeholder={`tile_${String(index + 1).padStart(2, '0')}`}
        />
        <button className={styles.tileDownload} onClick={() => onDownload(tile)} title="Download this tile">↓</button>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function SpriteSheetSplitter() {
  const { startTransition } = usePageTransition();
  const [imageSrc, setImageSrc] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [imgDims, setImgDims] = useState({ w: 0, h: 0 });
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(1);
  const [colDivs, setColDivs] = useState([]);
  const [rowDivs, setRowDivs] = useState([]);
  const [tolerance, setTolerance] = useState(30);
  const [bgColor, setBgColor] = useState([255, 255, 255]);
  const [detectedGrid, setDetectedGrid] = useState(null);
  const [names, setNames] = useState([]);
  const [adjs, setAdjs] = useState([]);
  const [baseName, setBaseName] = useState('tile');
  const [isDragging, setIsDragging] = useState(false);

  // Refs for use inside drag handlers (avoid stale closures)
  const colDivsRef = useRef([]);
  const rowDivsRef = useRef([]);
  const imgDimsRef = useRef({ w: 0, h: 0 });
  const overlayCanvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const blobUrlRef = useRef(null);

  useEffect(() => { colDivsRef.current = colDivs; }, [colDivs]);
  useEffect(() => { rowDivsRef.current = rowDivs; }, [rowDivs]);
  useEffect(() => { imgDimsRef.current = imgDims; }, [imgDims]);

  const maxW = 640;
  const scale = imgDims.w > maxW ? maxW / imgDims.w : 1;
  const dispW = Math.round(imgDims.w * scale);
  const dispH = Math.round(imgDims.h * scale);

  const loadImage = useCallback((file) => {
    if (!file?.type.startsWith('image/')) return;
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    const url = URL.createObjectURL(file);
    blobUrlRef.current = url;
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.naturalWidth; c.height = img.naturalHeight;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const id = ctx.getImageData(0, 0, c.width, c.height);
      const w = img.naturalWidth, h = img.naturalHeight;
      const pixelData = new Uint8ClampedArray(id.data);
      const grid = detectGrid(pixelData, w, h, 30);
      const newColDivs = grid.colDivs.length === grid.cols - 1 ? grid.colDivs : makeEvenDivs(grid.cols, w);
      const newRowDivs = grid.rowDivs.length === grid.rows - 1 ? grid.rowDivs : makeEvenDivs(grid.rows, h);
      setImgDims({ w, h });
      setImageData(pixelData);
      setImageSrc(url);
      setDetectedGrid(grid);
      setBgColor(grid.bgColor);
      setCols(grid.cols);
      setRows(grid.rows);
      setColDivs(newColDivs);
      setRowDivs(newRowDivs);
    };
    img.src = url;
  }, []);

  // Resize names + adjs array when tile count changes
  useEffect(() => {
    const n = cols * rows;
    setNames(prev => prev.length === n ? prev :
      Array.from({ length: n }, (_, i) => prev[i] ?? `${baseName}_${String(i + 1).padStart(2, '0')}`)
    );
    setAdjs(prev => prev.length === n ? prev :
      Array.from({ length: n }, (_, i) => prev[i] ?? { ...ZERO_ADJ })
    );
  }, [cols, rows]);

  // Draw divider lines on overlay
  useEffect(() => {
    const canvas = overlayCanvasRef.current;
    if (!canvas || !imgDims.w) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const sx = canvas.width / imgDims.w;
    const sy = canvas.height / imgDims.h;

    const drawLine = (type, srcPos) => {
      ctx.strokeStyle = 'rgba(255,80,60,0.9)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      if (type === 'col') {
        const x = srcPos * sx;
        ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(255,80,60,1)'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(x, canvas.height / 2, 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      } else {
        const y = srcPos * sy;
        ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(255,80,60,1)'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(canvas.width / 2, y, 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      }
    };

    colDivs.forEach(srcX => drawLine('col', srcX));
    rowDivs.forEach(srcY => drawLine('row', srcY));
  }, [colDivs, rowDivs, imgDims, dispW, dispH]);

  const startDividerDrag = useCallback((type, idx, capDispW, capDispH, capImgDims) => {
    const canvas = overlayCanvasRef.current;
    const onMove = (e) => {
      const canvasRect = canvas?.getBoundingClientRect();
      if (!canvasRect) return;
      if (type === 'col') {
        const mx = Math.max(0, Math.min(e.clientX - canvasRect.left, capDispW));
        const srcX = Math.round(mx * capImgDims.w / capDispW);
        const cur = colDivsRef.current;
        const lo = idx > 0 ? cur[idx - 1] + 8 : 8;
        const hi = idx < cur.length - 1 ? cur[idx + 1] - 8 : capImgDims.w - 8;
        setColDivs(prev => { const a = [...prev]; a[idx] = Math.max(lo, Math.min(hi, srcX)); return a; });
      } else {
        const my = Math.max(0, Math.min(e.clientY - canvasRect.top, capDispH));
        const srcY = Math.round(my * capImgDims.h / capDispH);
        const cur = rowDivsRef.current;
        const lo = idx > 0 ? cur[idx - 1] + 8 : 8;
        const hi = idx < cur.length - 1 ? cur[idx + 1] - 8 : capImgDims.h - 8;
        setRowDivs(prev => { const a = [...prev]; a[idx] = Math.max(lo, Math.min(hi, srcY)); return a; });
      }
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, []);

  const handleOverlayMouseDown = useCallback((e) => {
    const canvas = overlayCanvasRef.current;
    if (!canvas || !imgDims.w) return;
    const canvasRect = canvas.getBoundingClientRect();
    const mx = e.clientX - canvasRect.left;
    const my = e.clientY - canvasRect.top;
    const sx = dispW / imgDims.w;
    const sy = dispH / imgDims.h;
    for (let i = 0; i < colDivs.length; i++) {
      if (Math.abs(mx - colDivs[i] * sx) <= 8) {
        e.preventDefault();
        startDividerDrag('col', i, dispW, dispH, imgDims);
        return;
      }
    }
    for (let i = 0; i < rowDivs.length; i++) {
      if (Math.abs(my - rowDivs[i] * sy) <= 8) {
        e.preventDefault();
        startDividerDrag('row', i, dispW, dispH, imgDims);
        return;
      }
    }
  }, [colDivs, rowDivs, dispW, dispH, imgDims, startDividerDrag]);

  const handleOverlayMouseMove = useCallback((e) => {
    const canvas = overlayCanvasRef.current;
    if (!canvas || !imgDims.w) return;
    const canvasRect = canvas.getBoundingClientRect();
    const mx = e.clientX - canvasRect.left;
    const my = e.clientY - canvasRect.top;
    const sx = dispW / imgDims.w;
    const sy = dispH / imgDims.h;
    let cursor = 'default';
    for (const srcX of colDivs) {
      if (Math.abs(mx - srcX * sx) <= 8) { cursor = 'col-resize'; break; }
    }
    if (cursor === 'default') {
      for (const srcY of rowDivs) {
        if (Math.abs(my - srcY * sy) <= 8) { cursor = 'row-resize'; break; }
      }
    }
    canvas.style.cursor = cursor;
  }, [colDivs, rowDivs, dispW, dispH, imgDims]);

  const rects = useMemo(
    () => imgDims.w ? buildRects(imgDims.w, imgDims.h, colDivs, rowDivs) : [],
    [imgDims, colDivs, rowDivs]
  );

  const handleDrop = useCallback((e) => {
    e.preventDefault(); setIsDragging(false);
    loadImage(e.dataTransfer.files[0]);
  }, [loadImage]);

  const handleClear = useCallback(() => {
    if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
    setImageSrc(null); setImageData(null); setDetectedGrid(null);
    setColDivs([]); setRowDivs([]);
    setImgDims({ w: 0, h: 0 });
  }, []);

  const downloadTile = useCallback((tile, name) => {
    const c = document.createElement('canvas');
    c.width = tile.width; c.height = tile.height;
    c.getContext('2d').putImageData(new ImageData(tile.data, tile.width, tile.height), 0, 0);
    c.toBlob(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `${name || 'tile'}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }, 'image/png');
  }, []);

  const downloadAll = useCallback(() => {
    if (!imageData) return;
    rects.forEach((rect, i) => {
      setTimeout(() => {
        const tile = extractTile(imageData, imgDims.w, imgDims.h, rect.x0, rect.y0, rect.x1, rect.y1, adjs[i], bgColor, tolerance);
        downloadTile(tile, names[i] || `tile_${i + 1}`);
      }, i * 200);
    });
  }, [rects, adjs, imageData, imgDims, bgColor, tolerance, names, downloadTile]);

  const resetNames = () => setNames(
    Array.from({ length: cols * rows }, (_, i) => `${baseName}_${String(i + 1).padStart(2, '0')}`)
  );

  const resetAdjs = () => setAdjs(
    Array.from({ length: cols * rows }, () => ({ ...ZERO_ADJ }))
  );

  // Change cols/rows and redistribute dividers evenly
  const changeCols = (delta) => {
    const n = Math.max(1, cols + delta);
    setCols(n);
    if (imgDims.w) setColDivs(makeEvenDivs(n, imgDims.w));
  };

  const changeRows = (delta) => {
    const n = Math.max(1, rows + delta);
    setRows(n);
    if (imgDims.h) setRowDivs(makeEvenDivs(n, imgDims.h));
  };

  const resetToDetected = () => {
    if (!detectedGrid) return;
    setCols(detectedGrid.cols);
    setRows(detectedGrid.rows);
    setColDivs(detectedGrid.colDivs.length === detectedGrid.cols - 1
      ? detectedGrid.colDivs : makeEvenDivs(detectedGrid.cols, imgDims.w));
    setRowDivs(detectedGrid.rowDivs.length === detectedGrid.rows - 1
      ? detectedGrid.rowDivs : makeEvenDivs(detectedGrid.rows, imgDims.h));
  };

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Sprite Sheet Splitter</h1>
        <p className={styles.subtitle}>
          Drop an AI-generated sprite sheet. Auto-detects the grid, removes the background, and exports each tile as a transparent PNG.
        </p>
      </div>

      <div className={styles.workspace}>
        {/* ── Controls ── */}
        <aside className={styles.controls}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Grid</legend>
            <div className={styles.row}>
              <span className={styles.label}>Columns</span>
              <div className={styles.stepper}>
                <button onClick={() => changeCols(-1)}>−</button>
                <span>{cols}</span>
                <button onClick={() => changeCols(1)}>+</button>
              </div>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>Rows</span>
              <div className={styles.stepper}>
                <button onClick={() => changeRows(-1)}>−</button>
                <span>{rows}</span>
                <button onClick={() => changeRows(1)}>+</button>
              </div>
            </div>
            <p className={styles.hint}>Drag red lines on preview to fine-tune dividers.</p>
            {detectedGrid && (
              <button className={styles.detectBtn} onClick={resetToDetected}>
                Reset to detected ({detectedGrid.cols}×{detectedGrid.rows})
              </button>
            )}
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Background</legend>
            <div className={styles.row}>
              <span className={styles.label}>Tolerance</span>
              <span className={styles.value}>{tolerance}</span>
            </div>
            <input type="range" min={0} max={120} value={tolerance}
              onChange={e => setTolerance(Number(e.target.value))}
              className={styles.slider} />
            <div className={styles.row} style={{ marginTop: 8 }}>
              <span className={styles.label}>Detected bg</span>
              <div className={styles.colorSwatch}
                style={{ background: `rgb(${bgColor.join(',')})` }}
                title={`rgb(${bgColor.join(', ')})`} />
            </div>
            <p className={styles.hint}>Sampled from image edges. Increase if background isn't fully removed.</p>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>File names</legend>
            <div className={styles.nameRow}>
              <input className={styles.nameInput} value={baseName}
                onChange={e => setBaseName(e.target.value)} placeholder="tile" />
              <button className={styles.resetBtn} onClick={resetNames} title="Reset all names to base pattern">↺</button>
            </div>
            <p className={styles.hint}>Names editable per tile below. Click ↺ to reset all.</p>
          </fieldset>

          {rects.length > 0 && adjs.some(a => a.t || a.r || a.b || a.l) && (
            <button className={styles.detectBtn} onClick={resetAdjs} title="Clear all per-tile crop adjustments">
              Reset all crop offsets
            </button>
          )}

          {rects.length > 0 && (
            <button className={styles.downloadAll} onClick={downloadAll}>
              ↓ Download all ({rects.length})
            </button>
          )}
        </aside>

        {/* ── Main ── */}
        <div className={styles.main}>
          {!imageSrc ? (
            <div
              className={`${styles.dropZone} ${isDragging ? styles.dropZoneActive : ''}`}
              onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <span className={styles.dropIcon}>⧉</span>
              <p className={styles.dropText}>Drop sprite sheet here</p>
              <p className={styles.dropHint}>or click to select · PNG, JPG, WebP</p>
              <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }}
                onChange={e => { if (e.target.files[0]) loadImage(e.target.files[0]); }} />
            </div>
          ) : (
            <div className={styles.previewArea}>
              <div className={styles.imageWrapper} style={{ width: dispW, height: dispH }}>
                <img src={imageSrc} className={styles.previewImg} style={{ width: dispW, height: dispH }} alt="sprite sheet" />
                <canvas
                  ref={overlayCanvasRef}
                  className={styles.overlay}
                  width={dispW}
                  height={dispH}
                  onMouseDown={handleOverlayMouseDown}
                  onMouseMove={handleOverlayMouseMove}
                />
              </div>
              <button className={styles.clearBtn} onClick={handleClear}>× Clear</button>
            </div>
          )}

          {rects.length > 0 && imageData && (
            <div className={styles.tileGrid}>
              {rects.map((rect, i) => (
                <TileCard
                  key={i}
                  sourceData={imageData}
                  srcW={imgDims.w}
                  srcH={imgDims.h}
                  rect={rect}
                  bgColor={bgColor}
                  tolerance={tolerance}
                  name={names[i] ?? ''}
                  index={i}
                  adj={adjs[i] ?? ZERO_ADJ}
                  onAdjChange={a => setAdjs(prev => { const n = [...prev]; n[i] = a; return n; })}
                  onNameChange={n => setNames(prev => { const a = [...prev]; a[i] = n; return a; })}
                  onDownload={tile => downloadTile(tile, names[i] || `tile_${i + 1}`)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          ← Back to tools
        </button>
      </div>
    </main>
  );
}
