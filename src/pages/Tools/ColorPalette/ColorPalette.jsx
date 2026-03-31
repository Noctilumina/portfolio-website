import { useState, useRef, useCallback } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import styles from './ColorPalette.module.css';

function medianCut(pixels, depth) {
  if (depth === 0 || pixels.length === 0) {
    const avg = [0, 0, 0];
    for (let i = 0; i < pixels.length; i++) {
      avg[0] += pixels[i][0];
      avg[1] += pixels[i][1];
      avg[2] += pixels[i][2];
    }
    const len = pixels.length || 1;
    return [{ color: [Math.round(avg[0] / len), Math.round(avg[1] / len), Math.round(avg[2] / len)], count: pixels.length }];
  }

  let minR = 255, maxR = 0, minG = 255, maxG = 0, minB = 255, maxB = 0;
  for (let i = 0; i < pixels.length; i++) {
    const [r, g, b] = pixels[i];
    if (r < minR) minR = r;
    if (r > maxR) maxR = r;
    if (g < minG) minG = g;
    if (g > maxG) maxG = g;
    if (b < minB) minB = b;
    if (b > maxB) maxB = b;
  }

  const rangeR = maxR - minR;
  const rangeG = maxG - minG;
  const rangeB = maxB - minB;

  let channel;
  if (rangeR >= rangeG && rangeR >= rangeB) channel = 0;
  else if (rangeG >= rangeR && rangeG >= rangeB) channel = 1;
  else channel = 2;

  pixels.sort((a, b) => a[channel] - b[channel]);

  const mid = Math.floor(pixels.length / 2);
  const left = pixels.slice(0, mid);
  const right = pixels.slice(mid);

  return [...medianCut(left, depth - 1), ...medianCut(right, depth - 1)];
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

function extractColors(imageData, numColors) {
  const data = imageData.data;
  const pixels = [];
  const step = Math.max(1, Math.floor(data.length / 4 / 40000));

  for (let i = 0; i < data.length; i += 4 * step) {
    pixels.push([data[i], data[i + 1], data[i + 2]]);
  }

  const depth = Math.ceil(Math.log2(numColors));
  let buckets = medianCut(pixels, depth);

  buckets.sort((a, b) => b.count - a.count);
  buckets = buckets.slice(0, numColors);

  const totalPixels = buckets.reduce((sum, b) => sum + b.count, 0);

  return buckets.map(b => ({
    r: b.color[0],
    g: b.color[1],
    b: b.color[2],
    hex: rgbToHex(b.color[0], b.color[1], b.color[2]),
    percent: totalPixels > 0 ? Math.round((b.count / totalPixels) * 100) : 0,
  }));
}

export default function ColorPalette() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const [imageSrc, setImageSrc] = useState(null);
  const [colors, setColors] = useState([]);
  const [numColors, setNumColors] = useState(6);
  const [dragOver, setDragOver] = useState(false);
  const [copied, setCopied] = useState(null);

  const processImage = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target.result;
      setImageSrc(src);
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        const maxDim = 300;
        const scale = Math.min(maxDim / img.width, maxDim / img.height, 1);
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        setColors(extractColors(imageData, numColors));
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  }, [numColors]);

  const reExtract = useCallback(() => {
    if (!imageSrc) return;
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setColors(extractColors(imageData, numColors));
    };
    img.src = imageSrc;
  }, [imageSrc, numColors]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    processImage(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    processImage(file);
  };

  const flashCopied = (label) => {
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  const copyHex = (hex) => {
    navigator.clipboard.writeText(hex);
    flashCopied(hex);
  };

  const copyCSSVars = () => {
    const css = colors.map((c, i) => `--color-${i + 1}: ${c.hex};`).join('\n');
    navigator.clipboard.writeText(css);
    flashCopied('CSS');
  };

  const copyJSON = () => {
    const json = JSON.stringify(colors.map(c => c.hex), null, 2);
    navigator.clipboard.writeText(json);
    flashCopied('JSON');
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Color Palette from Image</h1>
        <p className={styles.subtitle}>Upload an image to extract its dominant colors using median-cut quantization.</p>
      </div>

      <div className={styles.workspace}>
        {/* Controls */}
        <aside className={styles.controls}>
          <div className={styles.fieldset}>
            <span className={styles.legend}>Upload</span>
            <div
              className={`${styles.dropzone} ${dragOver ? styles.dropzoneActive : ''}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
            >
              <span className={styles.dropzoneText}>
                {imageSrc ? 'Drop or click to replace' : 'Drop image here or click to browse'}
              </span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp,image/gif,image/bmp"
                onChange={handleFileChange}
                className={styles.hiddenInput}
              />
            </div>
          </div>

          <div className={styles.fieldset}>
            <span className={styles.legend}>Settings</span>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Number of colors</span>
              <div className={styles.sliderRow}>
                <input
                  type="range"
                  min={3}
                  max={12}
                  value={numColors}
                  onChange={(e) => setNumColors(+e.target.value)}
                  className={styles.slider}
                />
                <span className={styles.sliderVal}>{numColors}</span>
              </div>
            </label>
          </div>

          <button className={styles.generateBtn} onClick={reExtract} disabled={!imageSrc}>
            Re-extract
          </button>

          <div className={styles.exportBtns}>
            <button className={styles.exportBtn} onClick={copyCSSVars} disabled={colors.length === 0}>
              {copied === 'CSS' ? 'Copied!' : 'Copy CSS'}
            </button>
            <button className={styles.exportBtn} onClick={copyJSON} disabled={colors.length === 0}>
              {copied === 'JSON' ? 'Copied!' : 'Copy JSON'}
            </button>
          </div>
        </aside>

        {/* Preview */}
        <div className={styles.preview}>
          <canvas ref={canvasRef} className={styles.hiddenCanvas} />

          {!imageSrc && (
            <div className={styles.emptyState}>Upload an image to get started</div>
          )}

          {imageSrc && (
            <div className={styles.resultArea}>
              <div className={styles.imagePreview}>
                <img src={imageSrc} alt="Uploaded" className={styles.uploadedImage} />
              </div>

              {colors.length > 0 && (
                <div className={styles.paletteOutput}>
                  {colors.map((c, i) => (
                    <button
                      key={i}
                      className={styles.colorSwatch}
                      style={{ backgroundColor: c.hex }}
                      onClick={() => copyHex(c.hex)}
                      title="Click to copy hex"
                    >
                      <span className={styles.swatchInfo}>
                        <span className={styles.swatchHex}>
                          {copied === c.hex ? 'Copied!' : c.hex}
                        </span>
                        <span className={styles.swatchRgb}>
                          rgb({c.r}, {c.g}, {c.b})
                        </span>
                        <span className={styles.swatchPercent}>{c.percent}%</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
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
