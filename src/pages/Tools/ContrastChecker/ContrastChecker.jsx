import { useState, useCallback, useMemo } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import Button from '../../../components/Button/Button';
import styles from './ContrastChecker.module.css';

// ── WCAG Contrast helpers ──────────────────────────────────────────────────

function hexToRgb(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  if (h.length !== 6 || !/^[0-9a-fA-F]{6}$/.test(h)) return null;
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map(x => Math.round(x).toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}

function linearize(c) {
  c = c / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function relativeLuminance(r, g, b) {
  const R = linearize(r);
  const G = linearize(g);
  const B = linearize(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrastRatio(lum1, lum2) {
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

function evaluateWcag(ratio) {
  return {
    aaNormal: ratio >= 4.5,
    aaLarge: ratio >= 3,
    aaaNormal: ratio >= 7,
    aaaLarge: ratio >= 4.5,
    uiComponent: ratio >= 3,
  };
}

function suggestAccessibleColor(fgRgb, bgRgb) {
  const [fgR, fgG, fgB] = fgRgb;
  const [bgR, bgG, bgB] = bgRgb;
  const bgLum = relativeLuminance(bgR, bgG, bgB);
  const target = 4.5;

  let step = 5;
  let best = null;
  let bestRatio = contrastRatio(relativeLuminance(fgR, fgG, fgB), bgLum);

  for (let iter = 0; iter < 20; iter++) {
    let improved = false;

    // Try lightening
    const lightFg = [
      Math.min(255, fgR + step),
      Math.min(255, fgG + step),
      Math.min(255, fgB + step),
    ];
    const lightRatio = contrastRatio(relativeLuminance(...lightFg), bgLum);
    if (lightRatio > bestRatio && lightRatio <= target) {
      bestRatio = lightRatio;
      best = lightFg;
      improved = true;
    }

    // Try darkening
    const darkFg = [
      Math.max(0, fgR - step),
      Math.max(0, fgG - step),
      Math.max(0, fgB - step),
    ];
    const darkRatio = contrastRatio(relativeLuminance(...darkFg), bgLum);
    if (darkRatio > bestRatio && darkRatio <= target) {
      bestRatio = darkRatio;
      best = darkFg;
      improved = true;
    }

    if (bestRatio >= target) break;
    if (!improved) break;
    step = Math.max(1, Math.floor(step / 2));
  }

  return best && bestRatio >= target ? { rgb: best, ratio: bestRatio } : null;
}

// ── Main component ────────────────────────────────────────────────────────

export default function ContrastChecker() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();

  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const fgRgb = useMemo(() => hexToRgb(fgColor) || [0, 0, 0], [fgColor]);
  const bgRgb = useMemo(() => hexToRgb(bgColor) || [255, 255, 255], [bgColor]);

  const luminances = useMemo(() => ({
    fg: relativeLuminance(...fgRgb),
    bg: relativeLuminance(...bgRgb),
  }), [fgRgb, bgRgb]);

  const ratio = useMemo(
    () => contrastRatio(luminances.fg, luminances.bg),
    [luminances]
  );

  const wcag = useMemo(() => evaluateWcag(ratio), [ratio]);
  const suggestion = useMemo(() => {
    if (wcag.aaNormal) return null;
    return suggestAccessibleColor(fgRgb, bgRgb);
  }, [wcag.aaNormal, fgRgb, bgRgb]);

  const handleFgColorChange = useCallback((newHex) => {
    if (/^#[0-9a-fA-F]{6}$/.test(newHex) || /^#[0-9a-fA-F]{3}$/.test(newHex)) {
      setFgColor(newHex.toUpperCase());
    }
  }, []);

  const handleBgColorChange = useCallback((newHex) => {
    if (/^#[0-9a-fA-F]{6}$/.test(newHex) || /^#[0-9a-fA-F]{3}$/.test(newHex)) {
      setBgColor(newHex.toUpperCase());
    }
  }, []);

  const handleSwap = () => {
    const tmp = fgColor;
    setFgColor(bgColor);
    setBgColor(tmp);
  };

  const applySuggestion = () => {
    if (suggestion) {
      setFgColor(rgbToHex(...suggestion.rgb));
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('contrastChecker.heading')}</h1>
        <p className={styles.subtitle}>{t('contrastChecker.subtitle')}</p>
      </div>

      <div className={styles.workspace}>
        {/* ── Controls ── */}
        <aside className={styles.controls}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Foreground</legend>
            <div className={styles.colorInputRow}>
              <input
                type="color"
                value={fgColor}
                onChange={e => setFgColor(e.target.value.toUpperCase())}
                className={styles.colorPicker}
              />
              <input
                type="text"
                value={fgColor}
                onChange={e => handleFgColorChange(e.target.value)}
                className={styles.hexInput}
                placeholder="#000000"
                maxLength="7"
              />
            </div>
            <div className={styles.rgbDisplay}>
              rgb({fgRgb.join(', ')})
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Background</legend>
            <div className={styles.colorInputRow}>
              <input
                type="color"
                value={bgColor}
                onChange={e => setBgColor(e.target.value.toUpperCase())}
                className={styles.colorPicker}
              />
              <input
                type="text"
                value={bgColor}
                onChange={e => handleBgColorChange(e.target.value)}
                className={styles.hexInput}
                placeholder="#FFFFFF"
                maxLength="7"
              />
            </div>
            <div className={styles.rgbDisplay}>
              rgb({bgRgb.join(', ')})
            </div>
          </fieldset>

          <button className={styles.swapButton} onClick={handleSwap} title="Swap foreground and background colors">
            ⇄ SWAP
          </button>
        </aside>

        {/* ── Main content ── */}
        <div className={styles.main}>
          {/* Contrast ratio display */}
          <div className={styles.ratioBox}>
            <div className={styles.ratioNumber}>
              {ratio.toFixed(2)} : 1
            </div>
            <p className={styles.ratioLabel}>Contrast Ratio</p>
          </div>

          {/* WCAG badges */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>WCAG Levels</legend>
            <div className={styles.badgeGrid}>
              <div className={`${styles.badge} ${wcag.aaNormal ? styles.badgePass : styles.badgeFail}`}>
                <span className={styles.badgeLabel}>AA Normal</span>
                <span className={styles.badgeValue}>{wcag.aaNormal ? 'PASS' : 'FAIL'}</span>
                <span className={styles.badgeTarget}>(≥4.5)</span>
              </div>
              <div className={`${styles.badge} ${wcag.aaLarge ? styles.badgePass : styles.badgeFail}`}>
                <span className={styles.badgeLabel}>AA Large</span>
                <span className={styles.badgeValue}>{wcag.aaLarge ? 'PASS' : 'FAIL'}</span>
                <span className={styles.badgeTarget}>(≥3)</span>
              </div>
              <div className={`${styles.badge} ${wcag.aaaNormal ? styles.badgePass : styles.badgeFail}`}>
                <span className={styles.badgeLabel}>AAA Normal</span>
                <span className={styles.badgeValue}>{wcag.aaaNormal ? 'PASS' : 'FAIL'}</span>
                <span className={styles.badgeTarget}>(≥7)</span>
              </div>
              <div className={`${styles.badge} ${wcag.aaaLarge ? styles.badgePass : styles.badgeFail}`}>
                <span className={styles.badgeLabel}>AAA Large</span>
                <span className={styles.badgeValue}>{wcag.aaaLarge ? 'PASS' : 'FAIL'}</span>
                <span className={styles.badgeTarget}>(≥4.5)</span>
              </div>
              <div className={`${styles.badge} ${wcag.uiComponent ? styles.badgePass : styles.badgeFail}`}>
                <span className={styles.badgeLabel}>UI Component</span>
                <span className={styles.badgeValue}>{wcag.uiComponent ? 'PASS' : 'FAIL'}</span>
                <span className={styles.badgeTarget}>(≥3)</span>
              </div>
            </div>
          </fieldset>

          {/* Sample panel */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Live Sample</legend>
            <div className={styles.sampleContainer} style={{ background: `rgb(${bgRgb.join(',')})` }}>
              <div className={styles.sampleItem}>
                <p className={styles.largeText} style={{ color: `rgb(${fgRgb.join(',')})` }}>
                  Large text (18px)
                </p>
                <span className={styles.smallLabel} style={{ color: `rgb(${fgRgb.join(',')})` }}>
                  Small text (12px)
                </span>
              </div>
              <button
                className={styles.sampleButton}
                style={{
                  background: `rgb(${fgRgb.join(',')})`,
                  color: `rgb(${bgRgb.join(',')})`,
                }}
              >
                Sample Button
              </button>
            </div>
          </fieldset>

          {/* Suggestion */}
          {!wcag.aaNormal && suggestion && (
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Suggested Foreground</legend>
              <div className={styles.suggestionBox}>
                <div className={styles.suggestionSwatch} style={{ background: `rgb(${suggestion.rgb.join(',')})` }} />
                <div className={styles.suggestionText}>
                  <p className={styles.suggestionHex}>{rgbToHex(...suggestion.rgb)}</p>
                  <p className={styles.suggestionRatio}>Ratio: {suggestion.ratio.toFixed(2)} : 1</p>
                </div>
                <button className={styles.applyButton} onClick={applySuggestion}>
                  APPLY
                </button>
              </div>
            </fieldset>
          )}
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button
          className={styles.backButton}
          onClick={() => startTransition(Routes.TOOLS)}
        >
          {t('contrastChecker.backTools')}
        </button>
      </div>
    </main>
  );
}
