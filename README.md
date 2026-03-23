# Iris Peters — Portfolio

Neo-brutalist portfolio website built with React, featuring halftone dither transitions, bold typography, and hard-shadow card designs.

**Live:** [noctilumina.github.io/portfolio-website](https://noctilumina.github.io/portfolio-website/)

## Tech Stack

- **React 18** + **Vite**
- **React Router v7** (data router with `useBlocker` for page transitions)
- **Framer Motion** (scroll reveal animations)
- **CSS Modules** (scoped styling)
- **Canvas API** (halftone dither section dividers + page transitions)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/     # Reusable UI (Navbar, ProjectCard, SkillBadge, etc.)
  sections/       # Page sections (Hero, Projects, Skills, Experience, Contact)
  pages/          # Route components (Home, ProjectDetail)
  data/           # JSON data (projects, skills, experience)
  hooks/          # Custom hooks (useScrollReveal)
  context/        # React context (ThemeContext)
  themes/         # Theme definitions
public/
  images/         # Project banners and logos
  404.html        # Custom 404 page for GitHub Pages
```

## Deployment

Automatically deploys to GitHub Pages via GitHub Actions on push to `master`.

## Fonts

- **Space Mono** — headings
- **Inter** — body text
