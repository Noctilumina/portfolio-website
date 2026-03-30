/**
 * Design Token System
 *
 * Single source of truth for all visual design values.
 * These tokens are converted to CSS custom properties in tokens.css
 * and can be imported directly in TypeScript/JSX for logic.
 */

// ── Colors ──

export const ColorTokens = {
  // Theme-dependent (overridden per theme in themes.ts)
  primary: '#E91E63',
  secondary: '#9C27B0',
  bg: '#f5f0eb',
  surface: '#ffffff',
  text: '#1a1a1a',
  muted: '#666666',
  border: '#000000',
  shadow: '#000000',
  light: '#F8BBD0',

  // Static accent colors (same in all themes)
  accentMint: '#00E5A0',
  accentGold: '#FFD700',

  // Semantic colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
} as const;

// ── Typography ──

export const FontFamily = {
  heading: "'Space Mono', monospace",
  body: "'Inter', system-ui, sans-serif",
  code: "'Space Mono', monospace",
} as const;

export const FontSize = {
  /** 0.55rem — Tiny labels, stat labels */
  xs: '0.55rem',
  /** 0.65rem — Small labels, captions, code labels */
  sm: '0.65rem',
  /** 0.75rem — Chip text, badge text, toolbar buttons */
  md: '0.75rem',
  /** 0.85rem — Body text, input text, descriptions */
  base: '0.85rem',
  /** 0.95rem — Slightly larger body, back buttons */
  lg: '0.95rem',
  /** 1rem — Standard body, paragraphs */
  xl: '1rem',
  /** 1.1-1.2rem — Card titles, small headings */
  '2xl': '1.2rem',
  /** 1.3rem — Section sub-headings */
  '3xl': '1.3rem',
  /** 1.8rem — Page headings, CV name */
  '4xl': '1.8rem',
  /** clamp(2rem, 5vw, 3rem) — Tool page titles */
  title: 'clamp(2rem, 5vw, 3rem)',
  /** clamp(2.5rem, 6vw, 4rem) — Section headings */
  hero: 'clamp(2.5rem, 6vw, 4rem)',
} as const;

export const FontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export const LineHeight = {
  tight: 1.1,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.6,
  loose: 1.8,
} as const;

export const LetterSpacing = {
  tight: '0',
  normal: '0.05em',
  wide: '0.1em',
  wider: '0.12em',
} as const;

// ── Spacing ──

export const Space = {
  /** 0.15rem — Hairline gaps */
  '0.5': '0.15rem',
  /** 0.25rem — Tiny gaps */
  '1': '0.25rem',
  /** 0.35rem — Small chip gaps */
  '1.5': '0.35rem',
  /** 0.5rem — Default small gap */
  '2': '0.5rem',
  /** 0.75rem — Standard gap, fieldset padding */
  '3': '0.75rem',
  /** 1rem — Standard padding */
  '4': '1rem',
  /** 1.25rem — Card padding, fieldset padding */
  '5': '1.25rem',
  /** 1.5rem — Large padding, section gaps */
  '6': '1.5rem',
  /** 2rem — Section padding, page padding */
  '8': '2rem',
  /** 2.5rem — Large section gaps */
  '10': '2.5rem',
  /** 3rem — Page top padding */
  '12': '3rem',
  /** 3.5rem — Navbar height offset */
  '14': '3.5rem',
  /** 6rem — Page top padding with navbar */
  '24': '6rem',
} as const;

// ── Borders ──

export const BorderWidth = {
  /** 0.1em — Hairline borders (dashed items, stat boxes) */
  thin: '0.1em',
  /** 0.12em — Light borders (chips, tags, inputs) */
  light: '0.12em',
  /** 0.15em — Standard borders (filter chips, fieldsets, tabs) */
  medium: '0.15em',
  /** 0.2em — Heavy borders (cards, main containers) */
  heavy: '0.2em',
} as const;

export const BorderRadius = {
  /** 0 — No rounding (brutalist elements) */
  none: '0',
  /** 0.15em — Tiny rounding (inner elements, points) */
  xs: '0.15em',
  /** 0.2em — Small rounding (buttons, chips, inputs) */
  sm: '0.2em',
  /** 0.3em — Standard rounding (cards, containers, nav) */
  md: '0.3em',
  /** 50% — Circle (portraits, color swatches) */
  full: '50%',
} as const;

// ── Shadows ──

export const Shadow = {
  /** No shadow */
  none: 'none',
  /** 0.1em 0.1em — Pressed/active state */
  xs: '0.1em 0.1em 0 var(--color-shadow, #000)',
  /** 0.15em 0.15em — Small elements (chips, small buttons) */
  sm: '0.15em 0.15em 0 var(--color-shadow, #000)',
  /** 0.2em 0.2em — Medium elements (inputs, toolbar buttons, code blocks) */
  md: '0.2em 0.2em 0 var(--color-shadow, #000)',
  /** 0.3em 0.3em — Fieldsets, search inputs */
  lg: '0.3em 0.3em 0 var(--color-shadow, #000)',
  /** 0.4em 0.4em — Cards, main containers */
  xl: '0.4em 0.4em 0 var(--color-shadow, #000)',
  /** 0.5em 0.5em — CV container, large emphasis */
  '2xl': '0.5em 0.5em 0 var(--color-shadow, #000)',
} as const;

// Hover shadow variants (slightly larger than base)
export const ShadowHover = {
  sm: '0.2em 0.2em 0 var(--color-shadow, #000)',
  md: '0.25em 0.25em 0 var(--color-shadow, #000)',
  lg: '0.35em 0.35em 0 var(--color-shadow, #000)',
  xl: '0.55em 0.55em 0 var(--color-shadow, #000)',
} as const;

// ── Transitions ──

export const Transition = {
  fast: '0.1s ease',
  normal: '0.15s ease',
  slow: '0.2s ease',
  paint: '0.3s ease',
  wipe: '0.4s ease',
} as const;

// ── Navbar ──

export const Layout = {
  navbarHeight: '3.5rem',
  sidebarWidth: '260px',
  maxContentWidth: '800px',
  maxPageWidth: '900px',
  maxWideWidth: '1200px',
} as const;

// ── Z-Index ──

export const ZIndex = {
  base: 0,
  dropdown: 10,
  sidebar: 15,
  navbar: 100,
  modal: 200,
  overlay: 300,
} as const;
