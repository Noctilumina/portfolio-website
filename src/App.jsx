import { createBrowserRouter, RouterProvider, useLocation, useNavigate, useBlocker, Outlet } from 'react-router-dom';
import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { I18nProvider } from './i18n/I18nContext';
import { DitherCanvas } from './components/PageTransition/PageTransition';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import About from './pages/About/About';
import CV from './pages/CV/CV';
import BlogList from './pages/Blog/BlogList';
import BlogPost from './pages/Blog/BlogPost';
import Tools from './pages/Tools/Tools';
import CvBuilder from './pages/Tools/CvBuilder/CvBuilder';
import MdEditor from './pages/Tools/MdEditor/MdEditor';
import JsonFormatter from './pages/Tools/JsonFormatter/JsonFormatter';
import CpRedGenerator from './pages/Tools/CpRedGenerator/CpRedGenerator';
import CpRedWiki from './pages/Tools/CpRedGenerator/CpRedWiki';
import DiffChecker from './pages/Tools/DiffChecker/DiffChecker';
import StyleExplorer from './pages/Tools/StyleExplorer/StyleExplorer';
import { Routes } from './constants/routes';
import ComponentGallery from './pages/Tools/ComponentGallery/ComponentGallery';
import MondriaanGenerator from './pages/Tools/MondriaanGenerator/MondriaanGenerator';
import HalftoneConverter from './pages/Tools/HalftoneConverter/HalftoneConverter';
import OpArtGenerator from './pages/Tools/OpArtGenerator/OpArtGenerator';
import ColorPalette from './pages/Tools/ColorPalette/ColorPalette';
import PatternTiler from './pages/Tools/PatternTiler/PatternTiler';
import AsciiArt from './pages/Tools/AsciiArt/AsciiArt';
import styles from './App.module.css';

const TransitionContext = createContext();

export function usePageTransition() {
  return useContext(TransitionContext);
}

function TransitionProvider() {
  const [phase, setPhase] = useState('idle');
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  const navigate = useNavigate();

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    return phaseRef.current === 'idle' && currentLocation.pathname !== nextLocation.pathname;
  });

  useEffect(() => {
    if (blocker.state === 'blocked' && phaseRef.current === 'idle') {
      setPhase('cover');
    }
  }, [blocker.state]);

  const startTransition = useCallback((to, options) => {
    if (phaseRef.current !== 'idle') return;
    navigate(to, options);
  }, [navigate]);

  const handleCoverComplete = useCallback(() => {
    const scrollTarget = blocker.state === 'blocked'
      ? blocker.location?.state?.scrollTo
      : null;

    if (blocker.state === 'blocked') {
      blocker.proceed();
    }

    setPhase('covered');

    // Wait for new route to fully mount before scrolling
    setTimeout(() => {
      if (scrollTarget) {
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'instant' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      window.history.replaceState({}, '');

      requestAnimationFrame(() => {
        setPhase('reveal');
      });
    }, 50);
  }, [blocker]);

  const handleRevealComplete = useCallback(() => {
    setPhase('idle');
  }, []);

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      <div className={styles.app}>
        <Navbar />
        <Outlet />
      </div>
      {(phase === 'cover' || phase === 'covered') && (
        <DitherCanvas mode="cover" onComplete={phase === 'cover' ? handleCoverComplete : undefined} />
      )}
      {phase === 'reveal' && (
        <DitherCanvas mode="shrink" onComplete={handleRevealComplete} />
      )}
    </TransitionContext.Provider>
  );
}

const router = createBrowserRouter(
  [
    {
      element: (
        <I18nProvider>
          <ThemeProvider>
            <TransitionProvider />
          </ThemeProvider>
        </I18nProvider>
      ),
      children: [
        { path: Routes.HOME, element: <Home /> },
        { path: Routes.PROJECT, element: <ProjectDetail /> },
        { path: Routes.ABOUT, element: <About /> },
        { path: Routes.CV, element: <CV /> },
        { path: Routes.BLOG, element: <BlogList /> },
        { path: Routes.BLOG_POST, element: <BlogPost /> },
        { path: Routes.TOOLS, element: <Tools /> },
        { path: Routes.TOOL_CV_BUILDER, element: <CvBuilder /> },
        { path: Routes.TOOL_MD_EDITOR, element: <MdEditor /> },
        { path: Routes.TOOL_JSON_FORMATTER, element: <JsonFormatter /> },
        { path: Routes.TOOL_CPRED_GENERATOR, element: <CpRedGenerator /> },
        { path: Routes.TOOL_CPRED_WIKI, element: <CpRedWiki /> },
        { path: Routes.TOOL_DIFF_CHECKER, element: <DiffChecker /> },
        { path: Routes.TOOL_STYLE_EXPLORER, element: <StyleExplorer /> },
        { path: Routes.TOOL_COMPONENT_GALLERY, element: <ComponentGallery /> },
        { path: Routes.TOOL_MONDRIAAN, element: <MondriaanGenerator /> },
        { path: Routes.TOOL_HALFTONE, element: <HalftoneConverter /> },
        { path: Routes.TOOL_OP_ART, element: <OpArtGenerator /> },
        { path: Routes.TOOL_COLOR_PALETTE, element: <ColorPalette /> },
        { path: Routes.TOOL_PATTERN_TILER, element: <PatternTiler /> },
        { path: Routes.TOOL_ASCII_ART, element: <AsciiArt /> },
      ],
    },
  ],
  { basename: '/portfolio-website' }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
