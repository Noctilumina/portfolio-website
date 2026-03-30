import { useState, useMemo, useRef, useCallback } from 'react';
import tools from '../../data/tools.json';
import { useI18n } from '../../i18n/I18nContext';
import { Routes } from '../../constants/routes';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import { usePageTransition } from '../../App';
import styles from './Tools.module.css';

function fuzzyMatch(text, query) {
  const lower = text.toLowerCase();
  const q = query.toLowerCase();
  if (lower.includes(q)) return true;
  let qi = 0;
  for (let i = 0; i < lower.length && qi < q.length; i++) {
    if (lower[i] === q[qi]) qi++;
  }
  return qi === q.length;
}

export default function Tools() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const [search, setSearch] = useState('');
  const [activeChips, setActiveChips] = useState([]);
  const searchRef = useRef(null);

  const handleSearchKeyDown = useCallback(() => {
    const el = searchRef.current;
    if (!el) return;
    el.classList.remove(styles.searchThump);
    void el.offsetWidth;
    el.classList.add(styles.searchThump);
  }, []);

  const localizedTools = tools.map((tool) => {
    const titleKey = `toolData.${tool.slug}.title`;
    const descKey = `toolData.${tool.slug}.shortDescription`;
    const localTitle = t(titleKey);
    const localDesc = t(descKey);
    return {
      ...tool,
      title: (localTitle !== titleKey) ? localTitle : tool.title,
      shortDescription: (localDesc !== descKey) ? localDesc : tool.shortDescription,
    };
  });

  const allChips = useMemo(() => {
    const set = new Set();
    tools.forEach((tool) => (tool.categories || []).forEach((cat) => set.add(cat)));
    return [...set].sort();
  }, []);

  const toggleChip = (chip) => {
    setActiveChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  const filtered = localizedTools.filter((tool) => {
    const matchesChips = activeChips.length === 0 || activeChips.every((chip) => (tool.categories || []).includes(chip));
    const matchesSearch = !search || fuzzyMatch(tool.title, search) || fuzzyMatch(tool.shortDescription, search) || tool.techStack.some((t) => fuzzyMatch(t, search)) || (tool.categories || []).some((c) => fuzzyMatch(c, search));
    return matchesChips && matchesSearch;
  });

  const handleCardClick = (tool) => {
    if (tool.route) startTransition(tool.route);
    else if (tool.liveUrl) window.open(tool.liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main id="main-content" className={styles.page}>
      <ScrollReveal>
        <h1 className={styles.title}>{t('tools.heading')}</h1>
        <p className={styles.subtitle}>{t('tools.subtitle')}</p>
      </ScrollReveal>

      <div className={styles.filterBar}>
        <input
          ref={searchRef}
          className={styles.searchInput}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          placeholder={t('tools.searchPlaceholder')}
          aria-label={t('tools.searchPlaceholder')}
        />
        <div className={styles.chipRow}>
          {allChips.map((chip) => (
            <button
              key={chip}
              className={`${styles.filterChip} ${activeChips.includes(chip) ? styles.filterChipActive : ''}`}
              onClick={() => toggleChip(chip)}
            >
              <span className={styles.filterChipText}>{chip}</span>
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <p className={styles.noResults}>{t('tools.noResults')}</p>
      )}

      <div className={styles.grid}>
        {filtered.map((tool, i) => (
          <ScrollReveal key={tool.slug} delay={i * 0.05}>
            <div
              className={`${styles.card} ${(tool.route || tool.liveUrl) ? styles.cardClickable : ''}`}
              onClick={() => handleCardClick(tool)}
              role={(tool.route || tool.liveUrl) ? 'link' : undefined}
              tabIndex={(tool.route || tool.liveUrl) ? 0 : undefined}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick(tool)}
            >
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{tool.title}</h2>
              </div>
              <p className={styles.cardDescription}>{tool.shortDescription}</p>
              <div className={styles.tags}>
                {tool.techStack.map((tech) => (
                  <span key={tech} className={styles.tag}>{tech}</span>
                ))}
              </div>
              {tool.githubUrl && (
                <div className={styles.links}>
                  <a href={tool.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link} onClick={(e) => e.stopPropagation()}>
                    GitHub
                  </a>
                </div>
              )}
              {(tool.route || tool.liveUrl) && <span className={styles.openArrow} aria-hidden="true">&rarr;</span>}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.HOME)}>
          {t('tools.backHome')}
        </button>
      </div>
    </main>
  );
}
