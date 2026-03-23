import { createBrowserRouter, RouterProvider, useLocation, useNavigate, useBlocker, Outlet } from 'react-router-dom';
import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { DitherCanvas } from './components/PageTransition/PageTransition';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
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

    requestAnimationFrame(() => {
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
    });
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

const router = createBrowserRouter([
  {
    element: (
      <ThemeProvider>
        <TransitionProvider />
      </ThemeProvider>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/project/:slug', element: <ProjectDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
