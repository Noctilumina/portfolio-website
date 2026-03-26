import { useState, useMemo } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { WIKI_ENTRIES, WIKI_CATEGORIES } from './wikidata';
import { QUICK_REF, QUICK_REF_TOPICS } from './quickref';
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

function QuickRefPanel({ onNavigateWiki }) {
  const [panicSearch, setPanicSearch] = useState('');
  const [activeTopic, setActiveTopic] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = useMemo(() => {
    return QUICK_REF.filter((entry) => {
      const matchesTopic = !activeTopic || entry.topic === activeTopic;
      const matchesSearch = !panicSearch || fuzzyMatch(entry.title, panicSearch) || entry.tags.some((tag) => fuzzyMatch(tag, panicSearch));
      return matchesTopic && matchesSearch;
    });
  }, [panicSearch, activeTopic]);

  const toggle = (id) => setExpandedId((prev) => prev === id ? null : id);

  return (
    <div className={styles.quickRefPanel}>
      <div className={styles.panicHeader}>
        <h2 className={styles.panicTitle}>How does X work?</h2>
        <p className={styles.panicSubtitle}>Type what's happening and get the step-by-step procedure.</p>
      </div>
      <input
        className={styles.panicSearch}
        type="text"
        value={panicSearch}
        onChange={(e) => setPanicSearch(e.target.value)}
        placeholder="grapple, death save, autofire, drowning..."
        autoFocus
      />
      <div className={styles.topicChips}>
        <button
          className={`${styles.topicChip} ${!activeTopic ? styles.topicChipActive : ''}`}
          onClick={() => setActiveTopic('')}
        >
          All ({QUICK_REF.length})
        </button>
        {QUICK_REF_TOPICS.map((topic) => {
          const count = QUICK_REF.filter((e) => e.topic === topic).length;
          return (
            <button
              key={topic}
              className={`${styles.topicChip} ${activeTopic === topic ? styles.topicChipActive : ''}`}
              onClick={() => setActiveTopic(activeTopic === topic ? '' : topic)}
            >
              {topic} ({count})
            </button>
          );
        })}
      </div>

      <div className={styles.panicResults}>
        {filtered.length === 0 && (
          <p className={styles.panicEmpty}>No matching procedure found. Try the full wiki for more detail.</p>
        )}
        {filtered.map((entry) => (
          <div key={entry.id} className={styles.panicCard}>
            <button className={styles.panicCardHeader} onClick={() => toggle(entry.id)}>
              <span className={styles.panicIcon}>{entry.icon}</span>
              <span className={styles.panicCardTitle}>{entry.title}</span>
              <span className={styles.panicChevron}>{expandedId === entry.id ? '\u25B2' : '\u25BC'}</span>
            </button>
            {expandedId === entry.id && (
              <div className={styles.panicSteps}>
                <ol className={styles.stepList}>
                  {entry.steps.map((step, i) => (
                    <li key={i} className={styles.stepItem}>
                      <Markdown remarkPlugins={[remarkGfm]} components={{ p: ({ children }) => <span>{children}</span> }}>{step}</Markdown>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CpRedWiki() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const [mode, setMode] = useState('quickref');
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
    setMode('wiki');
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        <div className={styles.modeTabs}>
          <button className={`${styles.modeTab} ${mode === 'quickref' ? styles.modeTabActive : ''}`} onClick={() => setMode('quickref')}>
            Quick Ref
          </button>
          <button className={`${styles.modeTab} ${mode === 'wiki' ? styles.modeTabActive : ''}`} onClick={() => setMode('wiki')}>
            Full Wiki
          </button>
        </div>
        <button className={styles.backButton} onClick={() => startTransition('/tools/cpred-generator')}>
          {t('cpred.backTools')}
        </button>
      </div>

      {mode === 'quickref' ? (
        <div className={styles.quickRefWrapper}>
          <QuickRefPanel onNavigateWiki={navigateTo} />
        </div>
      ) : (
        <div className={styles.layout}>
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

          <article className={styles.content}>
            <div className={styles.breadcrumb}>
              <span className={styles.breadcrumbCat}>{activeEntry.category}</span>
              <span className={styles.breadcrumbSep}>/</span>
              <span className={styles.breadcrumbTitle}>{activeEntry.title}</span>
            </div>

            <div className={styles.articleBody}>
              <Markdown
                remarkPlugins={[remarkGfm]}
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
      )}
    </main>
  );
}
