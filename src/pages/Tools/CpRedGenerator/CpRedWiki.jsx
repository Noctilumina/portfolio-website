import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useI18n } from '../../../i18n/I18nContext';
import ToolNavbar from '../../../components/ToolNavbar/ToolNavbar';
import { Routes } from '../../../constants/routes';
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

// Persist wiki state across HMR/remounts
const wikiState = { mode: 'quickref', activeId: WIKI_ENTRIES[0]?.id || '', search: '' };

export default function CpRedWiki() {
  const { t } = useI18n();
  const [mode, _setMode] = useState(wikiState.mode);
  const [activeId, _setActiveId] = useState(wikiState.activeId);
  const [searchInput, setSearchInput] = useState(wikiState.search);
  const [search, setSearch] = useState(wikiState.search);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const debounceRef = useRef(null);

  const setMode = (m) => { wikiState.mode = m; _setMode(m); };
  const setActiveId = (id) => { wikiState.activeId = id; _setActiveId(id); };

  const handleSearchChange = useCallback((e) => {
    const val = e.target.value;
    setSearchInput(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setSearch(val), 200);
  }, []);

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

  // Full-text search results with snippets
  const searchResults = useMemo(() => {
    if (!search || search.length < 2) return [];
    const q = search.toLowerCase();
    return WIKI_ENTRIES
      .map((entry) => {
        const titleMatch = entry.title.toLowerCase().includes(q);
        const contentLower = entry.content.toLowerCase();
        const contentIdx = contentLower.indexOf(q);
        if (!titleMatch && contentIdx === -1) return null;
        let snippet = '';
        if (contentIdx !== -1) {
          const start = Math.max(0, contentIdx - 60);
          const end = Math.min(entry.content.length, contentIdx + q.length + 60);
          snippet = (start > 0 ? '...' : '') + entry.content.slice(start, end).replace(/\n/g, ' ') + (end < entry.content.length ? '...' : '');
        }
        return { entry, titleMatch, snippet, relevance: titleMatch ? 2 : 1 };
      })
      .filter(Boolean)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 20);
  }, [search]);

  const highlightMatch = (text, query) => {
    if (!query || query.length < 2) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark className={styles.highlight}>{text.slice(idx, idx + query.length)}</mark>
        {text.slice(idx + query.length)}
      </>
    );
  };

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
      <ToolNavbar title="CPR Reference" backTo={Routes.TOOLS} backLabel={t('cpred.backTools')}>
        {mode === 'wiki' && (
          <button className={styles.sidebarToggle} onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? '\u2715' : '\u2630'}
          </button>
        )}
        {mode === 'wiki' && (
          <input
            className={styles.navSearchInput}
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search wiki..."
          />
        )}
        <div className={styles.modeTabs}>
          <button className={`${styles.modeTab} ${mode === 'quickref' ? styles.modeTabActive : ''}`} onClick={() => setMode('quickref')}>
            Quick Ref
          </button>
          <button className={`${styles.modeTab} ${mode === 'wiki' ? styles.modeTabActive : ''}`} onClick={() => setMode('wiki')}>
            Full Wiki
          </button>
        </div>
      </ToolNavbar>

      {mode === 'quickref' ? (
        <div className={styles.quickRefWrapper}>
          <QuickRefPanel onNavigateWiki={navigateTo} />
        </div>
      ) : (
        <div className={styles.layout}>
          <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
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
            {search && search.length >= 2 ? (
              <div className={styles.searchResultsMain}>
                <h2 className={styles.searchResultsHeading}>{searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{search}"</h2>
                {searchResults.length === 0 && (
                  <p className={styles.searchEmpty}>No articles match your search. Try different keywords.</p>
                )}
                {searchResults.map(({ entry, snippet }) => (
                  <button key={entry.id} className={styles.searchResultCard} onClick={() => { setSearchInput(''); setSearch(''); navigateTo(entry.id); }}>
                    <div className={styles.searchResultCardHeader}>
                      <span className={styles.searchResultTitle}>{highlightMatch(entry.title, search)}</span>
                      <span className={styles.searchResultCat}>{entry.category}</span>
                    </div>
                    {snippet && <p className={styles.searchResultSnippet}>{highlightMatch(snippet, search)}</p>}
                  </button>
                ))}
              </div>
            ) : (
              <>
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
              </>
            )}
          </article>
        </div>
      )}
    </main>
  );
}
