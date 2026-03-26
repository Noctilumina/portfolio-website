import { useState } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import styles from './ShadowGenerator.module.css';

const PRESETS = [
  {
    name: 'Pop Art',
    layers: [{ x: 6, y: 6, blur: 0, spread: 0, color: '#000000', opacity: 100, inset: false }],
  },
  {
    name: 'Soft Lift',
    layers: [
      { x: 0, y: 4, blur: 6, spread: -1, color: '#000000', opacity: 20, inset: false },
      { x: 0, y: 2, blur: 4, spread: -2, color: '#000000', opacity: 12, inset: false },
    ],
  },
  {
    name: 'Material',
    layers: [
      { x: 0, y: 3, blur: 6, spread: 0, color: '#000000', opacity: 16, inset: false },
      { x: 0, y: 6, blur: 20, spread: 0, color: '#000000', opacity: 12, inset: false },
    ],
  },
  {
    name: 'Neon Glow',
    layers: [
      { x: 0, y: 0, blur: 10, spread: 2, color: '#E91E63', opacity: 60, inset: false },
      { x: 0, y: 0, blur: 40, spread: 8, color: '#E91E63', opacity: 30, inset: false },
    ],
  },
  {
    name: 'Retro Layered',
    layers: [
      { x: 4, y: 4, blur: 0, spread: 0, color: '#E91E63', opacity: 100, inset: false },
      { x: 8, y: 8, blur: 0, spread: 0, color: '#9C27B0', opacity: 100, inset: false },
    ],
  },
  {
    name: 'Inner Glow',
    layers: [
      { x: 0, y: 0, blur: 20, spread: 5, color: '#E91E63', opacity: 40, inset: true },
    ],
  },
  {
    name: 'Long Shadow',
    layers: [
      { x: 1, y: 1, blur: 0, spread: 0, color: '#000000', opacity: 15, inset: false },
      { x: 2, y: 2, blur: 0, spread: 0, color: '#000000', opacity: 15, inset: false },
      { x: 4, y: 4, blur: 0, spread: 0, color: '#000000', opacity: 15, inset: false },
      { x: 8, y: 8, blur: 0, spread: 0, color: '#000000', opacity: 15, inset: false },
    ],
  },
  {
    name: 'Neumorphism',
    layers: [
      { x: 6, y: 6, blur: 12, spread: 0, color: '#000000', opacity: 15, inset: false },
      { x: -6, y: -6, blur: 12, spread: 0, color: '#ffffff', opacity: 15, inset: false },
    ],
  },
  {
    name: 'Sharp Double',
    layers: [
      { x: 5, y: 5, blur: 0, spread: 0, color: '#000000', opacity: 100, inset: false },
      { x: -5, y: -5, blur: 0, spread: 0, color: '#E91E63', opacity: 100, inset: false },
    ],
  },
  {
    name: 'Dreamy',
    layers: [
      { x: 0, y: 8, blur: 32, spread: 0, color: '#9C27B0', opacity: 25, inset: false },
      { x: 0, y: 4, blur: 16, spread: 0, color: '#E91E63', opacity: 20, inset: false },
    ],
  },
];

const DEFAULT_LAYER = { x: 4, y: 4, blur: 0, spread: 0, color: '#000000', opacity: 100, inset: false };

function layerToCSS(l) {
  const hex = l.color;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const a = (l.opacity / 100).toFixed(2);
  return `${l.inset ? 'inset ' : ''}${l.x}px ${l.y}px ${l.blur}px ${l.spread}px rgba(${r}, ${g}, ${b}, ${a})`;
}

function layersToCSS(layers) {
  return layers.map(layerToCSS).join(',\n    ');
}

export default function ShadowGenerator() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const [layers, setLayers] = useState(PRESETS[0].layers.map((l) => ({ ...l })));
  const [boxColor, setBoxColor] = useState('#ffffff');
  const [bgColor, setBgColor] = useState('#f5f0eb');
  const [borderRadius, setBorderRadius] = useState(4);

  const updateLayer = (i, key, value) => {
    setLayers((prev) => prev.map((l, j) => j === i ? { ...l, [key]: value } : l));
  };

  const addLayer = () => setLayers((prev) => [...prev, { ...DEFAULT_LAYER }]);
  const removeLayer = (i) => setLayers((prev) => prev.filter((_, j) => j !== i));

  const applyPreset = (preset) => {
    setLayers(preset.layers.map((l) => ({ ...l })));
  };

  const cssValue = `box-shadow: ${layersToCSS(layers)};`;

  const handleCopy = () => navigator.clipboard.writeText(cssValue);

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('shadowGen.heading')}</h1>
        <p className={styles.subtitle}>{t('shadowGen.subtitle')}</p>
      </div>

      {/* Presets */}
      <div className={styles.presets}>
        <span className={styles.presetsLabel}>{t('shadowGen.presets')}</span>
        <div className={styles.presetGrid}>
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              className={styles.presetBtn}
              onClick={() => applyPreset(preset)}
            >
              <div
                className={styles.presetPreview}
                style={{ boxShadow: preset.layers.map(layerToCSS).join(', ') }}
              />
              <span className={styles.presetName}>{preset.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.workspace}>
        {/* Controls */}
        <div className={styles.controls}>
          {/* Box settings */}
          <div className={styles.fieldset}>
            <span className={styles.legend}>{t('shadowGen.boxSettings')}</span>
            <label className={styles.sliderLabel}>
              {t('shadowGen.bgColor')}
              <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className={styles.colorInput} />
            </label>
            <label className={styles.sliderLabel}>
              {t('shadowGen.boxColor')}
              <input type="color" value={boxColor} onChange={(e) => setBoxColor(e.target.value)} className={styles.colorInput} />
            </label>
            <label className={styles.sliderLabel}>
              {t('shadowGen.borderRadius')}
              <div className={styles.sliderRow}>
                <input type="range" min="0" max="50" value={borderRadius} onChange={(e) => setBorderRadius(+e.target.value)} className={styles.slider} />
                <span className={styles.sliderVal}>{borderRadius}px</span>
              </div>
            </label>
          </div>

          {/* Shadow layers */}
          {layers.map((layer, i) => (
            <div key={i} className={styles.fieldset}>
              <div className={styles.legendRow}>
                <span className={styles.legend}>{t('shadowGen.layer')} {i + 1}</span>
                {layers.length > 1 && (
                  <button className={styles.removeBtn} onClick={() => removeLayer(i)}>x</button>
                )}
              </div>
              <label className={styles.sliderLabel}>
                <span className={styles.insetRow}>
                  <input type="checkbox" checked={layer.inset} onChange={(e) => updateLayer(i, 'inset', e.target.checked)} />
                  Inset
                </span>
              </label>
              <label className={styles.sliderLabel}>
                X
                <div className={styles.sliderRow}>
                  <input type="range" min="-50" max="50" value={layer.x} onChange={(e) => updateLayer(i, 'x', +e.target.value)} className={styles.slider} />
                  <span className={styles.sliderVal}>{layer.x}px</span>
                </div>
              </label>
              <label className={styles.sliderLabel}>
                Y
                <div className={styles.sliderRow}>
                  <input type="range" min="-50" max="50" value={layer.y} onChange={(e) => updateLayer(i, 'y', +e.target.value)} className={styles.slider} />
                  <span className={styles.sliderVal}>{layer.y}px</span>
                </div>
              </label>
              <label className={styles.sliderLabel}>
                Blur
                <div className={styles.sliderRow}>
                  <input type="range" min="0" max="100" value={layer.blur} onChange={(e) => updateLayer(i, 'blur', +e.target.value)} className={styles.slider} />
                  <span className={styles.sliderVal}>{layer.blur}px</span>
                </div>
              </label>
              <label className={styles.sliderLabel}>
                Spread
                <div className={styles.sliderRow}>
                  <input type="range" min="-50" max="50" value={layer.spread} onChange={(e) => updateLayer(i, 'spread', +e.target.value)} className={styles.slider} />
                  <span className={styles.sliderVal}>{layer.spread}px</span>
                </div>
              </label>
              <label className={styles.sliderLabel}>
                {t('shadowGen.color')}
                <input type="color" value={layer.color} onChange={(e) => updateLayer(i, 'color', e.target.value)} className={styles.colorInput} />
              </label>
              <label className={styles.sliderLabel}>
                {t('shadowGen.opacity')}
                <div className={styles.sliderRow}>
                  <input type="range" min="0" max="100" value={layer.opacity} onChange={(e) => updateLayer(i, 'opacity', +e.target.value)} className={styles.slider} />
                  <span className={styles.sliderVal}>{layer.opacity}%</span>
                </div>
              </label>
            </div>
          ))}
          <button className={styles.addBtn} onClick={addLayer}>+ {t('shadowGen.addLayer')}</button>
        </div>

        {/* Preview + CSS output */}
        <div className={styles.previewCol}>
          <div className={styles.previewArea} style={{ background: bgColor }}>
            <div
              className={styles.previewBox}
              style={{
                background: boxColor,
                borderRadius: `${borderRadius}px`,
                boxShadow: layers.map(layerToCSS).join(', '),
              }}
            />
          </div>
          <div className={styles.cssOutput}>
            <div className={styles.cssHeader}>
              <span className={styles.cssLabel}>CSS</span>
              <button className={styles.copyBtn} onClick={handleCopy}>{t('shadowGen.copy')}</button>
            </div>
            <pre className={styles.cssCode}>{cssValue}</pre>
          </div>
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition('/tools')}>
          {t('shadowGen.backTools')}
        </button>
      </div>
    </main>
  );
}
