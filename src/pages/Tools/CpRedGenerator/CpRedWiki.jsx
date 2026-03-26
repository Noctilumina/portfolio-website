import { useState, useMemo, useEffect } from 'react';
import Markdown from 'react-markdown';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { WIKI_ENTRIES, WIKI_CATEGORIES } from './wikidata';
import styles from './CpRedWiki.module.css';

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

export default function CpRedWiki() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const [activeId, setActiveId] = useState(WIKI_ENTRIES[0]?.id || '');
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeEntry = WIKI_ENTRIES.find((e) => e.id === activeId) || WIKI_ENTRIES[0];

  const filteredByCategory = useMemo(() => {
    const map = {};
    WIKI_CATEGORIES.forEach((cat) => { map[cat] = []; });
    WIKI_ENTRIES.forEach((entry) => {
      if (!search || fuzzyMatch(entry.title, search) || fuzzyMatch(entry.content, search)) {
        if (map[entry.category]) map[entry.category].push(entry);
      }
    });
    return map;
  }, [search]);

  const navigateTo = (id) => {
    setActiveId(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle internal wiki links in markdown: [[entry-id]] or [[entry-id|Display Text]]
  const processContent = (content) => {
    return content.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => {
      const entry = WIKI_ENTRIES.find((e) => e.id === id);
      return entry ? `[${label || entry.title}](#wiki:${id})` : label || id;
    });
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.topBar}>
        <button className={styles.sidebarToggle} onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '\u2715' : '\u2630'}
        </button>
        <h1 className={styles.title}>CPR Reference</h1>
        <button className={styles.backButton} onClick={() => startTransition('/tools/cpred-generator')}>
          {t('cpred.backTools')}
        </button>
      </div>

      <div className={styles.layout}>
        {/* Sidebar */}
        <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
          <input
            className={styles.searchInput}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search rules..."
          />
          <nav className={styles.sidebarNav}>
            {WIKI_CATEGORIES.map((cat) => {
              const entries = filteredByCategory[cat];
              if (!entries || entries.length === 0) return null;
              return (
                <div key={cat} className={styles.categoryGroup}>
                  <span className={styles.categoryTitle}>{cat}</span>
                  {entries.map((entry) => (
                    <button
                      key={entry.id}
                      className={`${styles.navItem} ${activeId === entry.id ? styles.navItemActive : ''}`}
                      onClick={() => navigateTo(entry.id)}
                    >
                      {entry.title}
                    </button>
                  ))}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Content */}
        <article className={styles.content}>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbCat}>{activeEntry.category}</span>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbTitle}>{activeEntry.title}</span>
          </div>

          <div className={styles.articleBody}>
            <Markdown
              components={{
                a: ({ href, children, ...props }) => {
                  if (href?.startsWith('#wiki:')) {
                    const targetId = href.replace('#wiki:', '');
                    return (
                      <a
                        href={href}
                        className={styles.wikiLink}
                        onClick={(e) => { e.preventDefault(); navigateTo(targetId); }}
                        {...props}
                      >
                        {children}
                      </a>
                    );
                  }
                  return <a href={href} {...props}>{children}</a>;
                },
              }}
            >
              {processContent(activeEntry.content)}
            </Markdown>
          </div>

          {/* Related entries */}
          {activeEntry.related && activeEntry.related.length > 0 && (
            <div className={styles.relatedSection}>
              <span className={styles.relatedTitle}>Related</span>
              <div className={styles.relatedLinks}>
                {activeEntry.related.map((relId) => {
                  const rel = WIKI_ENTRIES.find((e) => e.id === relId);
                  if (!rel) return null;
                  return (
                    <button key={relId} className={styles.relatedLink} onClick={() => navigateTo(relId)}>
                      {rel.title}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
