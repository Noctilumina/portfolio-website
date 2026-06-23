import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { usePageTransition } from '../../../App';
import { useI18n } from '../../../i18n/I18nContext';
import { Routes } from '../../../constants/routes';
import styles from './RegexTester.module.css';

// ── Regex building & matching ──────────────────────────────────────────────

function buildRegex(pattern, flags) {
  if (!pattern) return null;
  try {
    return new RegExp(pattern, flags);
  } catch (e) {
    return { error: e.message };
  }
}

function findMatches(text, regex) {
  if (!regex || regex.error) return [];
  const matches = [];
  if (regex.global) {
    let m;
    while ((m = regex.exec(text)) !== null) {
      matches.push(m);
      if (m[0].length === 0) regex.lastIndex++;
      if (matches.length > 10000) break;
    }
  } else {
    const m = regex.exec(text);
    if (m) matches.push(m);
  }
  return matches;
}

function getNamedGroups(regex) {
  const groups = {};
  const source = regex.source;
  const namedGroupRegex = /\?<([^>]+)>/g;
  let m;
  while ((m = namedGroupRegex.exec(source)) !== null) {
    groups[m[1]] = null;
  }
  return groups;
}

// ── CheatSheet toggle ──────────────────────────────────────────────────────

function CheatSheet() {
  const [open, setOpen] = useState(false);
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>
        <button
          className={styles.cheatToggle}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open ? '▼' : '▶'} REGEX CHEATSHEET
        </button>
      </legend>
      {open && (
        <div className={styles.cheatContent}>
          <div className={styles.cheatCol}>
            <h4>Anchors</h4>
            <code>^ $ \b \B</code>
            <h4>Character Classes</h4>
            <code>. \d \D \w \W \s \S</code>
            <h4>Quantifiers</h4>
            <code>* + ? {'{n}'} {'{n,}'} {'{n,m}'}</code>
          </div>
          <div className={styles.cheatCol}>
            <h4>Groups</h4>
            <code>(...) (?:...) (?&lt;name&gt;...)</code>
            <h4>Lookarounds</h4>
            <code>(?=...) (?!...) (?&lt;=...) (?&lt;!...)</code>
            <h4>Flags</h4>
            <code>g i m s u y</code>
          </div>
        </div>
      )}
    </fieldset>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function RegexTester() {
  const { startTransition } = usePageTransition();
  const { t } = useI18n();
  const [patternInput, setPatternInput] = useState('');
  const [testString, setTestString] = useState('');
  const [debouncedTestString, setDebouncedTestString] = useState('');
  const [replaceWith, setReplaceWith] = useState('');
  const [flags, setFlags] = useState({
    g: false,
    i: false,
    m: false,
    s: false,
    u: false,
    y: false,
  });
  const debounceRef = useRef(null);

  // Debounce test string input (300ms)
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedTestString(testString);
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [testString]);

  // Build flag string
  const flagStr = useMemo(
    () => Object.entries(flags).filter(([_, v]) => v).map(([k]) => k).join(''),
    [flags]
  );

  // Build regex
  const regex = useMemo(() => buildRegex(patternInput, flagStr), [patternInput, flagStr]);

  // Find matches
  const matches = useMemo(() => {
    if (!debouncedTestString) return [];
    return findMatches(debouncedTestString, regex);
  }, [debouncedTestString, regex]);

  // Get named groups
  const namedGroups = useMemo(
    () => regex && !regex.error ? getNamedGroups(regex) : {},
    [regex]
  );

  // Build highlight spans with alternating colors
  const highlightedParts = useMemo(() => {
    if (!debouncedTestString || !regex || regex.error) return null;
    if (matches.length === 0) return debouncedTestString;

    const parts = [];
    let lastIdx = 0;
    let colorIdx = 0;

    for (const match of matches) {
      const { index, 0: fullMatch } = match;
      if (index > lastIdx) {
        parts.push({ text: debouncedTestString.slice(lastIdx, index), type: 'text' });
      }
      parts.push({
        text: fullMatch,
        type: 'match',
        colorIdx: colorIdx % 2,
      });
      colorIdx++;
      lastIdx = index + fullMatch.length;
    }

    if (lastIdx < debouncedTestString.length) {
      parts.push({ text: debouncedTestString.slice(lastIdx), type: 'text' });
    }

    return parts;
  }, [debouncedTestString, regex, matches]);

  // Build replaced output
  const replacedOutput = useMemo(() => {
    if (!debouncedTestString || !regex || regex.error) return debouncedTestString;
    try {
      return debouncedTestString.replace(regex, replaceWith);
    } catch (e) {
      return `Error: ${e.message}`;
    }
  }, [debouncedTestString, regex, replaceWith]);

  const toggleFlag = (flag) => {
    setFlags(prev => ({ ...prev, [flag]: !prev[flag] }));
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('regexTester.heading')}</h1>
        <p className={styles.subtitle}>{t('regexTester.subtitle')}</p>
      </div>

      {/* ── Pattern input ── */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Pattern</legend>
        <div className={styles.patternWrap}>
          <div className={styles.patternInput}>
            <span className={styles.patternSlash}>/</span>
            <input
              type="text"
              value={patternInput}
              onChange={e => setPatternInput(e.target.value)}
              placeholder="e.g. \b\w+\b"
              className={styles.patternField}
            />
            <span className={styles.patternSlash}>/</span>
            <span className={styles.patternFlags}>{flagStr}</span>
          </div>
          {regex && regex.error && (
            <div className={styles.error}>{regex.error}</div>
          )}
        </div>
      </fieldset>

      {/* ── Flags ── */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Flags</legend>
        <div className={styles.flagGrid}>
          {['g', 'i', 'm', 's', 'u', 'y'].map(flag => (
            <label key={flag} className={styles.flagLabel}>
              <input
                type="checkbox"
                checked={flags[flag]}
                onChange={() => toggleFlag(flag)}
                className={styles.flagCheckbox}
              />
              <span className={styles.flagText}>{flag}</span>
              <span className={styles.flagDesc}>
                {flag === 'g' && 'global'}
                {flag === 'i' && 'insensitive'}
                {flag === 'm' && 'multiline'}
                {flag === 's' && 'dotAll'}
                {flag === 'u' && 'unicode'}
                {flag === 'y' && 'sticky'}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* ── Test string ── */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Test String</legend>
        <textarea
          value={testString}
          onChange={e => setTestString(e.target.value)}
          placeholder="Paste text to test here..."
          className={styles.textarea}
          rows={6}
        />
      </fieldset>

      {/* ── Output: highlighted matches ── */}
      {debouncedTestString && !regex?.error && (
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Highlighted Output ({matches.length} match{matches.length !== 1 ? 'es' : ''})</legend>
          <div className={styles.highlightOutput}>
            {highlightedParts === null ? (
              testString
            ) : typeof highlightedParts === 'string' ? (
              highlightedParts
            ) : (
              highlightedParts.map((part, i) =>
                part.type === 'text' ? (
                  <span key={i}>{part.text}</span>
                ) : (
                  <span
                    key={i}
                    className={`${styles.highlight} ${styles[`highlight${part.colorIdx}`]}`}
                  >
                    {part.text}
                  </span>
                )
              )
            )}
          </div>
        </fieldset>
      )}

      {/* ── Match details ── */}
      {matches.length > 0 && (
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Matches ({matches.length})</legend>
          <div className={styles.matchList}>
            {matches.map((match, i) => (
              <div key={i} className={styles.matchItem}>
                <div className={styles.matchHeader}>
                  <span className={styles.matchIndex}>#{i}</span>
                  <span className={styles.matchText}>{match[0]}</span>
                  <span className={styles.matchPos}>pos {match.index}</span>
                </div>
                {match.length > 1 && (
                  <div className={styles.captureGroups}>
                    {match.slice(1).map((group, gi) => (
                      <div key={gi} className={styles.captureGroup}>
                        <span className={styles.captureIndex}>$</span>
                        <span className={styles.captureNum}>{gi + 1}</span>
                        <code className={styles.captureValue}>{group ?? '(empty)'}</code>
                      </div>
                    ))}
                    {Object.keys(namedGroups).length > 0 && match.groups && (
                      <>
                        {Object.entries(match.groups).map(([name, value]) => (
                          <div key={name} className={styles.captureGroup}>
                            <span className={styles.captureIndex}>$&lt;</span>
                            <span className={styles.captureName}>{name}</span>
                            <span className={styles.captureIndex}>&gt;</span>
                            <code className={styles.captureValue}>{value ?? '(empty)'}</code>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </fieldset>
      )}

      {/* ── Replace ── */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Replace</legend>
        <input
          type="text"
          value={replaceWith}
          onChange={e => setReplaceWith(e.target.value)}
          placeholder="e.g. [$1] or $&name or $&"
          className={styles.replaceField}
        />
        {debouncedTestString && regex && !regex.error && (
          <fieldset className={styles.nestedFieldset}>
            <legend className={styles.nestedLegend}>Result</legend>
            <div className={styles.replaceOutput}>
              {replacedOutput}
            </div>
          </fieldset>
        )}
      </fieldset>

      {/* ── Cheatsheet ── */}
      <CheatSheet />

      {/* ── Back button ── */}
      <div className={styles.backWrapper}>
        <button
          className={styles.backButton}
          onClick={() => startTransition(Routes.TOOLS)}
          aria-label="Back to tools"
        >
          {t('regexTester.backTools')}
        </button>
      </div>
    </main>
  );
}
