# Neo-Brutalist Restyle Design Spec

## Purpose

Restyle the existing React portfolio from dark/smooth aesthetic to neo-brutalist with a light cream base. Structural brutalist: thick borders, hard shadows on major elements. Decorative accent shapes only on project cards.

## Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#f5f0eb` | Warm cream background |
| `--color-text` | `#1a1a1a` | Primary text |
| `--color-border` | `#000000` | Borders and shadows |
| `--color-primary` | `#E91E63` | Rose — headings, accents |
| `--color-secondary` | `#9C27B0` | Violet — card headers, dividers |
| `--color-accent-mint` | `#00E5A0` | Card accent shapes |
| `--color-accent-gold` | `#FFD700` | Card accent shapes (small) |
| `--color-muted` | `#666666` | Secondary text |
| `--color-surface` | `#ffffff` | Card/input backgrounds |

## Global Style

- All major elements: `border: 0.2-0.35em solid #000`, `box-shadow: 0.4-0.7em 0.4-0.7em 0 #000`, `border-radius: 0.3-0.6em`
- No glass-morphism, no transparency, no background gradients
- Font: Space Mono headings, Inter body (unchanged)

## Components to Restyle

### Hero
- Remove Three.js canvas entirely (delete HeroScene.jsx, remove Canvas/Suspense from Hero.jsx)
- Big bold Space Mono "Iris Peters" with hard text-shadow effect
- Tagline below
- Colored accent block/shape behind the name for pop
- Full viewport height

### Navbar
- Solid cream bg
- Thick black bottom border + hard drop shadow
- Black text links, rose on hover
- No blur, no transparency
- Hamburger menu stays, adapted to light theme

### Section Dividers
- Hard diagonal cut (straight line, not curved)
- Pixel dithering/stipple pattern along the edge — dots scatter from solid to transparent
- Accent-colored fill (rose for Projects, violet for Experience)
- Flip prop alternates direction

### Project Cards
- Keep current brutalist style (already done)
- Update card-bg and text colors for cream base

### Skill Badges
- Thick black border, hard shadow
- Cream/white bg, black text
- Hover: lift translateY(-2px), shadow grows

### Timeline (Experience)
- Each entry becomes a bordered card with hard shadow
- Keep the continuous vertical line behind
- Content inside each card: role, company, period, description
- Client sub-entries keep their current styling but adapted to light theme

### Contact Form
- Inputs: thick black border, hard shadow, white bg
- Button: keep 3D push effect, adapted to cream/black colors
- Labels in muted text

### Theme Switcher
- Two themes only: Light Brutalist (cream, default) and Dark Brutalist
- Light: cream bg, black borders, white surfaces
- Dark: dark bg (#1a1a1a), same hard borders/shadows but inverted, light text
- Remove Light Rose and Electric Cyan themes

## Files to Modify

- `src/index.css` — base palette, global styles
- `src/themes/themes.js` — two brutalist themes only
- `src/context/ThemeContext.jsx` — unchanged
- `src/sections/Hero/Hero.jsx` — rewrite to text-only
- `src/sections/Hero/Hero.module.css` — rewrite
- `src/sections/Hero/HeroScene.jsx` — delete
- `src/components/Navbar/Navbar.module.css` — brutalist restyle
- `src/components/SectionDivider/SectionDivider.jsx` — diagonal + dither
- `src/components/SectionDivider/SectionDivider.module.css` — update
- `src/components/SkillBadge/SkillBadge.module.css` — brutalist restyle
- `src/components/TimelineEntry/TimelineEntry.module.css` — card style
- `src/sections/Experience/Experience.module.css` — update tinted section colors
- `src/sections/Projects/Projects.module.css` — update tinted section colors
- `src/components/ContactForm/ContactForm.module.css` — brutalist inputs
- `src/components/ProjectCard/ProjectCard.module.css` — update colors for light base
- `src/pages/ProjectDetail/ProjectDetail.module.css` — update for light base
- `src/components/ThemeToggle/ThemeToggle.module.css` — update styling
