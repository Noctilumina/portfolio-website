import { useState, useRef, useCallback } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import styles from './AsciiArt.module.css';

const CHARACTER_SETS = {
  standard: ' .:-=+*#%@',
  blocks: ' \u2591\u2592\u2593\u2588',
  detailed: " .',:;!|\\/)({}<>[]?-_+~i!lI;:,\"^`.",
  custom: '',
};

function imageToAscii(imageData, width, charRamp, contrast, invert) {
  const { data, width: imgW, height: imgH } = imageData;
  const blockW = imgW / width;
  const blockH = blockW * 2;
  const rows = Math.floor(imgH / blockH);
  const rampLen = charRamp.length;

  if (rampLen === 0) return '';

  const lines = [];

  for (let row = 0; row < rows; row++) {
    let line = '';
    for (let col = 0; col < width; col++) {
      const startX = Math.floor(col * blockW);
      const startY = Math.floor(row * blockH);
      const endX = Math.min(Math.floor((col + 1) * blockW), imgW);
      const endY = Math.min(Math.floor((row + 1) * blockH), imgH);

      let sum = 0;
      let count = 0;

      for (let y = startY; y < endY; y++) {
        for (let x = startX; x < endX; x++) {
          const idx = (y * imgW + x) * 4;
          const gray = 0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2];
          sum += gray;
          count++;
        }
      }

      let brightness = count > 0 ? sum / count / 255 : 0;

      // Apply contrast
      brightness = ((brightness - 0.5) * contrast) + 0.5;
      brightness = Math.max(0, Math.min(1, brightness));

      if (invert) brightness = 1 - brightness;

      const charIndex = Math.min(Math.floor(brightness * rampLen), rampLen - 1);
      line += charRamp[charIndex];
    }
    lines.push(line);
  }

  return lines.join('\n');
}

export default function AsciiArt() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const [imageSrc, setImageSrc] = useState(null);
  const [asciiOutput, setAsciiOutput] = useState('');
  const [outputWidth, setOutputWidth] = useState(80);
  const [contrast, setContrast] = useState(1.0);
  const [invertVal, setInvertVal] = useState(false);
  const [fontSize, setFontSize] = useState(12);
  const [charSetKey, setCharSetKey] = useState('standard');
  const [customRamp, setCustomRamp] = useState(' .:-=+*#%@');
  const [dragOver, setDragOver] = useState(false);
  const [copied, setCopied] = useState(false);

  const imageDataRef = useRef(null);

  const getCurrentRamp = useCallback(() => {
    return charSetKey === 'custom' ? customRamp : CHARACTER_SETS[charSetKey];
  }, [charSetKey, customRamp]);

  const generate = useCallback(() => {
    if (!imageDataRef.current) return;
    const ramp = charSetKey === 'custom' ? customRamp : CHARACTER_SETS[charSetKey];
    const result = imageToAscii(imageDataRef.current, outputWidth, ramp, contrast, invertVal);
    setAsciiOutput(result);
  }, [outputWidth, contrast, invertVal, charSetKey, customRamp]);

  const processImage = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target.result;
      setImageSrc(src);
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        const maxDim = 800;
        const scale = Math.min(maxDim / img.width, maxDim / img.height, 1);
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        imageDataRef.current = data;
        const ramp = charSetKey === 'custom' ? customRamp : CHARACTER_SETS[charSetKey];
        setAsciiOutput(imageToAscii(data, outputWidth, ramp, contrast, invertVal));
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  }, [outputWidth, contrast, invertVal, charSetKey, customRamp]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    processImage(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const handleFileChange = (e) => {
    processImage(e.target.files[0]);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(asciiOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const downloadTxt = () => {
    const blob = new Blob([asciiOutput], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ascii-art.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>ASCII Art Generator</h1>
        <p className={styles.subtitle}>Convert any image into ASCII art. Adjust characters, width, and contrast for the perfect result.</p>
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
            <span className={styles.legend}>Character Set</span>
            <label className={styles.selectLabel}>
              <select
                value={charSetKey}
                onChange={(e) => setCharSetKey(e.target.value)}
                className={styles.select}
              >
                <option value="standard">Standard</option>
                <option value="blocks">Blocks</option>
                <option value="detailed">Detailed</option>
                <option value="custom">Custom</option>
              </select>
            </label>
            {charSetKey === 'custom' && (
              <label className={styles.customRampLabel}>
                <span className={styles.sliderName}>Custom ramp (dark to light)</span>
                <input
                  type="text"
                  value={customRamp}
                  onChange={(e) => setCustomRamp(e.target.value)}
                  className={styles.textInput}
                  placeholder=" .:-=+*#%@"
                />
              </label>
            )}
          </div>

          <div className={styles.fieldset}>
            <span className={styles.legend}>Settings</span>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Output width</span>
              <div className={styles.sliderRow}>
                <input type="range" min={20} max={200} value={outputWidth} onChange={(e) => setOutputWidth(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{outputWidth}</span>
              </div>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Contrast</span>
              <div className={styles.sliderRow}>
                <input type="range" min={50} max={200} value={Math.round(contrast * 100)} onChange={(e) => setContrast(+e.target.value / 100)} className={styles.slider} />
                <span className={styles.sliderVal}>{contrast.toFixed(1)}</span>
              </div>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>Font size</span>
              <div className={styles.sliderRow}>
                <input type="range" min={8} max={20} value={fontSize} onChange={(e) => setFontSize(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{fontSize}px</span>
              </div>
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" checked={invertVal} onChange={(e) => setInvertVal(e.target.checked)} className={styles.checkbox} />
              <span className={styles.sliderName}>Invert</span>
            </label>
          </div>

          <button className={styles.generateBtn} onClick={generate} disabled={!imageSrc}>
            Generate
          </button>

          <div className={styles.exportBtns}>
            <button className={styles.exportBtn} onClick={copyToClipboard} disabled={!asciiOutput}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button className={styles.exportBtn} onClick={downloadTxt} disabled={!asciiOutput}>
              Download .txt
            </button>
          </div>
        </aside>

        {/* Preview */}
        <div className={styles.preview}>
          <canvas ref={canvasRef} className={styles.hiddenCanvas} />

          {!asciiOutput && (
            <div className={styles.emptyState}>Upload an image to generate ASCII art</div>
          )}

          {asciiOutput && (
            <div className={styles.terminalWrapper}>
              <div className={styles.terminalBar}>
                <span className={styles.terminalDot} />
                <span className={styles.terminalDot} />
                <span className={styles.terminalDot} />
                <span className={styles.terminalTitle}>ascii-art.txt</span>
              </div>
              <pre
                className={styles.terminal}
                style={{ fontSize: `${fontSize}px` }}
              >{asciiOutput}</pre>
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
