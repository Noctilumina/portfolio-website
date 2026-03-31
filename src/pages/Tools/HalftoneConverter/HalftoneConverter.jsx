import { useState, useRef, useCallback, useEffect } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import styles from './HalftoneConverter.module.css';

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function applyContrast(value, contrast) {
  return clamp(((value / 255 - 0.5) * contrast + 0.5) * 255, 0, 255);
}

function drawHalftone(ctx, imageData, imgWidth, imgHeight, options) {
  const {
    spacing,
    shape,
    contrast,
    angle,
    colorMode,
    singleColor,
    bgColor,
    canvasWidth,
    canvasHeight,
  } = options;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  const scaleX = imgWidth / canvasWidth;
  const scaleY = imgHeight / canvasHeight;
  const halfSpacing = spacing / 2;
  const maxRadius = halfSpacing * 0.95;
  const angleRad = (angle * Math.PI) / 180;

  ctx.save();
  ctx.translate(canvasWidth / 2, canvasHeight / 2);
  ctx.rotate(angleRad);
  ctx.translate(-canvasWidth / 2, -canvasHeight / 2);

  const diagonal = Math.sqrt(canvasWidth * canvasWidth + canvasHeight * canvasHeight);
  const startX = -(diagonal - canvasWidth) / 2;
  const startY = -(diagonal - canvasHeight) / 2;
  const endX = canvasWidth + (diagonal - canvasWidth) / 2;
  const endY = canvasHeight + (diagonal - canvasHeight) / 2;

  for (let y = startY; y < endY; y += spacing) {
    for (let x = startX; x < endX; x += spacing) {
      const cx = x + halfSpacing;
      const cy = y + halfSpacing;

      // Reverse-rotate to find source pixel
      const dx = cx - canvasWidth / 2;
      const dy = cy - canvasHeight / 2;
      const srcX = Math.round((dx * Math.cos(-angleRad) - dy * Math.sin(-angleRad) + canvasWidth / 2) * scaleX);
      const srcY = Math.round((dx * Math.sin(-angleRad) + dy * Math.cos(-angleRad) + canvasHeight / 2) * scaleY);

      if (srcX < 0 || srcX >= imgWidth || srcY < 0 || srcY >= imgHeight) continue;

      const idx = (srcY * imgWidth + srcX) * 4;
      let r = imageData[idx];
      let g = imageData[idx + 1];
      let b = imageData[idx + 2];

      r = applyContrast(r, contrast);
      g = applyContrast(g, contrast);
      b = applyContrast(b, contrast);

      const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
      const dotSize = (1 - brightness) * maxRadius;

      if (dotSize < 0.5) continue;

      if (colorMode === 'bw') {
        ctx.fillStyle = '#000000';
      } else if (colorMode === 'single') {
        ctx.fillStyle = singleColor;
      } else {
        ctx.fillStyle = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
      }

      if (shape === 'circle') {
        ctx.beginPath();
        ctx.arc(cx, cy, dotSize, 0, Math.PI * 2);
        ctx.fill();
      } else if (shape === 'square') {
        ctx.fillRect(cx - dotSize, cy - dotSize, dotSize * 2, dotSize * 2);
      } else if (shape === 'diamond') {
        ctx.beginPath();
        ctx.moveTo(cx, cy - dotSize);
        ctx.lineTo(cx + dotSize, cy);
        ctx.lineTo(cx, cy + dotSize);
        ctx.lineTo(cx - dotSize, cy);
        ctx.closePath();
        ctx.fill();
      }
    }
  }

  ctx.restore();
}

function generateHalftoneSVG(imageData, imgWidth, imgHeight, options) {
  const {
    spacing,
    shape,
    contrast,
    angle,
    colorMode,
    singleColor,
    bgColor,
    canvasWidth,
    canvasHeight,
  } = options;

  const scaleX = imgWidth / canvasWidth;
  const scaleY = imgHeight / canvasHeight;
  const halfSpacing = spacing / 2;
  const maxRadius = halfSpacing * 0.95;
  const angleRad = (angle * Math.PI) / 180;

  const elements = [];
  elements.push(`<rect x="0" y="0" width="${canvasWidth}" height="${canvasHeight}" fill="${bgColor}" />`);

  const diagonal = Math.sqrt(canvasWidth * canvasWidth + canvasHeight * canvasHeight);
  const startX = -(diagonal - canvasWidth) / 2;
  const startY = -(diagonal - canvasHeight) / 2;
  const endX = canvasWidth + (diagonal - canvasWidth) / 2;
  const endY = canvasHeight + (diagonal - canvasHeight) / 2;

  const dots = [];
  for (let y = startY; y < endY; y += spacing) {
    for (let x = startX; x < endX; x += spacing) {
      const cx = x + halfSpacing;
      const cy = y + halfSpacing;

      const dx = cx - canvasWidth / 2;
      const dy = cy - canvasHeight / 2;
      const srcX = Math.round((dx * Math.cos(-angleRad) - dy * Math.sin(-angleRad) + canvasWidth / 2) * scaleX);
      const srcY = Math.round((dx * Math.sin(-angleRad) + dy * Math.cos(-angleRad) + canvasHeight / 2) * scaleY);

      if (srcX < 0 || srcX >= imgWidth || srcY < 0 || srcY >= imgHeight) continue;

      const idx = (srcY * imgWidth + srcX) * 4;
      let r = imageData[idx];
      let g = imageData[idx + 1];
      let b = imageData[idx + 2];

      r = applyContrast(r, contrast);
      g = applyContrast(g, contrast);
      b = applyContrast(b, contrast);

      const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
      const dotSize = (1 - brightness) * maxRadius;

      if (dotSize < 0.5) continue;

      let fill;
      if (colorMode === 'bw') {
        fill = '#000000';
      } else if (colorMode === 'single') {
        fill = singleColor;
      } else {
        fill = `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
      }

      dots.push({ cx, cy, dotSize, fill });
    }
  }

  const groupOpen = angle !== 0
    ? `<g transform="rotate(${angle}, ${canvasWidth / 2}, ${canvasHeight / 2})">`
    : '<g>';

  for (const dot of dots) {
    if (shape === 'circle') {
      elements.push(`${groupOpen ? '' : ''}<circle cx="${dot.cx.toFixed(2)}" cy="${dot.cy.toFixed(2)}" r="${dot.dotSize.toFixed(2)}" fill="${dot.fill}" />`);
    } else if (shape === 'square') {
      const s = dot.dotSize * 2;
      elements.push(`<rect x="${(dot.cx - dot.dotSize).toFixed(2)}" y="${(dot.cy - dot.dotSize).toFixed(2)}" width="${s.toFixed(2)}" height="${s.toFixed(2)}" fill="${dot.fill}" />`);
    } else if (shape === 'diamond') {
      const points = `${dot.cx.toFixed(2)},${(dot.cy - dot.dotSize).toFixed(2)} ${(dot.cx + dot.dotSize).toFixed(2)},${dot.cy.toFixed(2)} ${dot.cx.toFixed(2)},${(dot.cy + dot.dotSize).toFixed(2)} ${(dot.cx - dot.dotSize).toFixed(2)},${dot.cy.toFixed(2)}`;
      elements.push(`<polygon points="${points}" fill="${dot.fill}" />`);
    }
  }

  const dotsContent = elements.slice(1).join('\n    ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${canvasWidth} ${canvasHeight}" width="${canvasWidth}" height="${canvasHeight}">
  ${elements[0]}
  ${angle !== 0 ? `<g transform="rotate(${angle}, ${canvasWidth / 2}, ${canvasHeight / 2})">` : '<g>'}
    ${dotsContent}
  </g>
</svg>`;

  return svg;
}

export default function HalftoneConverter() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();

  const canvasRef = useRef(null);
  const hiddenCanvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const imageDataRef = useRef(null);
  const imgDimensionsRef = useRef({ width: 0, height: 0 });

  const [hasImage, setHasImage] = useState(false);
  const [fileName, setFileName] = useState('');
  const [dragActive, setDragActive] = useState(false);

  // Controls
  const [spacing, setSpacing] = useState(8);
  const [shape, setShape] = useState('circle');
  const [contrast, setContrast] = useState(1.0);
  const [angle, setAngle] = useState(0);
  const [colorMode, setColorMode] = useState('bw');
  const [singleColor, setSingleColor] = useState('#E91E63');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const renderHalftone = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageDataRef.current) return;

    const ctx = canvas.getContext('2d');
    const { width: imgW, height: imgH } = imgDimensionsRef.current;

    drawHalftone(ctx, imageDataRef.current, imgW, imgH, {
      spacing,
      shape,
      contrast,
      angle,
      colorMode,
      singleColor,
      bgColor,
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
    });
  }, [spacing, shape, contrast, angle, colorMode, singleColor, bgColor]);

  useEffect(() => {
    if (hasImage) {
      renderHalftone();
    }
  }, [hasImage, renderHalftone]);

  const SUPPORTED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif', 'image/bmp'];

  const loadImage = useCallback((file) => {
    if (!file) return;
    if (!SUPPORTED_TYPES.includes(file.type)) {
      setError(`Unsupported format: ${file.type.split('/')[1] || 'unknown'}. Use PNG, JPG, WebP, or GIF.`);
      return;
    }
    setError(null);
    setLoading(true);
    setFileName(file.name);
    setHasImage(false);

    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const hiddenCanvas = hiddenCanvasRef.current;
      const displayCanvas = canvasRef.current;
      if (!hiddenCanvas || !displayCanvas) {
        setError('Canvas not ready. Try again.');
        setLoading(false);
        URL.revokeObjectURL(url);
        return;
      }

      hiddenCanvas.width = img.width;
      hiddenCanvas.height = img.height;
      const hCtx = hiddenCanvas.getContext('2d');
      hCtx.drawImage(img, 0, 0);

      try {
        const data = hCtx.getImageData(0, 0, img.width, img.height);
        imageDataRef.current = data.data;
        imgDimensionsRef.current = { width: img.width, height: img.height };

        const maxW = 800;
        const scale = img.width > maxW ? maxW / img.width : 1;
        displayCanvas.width = Math.round(img.width * scale);
        displayCanvas.height = Math.round(img.height * scale);

        setHasImage(true);
        setLoading(false);
      } catch (err) {
        setError('Failed to read image data. The file may be corrupted.');
        setLoading(false);
      }
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      setError('Failed to load image. The file may be corrupted or unsupported.');
      setLoading(false);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    loadImage(file);
  }, [loadImage]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragActive(false);
  }, []);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    loadImage(file);
  }, [loadImage]);

  const exportPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'halftone.png';
    a.click();
  };

  const exportSVG = () => {
    if (!imageDataRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { width: imgW, height: imgH } = imgDimensionsRef.current;
    const svg = generateHalftoneSVG(imageDataRef.current, imgW, imgH, {
      spacing,
      shape,
      contrast,
      angle,
      colorMode,
      singleColor,
      bgColor,
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
    });

    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'halftone.svg';
    a.click();
    URL.revokeObjectURL(url);
  };

  const printHalftone = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<!DOCTYPE html><html><head><title>Halftone</title><style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;}img{max-width:100%;max-height:100vh;}@page{margin:1cm;}</style></head><body><img src="${dataUrl}" /></body></html>`);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 300);
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Halftone Converter</h1>
        <p className={styles.subtitle}>Upload an image and convert it into a halftone pattern. Adjust dot spacing, shape, and colors, then export as SVG or PNG.</p>
      </div>

      <div className={styles.workspace}>
        {/* Controls */}
        <aside className={styles.controls}>
          {/* Upload */}
          <div
            className={`${styles.dropZone} ${dragActive ? styles.dropZoneActive : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
          >
            {loading ? (
              <div className={styles.dropText}>Loading...</div>
            ) : (
              <>
                <div className={styles.dropText}>Drop image here</div>
                <div className={styles.dropHint}>or click to browse</div>
                <div className={styles.dropFormats}>Supports: PNG, JPG, WebP, GIF</div>
              </>
            )}
            {fileName && !loading && <div className={styles.fileName}>{fileName}</div>}
            {error && <div className={styles.dropError}>{error}</div>}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif,image/bmp"
              className={styles.fileInput}
              onChange={handleFileChange}
            />
          </div>

          {/* Dot Settings */}
          <div className={styles.fieldset}>
            <span className={styles.legend}>Dots</span>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Spacing</span>
              <div className={styles.sliderRow}>
                <input type="range" min={4} max={20} value={spacing} onChange={(e) => setSpacing(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{spacing}px</span>
              </div>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Shape</span>
              <select value={shape} onChange={(e) => setShape(e.target.value)} className={styles.select}>
                <option value="circle">Circle</option>
                <option value="square">Square</option>
                <option value="diamond">Diamond</option>
              </select>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Contrast</span>
              <div className={styles.sliderRow}>
                <input type="range" min={50} max={200} value={Math.round(contrast * 100)} onChange={(e) => setContrast(+e.target.value / 100)} className={styles.slider} />
                <span className={styles.sliderVal}>{contrast.toFixed(1)}</span>
              </div>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Angle</span>
              <div className={styles.sliderRow}>
                <input type="range" min={0} max={180} value={angle} onChange={(e) => setAngle(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{angle}&deg;</span>
              </div>
            </label>
          </div>

          {/* Color Settings */}
          <div className={styles.fieldset}>
            <span className={styles.legend}>Color</span>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Mode</span>
              <select value={colorMode} onChange={(e) => setColorMode(e.target.value)} className={styles.select}>
                <option value="bw">Black &amp; White</option>
                <option value="single">Single Color</option>
                <option value="original">Original Colors</option>
              </select>
            </label>
            {colorMode === 'single' && (
              <div className={styles.colorRow}>
                <span className={styles.colorLabel}>Dot color</span>
                <input type="color" value={singleColor} onChange={(e) => setSingleColor(e.target.value)} className={styles.colorInput} />
              </div>
            )}
            <div className={styles.colorRow}>
              <span className={styles.colorLabel}>Background</span>
              <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className={styles.colorInput} />
            </div>
          </div>

          {/* Export */}
          <div className={styles.exportBtns}>
            <button className={styles.exportBtn} onClick={exportSVG} disabled={!hasImage}>SVG</button>
            <button className={styles.exportBtn} onClick={exportPNG} disabled={!hasImage}>PNG</button>
            <button className={styles.exportBtn} onClick={printHalftone} disabled={!hasImage}>Print</button>
          </div>
        </aside>

        {/* Preview */}
        <div className={styles.preview}>
          <canvas ref={canvasRef} className={styles.canvas} style={!hasImage ? { display: 'none' } : undefined} />
          {!hasImage && !loading && <span className={styles.previewPlaceholder}>Upload an image to begin</span>}
          {loading && <span className={styles.previewPlaceholder}>Processing...</span>}
        </div>
      </div>

      <canvas ref={hiddenCanvasRef} className={styles.hiddenCanvas} />

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          {t('tools.backHome')}
        </button>
      </div>
    </main>
  );
}
