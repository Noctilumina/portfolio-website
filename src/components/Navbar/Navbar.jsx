import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageTransition } from '../../App';
import { useI18n } from '../../i18n/I18nContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const { startTransition } = usePageTransition();
  const hamburgerRef = useRef(null);
  const { locale, toggleLocale, t } = useI18n();

  const navItems = [
    { label: t('nav.home'), target: 'hero' },
    { label: t('nav.projects'), target: 'projects' },
    { label: t('nav.skills'), target: 'skills' },
    { label: t('nav.experience'), target: 'experience' },
    { label: t('nav.contact'), target: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY && currentY > 100);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Track which section is currently in view on the home page
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sectionIds = navItems.map((item) => item.target);

    const updateActive = () => {
      const offset = 150;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, [location.pathname]);

  const isOnAbout = location.pathname === '/about';
  const isOnCV = location.pathname === '/cv';
  const isOnBlog = location.pathname.startsWith('/blog');
  const isOnHome = location.pathname === '/';

  const scrollToSection = (target) => {
    setMobileOpen(false);
    if (!isOnHome) {
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
        {t('nav.skipToContent')}
      </a>
      <nav className={`${styles.navbar} ${hidden ? styles.hidden : ''}`} aria-label="Main navigation">
        <button
          className={styles.logo}
          onClick={() => scrollToSection('hero')}
          aria-label={t('nav.goToTop')}
        >
          {t('nav.portfolio')}
        </button>
        <div className={styles.navLinks} role="list">
          {navItems.map((item) => (
            <button
              key={item.target}
              className={`${styles.navLink} ${isOnHome && activeSection === item.target ? styles.navLinkActive : ''}`}
              onClick={() => scrollToSection(item.target)}
              role="listitem"
              aria-current={isOnHome && activeSection === item.target ? 'true' : undefined}
            >
              {item.label}
            </button>
          ))}
          <button
            className={`${styles.navLink} ${isOnAbout ? styles.navLinkActive : ''}`}
            onClick={() => { setMobileOpen(false); startTransition('/about'); }}
            role="listitem"
            aria-current={isOnAbout ? 'page' : undefined}
          >
            {t('nav.about')}
          </button>
          <button
            className={`${styles.navLink} ${isOnBlog ? styles.navLinkActive : ''}`}
            onClick={() => { setMobileOpen(false); startTransition('/blog'); }}
            role="listitem"
            aria-current={isOnBlog ? 'page' : undefined}
          >
            Blog
          </button>
          <button
            className={`${styles.navLink} ${isOnCV ? styles.navLinkActive : ''}`}
            onClick={() => { setMobileOpen(false); startTransition('/cv'); }}
            role="listitem"
            aria-current={isOnCV ? 'page' : undefined}
          >
            CV
          </button>
          <button className={styles.navLink} onClick={toggleLocale} role="listitem">
            {locale === 'en' ? 'NL' : 'EN'}
          </button>
        </div>
        <button
          ref={hamburgerRef}
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={t('nav.toggleMenu')}
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
        aria-label={t('nav.navMenu')}
        aria-hidden={!mobileOpen}
      >
        {navItems.map((item) => (
          <button
            key={item.target}
            className={`${styles.mobileLink} ${isOnHome && activeSection === item.target ? styles.mobileLinkActive : ''}`}
            onClick={() => { scrollToSection(item.target); closeMobileMenu(); }}
            tabIndex={mobileOpen ? 0 : -1}
          >
            {item.label}
          </button>
        ))}
        <button
          className={`${styles.mobileLink} ${isOnAbout ? styles.mobileLinkActive : ''}`}
          onClick={() => { closeMobileMenu(); startTransition('/about'); }}
          tabIndex={mobileOpen ? 0 : -1}
        >
          {t('nav.about')}
        </button>
        <button
          className={`${styles.mobileLink} ${isOnBlog ? styles.mobileLinkActive : ''}`}
          onClick={() => { closeMobileMenu(); startTransition('/blog'); }}
          tabIndex={mobileOpen ? 0 : -1}
        >
          Blog
        </button>
        <button
          className={`${styles.mobileLink} ${isOnCV ? styles.mobileLinkActive : ''}`}
          onClick={() => { closeMobileMenu(); startTransition('/cv'); }}
          tabIndex={mobileOpen ? 0 : -1}
        >
          CV
        </button>
        <button className={styles.navLink} onClick={toggleLocale} tabIndex={mobileOpen ? 0 : -1}>
          {locale === 'en' ? 'NL' : 'EN'}
        </button>
      </div>
    </>
  );
}
