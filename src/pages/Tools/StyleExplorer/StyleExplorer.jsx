import { useState, useRef, useCallback } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import styles from './StyleExplorer.module.css';

// ── Presets ──

const BASE = {
  bgColor: '#ffffff', gradientType: 'none', gradientFrom: '#ffffff', gradientTo: '#ffffff', gradientAngle: 135,
  borderWidth: 3, borderColor: '#000000', borderStyle: 'solid', borderRadius: 4,
  shadowX: 6, shadowY: 6, shadowBlur: 0, shadowSpread: 0, shadowColor: '#000000', shadowOpacity: 100,
  shadow2X: 0, shadow2Y: 0, shadow2Blur: 0, shadow2Spread: 0, shadow2Color: '#000000', shadow2Opacity: 0,
  fontSize: 18, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', textColor: '#1a1a1a',
  textShadowX: 0, textShadowY: 0, textShadowBlur: 0, textShadowColor: '#000000',
  accentColor: '#E91E63', backdropBlur: 0, backdropSaturate: 100,
};

const PRESETS = [
  { name: 'Pop Art', style: { ...BASE } },
  { name: 'Brutalist', style: { ...BASE, bgColor: '#f5f0eb', gradientFrom: '#f5f0eb', gradientTo: '#f5f0eb', borderWidth: 4, borderRadius: 0, shadowX: 8, shadowY: 8, fontSize: 22, fontWeight: 900, letterSpacing: 3, textColor: '#000000', accentColor: '#FF0000' } },
  { name: 'Glassmorphism', style: { ...BASE, bgColor: 'rgba(255,255,255,0.15)', gradientFrom: '#ffffff', gradientTo: '#ffffff', borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)', borderRadius: 16, shadowX: 0, shadowY: 8, shadowBlur: 32, shadowOpacity: 15, fontSize: 16, fontWeight: 500, letterSpacing: 0, textTransform: 'none', textColor: '#ffffff', textShadowY: 1, textShadowBlur: 2, accentColor: '#80DEEA', backdropBlur: 12, backdropSaturate: 150 } },
  { name: 'Neumorphism', style: { ...BASE, bgColor: '#e0e0e0', gradientFrom: '#e0e0e0', gradientTo: '#e0e0e0', borderWidth: 0, borderColor: '#e0e0e0', borderRadius: 20, shadowX: 8, shadowY: 8, shadowBlur: 16, shadowColor: '#bebebe', shadow2X: -8, shadow2Y: -8, shadow2Blur: 16, shadow2Color: '#ffffff', shadow2Opacity: 100, fontSize: 16, fontWeight: 600, letterSpacing: 0, textTransform: 'none', textColor: '#555555', textShadowX: 1, textShadowY: 1, textShadowBlur: 1, textShadowColor: '#ffffff', accentColor: '#6C63FF' } },
  { name: 'Material', style: { ...BASE, bgColor: '#ffffff', borderWidth: 0, borderColor: '#ffffff', borderRadius: 8, shadowX: 0, shadowY: 2, shadowBlur: 4, shadowSpread: -1, shadowOpacity: 20, shadow2X: 0, shadow2Y: 4, shadow2Blur: 16, shadow2Opacity: 10, shadow2Color: '#000000', fontSize: 16, fontWeight: 500, letterSpacing: 0.5, textTransform: 'none', textColor: '#212121', accentColor: '#2196F3' } },
  { name: 'Cyberpunk', style: { ...BASE, bgColor: '#0a0a0a', gradientType: 'linear', gradientFrom: '#0a0a0a', gradientTo: '#1a0a2e', borderWidth: 2, borderColor: '#FF00FF', borderRadius: 2, shadowX: 0, shadowY: 0, shadowBlur: 15, shadowSpread: 2, shadowColor: '#FF00FF', shadowOpacity: 50, shadow2Blur: 40, shadow2Spread: 5, shadow2Color: '#00FFFF', shadow2Opacity: 20, fontSize: 18, letterSpacing: 4, textColor: '#00FFFF', textShadowBlur: 10, textShadowColor: '#00FFFF', accentColor: '#FF00FF' } },
  { name: 'Cyberpunk 2077', overlay: 'cp2077', style: { ...BASE, bgColor: '#0a0a0a', gradientType: 'linear', gradientFrom: '#0a0a0a', gradientTo: '#111111', gradientAngle: 180, borderWidth: 2, borderColor: '#FCE300', borderRadius: 0, shadowX: 0, shadowY: 0, shadowBlur: 20, shadowSpread: 3, shadowColor: '#FCE300', shadowOpacity: 40, shadow2Blur: 60, shadow2Spread: 5, shadow2Color: '#FCE300', shadow2Opacity: 15, fontSize: 15, letterSpacing: 1, textColor: '#F0E8D0', textShadowBlur: 6, textShadowColor: '#FCE300', accentColor: '#FCE300' } },
  { name: 'Retro', style: { ...BASE, bgColor: '#FFF8E1', gradientFrom: '#FFF8E1', gradientTo: '#FFF8E1', borderColor: '#5D4037', borderRadius: 0, shadowX: 4, shadowY: 4, shadowColor: '#D84315', shadow2X: 8, shadow2Y: 8, shadow2Color: '#5D4037', shadow2Opacity: 100, fontSize: 20, fontWeight: 800, letterSpacing: 2, textColor: '#5D4037', textShadowX: 2, textShadowY: 2, textShadowColor: '#D84315', accentColor: '#D84315' } },
  { name: 'Minimal', style: { ...BASE, borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 12, shadowX: 0, shadowY: 1, shadowBlur: 3, shadowOpacity: 8, fontSize: 15, fontWeight: 400, letterSpacing: 0, textTransform: 'none', textColor: '#333333', accentColor: '#333333' } },
  { name: 'Vaporwave', style: { ...BASE, bgColor: '#1a0033', gradientType: 'linear', gradientFrom: '#1a0033', gradientTo: '#330066', gradientAngle: 180, borderWidth: 2, borderColor: '#FF6EC7', borderRadius: 0, shadowX: 5, shadowY: 5, shadowColor: '#00FFFF', shadowOpacity: 80, shadow2X: -5, shadow2Y: -5, shadow2Color: '#FF6EC7', shadow2Opacity: 80, letterSpacing: 6, textColor: '#FF6EC7', textShadowBlur: 15, textShadowColor: '#FF6EC7', accentColor: '#00FFFF' } },
  { name: 'Art Deco', overlay: 'artDeco', style: { ...BASE, bgColor: '#0a0a0a', gradientFrom: '#0a0a0a', gradientTo: '#0a0a0a', borderWidth: 1, borderColor: '#D4AF37', borderRadius: 0, shadowX: 0, shadowY: 4, shadowBlur: 16, shadowColor: '#D4AF37', shadowOpacity: 20, fontSize: 17, fontWeight: 600, letterSpacing: 2, textColor: '#E8DCC8', textShadowBlur: 0, accentColor: '#D4AF37' } },
  { name: 'Y2K', style: { ...BASE, bgColor: '#ffffff', gradientType: 'linear', gradientFrom: '#FFB6C1', gradientTo: '#87CEEB', gradientAngle: 135, borderWidth: 2, borderColor: '#FF69B4', borderRadius: 20, shadowX: 0, shadowY: 6, shadowBlur: 20, shadowColor: '#FF69B4', shadowOpacity: 30, shadow2X: 0, shadow2Y: 2, shadow2Blur: 8, shadow2Color: '#000000', shadow2Opacity: 8, fontSize: 16, fontWeight: 700, letterSpacing: 0, textTransform: 'none', textColor: '#ffffff', textShadowY: 1, textShadowBlur: 2, textShadowColor: '#FF69B4', accentColor: '#FF69B4' } },
  { name: 'Skeuomorphism', style: { ...BASE, bgColor: '#e8e8e8', gradientType: 'linear', gradientFrom: '#f0f0f0', gradientTo: '#d8d8d8', gradientAngle: 180, borderWidth: 1, borderColor: '#b0b0b0', borderRadius: 10, shadowX: 0, shadowY: 2, shadowBlur: 6, shadowColor: '#000000', shadowOpacity: 25, shadow2X: 0, shadow2Y: -1, shadow2Blur: 0, shadow2Color: '#ffffff', shadow2Opacity: 60, fontSize: 15, fontWeight: 500, letterSpacing: 0, textTransform: 'none', textColor: '#333333', accentColor: '#4A90D9' } },
  { name: 'Bauhaus', style: { ...BASE, bgColor: '#ffffff', borderWidth: 4, borderColor: '#000000', borderRadius: 0, shadowX: 6, shadowY: 6, shadowColor: '#000000', fontSize: 20, fontWeight: 900, letterSpacing: 2, textColor: '#000000', accentColor: '#E53935' } },
  { name: 'Synthwave', overlay: 'synthwave', style: { ...BASE, bgColor: '#1a0030', gradientType: 'linear', gradientFrom: '#1a0030', gradientTo: '#0d001a', gradientAngle: 180, borderWidth: 1, borderColor: '#FF2D95', borderRadius: 0, shadowX: 0, shadowY: 0, shadowBlur: 20, shadowSpread: 3, shadowColor: '#FF2D95', shadowOpacity: 50, shadow2Blur: 50, shadow2Spread: 8, shadow2Color: '#FF2D95', shadow2Opacity: 15, fontSize: 17, letterSpacing: 3, textColor: '#FFD4E8', textShadowBlur: 8, textShadowColor: '#FF2D95', accentColor: '#FF2D95' } },
];

// ── Helpers ──

function toRgba(hex, opacity) {
  if (hex.startsWith('rgba')) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${(opacity / 100).toFixed(2)})`;
}

function buildShadow(s) {
  const parts = [];
  if (s.shadowOpacity > 0) parts.push(`${s.shadowX}px ${s.shadowY}px ${s.shadowBlur}px ${s.shadowSpread}px ${toRgba(s.shadowColor, s.shadowOpacity)}`);
  if (s.shadow2Opacity > 0) parts.push(`${s.shadow2X}px ${s.shadow2Y}px ${s.shadow2Blur}px ${s.shadow2Spread}px ${toRgba(s.shadow2Color, s.shadow2Opacity)}`);
  return parts.join(', ') || 'none';
}

function buildBackground(s) {
  if (s.gradientType === 'linear') return `linear-gradient(${s.gradientAngle}deg, ${s.gradientFrom}, ${s.gradientTo})`;
  if (s.gradientType === 'radial') return `radial-gradient(circle, ${s.gradientFrom}, ${s.gradientTo})`;
  return s.bgColor;
}

function buildTextShadow(s) {
  if (s.textShadowX === 0 && s.textShadowY === 0 && s.textShadowBlur === 0) return 'none';
  return `${s.textShadowX}px ${s.textShadowY}px ${s.textShadowBlur}px ${s.textShadowColor}`;
}

function buildClipPath(points) {
  return `polygon(${points.map((p) => `${p.x.toFixed(1)}% ${p.y.toFixed(1)}%`).join(', ')})`;
}

function buildHoverCSS(h, s) {
  if (h.effect === 'none') return '';
  const lines = [`\ntransition: all ${h.duration}s ${h.easing};`];
  const hoverLines = [];
  if (h.effect === 'scale') hoverLines.push(`  transform: scale(${h.scale});`);
  if (h.effect === 'lift') hoverLines.push(`  transform: translateY(${h.liftY}px);`);
  if (h.effect === 'glow') hoverLines.push(`  box-shadow: ${buildShadow(s)}, 0 0 ${h.glowIntensity}px ${h.glowIntensity / 2}px ${s.accentColor};`);
  if (h.effect === 'shadowShift') hoverLines.push(`  box-shadow: ${s.shadowX + h.shiftX}px ${s.shadowY + h.shiftY}px ${s.shadowBlur}px ${s.shadowSpread}px ${toRgba(s.shadowColor, s.shadowOpacity)};`);
  if (hoverLines.length) lines.push(`\n/* hover */\n:hover {\n${hoverLines.join('\n')}\n}`);
  return lines.join('\n');
}

function generateCSS(s, clipEnabled, clipPoints, hover) {
  const lines = [];
  lines.push(`background: ${buildBackground(s)};`);
  if (s.borderWidth > 0) lines.push(`border: ${s.borderWidth}px ${s.borderStyle} ${s.borderColor};`);
  lines.push(`border-radius: ${s.borderRadius}px;`);
  const shadow = buildShadow(s);
  if (shadow !== 'none') lines.push(`box-shadow: ${shadow};`);
  if (s.backdropBlur > 0 || s.backdropSaturate !== 100) {
    lines.push(`backdrop-filter: blur(${s.backdropBlur}px) saturate(${s.backdropSaturate}%);`);
    lines.push(`-webkit-backdrop-filter: blur(${s.backdropBlur}px) saturate(${s.backdropSaturate}%);`);
  }
  if (clipEnabled && clipPoints.length >= 3) lines.push(`clip-path: ${buildClipPath(clipPoints)};`);
  lines.push(`font-size: ${s.fontSize}px;`);
  lines.push(`font-weight: ${s.fontWeight};`);
  if (s.letterSpacing) lines.push(`letter-spacing: ${s.letterSpacing}px;`);
  if (s.textTransform !== 'none') lines.push(`text-transform: ${s.textTransform};`);
  lines.push(`color: ${s.textColor};`);
  const ts = buildTextShadow(s);
  if (ts !== 'none') lines.push(`text-shadow: ${ts};`);
  lines.push(buildHoverCSS(hover, s));
  return lines.filter(Boolean).join('\n');
}

// ── Components ──

function Slider({ label, min, max, value, onChange, suffix = 'px', step = 1 }) {
  return (
    <label className={styles.sliderLabel}>
      <span className={styles.sliderName}>{label}</span>
      <div className={styles.sliderRow}>
        <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} className={styles.slider} />
        <span className={styles.sliderVal}>{value}{suffix}</span>
      </div>
    </label>
  );
}

function ClipPathEditor({ points, setPoints, enabled }) {
  const svgRef = useRef(null);
  const dragging = useRef(null);

  const handleMouseDown = useCallback((i) => (e) => {
    e.preventDefault();
    dragging.current = i;
    const handleMove = (ev) => {
      const svg = svgRef.current;
      if (!svg || dragging.current === null) return;
      const rect = svg.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((ev.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((ev.clientY - rect.top) / rect.height) * 100));
      setPoints((prev) => prev.map((p, j) => j === dragging.current ? { x, y } : p));
    };
    const handleUp = () => {
      dragging.current = null;
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
  }, [setPoints]);

  if (!enabled) return null;

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <svg ref={svgRef} className={styles.clipSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d={pathD} fill="rgba(255,255,255,0.05)" stroke="var(--color-primary)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="var(--color-primary)" stroke="#fff" strokeWidth="0.5" cursor="grab" onMouseDown={handleMouseDown(i)} />
      ))}
    </svg>
  );
}

// ── Main ──

const DEFAULT_CLIP = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }];
const DEFAULT_HOVER = { effect: 'none', scale: 1.05, liftY: -6, glowIntensity: 20, shiftX: 4, shiftY: 4, duration: 0.2, easing: 'ease' };

export default function StyleExplorer() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const [s, setS] = useState({ ...PRESETS[0].style });
  const [activePreset, setActivePreset] = useState('Pop Art');
  const [overlay, setOverlay] = useState(null);
  const [clipEnabled, setClipEnabled] = useState(false);
  const [clipPoints, setClipPoints] = useState(DEFAULT_CLIP.map((p) => ({ ...p })));
  const [hover, setHover] = useState({ ...DEFAULT_HOVER });
  const [isHovering, setIsHovering] = useState(false);

  const set = (key, val) => setS((prev) => ({ ...prev, [key]: val }));
  const setH = (key, val) => setHover((prev) => ({ ...prev, [key]: val }));

  const applyPreset = (preset) => {
    setS({ ...BASE, ...preset.style });
    setActivePreset(preset.name);
    setOverlay(preset.overlay || null);
  };

  const addClipPoint = () => {
    setClipPoints((prev) => {
      const last = prev[prev.length - 1];
      const first = prev[0];
      return [...prev, { x: (last.x + first.x) / 2, y: (last.y + first.y) / 2 }];
    });
  };

  const removeClipPoint = () => {
    if (clipPoints.length > 3) setClipPoints((prev) => prev.slice(0, -1));
  };

  const handleCopy = () => navigator.clipboard.writeText(generateCSS(s, clipEnabled, clipPoints, hover));

  const previewBg = s.gradientType === 'none' ? (s.bgColor.startsWith('rgba') ? '#2a2a3e' : undefined) : undefined;

  // Build hover inline style
  const hoverStyle = (() => {
    if (hover.effect === 'none' || !isHovering) return {};
    if (hover.effect === 'scale') return { transform: `scale(${hover.scale})` };
    if (hover.effect === 'lift') return { transform: `translateY(${hover.liftY}px)` };
    if (hover.effect === 'glow') return { boxShadow: `${buildShadow(s)}, 0 0 ${hover.glowIntensity}px ${hover.glowIntensity / 2}px ${s.accentColor}` };
    if (hover.effect === 'shadowShift') return { boxShadow: `${s.shadowX + hover.shiftX}px ${s.shadowY + hover.shiftY}px ${s.shadowBlur}px ${s.shadowSpread}px ${toRgba(s.shadowColor, s.shadowOpacity)}` };
    return {};
  })();

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('styleExplorer.heading')}</h1>
        <p className={styles.subtitle}>{t('styleExplorer.subtitle')}</p>
      </div>

      <div className={styles.presetSection}>
        <span className={styles.presetsLabel}>{t('styleExplorer.presets')}</span>
        <div className={styles.presetGrid}>
          {PRESETS.map((preset) => (
            <button key={preset.name} className={`${styles.presetBtn} ${activePreset === preset.name ? styles.presetBtnActive : ''}`} onClick={() => applyPreset(preset)}>
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.workspace}>
        <div className={styles.controls}>
          {/* Background */}
          <div className={styles.fieldset}>
            <span className={styles.legend}>{t('styleExplorer.background')}</span>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>{t('styleExplorer.type')}</span>
              <select className={styles.select} value={s.gradientType} onChange={(e) => set('gradientType', e.target.value)}>
                <option value="none">{t('styleExplorer.solid')}</option>
                <option value="linear">{t('styleExplorer.linearGradient')}</option>
                <option value="radial">{t('styleExplorer.radialGradient')}</option>
              </select>
            </label>
            {s.gradientType === 'none' ? (
              <label className={styles.sliderLabel}>
                <span className={styles.sliderName}>{t('styleExplorer.color')}</span>
                <input type="color" value={s.bgColor.startsWith('#') ? s.bgColor : '#ffffff'} onChange={(e) => set('bgColor', e.target.value)} className={styles.colorInput} />
              </label>
            ) : (
              <>
                <label className={styles.sliderLabel}><span className={styles.sliderName}>From</span><input type="color" value={s.gradientFrom} onChange={(e) => set('gradientFrom', e.target.value)} className={styles.colorInput} /></label>
                <label className={styles.sliderLabel}><span className={styles.sliderName}>To</span><input type="color" value={s.gradientTo} onChange={(e) => set('gradientTo', e.target.value)} className={styles.colorInput} /></label>
                {s.gradientType === 'linear' && <Slider label={t('styleExplorer.angle')} min={0} max={360} value={s.gradientAngle} onChange={(v) => set('gradientAngle', v)} suffix="deg" />}
              </>
            )}
          </div>

          {/* Backdrop Filter */}
          <div className={styles.fieldset}>
            <span className={styles.legend}>{t('styleExplorer.backdropFilter')}</span>
            <Slider label="Blur" min={0} max={20} value={s.backdropBlur} onChange={(v) => set('backdropBlur', v)} />
            <Slider label="Saturate" min={50} max={200} value={s.backdropSaturate} onChange={(v) => set('backdropSaturate', v)} suffix="%" />
          </div>

          {/* Border */}
          <div className={styles.fieldset}>
            <span className={styles.legend}>{t('styleExplorer.border')}</span>
            <Slider label={t('styleExplorer.width')} min={0} max={10} value={s.borderWidth} onChange={(v) => set('borderWidth', v)} />
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>{t('styleExplorer.style')}</span>
              <select className={styles.select} value={s.borderStyle} onChange={(e) => set('borderStyle', e.target.value)}>
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
              </select>
            </label>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>{t('styleExplorer.color')}</span>
              <input type="color" value={s.borderColor.startsWith('#') ? s.borderColor : '#000000'} onChange={(e) => set('borderColor', e.target.value)} className={styles.colorInput} />
            </label>
            <Slider label={t('styleExplorer.radius')} min={0} max={50} value={s.borderRadius} onChange={(v) => set('borderRadius', v)} />
          </div>

          {/* Shadow 1 */}
          <div className={styles.fieldset}>
            <span className={styles.legend}>{t('styleExplorer.shadow')} 1</span>
            <Slider label="X" min={-50} max={50} value={s.shadowX} onChange={(v) => set('shadowX', v)} />
            <Slider label="Y" min={-50} max={50} value={s.shadowY} onChange={(v) => set('shadowY', v)} />
            <Slider label="Blur" min={0} max={100} value={s.shadowBlur} onChange={(v) => set('shadowBlur', v)} />
            <Slider label="Spread" min={-50} max={50} value={s.shadowSpread} onChange={(v) => set('shadowSpread', v)} />
            <label className={styles.sliderLabel}><span className={styles.sliderName}>{t('styleExplorer.color')}</span><input type="color" value={s.shadowColor} onChange={(e) => set('shadowColor', e.target.value)} className={styles.colorInput} /></label>
            <Slider label={t('styleExplorer.opacity')} min={0} max={100} value={s.shadowOpacity} onChange={(v) => set('shadowOpacity', v)} suffix="%" />
          </div>

          {/* Shadow 2 */}
          <div className={styles.fieldset}>
            <span className={styles.legend}>{t('styleExplorer.shadow')} 2</span>
            <Slider label="X" min={-50} max={50} value={s.shadow2X} onChange={(v) => set('shadow2X', v)} />
            <Slider label="Y" min={-50} max={50} value={s.shadow2Y} onChange={(v) => set('shadow2Y', v)} />
            <Slider label="Blur" min={0} max={100} value={s.shadow2Blur} onChange={(v) => set('shadow2Blur', v)} />
            <Slider label="Spread" min={-50} max={50} value={s.shadow2Spread} onChange={(v) => set('shadow2Spread', v)} />
            <label className={styles.sliderLabel}><span className={styles.sliderName}>{t('styleExplorer.color')}</span><input type="color" value={s.shadow2Color} onChange={(e) => set('shadow2Color', e.target.value)} className={styles.colorInput} /></label>
            <Slider label={t('styleExplorer.opacity')} min={0} max={100} value={s.shadow2Opacity} onChange={(v) => set('shadow2Opacity', v)} suffix="%" />
          </div>

          {/* Typography */}
          <div className={styles.fieldset}>
            <span className={styles.legend}>{t('styleExplorer.typography')}</span>
            <Slider label={t('styleExplorer.fontSize')} min={10} max={36} value={s.fontSize} onChange={(v) => set('fontSize', v)} />
            <Slider label={t('styleExplorer.fontWeight')} min={100} max={900} value={s.fontWeight} onChange={(v) => set('fontWeight', v)} suffix="" step={100} />
            <Slider label={t('styleExplorer.letterSpacing')} min={0} max={10} value={s.letterSpacing} onChange={(v) => set('letterSpacing', v)} />
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>{t('styleExplorer.textTransform')}</span>
              <select className={styles.select} value={s.textTransform} onChange={(e) => set('textTransform', e.target.value)}>
                <option value="none">None</option><option value="uppercase">Uppercase</option><option value="lowercase">Lowercase</option><option value="capitalize">Capitalize</option>
              </select>
            </label>
            <label className={styles.sliderLabel}><span className={styles.sliderName}>{t('styleExplorer.textColor')}</span><input type="color" value={s.textColor} onChange={(e) => set('textColor', e.target.value)} className={styles.colorInput} /></label>
            <Slider label="Text Shadow X" min={-10} max={10} value={s.textShadowX} onChange={(v) => set('textShadowX', v)} />
            <Slider label="Text Shadow Y" min={-10} max={10} value={s.textShadowY} onChange={(v) => set('textShadowY', v)} />
            <Slider label="Text Shadow Blur" min={0} max={30} value={s.textShadowBlur} onChange={(v) => set('textShadowBlur', v)} />
            <label className={styles.sliderLabel}><span className={styles.sliderName}>Text Shadow Color</span><input type="color" value={s.textShadowColor} onChange={(e) => set('textShadowColor', e.target.value)} className={styles.colorInput} /></label>
          </div>

          {/* Clip Path */}
          <div className={styles.fieldset}>
            <span className={styles.legend}>{t('styleExplorer.clipPath')}</span>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" checked={clipEnabled} onChange={(e) => setClipEnabled(e.target.checked)} />
              {t('styleExplorer.enableClipPath')}
            </label>
            {clipEnabled && (
              <div className={styles.clipControls}>
                <button className={styles.smallBtn} onClick={addClipPoint}>+ {t('styleExplorer.addPoint')}</button>
                <button className={styles.smallBtn} onClick={removeClipPoint} disabled={clipPoints.length <= 3}>- {t('styleExplorer.removePoint')}</button>
                <button className={styles.smallBtn} onClick={() => setClipPoints(DEFAULT_CLIP.map((p) => ({ ...p })))}>{t('styleExplorer.reset')}</button>
                <div className={styles.pointsList}>
                  {clipPoints.map((p, i) => (
                    <span key={i} className={styles.pointLabel}>{i + 1}: {p.x.toFixed(0)}%, {p.y.toFixed(0)}%</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Hover Effect */}
          <div className={styles.fieldset}>
            <span className={styles.legend}>{t('styleExplorer.hoverEffect')}</span>
            <label className={styles.sliderLabel}>
              <span className={styles.sliderName}>{t('styleExplorer.effect')}</span>
              <select className={styles.select} value={hover.effect} onChange={(e) => setH('effect', e.target.value)}>
                <option value="none">None</option>
                <option value="scale">Scale</option>
                <option value="lift">Lift</option>
                <option value="glow">Glow</option>
                <option value="shadowShift">Shadow Shift</option>
              </select>
            </label>
            {hover.effect !== 'none' && (
              <>
                <Slider label={t('styleExplorer.duration')} min={0.1} max={0.6} step={0.05} value={hover.duration} onChange={(v) => setH('duration', v)} suffix="s" />
                <label className={styles.sliderLabel}>
                  <span className={styles.sliderName}>{t('styleExplorer.easing')}</span>
                  <select className={styles.select} value={hover.easing} onChange={(e) => setH('easing', e.target.value)}>
                    <option value="ease">Ease</option>
                    <option value="ease-in-out">Ease In-Out</option>
                    <option value="linear">Linear</option>
                    <option value="cubic-bezier(0.34,1.56,0.64,1)">Bounce</option>
                  </select>
                </label>
                {hover.effect === 'scale' && <Slider label="Scale" min={1.02} max={1.15} step={0.01} value={hover.scale} onChange={(v) => setH('scale', v)} suffix="x" />}
                {hover.effect === 'lift' && <Slider label="Lift Y" min={-10} max={-1} value={hover.liftY} onChange={(v) => setH('liftY', v)} />}
                {hover.effect === 'glow' && <Slider label="Intensity" min={5} max={50} value={hover.glowIntensity} onChange={(v) => setH('glowIntensity', v)} />}
                {hover.effect === 'shadowShift' && (
                  <>
                    <Slider label="Shift X" min={-10} max={10} value={hover.shiftX} onChange={(v) => setH('shiftX', v)} />
                    <Slider label="Shift Y" min={-10} max={10} value={hover.shiftY} onChange={(v) => setH('shiftY', v)} />
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* Preview + CSS */}
        <div className={styles.previewCol}>
          <div className={styles.previewArea} style={previewBg ? { background: previewBg } : undefined}>
            <div className={styles.previewCardWrapper}>
              <div
                className={styles.previewCard}
                style={{
                  background: buildBackground(s),
                  border: s.borderWidth > 0 ? `${s.borderWidth}px ${s.borderStyle} ${s.borderColor}` : 'none',
                  borderRadius: `${s.borderRadius}px`,
                  boxShadow: buildShadow(s),
                  backdropFilter: (s.backdropBlur > 0 || s.backdropSaturate !== 100) ? `blur(${s.backdropBlur}px) saturate(${s.backdropSaturate}%)` : undefined,
                  WebkitBackdropFilter: (s.backdropBlur > 0 || s.backdropSaturate !== 100) ? `blur(${s.backdropBlur}px) saturate(${s.backdropSaturate}%)` : undefined,
                  clipPath: clipEnabled ? buildClipPath(clipPoints) : undefined,
                  fontSize: `${s.fontSize}px`,
                  fontWeight: s.fontWeight,
                  letterSpacing: `${s.letterSpacing}px`,
                  textTransform: s.textTransform,
                  color: s.textColor,
                  textShadow: buildTextShadow(s),
                  transition: hover.effect !== 'none' ? `all ${hover.duration}s ${hover.easing}` : undefined,
                  ...hoverStyle,
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {overlay === 'cp2077' && <div className={styles.overlayCp2077} aria-hidden="true" />}
                {overlay === 'artDeco' && <div className={styles.overlayArtDeco} aria-hidden="true" />}
                {overlay === 'synthwave' && <div className={styles.overlaySynthwave} aria-hidden="true" />}
                <h3 className={styles.previewTitle} style={{ color: s.accentColor }}>{activePreset}</h3>
                <p className={styles.previewMuted}>A preview of the {activePreset} design style</p>
                <hr className={styles.previewDivider} style={{ borderColor: s.accentColor }} />
                <p>The quick brown fox jumps over the lazy dog. Here is a <a className={styles.previewLink} style={{ color: s.accentColor }} href="#" onClick={(e) => e.preventDefault()}>sample link</a> inline.</p>
                <ul className={styles.previewList}>
                  <li style={{ '--marker-color': s.accentColor }}>First list item</li>
                  <li style={{ '--marker-color': s.accentColor }}>Second list item</li>
                  <li style={{ '--marker-color': s.accentColor }}>Third list item</li>
                </ul>
                <div className={styles.previewActions}>
                  <button className={styles.previewButton} style={{ background: s.accentColor, borderColor: s.accentColor }}>Button</button>
                  <span className={styles.previewBadge} style={{ background: s.accentColor }}>Badge</span>
                </div>
                <input className={styles.previewInput} style={{ borderColor: s.accentColor }} placeholder="Input field..." readOnly />
              </div>
              <ClipPathEditor points={clipPoints} setPoints={setClipPoints} enabled={clipEnabled} />
            </div>
          </div>

          <div className={styles.cssOutput}>
            <div className={styles.cssHeader}>
              <span className={styles.cssLabel}>CSS</span>
              <button className={styles.copyBtn} onClick={handleCopy}>{t('styleExplorer.copy')}</button>
            </div>
            <pre className={styles.cssCode}>{generateCSS(s, clipEnabled, clipPoints, hover)}</pre>
          </div>
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          {t('styleExplorer.backTools')}
        </button>
      </div>
    </main>
  );
}
