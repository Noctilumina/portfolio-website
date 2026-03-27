import { useEffect } from 'react';
import { usePageTransition } from '../../App';
import { useI18n } from '../../i18n/I18nContext';
import styles from './ToolNavbar.module.css';

/**
 * Generic replacement navbar for tool/sub-pages.
 * Hides the main navbar on mount and restores it on unmount.
 *
 * Usage:
 *   <ToolNavbar title="My Tool" backTo="/tools" backLabel="Back">
 *     <button>Custom controls here</button>
 *   </ToolNavbar>
 */
export default function ToolNavbar({ title, backTo, backLabel, children }) {
  const { startTransition } = usePageTransition();
  const { t } = useI18n();

  useEffect(() => {
    const nav = document.querySelector('nav[aria-label="Main navigation"]');
    if (nav) nav.style.display = 'none';
    return () => { if (nav) nav.style.display = ''; };
  }, []);

  return (
    <div className={styles.toolbar} role="navigation" aria-label="Tool navigation">
      <button
        className={styles.logo}
        onClick={() => startTransition('/')}
        aria-label={t('nav.goToTop')}
      >
        {t('nav.portfolio')}
      </button>

      <div className={styles.separator} aria-hidden="true" />

      {backTo && (
        <button className={styles.backBtn} onClick={() => startTransition(backTo)}>
          {backLabel || '\u2190 Back'}
        </button>
      )}

      {title && <span className={styles.title}>{title}</span>}

      <div className={styles.controls}>
        {children}
      </div>
    </div>
  );
}
