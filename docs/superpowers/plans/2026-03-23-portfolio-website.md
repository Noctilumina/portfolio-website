# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bold, modern React portfolio website with a 3D hero, theme switching, project showcases, and smooth animations — targeting full-stack/frontend developer roles.

**Architecture:** Single-page scrolling home with dedicated project detail routes. Vite + React + React Router for the shell, Framer Motion for animations, React Three Fiber for the 3D hero. Theming via CSS custom properties managed through React Context with localStorage persistence.

**Tech Stack:** Vite, React 18, React Router v6, Framer Motion, React Three Fiber, Three.js, CSS Modules

---

## File Map

```
Portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/                    # Project thumbnails (placeholder)
├── src/
│   ├── main.jsx                   # Entry point, mounts App
│   ├── App.jsx                    # Router + ThemeProvider wrapper
│   ├── App.module.css             # Global app styles
│   ├── index.css                  # CSS reset + custom property defaults
│   ├── context/
│   │   └── ThemeContext.jsx        # Theme provider + useTheme hook
│   ├── themes/
│   │   └── themes.js              # Theme definitions (midnight-rose, light-rose, deep-rose, electric-cyan)
│   ├── data/
│   │   ├── projects.json          # 5 placeholder projects
│   │   ├── skills.json            # Skills grouped by category
│   │   └── experience.json        # Timeline entries
│   ├── hooks/
│   │   └── useScrollReveal.js     # Intersection Observer hook for scroll animations
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ProjectCard.module.css
│   │   ├── SkillBadge/
│   │   │   ├── SkillBadge.jsx
│   │   │   └── SkillBadge.module.css
│   │   ├── TimelineEntry/
│   │   │   ├── TimelineEntry.jsx
│   │   │   └── TimelineEntry.module.css
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactForm.module.css
│   │   ├── ScrollReveal/
│   │   │   └── ScrollReveal.jsx
│   │   └── ThemeToggle/
│   │       ├── ThemeToggle.jsx
│   │       └── ThemeToggle.module.css
│   ├── sections/
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.module.css
│   │   │   └── HeroScene.jsx       # React Three Fiber 3D scene
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.module.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.module.css
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   └── Experience.module.css
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       └── Contact.module.css
│   └── pages/
│       ├── Home.jsx                # Composes all sections
│       └── ProjectDetail/
│           ├── ProjectDetail.jsx
│           └── ProjectDetail.module.css
```

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css`, `src/App.module.css`

- [ ] **Step 1: Initialize Vite project**

```bash
cd C:/Users/irisp/Documents/Portfolio
npm create vite@latest . -- --template react
```

Select "React" and "JavaScript" if prompted. If the directory is non-empty, confirm overwrite.

- [ ] **Step 2: Install dependencies**

```bash
npm install react-router-dom framer-motion @react-three/fiber @react-three/drei three
```

- [ ] **Step 3: Clean up Vite boilerplate**

Remove the default Vite files we won't need:
- Delete `src/App.css`
- Delete `src/assets/react.svg`
- Delete `public/vite.svg`

- [ ] **Step 4: Create `src/index.css` with CSS reset and custom property defaults**

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-bg: #1C1028;
  --color-primary: #E91E63;
  --color-secondary: #9C27B0;
  --color-light: #F8BBD0;
  --color-text: #F0E6F6;
  --color-muted: #B39DDB;
  --color-surface: rgba(255, 255, 255, 0.05);
  --color-border: rgba(255, 255, 255, 0.1);

  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

ul, ol {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}
```

- [ ] **Step 5: Create minimal `src/App.jsx`**

```jsx
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <h1>Portfolio</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

- [ ] **Step 6: Create `src/App.module.css`**

```css
.app {
  min-height: 100vh;
}
```

- [ ] **Step 7: Update `src/main.jsx`**

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- [ ] **Step 8: Verify dev server runs**

```bash
npm run dev
```

Expected: Dev server starts, browser shows "Portfolio" text on dark background (#1C1028).

---

## Task 2: Theming System

**Files:**
- Create: `src/themes/themes.js`, `src/context/ThemeContext.jsx`, `src/components/ThemeToggle/ThemeToggle.jsx`, `src/components/ThemeToggle/ThemeToggle.module.css`

- [ ] **Step 1: Create `src/themes/themes.js`**

```js
export const themes = {
  'midnight-rose': {
    name: 'Midnight Rose',
    properties: {
      '--color-bg': '#1C1028',
      '--color-primary': '#E91E63',
      '--color-secondary': '#9C27B0',
      '--color-light': '#F8BBD0',
      '--color-text': '#F0E6F6',
      '--color-muted': '#B39DDB',
      '--color-surface': 'rgba(255, 255, 255, 0.05)',
      '--color-border': 'rgba(255, 255, 255, 0.1)',
    },
  },
  'light-rose': {
    name: 'Light Rose',
    properties: {
      '--color-bg': '#FFF5F8',
      '--color-primary': '#C2185B',
      '--color-secondary': '#7B1FA2',
      '--color-light': '#F8BBD0',
      '--color-text': '#2D1B33',
      '--color-muted': '#6D4C7D',
      '--color-surface': 'rgba(0, 0, 0, 0.03)',
      '--color-border': 'rgba(0, 0, 0, 0.1)',
    },
  },
  'deep-rose': {
    name: 'Deep Rose',
    properties: {
      '--color-bg': '#0D0712',
      '--color-primary': '#FF4081',
      '--color-secondary': '#CE93D8',
      '--color-light': '#F8BBD0',
      '--color-text': '#EDE7F6',
      '--color-muted': '#9575CD',
      '--color-surface': 'rgba(255, 255, 255, 0.04)',
      '--color-border': 'rgba(255, 255, 255, 0.08)',
    },
  },
  'electric-cyan': {
    name: 'Electric Cyan',
    properties: {
      '--color-bg': '#0D0D0D',
      '--color-primary': '#00F0FF',
      '--color-secondary': '#7B61FF',
      '--color-light': '#B3F0FF',
      '--color-text': '#F0F0F0',
      '--color-muted': '#A0A0A0',
      '--color-surface': 'rgba(0, 240, 255, 0.05)',
      '--color-border': 'rgba(0, 240, 255, 0.15)',
    },
  },
};

export const themeKeys = Object.keys(themes);
export const defaultTheme = 'midnight-rose';
```

- [ ] **Step 2: Create `src/context/ThemeContext.jsx`**

```jsx
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { themes, defaultTheme, themeKeys } from '../themes/themes';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved && themes[saved] ? saved : defaultTheme;
  });

  useEffect(() => {
    const theme = themes[themeName];
    const root = document.documentElement;
    Object.entries(theme.properties).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    localStorage.setItem('portfolio-theme', themeName);
  }, [themeName]);

  const cycleTheme = useCallback(() => {
    setThemeName((current) => {
      const idx = themeKeys.indexOf(current);
      return themeKeys[(idx + 1) % themeKeys.length];
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
```

- [ ] **Step 3: Create `src/components/ThemeToggle/ThemeToggle.jsx`**

```jsx
import { useTheme } from '../../context/ThemeContext';
import { themes } from '../../themes/themes';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { themeName, cycleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={cycleTheme}
      aria-label={`Current theme: ${themes[themeName].name}. Click to switch.`}
      title={themes[themeName].name}
    >
      <span className={styles.icon}>🎨</span>
    </button>
  );
}
```

- [ ] **Step 4: Create `src/components/ThemeToggle/ThemeToggle.module.css`**

```css
.toggle {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  color: var(--color-text);
  font-size: 1.2rem;
  transition: background 0.2s, border-color 0.2s;
  display: flex;
  align-items: center;
}

.toggle:hover {
  background: var(--color-border);
  border-color: var(--color-primary);
}

.icon {
  line-height: 1;
}
```

- [ ] **Step 5: Wire ThemeProvider into App.jsx**

```jsx
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className={styles.app}>
          <ThemeToggle />
          <h1>Portfolio</h1>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
```

- [ ] **Step 6: Verify theming works**

```bash
npm run dev
```

Expected: Page shows with Midnight Rose colors. Clicking the theme toggle cycles through all 4 themes. Colors persist after page refresh.

---

## Task 3: Data Files

**Files:**
- Create: `src/data/projects.json`, `src/data/skills.json`, `src/data/experience.json`

- [ ] **Step 1: Create `src/data/projects.json`**

```json
[
  {
    "slug": "ecommerce-platform",
    "title": "E-Commerce Platform",
    "shortDescription": "Full-stack marketplace with real-time inventory and payment processing.",
    "description": "A comprehensive e-commerce platform built with React and Node.js. Features include real-time inventory tracking, Stripe payment integration, user authentication, and an admin dashboard for managing products and orders.",
    "image": "/images/project-ecommerce.png",
    "techStack": ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    "features": [
      "Real-time inventory management",
      "Stripe payment integration",
      "JWT authentication with refresh tokens",
      "Admin dashboard with analytics",
      "Responsive design with mobile-first approach"
    ],
    "liveUrl": "",
    "githubUrl": ""
  },
  {
    "slug": "task-management-app",
    "title": "Task Management App",
    "shortDescription": "Kanban-style project tracker with drag-and-drop and team collaboration.",
    "description": "A project management tool inspired by Trello and Linear. Supports drag-and-drop task boards, real-time collaboration via WebSockets, and custom workflows per team.",
    "image": "/images/project-tasks.png",
    "techStack": ["React", "TypeScript", "Express", "Socket.io", "MongoDB"],
    "features": [
      "Drag-and-drop Kanban boards",
      "Real-time collaboration via WebSockets",
      "Custom workflow automation",
      "Team permissions and roles",
      "Dark/light theme support"
    ],
    "liveUrl": "",
    "githubUrl": ""
  },
  {
    "slug": "weather-dashboard",
    "title": "Weather Dashboard",
    "shortDescription": "Interactive weather visualization with 7-day forecasts and location search.",
    "description": "A beautiful weather dashboard that displays current conditions, hourly and 7-day forecasts with interactive charts. Integrates with OpenWeather API and supports geolocation.",
    "image": "/images/project-weather.png",
    "techStack": ["React", "D3.js", "OpenWeather API", "CSS Modules"],
    "features": [
      "Interactive forecast charts with D3.js",
      "Geolocation-based weather detection",
      "7-day and hourly forecast views",
      "Location search with autocomplete",
      "Animated weather icons"
    ],
    "liveUrl": "",
    "githubUrl": ""
  },
  {
    "slug": "chat-application",
    "title": "Real-Time Chat App",
    "shortDescription": "End-to-end encrypted messaging with file sharing and group channels.",
    "description": "A real-time messaging application with end-to-end encryption, file sharing, and support for group channels. Built with a focus on privacy and performance.",
    "image": "/images/project-chat.png",
    "techStack": ["React", "Node.js", "Socket.io", "PostgreSQL", "AWS S3"],
    "features": [
      "End-to-end encrypted messaging",
      "File and image sharing via S3",
      "Group channels with admin controls",
      "Message search and pinning",
      "Online presence indicators"
    ],
    "liveUrl": "",
    "githubUrl": ""
  },
  {
    "slug": "developer-portfolio",
    "title": "This Portfolio",
    "shortDescription": "The site you're looking at — built with React, Three.js, and Framer Motion.",
    "description": "A bold, modern developer portfolio featuring a 3D interactive hero, theme switching, scroll-driven animations, and responsive design. Built to showcase frontend and full-stack development skills.",
    "image": "/images/project-portfolio.png",
    "techStack": ["React", "Three.js", "Framer Motion", "CSS Modules", "Vite"],
    "features": [
      "3D interactive hero with React Three Fiber",
      "4-theme switcher with localStorage persistence",
      "Scroll-driven reveal animations",
      "Responsive design with mobile-first approach",
      "Page transitions with AnimatePresence"
    ],
    "liveUrl": "",
    "githubUrl": ""
  }
]
```

- [ ] **Step 2: Create `src/data/skills.json`**

```json
{
  "Frontend": [
    { "name": "React", "icon": "⚛️" },
    { "name": "TypeScript", "icon": "📘" },
    { "name": "JavaScript", "icon": "🟨" },
    { "name": "HTML/CSS", "icon": "🌐" },
    { "name": "Framer Motion", "icon": "🎬" },
    { "name": "Three.js", "icon": "🧊" },
    { "name": "Tailwind CSS", "icon": "🎨" },
    { "name": "Next.js", "icon": "▲" }
  ],
  "Backend": [
    { "name": "Node.js", "icon": "🟩" },
    { "name": "Express", "icon": "🚂" },
    { "name": "PostgreSQL", "icon": "🐘" },
    { "name": "MongoDB", "icon": "🍃" },
    { "name": "REST APIs", "icon": "🔗" },
    { "name": "GraphQL", "icon": "◈" },
    { "name": "Redis", "icon": "🔴" },
    { "name": "Docker", "icon": "🐳" }
  ],
  "Tools": [
    { "name": "Git", "icon": "🔀" },
    { "name": "VS Code", "icon": "💻" },
    { "name": "Figma", "icon": "🎨" },
    { "name": "Linux", "icon": "🐧" },
    { "name": "CI/CD", "icon": "🔄" },
    { "name": "AWS", "icon": "☁️" },
    { "name": "Vite", "icon": "⚡" },
    { "name": "Jest", "icon": "🃏" }
  ]
}
```

- [ ] **Step 3: Create `src/data/experience.json`**

```json
[
  {
    "id": 1,
    "role": "Senior Frontend Developer",
    "company": "TechCorp Inc.",
    "period": "2024 — Present",
    "description": "Lead frontend architecture for the main product. Migrated legacy jQuery codebase to React, improving performance by 40%. Mentored junior developers and established coding standards."
  },
  {
    "id": 2,
    "role": "Full-Stack Developer",
    "company": "StartupXYZ",
    "period": "2022 — 2024",
    "description": "Built and maintained multiple microservices with Node.js and React. Designed and implemented real-time features using WebSockets. Reduced API response times by 60% through caching strategies."
  },
  {
    "id": 3,
    "role": "Junior Developer",
    "company": "WebAgency Co.",
    "period": "2020 — 2022",
    "description": "Developed responsive websites and web applications for various clients. Worked with React, Vue.js, and WordPress. Collaborated closely with designers to deliver pixel-perfect implementations."
  },
  {
    "id": 4,
    "role": "Computer Science Degree",
    "company": "State University",
    "period": "2016 — 2020",
    "description": "Bachelor's in Computer Science with focus on software engineering and web technologies. Dean's list. Capstone project: real-time collaborative code editor."
  }
]
```

- [ ] **Step 4: Create placeholder images directory**

```bash
mkdir -p public/images
```

Create a simple placeholder script or note that images will be added later. The project cards will handle missing images gracefully.

---

## Task 4: Scroll Reveal Hook & Component

**Files:**
- Create: `src/hooks/useScrollReveal.js`, `src/components/ScrollReveal/ScrollReveal.jsx`

- [ ] **Step 1: Create `src/hooks/useScrollReveal.js`**

```js
import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
```

- [ ] **Step 2: Create `src/components/ScrollReveal/ScrollReveal.jsx`**

```jsx
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}) {
  const { ref, isVisible } = useScrollReveal();

  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
  };

  const offset = offsets[direction] || offsets.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Task 5: Navbar

**Files:**
- Create: `src/components/Navbar/Navbar.jsx`, `src/components/Navbar/Navbar.module.css`

- [ ] **Step 1: Create `src/components/Navbar/Navbar.module.css`**

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(12px);
  background: rgba(28, 16, 40, 0.8);
  border-bottom: 1px solid var(--color-border);
  transition: transform 0.3s ease;
}

.hidden {
  transform: translateY(-100%);
}

.logo {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-primary);
  cursor: pointer;
}

.navLinks {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navLink {
  color: var(--color-muted);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
  cursor: pointer;
  background: none;
  border: none;
  font-family: inherit;
}

.navLink:hover {
  color: var(--color-primary);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: transform 0.3s, opacity 0.3s;
}

.hamburgerOpen span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburgerOpen span:nth-child(2) {
  opacity: 0;
}

.hamburgerOpen span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.mobileMenu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-bg);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 99;
}

.mobileMenuOpen {
  display: flex;
}

.mobileLink {
  font-size: 1.5rem;
  color: var(--color-text);
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.mobileLink:hover {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .navLinks {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
```

- [ ] **Step 2: Create `src/components/Navbar/Navbar.jsx`**

```jsx
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { label: 'Home', target: 'hero' },
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Contact', target: 'contact' },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY && currentY > 100);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (target) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: target } });
      return;
    }
    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`${styles.navbar} ${hidden ? styles.hidden : ''}`}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          Portfolio
        </div>
        <div className={styles.navLinks}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              className={styles.navLink}
              onClick={() => scrollToSection(item.target)}
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
        </div>
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.target}
            className={styles.mobileLink}
            onClick={() => scrollToSection(item.target)}
          >
            {item.label}
          </button>
        ))}
        <ThemeToggle />
      </div>
    </>
  );
}
```

- [ ] **Step 3: Add Navbar to App.jsx**

Update `App.jsx` to include the Navbar and set up routes:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import styles from './App.module.css';

function Home() {
  return <h1 style={{ paddingTop: '5rem' }}>Home placeholder</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className={styles.app}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
```

- [ ] **Step 4: Verify navbar works**

```bash
npm run dev
```

Expected: Fixed navbar at top with glass-morphism effect. Links are visible on desktop, hamburger on mobile. Theme toggle cycles themes. Navbar hides on scroll down, reappears on scroll up.

---

## Task 6: Hero Section with 3D Scene

**Files:**
- Create: `src/sections/Hero/Hero.jsx`, `src/sections/Hero/Hero.module.css`, `src/sections/Hero/HeroScene.jsx`

- [ ] **Step 1: Create `src/sections/Hero/Hero.module.css`**

```css
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  pointer-events: none;
}

.name {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.tagline {
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: var(--color-muted);
  font-weight: 400;
}

.scrollIndicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-muted);
  font-size: 0.8rem;
}

.scrollDot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-primary);
}
```

- [ ] **Step 2: Create `src/sections/Hero/HeroScene.jsx`**

```jsx
import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function Crystal({ mouse }) {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15 + mouse.current.y * 0.3;
    meshRef.current.rotation.y = t * 0.2 + mouse.current.x * 0.3;
    materialRef.current.emissiveIntensity = 0.5 + Math.sin(t * 2) * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          ref={materialRef}
          color="#E91E63"
          emissive="#9C27B0"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 200 }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  const pointsRef = useRef();

  useFrame(({ clock }) => {
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#F8BBD0"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <group onPointerMove={handlePointerMove}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#E91E63" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#9C27B0" />
      <Crystal mouse={mouse} />
      <Particles />
    </group>
  );
}
```

- [ ] **Step 3: Create `src/sections/Hero/Hero.jsx`**

```jsx
import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const HeroScene = lazy(() => import('./HeroScene'));

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.canvas}>
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <HeroScene />
          </Canvas>
        </Suspense>
      </div>

      <div className={styles.content}>
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Name
        </motion.h1>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Full-Stack Developer
        </motion.p>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll</span>
        <motion.div
          className={styles.scrollDot}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 4: Verify hero renders**

Add Hero to App.jsx's Home placeholder and run `npm run dev`.

Expected: Full-viewport hero with rotating wireframe icosahedron, floating particles, gradient name text, tagline, scroll indicator. 3D element reacts to mouse. Entrance animations play on load.

---

## Task 7: Projects Section & ProjectCard Component

**Files:**
- Create: `src/components/ProjectCard/ProjectCard.jsx`, `src/components/ProjectCard/ProjectCard.module.css`, `src/sections/Projects/Projects.jsx`, `src/sections/Projects/Projects.module.css`

- [ ] **Step 1: Create `src/components/ProjectCard/ProjectCard.module.css`**

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow: 0 8px 32px rgba(233, 30, 99, 0.15);
}

.imageWrapper {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  opacity: 0.3;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--color-text);
}

.card:hover .imageWrapper {
  opacity: 0.5;
}

.body {
  padding: 1.5rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.description {
  font-size: 0.9rem;
  color: var(--color-muted);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: rgba(233, 30, 99, 0.1);
  color: var(--color-primary);
  border: 1px solid rgba(233, 30, 99, 0.2);
}
```

- [ ] **Step 2: Create `src/components/ProjectCard/ProjectCard.jsx`**

```jsx
import { useNavigate } from 'react-router-dom';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/project/${project.slug}`)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/project/${project.slug}`)}
    >
      <div className={styles.imageWrapper}>
        {project.title.charAt(0)}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.shortDescription}</p>
        <div className={styles.tags}>
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create `src/sections/Projects/Projects.module.css`**

```css
.section {
  padding: 6rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.heading {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 3rem;
  color: var(--color-text);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: Create `src/sections/Projects/Projects.jsx`**

```jsx
import projects from '../../data/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <ScrollReveal>
        <h2 className={styles.heading}>Projects</h2>
      </ScrollReveal>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Verify projects section renders**

Add Projects section below Hero in the Home page and run `npm run dev`.

Expected: Section heading with scroll reveal. 2-column grid of project cards that stagger in on scroll. Cards show gradient placeholder, title, description, tech tags. Hover lifts cards with rose glow.

---

## Task 8: Skills Section

**Files:**
- Create: `src/components/SkillBadge/SkillBadge.jsx`, `src/components/SkillBadge/SkillBadge.module.css`, `src/sections/Skills/Skills.jsx`, `src/sections/Skills/Skills.module.css`

- [ ] **Step 1: Create `src/components/SkillBadge/SkillBadge.module.css`**

```css
.badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--color-text);
  transition: border-color 0.2s, background 0.2s;
}

.badge:hover {
  border-color: var(--color-primary);
  background: rgba(233, 30, 99, 0.08);
}

.icon {
  font-size: 1.1rem;
  line-height: 1;
}
```

- [ ] **Step 2: Create `src/components/SkillBadge/SkillBadge.jsx`**

```jsx
import styles from './SkillBadge.module.css';

export default function SkillBadge({ skill }) {
  return (
    <div className={styles.badge}>
      <span className={styles.icon}>{skill.icon}</span>
      <span>{skill.name}</span>
    </div>
  );
}
```

- [ ] **Step 3: Create `src/sections/Skills/Skills.module.css`**

```css
.section {
  padding: 6rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.heading {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 3rem;
  color: var(--color-text);
}

.category {
  margin-bottom: 2.5rem;
}

.categoryTitle {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
```

- [ ] **Step 4: Create `src/sections/Skills/Skills.jsx`**

```jsx
import skills from '../../data/skills.json';
import SkillBadge from '../../components/SkillBadge/SkillBadge';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <ScrollReveal>
        <h2 className={styles.heading}>Skills</h2>
      </ScrollReveal>
      {Object.entries(skills).map(([category, items], catIdx) => (
        <ScrollReveal key={category} delay={catIdx * 0.15}>
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.badges}>
              {items.map((skill, i) => (
                <ScrollReveal key={skill.name} delay={catIdx * 0.15 + i * 0.05}>
                  <SkillBadge skill={skill} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
```

- [ ] **Step 5: Verify skills section renders**

Add Skills section to Home and run `npm run dev`.

Expected: Section heading, 3 categories (Frontend, Backend, Tools) with badges that stagger in. Badges show emoji icon + skill name. Hover highlights.

---

## Task 9: Experience / Timeline Section

**Files:**
- Create: `src/components/TimelineEntry/TimelineEntry.jsx`, `src/components/TimelineEntry/TimelineEntry.module.css`, `src/sections/Experience/Experience.jsx`, `src/sections/Experience/Experience.module.css`

- [ ] **Step 1: Create `src/components/TimelineEntry/TimelineEntry.module.css`**

```css
.entry {
  display: flex;
  gap: 2rem;
  position: relative;
  padding-bottom: 3rem;
}

.marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-primary);
  border: 3px solid var(--color-bg);
  box-shadow: 0 0 0 2px var(--color-primary);
  z-index: 1;
}

.line {
  width: 2px;
  flex: 1;
  background: var(--color-border);
}

.content {
  padding-top: 0;
  flex: 1;
}

.role {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.company {
  font-size: 1rem;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.period {
  font-size: 0.85rem;
  color: var(--color-muted);
  margin-bottom: 0.75rem;
}

.description {
  font-size: 0.95rem;
  color: var(--color-muted);
  line-height: 1.6;
}

.entry:last-child .line {
  display: none;
}

@media (max-width: 768px) {
  .entry {
    gap: 1rem;
  }
}
```

- [ ] **Step 2: Create `src/components/TimelineEntry/TimelineEntry.jsx`**

```jsx
import styles from './TimelineEntry.module.css';

export default function TimelineEntry({ entry }) {
  return (
    <div className={styles.entry}>
      <div className={styles.marker}>
        <div className={styles.dot} />
        <div className={styles.line} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.role}>{entry.role}</h3>
        <p className={styles.company}>{entry.company}</p>
        <p className={styles.period}>{entry.period}</p>
        <p className={styles.description}>{entry.description}</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create `src/sections/Experience/Experience.module.css`**

```css
.section {
  padding: 6rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.heading {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 3rem;
  color: var(--color-text);
}
```

- [ ] **Step 4: Create `src/sections/Experience/Experience.jsx`**

```jsx
import experience from '../../data/experience.json';
import TimelineEntry from '../../components/TimelineEntry/TimelineEntry';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <ScrollReveal>
        <h2 className={styles.heading}>Experience</h2>
      </ScrollReveal>
      {experience.map((entry, i) => (
        <ScrollReveal key={entry.id} delay={i * 0.15}>
          <TimelineEntry entry={entry} />
        </ScrollReveal>
      ))}
    </section>
  );
}
```

- [ ] **Step 5: Verify timeline renders**

Add Experience section to Home and run `npm run dev`.

Expected: Vertical timeline with connected dots and lines. Each entry reveals on scroll with role, company, period, and description.

---

## Task 10: Contact Section

**Files:**
- Create: `src/components/ContactForm/ContactForm.jsx`, `src/components/ContactForm/ContactForm.module.css`, `src/sections/Contact/Contact.jsx`, `src/sections/Contact/Contact.module.css`

- [ ] **Step 1: Create `src/components/ContactForm/ContactForm.module.css`**

```css
.form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 500px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  font-size: 0.85rem;
  color: var(--color-muted);
  font-weight: 500;
}

.input,
.textarea {
  padding: 0.75rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.2s;
  outline: none;
}

.input:focus,
.textarea:focus {
  border-color: var(--color-primary);
}

.textarea {
  min-height: 140px;
  resize: vertical;
}

.button {
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  align-self: flex-start;
}

.button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.success {
  color: var(--color-primary);
  font-weight: 500;
}
```

- [ ] **Step 2: Create `src/components/ContactForm/ContactForm.jsx`**

```jsx
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return <p className={styles.success}>Thanks! I'll get back to you soon.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input className={styles.input} type="text" id="name" name="name" required />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input className={styles.input} type="email" id="email" name="email" required />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea className={styles.textarea} id="message" name="message" required />
      </div>
      <button className={styles.button} type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p style={{ color: '#ff6b6b' }}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
```

- [ ] **Step 3: Create `src/sections/Contact/Contact.module.css`**

```css
.section {
  padding: 6rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.heading {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.subtitle {
  font-size: 1.1rem;
  color: var(--color-muted);
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.socials {
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
}

.socialLink {
  color: var(--color-muted);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;
}

.socialLink:hover {
  color: var(--color-primary);
}
```

- [ ] **Step 4: Create `src/sections/Contact/Contact.jsx`**

```jsx
import ContactForm from '../../components/ContactForm/ContactForm';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <ScrollReveal>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Have a project in mind or just want to chat? Drop me a message and I'll get back to you.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <ContactForm />
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <div className={styles.socials}>
          <a className={styles.socialLink} href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className={styles.socialLink} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className={styles.socialLink} href="mailto:hello@example.com">Email</a>
        </div>
      </ScrollReveal>
    </section>
  );
}
```

- [ ] **Step 5: Verify contact section renders**

Add Contact section to Home and run `npm run dev`.

Expected: Heading, subtitle, contact form with styled inputs, submit button with gradient, social links below. Form validates required fields. Scroll reveals on entry.

---

## Task 11: Home Page Assembly

**Files:**
- Create: `src/pages/Home.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create `src/pages/Home.jsx`**

```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero/Hero';
import Projects from '../sections/Projects/Projects';
import Skills from '../sections/Skills/Skills';
import Experience from '../sections/Experience/Experience';
import Contact from '../sections/Contact/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      element?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 2: Update `src/App.jsx` with final routing**

```jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import styles from './App.module.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className={styles.app}>
          <Navbar />
          <AnimatedRoutes />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
```

- [ ] **Step 3: Verify full home page**

```bash
npm run dev
```

Expected: Complete single-page portfolio with Hero → Projects → Skills → Experience → Contact. All scroll reveals work. Navbar links smooth-scroll to sections. Theme switching works across all sections.

---

## Task 12: Project Detail Page

**Files:**
- Create: `src/pages/ProjectDetail/ProjectDetail.jsx`, `src/pages/ProjectDetail/ProjectDetail.module.css`
- Modify: `src/App.jsx` (add route)

- [ ] **Step 1: Create `src/pages/ProjectDetail/ProjectDetail.module.css`**

```css
.page {
  padding: 6rem 2rem 4rem;
  max-width: 900px;
  margin: 0 auto;
}

.backButton {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-muted);
  font-size: 0.9rem;
  margin-bottom: 2rem;
  cursor: pointer;
  background: none;
  border: none;
  font-family: inherit;
  transition: color 0.2s;
}

.backButton:hover {
  color: var(--color-primary);
}

.banner {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  border-radius: 12px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.3);
  opacity: 0.5;
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  color: var(--color-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.sectionTitle {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.techStack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tag {
  font-size: 0.85rem;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  background: rgba(233, 30, 99, 0.1);
  color: var(--color-primary);
  border: 1px solid rgba(233, 30, 99, 0.2);
}

.features {
  list-style: none;
  padding: 0;
}

.features li {
  padding: 0.5rem 0;
  color: var(--color-muted);
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.features li::before {
  content: '→';
  color: var(--color-primary);
  font-weight: 700;
}

.links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.link {
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: opacity 0.2s;
}

.link:hover {
  opacity: 0.8;
}

.primaryLink {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
}

.secondaryLink {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.notFound {
  text-align: center;
  padding-top: 4rem;
  color: var(--color-muted);
}
```

- [ ] **Step 2: Create `src/pages/ProjectDetail/ProjectDetail.jsx`**

```jsx
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../../data/projects.json';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <motion.div
        className={styles.page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.notFound}>
          <h2>Project not found</h2>
          <button className={styles.backButton} onClick={() => navigate('/')}>
            ← Back to home
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <button
        className={styles.backButton}
        onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
      >
        ← Back to projects
      </button>

      <div className={styles.banner}>{project.title.charAt(0)}</div>

      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.description}>{project.description}</p>

      <h3 className={styles.sectionTitle}>Tech Stack</h3>
      <div className={styles.techStack}>
        {project.techStack.map((tech) => (
          <span key={tech} className={styles.tag}>{tech}</span>
        ))}
      </div>

      <h3 className={styles.sectionTitle}>Key Features</h3>
      <ul className={styles.features}>
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {(project.liveUrl || project.githubUrl) && (
        <div className={styles.links}>
          {project.liveUrl && (
            <a className={`${styles.link} ${styles.primaryLink}`} href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a className={`${styles.link} ${styles.secondaryLink}`} href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
```

- [ ] **Step 3: Add ProjectDetail route to App.jsx**

Add this import and route to `AnimatedRoutes`:

```jsx
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

// Inside AnimatedRoutes, add:
<Route path="/project/:slug" element={<ProjectDetail />} />
```

- [ ] **Step 4: Verify project detail page**

```bash
npm run dev
```

Click a project card. Expected: Page transition animation, project detail page with banner, title, description, tech stack tags, feature list, back button. Back button navigates home and scrolls to projects section.

---

## Task 13: Final Polish & Responsive Checks

**Files:**
- Modify: `src/index.css`, `src/App.module.css`, various section CSS files as needed

- [ ] **Step 1: Add footer to index.css**

Append to `src/index.css`:

```css
footer {
  text-align: center;
  padding: 2rem;
  color: var(--color-muted);
  font-size: 0.85rem;
  border-top: 1px solid var(--color-border);
}
```

- [ ] **Step 2: Add a simple footer to Home.jsx**

After the Contact section in Home.jsx, add:

```jsx
<footer>
  © {new Date().getFullYear()} Your Name. Built with React.
</footer>
```

- [ ] **Step 3: Test responsive breakpoints**

Open browser dev tools and test at:
- **Desktop** (1200px+): 2-column project grid, full navbar
- **Tablet** (768px): Cards may go single column
- **Mobile** (375px): Hamburger menu, single-column everything, readable text sizes

- [ ] **Step 4: Test all theme switching**

Cycle through all 4 themes and verify:
- All sections update colors
- No hard-coded colors leak through
- Theme persists after refresh

- [ ] **Step 5: Test all navigation**

Verify:
- Navbar links scroll to correct sections
- Project cards navigate to detail pages
- Back button returns to home at projects section
- Navbar works from project detail page (navigates home then scrolls)

- [ ] **Step 6: Run production build**

```bash
npm run build && npm run preview
```

Expected: Build succeeds with no errors. Preview serves the site correctly. All features work in production build.
