import { useState, useRef, useEffect, useCallback } from 'react';
import QRCode from 'qrcode';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import { useI18n } from '../../../i18n/I18nContext';
import Button from '../../../components/Button/Button';
import styles from './QrCode.module.css';

// Quick example chips
const EXAMPLES = [
  { label: 'URL', value: 'https://example.com' },
  { label: 'Text', value: 'Hello, World!' },
  { label: 'WiFi', value: 'WIFI:T:WPA;S:MyNetwork;P:MyPassword;;' },
  { label: 'Email', value: 'mailto:hello@example.com' },
];

const ERROR_LEVELS = ['L', 'M', 'Q', 'H'];

export default function QrCode() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const [input, setInput] = useState('');
  const [errorLevel, setErrorLevel] = useState('M');
  const [size, setSize] = useState(200);
  const [margin, setMargin] = useState(2);
  const [darkColor, setDarkColor] = useState('#000000');
  const [lightColor, setLightColor] = useState('#ffffff');
  const [svgString, setSvgString] = useState('');
  const [pngDataUrl, setPngDataUrl] = useState('');
  const [error, setError] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const generationRef = useRef(0);

  // Generate QR code
  useEffect(() => {
    if (!input.trim()) {
      setSvgString('');
      setPngDataUrl('');
      setError('');
      return;
    }

    const generationId = ++generationRef.current;
    setIsGenerating(true);
    setError('');

    (async () => {
      try {
        // Generate SVG string
        const svg = await QRCode.toString(input, {
          type: 'svg',
          errorCorrectionLevel: errorLevel,
          margin,
          color: {
            dark: darkColor,
            light: lightColor,
          },
          width: size,
        });

        // Only update if this generation is still current
        if (generationId === generationRef.current) {
          setSvgString(svg);
          setError('');
        }

        // Generate PNG data URL for download
        const dataUrl = await QRCode.toDataURL(input, {
          errorCorrectionLevel: errorLevel,
          margin,
          color: {
            dark: darkColor,
            light: lightColor,
          },
          width: size,
        });

        if (generationId === generationRef.current) {
          setPngDataUrl(dataUrl);
        }
      } catch (err) {
        if (generationId === generationRef.current) {
          setError(err.message || 'Failed to generate QR code');
          setSvgString('');
          setPngDataUrl('');
        }
      } finally {
        if (generationId === generationRef.current) {
          setIsGenerating(false);
        }
      }
    })();
  }, [input, errorLevel, size, margin, darkColor, lightColor]);

  const downloadSvg = useCallback(() => {
    if (!svgString) return;
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.svg';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 100);
  }, [svgString]);

  const downloadPng = useCallback(() => {
    if (!pngDataUrl) return;
    const a = document.createElement('a');
    a.href = pngDataUrl;
    a.download = 'qrcode.png';
    a.click();
  }, [pngDataUrl]);

  const addExample = useCallback((example) => {
    setInput(example.value);
  }, []);

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('qrCode.heading')}</h1>
        <p className={styles.subtitle}>{t('qrCode.subtitle')}</p>
      </div>

      <div className={styles.workspace}>
        {/* ── Controls ── */}
        <aside className={styles.controls}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Input</legend>
            <textarea
              className={styles.textarea}
              placeholder="Enter text, URL, or data to encode..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            {EXAMPLES.length > 0 && (
              <div className={styles.examplesWrap}>
                <span className={styles.examplesLabel}>Quick examples:</span>
                <div className={styles.examples}>
                  {EXAMPLES.map((ex) => (
                    <button
                      key={ex.label}
                      className={styles.exampleChip}
                      onClick={() => addExample(ex)}
                      type="button"
                    >
                      {ex.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Error Correction</legend>
            <div className={styles.row}>
              <span className={styles.label}>Level</span>
              <select
                className={styles.select}
                value={errorLevel}
                onChange={e => setErrorLevel(e.target.value)}
              >
                {ERROR_LEVELS.map(level => (
                  <option key={level} value={level}>
                    {level} · {
                      level === 'L' ? '7%' :
                      level === 'M' ? '15%' :
                      level === 'Q' ? '25%' :
                      '30%'
                    }
                  </option>
                ))}
              </select>
            </div>
            <p className={styles.hint}>Higher levels tolerate more damage but increase code size.</p>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Size & Spacing</legend>
            <div className={styles.row}>
              <span className={styles.label}>Size</span>
              <span className={styles.value}>{size}px</span>
            </div>
            <div className={styles.sliderWrap}>
              <input
                type="range"
                min="100"
                max="500"
                value={size}
                onChange={e => setSize(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
            <div className={styles.row} style={{ marginTop: 12 }}>
              <span className={styles.label}>Margin</span>
              <span className={styles.value}>{margin}</span>
            </div>
            <div className={styles.sliderWrap}>
              <input
                type="range"
                min="0"
                max="10"
                value={margin}
                onChange={e => setMargin(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Colors</legend>
            <div className={styles.colorRow}>
              <span className={styles.label}>Dark</span>
              <input
                type="color"
                value={darkColor}
                onChange={e => setDarkColor(e.target.value)}
                className={styles.colorInput}
              />
            </div>
            <div className={styles.colorRow}>
              <span className={styles.label}>Light</span>
              <input
                type="color"
                value={lightColor}
                onChange={e => setLightColor(e.target.value)}
                className={styles.colorInput}
              />
            </div>
          </fieldset>

          {svgString && (
            <div className={styles.downloadGroup}>
              <button className={styles.downloadBtn} onClick={downloadSvg}>
                ↓ SVG
              </button>
              <button className={styles.downloadBtn} onClick={downloadPng}>
                ↓ PNG
              </button>
            </div>
          )}
        </aside>

        {/* ── Main area ── */}
        <div className={styles.main}>
          {error && (
            <div className={styles.errorBox}>
              <span className={styles.errorIcon}>⚠</span>
              <p className={styles.errorText}>{error}</p>
            </div>
          )}

          <div className={styles.previewBox}>
            {!input.trim() ? (
              <div className={styles.placeholder}>
                <p className={styles.placeholderText}>Enter text or select an example to generate a QR code</p>
              </div>
            ) : isGenerating ? (
              <div className={styles.loadingBox}>
                <span className={styles.spinner}>⟳</span>
                <p className={styles.loadingText}>Generating...</p>
              </div>
            ) : svgString ? (
              <div
                className={styles.svgPreview}
                dangerouslySetInnerHTML={{ __html: svgString }}
              />
            ) : null}
          </div>
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          {t('qrCode.backTools')}
        </button>
      </div>
    </main>
  );
}
