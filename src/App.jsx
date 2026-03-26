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
        { path: '/', element: <Home /> },
        { path: '/project/:slug', element: <ProjectDetail /> },
        { path: '/about', element: <About /> },
        { path: '/cv', element: <CV /> },
        { path: '/blog', element: <BlogList /> },
        { path: '/blog/:slug', element: <BlogPost /> },
        { path: '/tools', element: <Tools /> },
        { path: '/tools/cv-builder', element: <CvBuilder /> },
        { path: '/tools/md-editor', element: <MdEditor /> },
        { path: '/tools/json-formatter', element: <JsonFormatter /> },
        { path: '/tools/cpred-generator', element: <CpRedGenerator /> },
        { path: '/tools/cpred-wiki', element: <CpRedWiki /> },
        { path: '/tools/diff-checker', element: <DiffChecker /> },
        { path: '/tools/style-explorer', element: <StyleExplorer /> },
      ],
    },
  ],
  { basename: '/portfolio-website' }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
