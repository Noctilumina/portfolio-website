# Portfolio Website Design Spec

## Purpose

A job-hunting portfolio website targeting full-stack and frontend developer roles. The site should demonstrate strong frontend craft through bold, modern design with impactful animations, while remaining readable and navigable for recruiters.

## Tech Stack

- **Vite** — build tool
- **React 18** — UI library
- **React Router v6** — client-side routing
- **Framer Motion** — animations (scroll reveals, page transitions, hero entrance)
- **React Three Fiber + Three.js** — 3D interactive hero element
- **CSS Modules** with CSS custom properties — styling and theming

## Project Structure

```
src/
  components/       # Reusable UI (Navbar, ProjectCard, SkillBadge, etc.)
  sections/         # Page sections (Hero, Projects, Skills, Experience, Contact)
  pages/            # Route-level components (Home, ProjectDetail)
  themes/           # Theme definitions (midnight-rose + alternates)
  data/             # projects.json, skills.json, experience.json
  hooks/            # useTheme, useScrollReveal, etc.
  context/          # ThemeContext
  assets/           # Images, fonts
  App.jsx
  main.jsx
```

## Routing

- `/` — Single-page home with all sections (Hero, Projects, Skills, Experience, Contact)
- `/project/:slug` — Dedicated project detail page with expanded info

## Data

Static JSON files in `src/data/`. No backend. Placeholder content initially, designed for easy replacement.

### projects.json shape

```json
{
  "slug": "project-name",
  "title": "Project Name",
  "shortDescription": "One-liner for the card",
  "description": "Full write-up for the detail page",
  "image": "/images/project-thumb.png",
  "techStack": ["React", "Node.js", "PostgreSQL"],
  "features": ["Feature 1", "Feature 2"],
  "liveUrl": "",
  "githubUrl": ""
}
```

## Theming System

### Mechanism

- `ThemeContext` provider wraps the app, storing active theme in `localStorage`
- Each theme is a set of CSS custom properties (`--color-bg`, `--color-primary`, `--color-accent`, etc.)
- A toggle in the navbar lets users switch themes
- Per-section tinting: each section has a subtle background shift (slightly lighter/darker than base) for visual rhythm

### Primary Theme — Midnight Rose

| Token              | Value     | Usage                  |
|--------------------|-----------|------------------------|
| `--color-bg`       | `#1C1028` | Page background        |
| `--color-primary`  | `#E91E63` | Rose pink — headings, accents |
| `--color-secondary`| `#9C27B0` | Violet — gradients, highlights |
| `--color-light`    | `#F8BBD0` | Light accent           |
| `--color-text`     | `#F0E6F6` | Body text              |
| `--color-muted`    | `#B39DDB` | Muted/secondary text   |

### Alternate Themes (for switcher)

- **Light Rose** — rose tones on cream/white background
- **Deep Rose** — deeper blacks with the same rose/violet accents
- **Wild Card** — one palette from the brainstorm (e.g., Electric Cyan or Vaporwave)

## Sections

### 1. Hero (Heavy animations)

- Full-viewport dark background
- 3D interactive element via React Three Fiber — abstract geometric shape (crystal/particles/morphing mesh) in rose/violet tones, reacts to mouse movement
- Name in large bold typography with gradient text effect (rose-to-violet)
- Short tagline/role title below
- Subtle particle or light trail background effects
- Staggered entrance animation on load (Framer Motion)
- Scroll-down indicator with gentle pulse
- On scroll: hero compresses/fades into next section
- Performance: lightweight geometry with shaders, lazy-load Three.js

### 2. Projects (Medium animations)

- Section title with scroll-reveal
- Grid of project cards: 2 columns desktop, 1 column mobile, staggered scroll-in
- Card contents: thumbnail, title, short description, tech stack tags
- Card hover: subtle lift, border glow in rose/violet, thumbnail shift
- Click navigates to `/project/:slug`

### 3. Project Detail Page (`/project/:slug`)

- Page transition animation via `AnimatePresence`
- Hero banner with project screenshot
- Sections: overview, problem/solution, tech stack breakdown, key features, links (live demo, GitHub)
- Back button returns to home, scrolls to projects section

### 4. Skills

- Grouped by category: Frontend, Backend, Tools/Other
- Visual skill badges with icons in a grid layout
- Scroll-reveal: badges fade and slide in with stagger
- No progress bars or percentages — clean badges only

### 5. Experience / Timeline

- Vertical timeline on desktop, stacked cards on mobile
- Each entry: role title, company, date range, brief description
- Entries reveal one by one on scroll
- Alternating left/right on desktop
- Data driven from `experience.json`

### 6. Contact

- Heading + short message + contact form (name, email, message)
- Form submits to Formspree or Web3Forms (no backend)
- Social links row below (GitHub, LinkedIn, email)
- Subtle background shift to differentiate from previous section

### 7. Navbar (Persistent)

- Fixed at top with blurred glass-morphism background
- Logo/name on left, section links on right (smooth scroll to anchors)
- Theme toggle button
- Hamburger menu on mobile
- Hides on scroll down, reappears on scroll up

## Animation Strategy

| Section     | Level  | Details                                           |
|-------------|--------|---------------------------------------------------|
| Hero        | Heavy  | 3D element, particles, staggered entrance, parallax |
| Projects    | Medium | Scroll-reveal cards, hover effects, page transitions |
| Skills      | Medium | Staggered badge reveals                           |
| Experience  | Medium | Sequential timeline reveals                       |
| Contact     | Subtle | Fade-in on scroll                                 |
| Navbar      | Subtle | Show/hide on scroll, glass-morphism blur           |

## Deployment

Static site — deployable to Vercel, Netlify, or GitHub Pages. No server required.

## Content

All content is placeholder initially. JSON data files and image assets are designed for easy replacement with real content later.
