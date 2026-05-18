import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useI18n } from '../../../i18n/I18nContext';
import ToolNavbar from '../../../components/ToolNavbar/ToolNavbar';
import { Routes } from '../../../constants/routes';
import { WIKI_ENTRIES, WIKI_VERSION } from './wikidata';
import usePresets from './usePresets';
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

function SourceBadge({ source }) {
  if (!source) return null;
  return <span className={styles.sourceBadge}>{source}</span>;
}

function QuickRefPanel({ quickRef, topics, onNavigateWiki }) {
  const [panicSearch, setPanicSearch] = useState('');
  const [activeTopic, setActiveTopic] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = useMemo(() => {
    return quickRef.filter((entry) => {
      const matchesTopic = !activeTopic || entry.topic === activeTopic;
      const matchesSearch = !panicSearch || fuzzyMatch(entry.title, panicSearch) || entry.tags.some((tag) => fuzzyMatch(tag, panicSearch));
      return matchesTopic && matchesSearch;
    });
  }, [quickRef, panicSearch, activeTopic]);

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
          All ({quickRef.length})
        </button>
        {topics.map((topic) => {
          const count = quickRef.filter((e) => e.topic === topic).length;
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
              <span className={styles.panicCardTitle}>
                {entry.title}
                <SourceBadge source={entry.source} />
              </span>
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

function PresetSettings({ presets, onToggle, onImport, onExport, onRemove }) {
  const fileRef = useRef(null);

  const downloadTemplate = useCallback(() => {
    const template = {
      "_readme": [
        "CPR Homebrew Preset Template",
        "",
        "How to use:",
        "1. Fill in the metadata fields below (id, name, author, etc.)",
        "2. Add quick reference entries to the 'quickref' array",
        "3. Add wiki articles to the 'wiki' array",
        "4. Save this file as .json and import it via the Content Packs settings",
        "",
        "Quick Ref entries need: id, title, tags (array), icon (emoji), steps (array of strings), topic",
        "  - 'steps' are markdown strings shown as numbered steps",
        "  - 'topic' must be one of the values listed in '_quickref_topics' below (or a new custom one)",
        "  - The 'icon' field accepts any emoji",
        "  - Tags help with search, add as many relevant keywords as you can",
        "",
        "Wiki entries need: id, title, category, content (markdown string)",
        "  - 'category' must be one of the values listed in '_wiki_categories' below (or a new custom one)",
        "  - To nest under an existing article, add 'parentId' set to one of the ids in '_wiki_article_ids'",
        "  - Nested entries appear as subsections at the bottom of the parent article",
        "  - Use markdown for formatting: ## headings, **bold**, | tables |, etc.",
        "  - Reference other wiki articles with [[article-id]] or [[article-id|Display Text]]",
        "",
        "Tips:",
        "  - Prefix your ids with your pack name to keep them unique (e.g. 'mypack-laser-pointer')",
        "  - You can add new topics and categories, they appear automatically",
        "",
        "Wiki content uses standard Markdown. Preview your formatting at:",
        "https://noctilumina.github.io/portfolio-website/tools/md-editor",
        "",
        "Delete the fields starting with _ before importing (or leave them, they will be ignored)."
      ],
      "_quickref_topics": [
        "Character Creation", "Combat", "Cyberware", "Drugs", "Environment",
        "Equipment", "GM Tips", "Lifestyle", "Lore", "Medical",
        "Netrunning", "Night City", "Roles", "Skills", "Social", "Stats", "Vehicles"
      ],
      "_wiki_categories": [
        "Statistics", "Skills", "Combat", "Damage & Armor", "Melee Combat",
        "Ranged Combat", "Netrunning", "Healing", "Critical Injuries", "Reputation",
        "Vehicle Combat", "Drugs", "Roles", "Cyberware", "Night City", "Equipment",
        "GM Tools", "Character Creation", "Lifestyle", "Lore & History",
        "Corporations", "Everyday Life", "Adventures"
      ],
      "_wiki_article_ids": {
        "Statistics": ["stats-overview", "derived-stats"],
        "Skills": ["skills-overview", "skill-list-awareness", "skill-list-education", "skill-list-combat", "skill-list-tech"],
        "Combat": ["combat-overview", "aimed-shots", "cover"],
        "Damage & Armor": ["damage-armor", "wound-states", "death-saves"],
        "Melee Combat": ["melee-combat", "grappling", "martial-arts"],
        "Ranged Combat": ["ranged-combat", "range-dv-table", "autofire", "suppressive-fire"],
        "Netrunning": ["netrunning-overview", "netrunning-interface", "netrunning-programs", "netrunning-blackice", "net-architecture-building", "programs-full-catalog", "cyberdeck-hardware"],
        "Healing": ["healing-overview", "therapy", "medtech-pharmaceuticals"],
        "Critical Injuries": ["critical-injuries-body", "critical-injuries-head"],
        "Reputation": ["reputation"],
        "Vehicle Combat": ["vehicle-combat"],
        "Drugs": ["drugs-overview", "environmental-hazards"],
        "Roles": ["role-rockerboy", "role-solo", "role-netrunner", "role-tech", "role-medtech", "role-media", "role-exec", "role-lawman", "role-fixer", "role-nomad"],
        "Cyberware": ["cyberware-overview", "cyberpsychosis", "cyberware-catalog", "cyberware-installation"],
        "Night City": ["night-city-overview", "gangs-of-night-city", "key-locations"],
        "Equipment": ["weapons-catalog", "armor-catalog", "gear-catalog", "ammo-types", "weapon-attachments", "exotic-weapons"],
        "GM Tools": ["running-the-game", "improvement-points", "encounter-tables", "trauma-team"],
        "Character Creation": ["chargen-overview", "lifepath-cultural-origins", "lifepath-personality", "lifepath-background", "lifepath-motivations", "lifepath-role-specific", "lifepath-friends-enemies", "lifepath-romance", "multiclassing"],
        "Lifestyle": ["fashion-and-style", "housing-and-rent", "services-entertainment", "home-defenses"],
        "Lore & History": ["timeline-overview", "timeline-pre-war", "fourth-corp-war", "time-of-the-red"],
        "Corporations": ["corp-arasaka", "corp-militech", "corp-biotechnica", "corp-petrochem", "corp-continental-brands", "corp-trauma-team", "corp-danger-girl", "corp-network-54", "corp-rocklin-augmentics", "corp-sov-oil", "corp-zhirafa", "corp-kang-tao"],
        "Everyday Life": ["everyday-communications", "everyday-transport", "everyday-food", "everyday-media", "everyday-law", "everyday-weapons-carry"],
        "Adventures": ["adventure-screamsheets", "adventure-never-fade-away"]
      },
      "id": "my-homebrew-pack",
      "name": "My Homebrew Pack",
      "author": "Your Name",
      "version": "1.0",
      "description": "A short description of what this pack adds.",
      "quickref": [
        {
          "id": "mypack-example-quickref",
          "title": "Example quick reference entry",
          "tags": ["example", "template", "test"],
          "icon": "\ud83d\udcd6",
          "steps": [
            "This is **step 1**. You can use markdown here.",
            "This is step 2. Reference game mechanics like **DV13** or **1d10 + REF**.",
            "This is step 3. Add as many steps as needed."
          ],
          "topic": "Combat"
        }
      ],
      "wiki": [
        {
          "id": "mypack-example-article",
          "title": "Example Homebrew Article",
          "category": "Equipment",
          "content": "## Example Homebrew Article\n\nThis is a standalone wiki article. It appears in the sidebar under its category.\n\n| Property | Value |\n|---|---|\n| Cost | 100eb |\n| Availability | Rare |\n\nWrite your homebrew rules here using **markdown**."
        },
        {
          "id": "mypack-example-subsection",
          "title": "Example Subsection",
          "parentId": "ranged-combat",
          "content": "### Example Subsection\n\nThis content appears nested at the bottom of the 'Ranged Combat & Weapons' wiki article.\n\nUse subsections when your homebrew adds to an existing topic rather than being a new standalone article."
        }
      ]
    };
    const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cpred-homebrew-template.json';
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const handleImport = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result);
        onImport(json);
      } catch (err) {
        alert('Invalid JSON file: ' + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }, [onImport]);

  const presetList = Object.values(presets);

  return (
    <div className={styles.presetPanel}>
      <h3 className={styles.presetPanelTitle}>Content Packs</h3>
      <p className={styles.presetPanelDesc}>Toggle homebrew content on or off. Import custom JSON presets.</p>
      {presetList.map((p) => (
        <div key={p.meta.id} className={styles.presetRow}>
          <label className={styles.presetToggle}>
            <input type="checkbox" checked={p.enabled} onChange={() => onToggle(p.meta.id)} />
            <span className={styles.presetName}>{p.meta.name}</span>
            <span className={styles.presetAuthor}>by {p.meta.author}</span>
          </label>
          <div className={styles.presetActions}>
            <button className={styles.presetActionBtn} onClick={() => onExport(p.meta.id)} title="Export">Export</button>
            {!p.meta.builtIn && (
              <button className={styles.presetActionBtn} onClick={() => onRemove(p.meta.id)} title="Remove">Remove</button>
            )}
          </div>
        </div>
      ))}
      <div className={styles.presetBtnRow}>
        <button className={styles.presetImportBtn} onClick={() => fileRef.current?.click()}>
          Import Preset
        </button>
        <button className={styles.presetImportBtn} onClick={downloadTemplate}>
          Download Template
        </button>
      </div>
      <input ref={fileRef} type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
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
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef(null);
  const settingsBtnRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (!settingsOpen) return;
    const handler = (e) => {
      if (settingsRef.current?.contains(e.target)) return;
      if (settingsBtnRef.current?.contains(e.target)) return;
      setSettingsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [settingsOpen]);

  const {
    presets, togglePreset, importPreset, removePreset, exportPreset,
    activePresetNames, hasActivePresets,
    mergedQuickRef, mergedTopics, mergedWiki, mergedCategories,
  } = usePresets();

  const setMode = (m) => { wikiState.mode = m; _setMode(m); };
  const setActiveId = (id) => { wikiState.activeId = id; _setActiveId(id); };

  const handleSearchChange = useCallback((e) => {
    const val = e.target.value;
    setSearchInput(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setSearch(val), 200);
  }, []);

  const activeEntry = mergedWiki.find((e) => e.id === activeId) || mergedWiki[0];

  const filteredByCategory = useMemo(() => {
    const map = {};
    mergedCategories.forEach((cat) => { map[cat] = []; });
    mergedWiki.forEach((entry) => {
      if (entry.parentId) return; // subsections don't appear in sidebar
      if (!search || fuzzyMatch(entry.title, search) || fuzzyMatch(entry.content, search)) {
        if (map[entry.category]) map[entry.category].push(entry);
      }
    });
    return map;
  }, [search, mergedWiki, mergedCategories]);

  const searchResults = useMemo(() => {
    if (!search || search.length < 2) return [];
    const q = search.toLowerCase();
    return mergedWiki
      .filter((e) => !e.parentId) // don't show subsections as separate results
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
  }, [search, mergedWiki]);

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
      const entry = mergedWiki.find((e) => e.id === id);
      return entry ? `[${label || entry.title}](#wiki:${id})` : label || id;
    });
  };

  const markdownComponents = {
    a: ({ href, children, ...props }) => {
      if (href?.startsWith('#wiki:')) {
        const targetId = href.replace('#wiki:', '');
        return (
          <a href={href} className={styles.wikiLink} onClick={(e) => { e.preventDefault(); navigateTo(targetId); }} {...props}>
            {children}
          </a>
        );
      }
      return <a href={href} {...props}>{children}</a>;
    },
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
        <span className={styles.versionBadge}>v{WIKI_VERSION}</span>
        <button
          ref={settingsBtnRef}
          className={`${styles.settingsBtn} ${settingsOpen ? styles.settingsBtnActive : ''} ${hasActivePresets ? styles.settingsBtnIndicator : ''}`}
          onClick={() => setSettingsOpen(!settingsOpen)}
          title="Content Packs"
        >
          &#9881;
        </button>
      </ToolNavbar>

      <div ref={settingsRef} className={`${styles.settingsDropdown} ${settingsOpen ? styles.settingsDropdownOpen : ''}`}>
        <PresetSettings
          presets={presets}
          onToggle={togglePreset}
          onImport={importPreset}
          onExport={exportPreset}
          onRemove={removePreset}
        />
      </div>

      {mode === 'quickref' ? (
        <div className={styles.quickRefWrapper}>
          <QuickRefPanel
            quickRef={mergedQuickRef}
            topics={mergedTopics}
            onNavigateWiki={navigateTo}
          />
        </div>
      ) : (
        <div className={styles.layout}>
          <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
            <nav className={styles.sidebarNav}>
              {mergedCategories.map((cat) => {
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
                        {entry.source && <span className={styles.navBadge}>{entry.source}</span>}
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
                      <span className={styles.searchResultTitle}>
                        {highlightMatch(entry.title, search)}
                        <SourceBadge source={entry.source} />
                      </span>
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
                  <span className={styles.breadcrumbTitle}>
                    {activeEntry.title}
                    <SourceBadge source={activeEntry.source} />
                  </span>
                </div>

                {(activeEntry.source || (activeEntry.subsections && activeEntry.subsections.length > 0)) && (
                  <div className={styles.homebrewDisclaimer}>
                    This article contains homebrew content
                    {activeEntry.source && <> from <strong>{activeEntry.source}</strong></>}
                    {!activeEntry.source && activeEntry.subsections?.length > 0 && <> from <strong>{[...new Set(activeEntry.subsections.map(s => s.source))].join(', ')}</strong></>}
                    . Homebrew rules are not part of the official CPR rulebook.
                  </div>
                )}

                <div className={styles.articleBody}>
                  <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {processContent(activeEntry.content)}
                  </Markdown>

                  {/* Homebrew subsections */}
                  {activeEntry.subsections && activeEntry.subsections.length > 0 && (
                    <div className={styles.subsectionsBlock}>
                      {activeEntry.subsections.map((sub) => (
                        <div key={sub.id} className={styles.subsection}>
                          <div className={styles.subsectionHeader}>
                            <SourceBadge source={sub.source} />
                          </div>
                          <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                            {processContent(sub.content)}
                          </Markdown>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {activeEntry.related && activeEntry.related.length > 0 && (
                  <div className={styles.relatedSection}>
                    <span className={styles.relatedTitle}>Related</span>
                    <div className={styles.relatedLinks}>
                      {activeEntry.related.map((relId) => {
                        const rel = mergedWiki.find((e) => e.id === relId);
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
