import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageTransition } from '../../App';
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
  const { startTransition } = usePageTransition();
  const hamburgerRef = useRef(null);

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
      startTransition('/', { state: { scrollTo: target } });
      return;
    }
    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    hamburgerRef.current?.focus();
  };

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <nav className={`${styles.navbar} ${hidden ? styles.hidden : ''}`} aria-label="Main navigation">
        <button
          className={styles.logo}
          onClick={() => scrollToSection('hero')}
          aria-label="Go to top of page"
        >
          Portfolio
        </button>
        <div className={styles.navLinks} role="list">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              className={styles.navLink}
              onClick={() => scrollToSection(item.target)}
              role="listitem"
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          ref={hamburgerRef}
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        role="dialog"
        aria-label="Navigation menu"
        aria-hidden={!mobileOpen}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.target}
            className={styles.mobileLink}
            onClick={() => { scrollToSection(item.target); closeMobileMenu(); }}
            tabIndex={mobileOpen ? 0 : -1}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
