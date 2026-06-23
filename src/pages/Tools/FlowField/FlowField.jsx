import { useState, useRef, useCallback, useEffect } from 'react';
import { usePageTransition } from '../../../App';
import { useI18n } from '../../../i18n/I18nContext';
import { Routes } from '../../../constants/routes';
import styles from './FlowField.module.css';

// ── Seeded hash-based noise (Simplex-like) ──────────────────────────────────

function seededHash(x, y, seed = 0) {
  const n = Math.sin(x * 12.9898 + y * 78.233 + seed) * 43758.5453;
  return n - Math.floor(n);
}

function perlin2d(x, y, scale = 1, seed = 0) {
  const xs = x / scale;
  const ys = y / scale;
  const xi = Math.floor(xs);
  const yi = Math.floor(ys);
  const xf = xs - xi;
  const yf = ys - yi;

  const u = xf * xf * (3 - 2 * xf); // smooth step
  const v = yf * yf * (3 - 2 * yf);

  const n00 = seededHash(xi, yi, seed);
  const n10 = seededHash(xi + 1, yi, seed);
  const n01 = seededHash(xi, yi + 1, seed);
  const n11 = seededHash(xi + 1, yi + 1, seed);

  const nx0 = n00 * (1 - u) + n10 * u;
  const nx1 = n01 * (1 - u) + n11 * u;
  return nx0 * (1 - v) + nx1 * v;
}

// ── Particle and animation loop ───────────────────────────────────────────────

function Particle(x, y, vx = 0, vy = 0) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.trail = [];
  this.alive = true;
}

// ── Palette presets ──────────────────────────────────────────────────────────

const PALETTES = {
  cyberpunk: ['#E91E63', '#00BCD4', '#2196F3', '#FF5722'],
  forest: ['#2E7D32', '#66BB6A', '#81C784', '#FFE082'],
  ocean: ['#0277BD', '#0288D1', '#29B6F6', '#81D4FA'],
  sunset: ['#FF6F00', '#FF9800', '#FFB74D', '#FFD54F'],
  synthetic: ['#E91E63', '#9C27B0', '#673AB7', '#3F51B5'],
  thermal: ['#000000', '#FF0000', '#FFFF00', '#FFFFFF'],
  twilight: ['#1A237E', '#7B1FA2', '#C2185B', '#FF6F00'],
  deep: ['#0D47A1', '#1565C0', '#1976D2', '#42A5F5'],
};

const PALETTE_KEYS = Object.keys(PALETTES);

export default function FlowField() {
  const { startTransition } = usePageTransition();
  const { t } = useI18n();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const seedRef = useRef(Math.random() * 10000);
  const isDrawingRef = useRef(false);
  const timeRef = useRef(0);
  const frameCountRef = useRef(0);

  // Controls
  const [particleCount, setParticleCount] = useState(150);
  const [noiseScale, setNoiseScale] = useState(60);
  const [stepLength, setStepLength] = useState(2.5);
  const [lineWidth, setLineWidth] = useState(1.2);
  const [lineOpacity, setLineOpacity] = useState(0.15);
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [paletteIdx, setPaletteIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationTime, setAnimationTime] = useState(0);

  const currentPalette = PALETTES[PALETTE_KEYS[paletteIdx]];

  // ── Initialize or regenerate particles ──────────────────────────────────

  const initializeParticles = useCallback((seed) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particles = [];
    const rng = (i) => seededHash(i, seed, seed);

    for (let i = 0; i < particleCount; i++) {
      const x = rng(i * 2) * canvas.width;
      const y = rng(i * 2 + 1) * canvas.height;
      particles.push(new Particle(x, y));
    }

    particlesRef.current = particles;
    timeRef.current = 0;
    frameCountRef.current = 0;
    isDrawingRef.current = true;
  }, [particleCount]);

  // ── Regenerate with new random seed ────────────────────────────────────

  const handleRegenerate = useCallback(() => {
    seedRef.current = Math.random() * 10000;
    initializeParticles(seedRef.current);
    setAnimationTime(0);
    setIsPlaying(true);
  }, [initializeParticles]);

  // ── Export as PNG ──────────────────────────────────────────────────────

  const exportPNG = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'flowfield.png';
      a.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
  }, []);

  // ── Export as SVG ──────────────────────────────────────────────────────

  const exportSVG = useCallback(() => {
    const particles = particlesRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !particles.length) return;

    let svgBody = '';
    const palette = PALETTES[PALETTE_KEYS[paletteIdx]];

    particles.forEach((p, idx) => {
      if (p.trail.length < 2) return;
      const color = palette[idx % palette.length];
      const pathData = p.trail.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`).join(' ');
      svgBody += `<path d="${pathData}" stroke="${color}" stroke-width="${lineWidth}" fill="none" opacity="${lineOpacity}" stroke-linecap="round" stroke-linejoin="round" />\n`;
    });

    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style type="text/css">
      body { background-color: ${bgColor}; }
    </style>
  </defs>
  <rect width="${canvas.width}" height="${canvas.height}" fill="${bgColor}"/>
  ${svgBody}
</svg>`;

    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flowfield.svg';
    a.click();
    URL.revokeObjectURL(url);
  }, [paletteIdx, lineWidth, lineOpacity, bgColor]);

  // ── Animation loop ──────────────────────────────────────────────────────

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const animate = (time) => {
      if (!isPlaying) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const ctx = canvas.getContext('2d');
      const particles = particlesRef.current;

      if (frameCountRef.current === 0) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      const animationDuration = 2000; // 2 seconds
      const maxSteps = 200;

      particles.forEach((p) => {
        if (!p.alive) return;

        const stepsToDraw = isDrawingRef.current && timeRef.current < animationDuration ? Math.ceil(timeRef.current / animationDuration * maxSteps) : maxSteps;

        for (let step = 0; step < stepsToDraw && p.trail.length < maxSteps; step++) {
          if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
            p.alive = false;
            break;
          }

          // Sample the noise field
          const angle = perlin2d(p.x, p.y, noiseScale, seedRef.current) * Math.PI * 2;
          p.vx = Math.cos(angle) * stepLength;
          p.vy = Math.sin(angle) * stepLength;

          // Record trail point
          p.trail.push({ x: p.x, y: p.y });

          // Move particle
          p.x += p.vx;
          p.y += p.vy;
        }

        // Draw the trail
        if (p.trail.length > 1) {
          const color = currentPalette[particles.indexOf(p) % currentPalette.length];
          ctx.strokeStyle = color;
          ctx.globalAlpha = lineOpacity;
          ctx.lineWidth = lineWidth;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';

          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let i = 1; i < p.trail.length; i++) {
            ctx.lineTo(p.trail[i].x, p.trail[i].y);
          }
          ctx.stroke();

          ctx.globalAlpha = 1;
        }
      });

      timeRef.current += 16; // ~60fps
      frameCountRef.current++;

      if (isDrawingRef.current && timeRef.current >= animationDuration) {
        isDrawingRef.current = false;
      }

      setAnimationTime(Math.min(timeRef.current / 2000, 1));

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [bgColor, lineOpacity, lineWidth, isPlaying, currentPalette, noiseScale, stepLength]);

  // ── Resize canvas to container ──────────────────────────────────────────

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const w = container.clientWidth;
      const h = container.clientHeight;

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;

        // Reinit particles with new canvas size
        initializeParticles(seedRef.current);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initializeParticles]);

  // ── Initial load ───────────────────────────────────────────────────────

  useEffect(() => {
    initializeParticles(seedRef.current);
  }, [initializeParticles]);

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('flowField.heading')}</h1>
        <p className={styles.subtitle}>{t('flowField.subtitle')}</p>
      </div>

      <div className={styles.workspace}>
        {/* ── Controls ── */}
        <aside className={styles.controls}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>PARTICLES</legend>
            <div className={styles.row}>
              <span className={styles.label}>Count</span>
              <span className={styles.value}>{particleCount}</span>
            </div>
            <div className={styles.sliderWrap}>
              <input
                type="range"
                min="10"
                max="400"
                value={particleCount}
                onChange={(e) => setParticleCount(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>NOISE</legend>
            <div className={styles.row}>
              <span className={styles.label}>Scale</span>
              <span className={styles.value}>{noiseScale.toFixed(0)}</span>
            </div>
            <div className={styles.sliderWrap}>
              <input
                type="range"
                min="10"
                max="200"
                value={noiseScale}
                onChange={(e) => setNoiseScale(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
            <div className={styles.row} style={{ marginTop: 'var(--space-3)' }}>
              <span className={styles.label}>Step</span>
              <span className={styles.value}>{stepLength.toFixed(2)}</span>
            </div>
            <div className={styles.sliderWrap}>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.1"
                value={stepLength}
                onChange={(e) => setStepLength(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>STROKE</legend>
            <div className={styles.row}>
              <span className={styles.label}>Width</span>
              <span className={styles.value}>{lineWidth.toFixed(2)}</span>
            </div>
            <div className={styles.sliderWrap}>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.1"
                value={lineWidth}
                onChange={(e) => setLineWidth(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
            <div className={styles.row} style={{ marginTop: 'var(--space-3)' }}>
              <span className={styles.label}>Opacity</span>
              <span className={styles.value}>{(lineOpacity * 100).toFixed(0)}%</span>
            </div>
            <div className={styles.sliderWrap}>
              <input
                type="range"
                min="0.02"
                max="0.5"
                step="0.02"
                value={lineOpacity}
                onChange={(e) => setLineOpacity(Number(e.target.value))}
                className={styles.slider}
              />
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>PALETTE</legend>
            <select
              value={paletteIdx}
              onChange={(e) => setPaletteIdx(Number(e.target.value))}
              className={styles.paletteSelect}
            >
              {PALETTE_KEYS.map((key, idx) => (
                <option key={idx} value={idx}>
                  {key.toUpperCase()}
                </option>
              ))}
            </select>
            <div className={styles.colorRow}>
              {currentPalette.map((color, idx) => (
                <div
                  key={idx}
                  className={styles.colorSwatch}
                  style={{ background: color }}
                  title={color}
                />
              ))}
            </div>
            <div className={styles.row} style={{ marginTop: 'var(--space-3)' }}>
              <span className={styles.label}>Background</span>
            </div>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className={styles.colorInput}
            />
          </fieldset>

          <div className={styles.buttonGroup}>
            <button className={styles.actionBtn} onClick={handleRegenerate} title="New seed">
              ↻ REGEN
            </button>
            <button
              className={styles.actionBtn}
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸' : '▶'} {isPlaying ? 'PAUSE' : 'PLAY'}
            </button>
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.exportBtn} onClick={exportPNG} title="Download as PNG">
              ↓ PNG
            </button>
            <button className={styles.exportBtn} onClick={exportSVG} title="Download as SVG">
              ↓ SVG
            </button>
          </div>

          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${animationTime * 100}%` }} />
          </div>
        </aside>

        {/* ── Canvas ── */}
        <div className={styles.main}>
          <div className={styles.canvasContainer} ref={containerRef}>
            <canvas ref={canvasRef} className={styles.canvas} />
          </div>
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          {t('flowField.backTools')}
        </button>
      </div>
    </main>
  );
}
