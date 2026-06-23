import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { usePageTransition } from '../../../App';
import { useI18n } from '../../../i18n/I18nContext';
import { Routes } from '../../../constants/routes';
import styles from './Dither.module.css';

// ── Dithering algorithms ───────────────────────────────────────────────────────

function colorToGrayscale(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function applyBrightness(v, brightness) {
  return Math.max(0, Math.min(255, v + brightness));
}

function applyContrast(v, contrast) {
  return Math.max(0, Math.min(255, (v - 128) * (1 + contrast) + 128));
}

function colorDistance(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

function findNearestColor(r, g, b, palette) {
  let minDist = Infinity;
  let nearest = palette[0];
  for (const color of palette) {
    const dist = colorDistance(r, g, b, color[0], color[1], color[2]);
    if (dist < minDist) {
      minDist = dist;
      nearest = color;
    }
  }
  return nearest;
}

// Palettes: [r, g, b] format
const PALETTES = {
  '1bit': [[0, 0, 0], [255, 255, 255]],
  'gameboy': [[15, 56, 15], [48, 98, 48], [139, 172, 82], [155, 188, 15]],
  'cga': [
    [0, 0, 0], [0, 0, 170], [0, 170, 0], [0, 170, 170],
    [170, 0, 0], [170, 0, 170], [170, 85, 0], [170, 170, 170],
    [85, 85, 85], [85, 85, 255], [85, 255, 85], [85, 255, 255],
    [255, 85, 85], [255, 85, 255], [255, 255, 85], [255, 255, 255]
  ],
  '2bit': [[0, 0, 0], [85, 85, 85], [170, 170, 170], [255, 255, 255]],
};

function makGrayscalePalette(levels) {
  const palette = [];
  for (let i = 0; i < levels; i++) {
    const v = Math.round((i / (levels - 1)) * 255);
    palette.push([v, v, v]);
  }
  return palette;
}

// Floyd-Steinberg dithering
function floydSteinberg(data, width, height, palette, brightness, contrast, invert) {
  const img = new Uint8ClampedArray(data);
  const working = new Float32Array((width + 2) * (height + 2) * 3);

  // Load image + apply adjustments into working buffer (with padding)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const src = (y * width + x) * 4;
      const r = img[src], g = img[src + 1], b = img[src + 2];
      let gray = colorToGrayscale(r, g, b);
      gray = applyBrightness(gray, brightness);
      gray = applyContrast(gray, contrast);
      if (invert) gray = 255 - gray;

      const dst = ((y + 1) * (width + 2) + (x + 1)) * 3;
      working[dst] = gray;
      working[dst + 1] = gray;
      working[dst + 2] = gray;
    }
  }

  // Dither pass
  for (let y = 1; y <= height; y++) {
    for (let x = 1; x <= width; x++) {
      const idx = (y * (width + 2) + x) * 3;
      const [nr, ng, nb] = findNearestColor(working[idx], working[idx + 1], working[idx + 2], palette);
      working[idx] = nr;
      working[idx + 1] = ng;
      working[idx + 2] = nb;

      const er = working[idx] - nr;
      const eg = working[idx + 1] - ng;
      const eb = working[idx + 2] - nb;

      if (x < width) { // →
        working[idx + 3] += er * 7 / 16;
        working[idx + 4] += eg * 7 / 16;
        working[idx + 5] += eb * 7 / 16;
      }
      if (y < height) {
        const below = ((y + 1) * (width + 2) + x) * 3;
        working[below] += er * 5 / 16;      // ↙
        working[below + 1] += eg * 5 / 16;
        working[below + 2] += eb * 5 / 16;
        if (x > 1) {
          const bleft = below - 3;           // ↓
          working[bleft] += er * 1 / 16;
          working[bleft + 1] += eg * 1 / 16;
          working[bleft + 2] += eb * 1 / 16;
        }
        if (x < width) {
          const bright = below + 3;          // ↘
          working[bright] += er * 3 / 16;
          working[bright + 1] += eg * 3 / 16;
          working[bright + 2] += eb * 3 / 16;
        }
      }
    }
  }

  // Extract result
  const result = new Uint8ClampedArray(data);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const src = ((y + 1) * (width + 2) + (x + 1)) * 3;
      const dst = (y * width + x) * 4;
      result[dst] = Math.round(working[src]);
      result[dst + 1] = Math.round(working[src + 1]);
      result[dst + 2] = Math.round(working[src + 2]);
    }
  }
  return result;
}

// Bayer matrix ordered dithering
function bayerDither(data, width, height, palette, brightness, contrast, invert, matrixSize) {
  const matrix = matrixSize === 4
    ? [
        [0, 8, 2, 10],
        [12, 4, 14, 6],
        [3, 11, 1, 9],
        [15, 7, 13, 5]
      ]
    : [
        [0, 32, 8, 40, 2, 34, 10, 42],
        [48, 16, 56, 24, 50, 18, 58, 26],
        [12, 44, 4, 36, 14, 46, 6, 38],
        [60, 28, 52, 20, 62, 30, 54, 22],
        [3, 35, 11, 43, 1, 33, 9, 41],
        [51, 19, 59, 27, 49, 17, 57, 25],
        [15, 47, 7, 39, 13, 45, 5, 37],
        [63, 31, 55, 23, 61, 29, 53, 21]
      ];

  const threshold = (matrixSize * matrixSize + 1) / 2;
  const result = new Uint8ClampedArray(data);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const src = (y * width + x) * 4;
      const r = data[src], g = data[src + 1], b = data[src + 2];
      let gray = colorToGrayscale(r, g, b);
      gray = applyBrightness(gray, brightness);
      gray = applyContrast(gray, contrast);
      if (invert) gray = 255 - gray;

      const matrixVal = matrix[y % matrixSize][x % matrixSize];
      const dithered = gray + (matrixVal - threshold);
      const clamped = Math.max(0, Math.min(255, dithered));

      const [nr, ng, nb] = findNearestColor(clamped, clamped, clamped, palette);
      result[src] = nr;
      result[src + 1] = ng;
      result[src + 2] = nb;
    }
  }
  return result;
}

// Simple threshold
function simpleThreshold(data, width, height, palette, brightness, contrast, invert) {
  const result = new Uint8ClampedArray(data);
  const threshold = 128;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const src = (y * width + x) * 4;
      const r = data[src], g = data[src + 1], b = data[src + 2];
      let gray = colorToGrayscale(r, g, b);
      gray = applyBrightness(gray, brightness);
      gray = applyContrast(gray, contrast);
      if (invert) gray = 255 - gray;

      const [nr, ng, nb] = findNearestColor(gray > threshold ? 255 : 0, gray > threshold ? 255 : 0, gray > threshold ? 255 : 0, palette);
      result[src] = nr;
      result[src + 1] = ng;
      result[src + 2] = nb;
    }
  }
  return result;
}

function dither(sourceData, width, height, algorithm, palette, brightness, contrast, invert) {
  if (algorithm === 'floyd') {
    return floydSteinberg(sourceData, width, height, palette, brightness, contrast, invert);
  } else if (algorithm === 'bayer4') {
    return bayerDither(sourceData, width, height, palette, brightness, contrast, invert, 4);
  } else if (algorithm === 'bayer8') {
    return bayerDither(sourceData, width, height, palette, brightness, contrast, invert, 8);
  } else {
    return simpleThreshold(sourceData, width, height, palette, brightness, contrast, invert);
  }
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function Dither() {
  const { startTransition } = usePageTransition();
  const { t } = useI18n();
  const [imageSrc, setImageSrc] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [imgDims, setImgDims] = useState({ w: 0, h: 0 });
  const [algorithm, setAlgorithm] = useState('floyd');
  const [paletteType, setPaletteType] = useState('1bit');
  const [grayLevels, setGrayLevels] = useState(8);
  const [pixelScale, setPixelScale] = useState(4);
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [invert, setInvert] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showComparison, setShowComparison] = useState(true);

  const fileInputRef = useRef(null);
  const blobUrlRef = useRef(null);
  const origCanvasRef = useRef(null);
  const dithCanvasRef = useRef(null);

  const loadImage = useCallback((file) => {
    if (!file?.type.startsWith('image/')) return;
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    const url = URL.createObjectURL(file);
    blobUrlRef.current = url;
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const id = ctx.getImageData(0, 0, c.width, c.height);
      setImageData(new Uint8ClampedArray(id.data));
      setImgDims({ w: img.naturalWidth, h: img.naturalHeight });
      setImageSrc(url);
    };
    img.src = url;
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    loadImage(e.dataTransfer.files[0]);
  }, [loadImage]);

  const handleClear = useCallback(() => {
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    setImageSrc(null);
    setImageData(null);
    setImgDims({ w: 0, h: 0 });
  }, []);

  const downsampled = useMemo(() => {
    if (!imageData || !imgDims.w) return null;
    const dsW = Math.max(1, Math.ceil(imgDims.w / pixelScale));
    const dsH = Math.max(1, Math.ceil(imgDims.h / pixelScale));
    const dsBuf = new Uint8ClampedArray(dsW * dsH * 4);

    for (let y = 0; y < dsH; y++) {
      for (let x = 0; x < dsW; x++) {
        const srcX = Math.min(x * pixelScale, imgDims.w - 1);
        const srcY = Math.min(y * pixelScale, imgDims.h - 1);
        const srcIdx = (srcY * imgDims.w + srcX) * 4;
        const dstIdx = (y * dsW + x) * 4;
        dsBuf[dstIdx] = imageData[srcIdx];
        dsBuf[dstIdx + 1] = imageData[srcIdx + 1];
        dsBuf[dstIdx + 2] = imageData[srcIdx + 2];
        dsBuf[dstIdx + 3] = imageData[srcIdx + 3];
      }
    }
    return { data: dsBuf, width: dsW, height: dsH };
  }, [imageData, imgDims, pixelScale]);

  const palette = useMemo(() => {
    if (paletteType === 'grayscale') return makGrayscalePalette(grayLevels);
    return PALETTES[paletteType] || PALETTES['1bit'];
  }, [paletteType, grayLevels]);

  const dithered = useMemo(() => {
    if (!downsampled) return null;
    const result = dither(downsampled.data, downsampled.width, downsampled.height, algorithm, palette, brightness, contrast, invert);
    return { data: result, width: downsampled.width, height: downsampled.height };
  }, [downsampled, algorithm, palette, brightness, contrast, invert]);

  useEffect(() => {
    if (!downsampled) return;
    const canvas = origCanvasRef.current;
    if (!canvas) return;
    canvas.width = downsampled.width;
    canvas.height = downsampled.height;
    canvas.getContext('2d').putImageData(new ImageData(downsampled.data, downsampled.width, downsampled.height), 0, 0);
  }, [downsampled]);

  useEffect(() => {
    if (!dithered) return;
    const canvas = dithCanvasRef.current;
    if (!canvas) return;
    canvas.width = dithered.width;
    canvas.height = dithered.height;
    canvas.getContext('2d').putImageData(new ImageData(dithered.data, dithered.width, dithered.height), 0, 0);
  }, [dithered]);

  const downloadResult = useCallback(() => {
    if (!dithCanvasRef.current) return;
    const canvas = dithCanvasRef.current;
    canvas.toBlob(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'dithered.png';
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }, 'image/png');
  }, []);

  const maxPreviewSize = 320;
  const origScale = downsampled ? Math.min(1, maxPreviewSize / Math.max(downsampled.width, downsampled.height)) : 1;
  const origW = downsampled ? Math.round(downsampled.width * origScale) : 0;
  const origH = downsampled ? Math.round(downsampled.height * origScale) : 0;

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('dither.heading')}</h1>
        <p className={styles.subtitle}>{t('dither.subtitle')}</p>
      </div>

      <div className={styles.workspace}>
        {/* Controls */}
        <aside className={styles.controls}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Algorithm</legend>
            <div className={styles.row}>
              <select value={algorithm} onChange={e => setAlgorithm(e.target.value)} className={styles.select}>
                <option value="floyd">Floyd-Steinberg</option>
                <option value="bayer4">Bayer 4×4</option>
                <option value="bayer8">Bayer 8×8</option>
                <option value="threshold">Simple threshold</option>
              </select>
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Palette</legend>
            <div className={styles.row}>
              <select value={paletteType} onChange={e => setPaletteType(e.target.value)} className={styles.select}>
                <option value="1bit">1-bit B&W</option>
                <option value="gameboy">Game Boy (4)</option>
                <option value="cga">CGA (16)</option>
                <option value="2bit">2-bit gray</option>
                <option value="grayscale">Grayscale</option>
              </select>
            </div>
            {paletteType === 'grayscale' && (
              <div style={{ marginTop: '8px' }}>
                <div className={styles.row}>
                  <span className={styles.label}>Levels</span>
                  <span className={styles.value}>{grayLevels}</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={16}
                  value={grayLevels}
                  onChange={e => setGrayLevels(Number(e.target.value))}
                  className={styles.slider}
                />
              </div>
            )}
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Scale</legend>
            <div className={styles.row}>
              <span className={styles.label}>Pixel size</span>
              <span className={styles.value}>{pixelScale}×</span>
            </div>
            <input
              type="range"
              min={1}
              max={16}
              value={pixelScale}
              onChange={e => setPixelScale(Number(e.target.value))}
              className={styles.slider}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Tone</legend>
            <div className={styles.row}>
              <span className={styles.label}>Brightness</span>
              <span className={styles.value}>{brightness > 0 ? '+' : ''}{brightness}</span>
            </div>
            <input
              type="range"
              min={-50}
              max={50}
              value={brightness}
              onChange={e => setBrightness(Number(e.target.value))}
              className={styles.slider}
            />
            <div className={styles.row} style={{ marginTop: '8px' }}>
              <span className={styles.label}>Contrast</span>
              <span className={styles.value}>{contrast > 0 ? '+' : ''}{Math.round(contrast * 100)}%</span>
            </div>
            <input
              type="range"
              min={-0.5}
              max={0.5}
              step={0.05}
              value={contrast}
              onChange={e => setContrast(Number(e.target.value))}
              className={styles.slider}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Effects</legend>
            <label className={styles.checkbox}>
              <input type="checkbox" checked={invert} onChange={e => setInvert(e.target.checked)} />
              Invert
            </label>
            {dithered && (
              <button className={styles.downloadBtn} onClick={downloadResult}>
                ↓ Download PNG
              </button>
            )}
          </fieldset>
        </aside>

        {/* Main area */}
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
              <p className={styles.dropText}>Drop an image here</p>
              <p className={styles.dropHint}>or click to select · PNG, JPG, WebP</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={e => { if (e.target.files[0]) loadImage(e.target.files[0]); }}
              />
            </div>
          ) : (
            <div className={styles.previewArea}>
              {showComparison && downsampled && (
                <div className={styles.previewGrid}>
                  <div className={styles.previewCard}>
                    <p className={styles.previewLabel}>Original</p>
                    <div className={styles.canvasWrapper} style={{ width: origW, height: origH }}>
                      <canvas
                        ref={origCanvasRef}
                        className={styles.canvas}
                        style={{ width: origW, height: origH }}
                      />
                    </div>
                  </div>
                  <div className={styles.previewCard}>
                    <p className={styles.previewLabel}>Dithered</p>
                    <div className={styles.canvasWrapper} style={{ width: origW, height: origH }}>
                      <canvas
                        ref={dithCanvasRef}
                        className={styles.canvas}
                        style={{ width: origW, height: origH }}
                      />
                    </div>
                  </div>
                </div>
              )}
              {!showComparison && dithered && (
                <div className={styles.previewCard}>
                  <p className={styles.previewLabel}>Dithered</p>
                  <div className={styles.canvasWrapper} style={{ width: origW, height: origH }}>
                    <canvas
                      ref={dithCanvasRef}
                      className={styles.canvas}
                      style={{ width: origW, height: origH }}
                    />
                  </div>
                </div>
              )}
              <div className={styles.controls2}>
                <label className={styles.checkbox}>
                  <input type="checkbox" checked={showComparison} onChange={e => setShowComparison(e.target.checked)} />
                  Show comparison
                </label>
                <button className={styles.clearBtn} onClick={handleClear}>× Clear</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          {t('dither.backTools')}
        </button>
      </div>
    </main>
  );
}
