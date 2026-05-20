import { useState, useRef, useCallback, useEffect } from 'react';
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
  while (qi < queue.length) {
    const x = queue[qi++], y = queue[qi++];
    out[(y * width + x) * 4 + 3] = 0;
    enqueue(x+1, y); enqueue(x-1, y);
    enqueue(x, y+1); enqueue(x, y-1);
  }
  return out;
}

function splitTiles(imageData, imgW, imgH, cols, rows, colDivs, rowDivs, bgColor, tolerance) {
  const useDetectedCols = colDivs.length === cols - 1;
  const useDetectedRows = rowDivs.length === rows - 1;
  const colEdges = useDetectedCols
    ? [0, ...colDivs, imgW]
    : Array.from({ length: cols + 1 }, (_, i) => Math.round(i * imgW / cols));
  const rowEdges = useDetectedRows
    ? [0, ...rowDivs, imgH]
    : Array.from({ length: rows + 1 }, (_, i) => Math.round(i * imgH / rows));

  const tiles = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x0 = colEdges[c], x1 = colEdges[c + 1];
      const y0 = rowEdges[r], y1 = rowEdges[r + 1];
      const tw = x1 - x0, th = y1 - y0;
      const tilePixels = new Uint8ClampedArray(tw * th * 4);
      for (let ty = 0; ty < th; ty++) {
        for (let tx = 0; tx < tw; tx++) {
          const si = ((y0 + ty) * imgW + (x0 + tx)) * 4;
          const di = (ty * tw + tx) * 4;
          tilePixels[di]   = imageData[si];
          tilePixels[di+1] = imageData[si+1];
          tilePixels[di+2] = imageData[si+2];
          tilePixels[di+3] = imageData[si+3];
        }
      }
      const processed = tolerance > 0
        ? removeBackground(tilePixels, tw, th, bgColor, tolerance)
        : tilePixels;
      tiles.push({ data: processed, width: tw, height: th });
    }
  }
  return tiles;
}

// ── TileCard ───────────────────────────────────────────────────────────────────

function TileCard({ tile, name, index, onNameChange, onDownload }) {
  const canvasRef = useRef(null);
  const maxPreview = 160;
  const scale = Math.min(1, maxPreview / Math.max(tile.width, tile.height));
  const dw = Math.round(tile.width * scale);
  const dh = Math.round(tile.height * scale);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = tile.width;
    canvas.height = tile.height;
    const ctx = canvas.getContext('2d');
    ctx.putImageData(new ImageData(tile.data, tile.width, tile.height), 0, 0);
  }, [tile]);

  return (
    <div className={styles.tileCard}>
      <div className={styles.tilePreview} style={{ width: dw, height: dh }}>
        <canvas ref={canvasRef} className={styles.tileCanvas} style={{ width: dw, height: dh }} />
      </div>
      <div className={styles.tileFooter}>
        <input
          className={styles.tileName}
          value={name}
          onChange={e => onNameChange(e.target.value)}
          placeholder={`tile_${String(index + 1).padStart(2, '0')}`}
        />
        <button className={styles.tileDownload} onClick={onDownload} title="Download this tile">↓</button>
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
  const [tolerance, setTolerance] = useState(30);
  const [bgColor, setBgColor] = useState([255, 255, 255]);
  const [detectedGrid, setDetectedGrid] = useState(null);
  const [tiles, setTiles] = useState([]);
  const [names, setNames] = useState([]);
  const [baseName, setBaseName] = useState('tile');
  const [isDragging, setIsDragging] = useState(false);

  const overlayCanvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const blobUrlRef = useRef(null);

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
      setImgDims({ w, h });
      setImageData(pixelData);
      setImageSrc(url);
      const grid = detectGrid(pixelData, w, h, 30);
      setDetectedGrid(grid);
      setCols(grid.cols);
      setRows(grid.rows);
      setBgColor(grid.bgColor);
    };
    img.src = url;
  }, []);

  // Reprocess tiles whenever relevant params change
  useEffect(() => {
    if (!imageData || !imgDims.w) return;
    const { w, h } = imgDims;
    const cd = detectedGrid?.colDivs ?? [];
    const rd = detectedGrid?.rowDivs ?? [];
    setTiles(splitTiles(imageData, w, h, cols, rows, cd, rd, bgColor, tolerance));
  }, [imageData, imgDims, cols, rows, tolerance, bgColor, detectedGrid]);

  // Resize names array when tile count changes, preserve existing names
  useEffect(() => {
    setNames(prev => {
      const n = cols * rows;
      if (prev.length === n) return prev;
      return Array.from({ length: n }, (_, i) =>
        prev[i] ?? `${baseName}_${String(i + 1).padStart(2, '0')}`
      );
    });
  }, [cols, rows]);

  // Draw grid overlay
  useEffect(() => {
    const canvas = overlayCanvasRef.current;
    if (!canvas || !imgDims.w) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(255, 70, 70, 0.85)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    for (let c = 1; c < cols; c++) {
      const x = (c / cols) * canvas.width;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let r = 1; r < rows; r++) {
      const y = (r / rows) * canvas.height;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
  }, [cols, rows, imgDims]);

  const handleDrop = useCallback((e) => {
    e.preventDefault(); setIsDragging(false);
    loadImage(e.dataTransfer.files[0]);
  }, [loadImage]);

  const handleClear = useCallback(() => {
    if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
    setImageSrc(null); setImageData(null); setTiles([]); setDetectedGrid(null);
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
    tiles.forEach((tile, i) => {
      setTimeout(() => downloadTile(tile, names[i] || `tile_${i + 1}`), i * 200);
    });
  }, [tiles, names, downloadTile]);

  const resetNames = () => {
    setNames(Array.from({ length: cols * rows }, (_, i) =>
      `${baseName}_${String(i + 1).padStart(2, '0')}`
    ));
  };

  const maxW = 640;
  const scale = imgDims.w > maxW ? maxW / imgDims.w : 1;
  const dispW = Math.round(imgDims.w * scale);
  const dispH = Math.round(imgDims.h * scale);

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
                <button onClick={() => setCols(c => Math.max(1, c - 1))}>−</button>
                <span>{cols}</span>
                <button onClick={() => setCols(c => c + 1)}>+</button>
              </div>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>Rows</span>
              <div className={styles.stepper}>
                <button onClick={() => setRows(r => Math.max(1, r - 1))}>−</button>
                <span>{rows}</span>
                <button onClick={() => setRows(r => r + 1)}>+</button>
              </div>
            </div>
            {detectedGrid && (
              <button className={styles.detectBtn}
                onClick={() => { setCols(detectedGrid.cols); setRows(detectedGrid.rows); }}>
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

          {tiles.length > 0 && (
            <button className={styles.downloadAll} onClick={downloadAll}>
              ↓ Download all ({tiles.length})
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
                <canvas ref={overlayCanvasRef} className={styles.overlay} width={dispW} height={dispH} />
              </div>
              <button className={styles.clearBtn} onClick={handleClear}>× Clear</button>
            </div>
          )}

          {tiles.length > 0 && (
            <div className={styles.tileGrid}>
              {tiles.map((tile, i) => (
                <TileCard
                  key={i}
                  tile={tile}
                  name={names[i] ?? ''}
                  index={i}
                  onNameChange={n => setNames(prev => { const a = [...prev]; a[i] = n; return a; })}
                  onDownload={() => downloadTile(tile, names[i] || `tile_${i + 1}`)}
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
