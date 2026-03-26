import { useState } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import styles from './JsonFormatter.module.css';

function JsonTree({ data, depth = 0 }) {
  const [collapsed, setCollapsed] = useState(depth > 2);

  if (data === null) return <span className={styles.valNull}>null</span>;
  if (typeof data === 'boolean') return <span className={styles.valBool}>{String(data)}</span>;
  if (typeof data === 'number') return <span className={styles.valNum}>{data}</span>;
  if (typeof data === 'string') return <span className={styles.valStr}>"{data}"</span>;

  const isArray = Array.isArray(data);
  const entries = isArray ? data.map((v, i) => [i, v]) : Object.entries(data);
  const bracket = isArray ? ['[', ']'] : ['{', '}'];

  if (entries.length === 0) {
    return <span className={styles.valBracket}>{bracket[0]}{bracket[1]}</span>;
  }

  return (
    <span>
      <button className={styles.toggle} onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '\u25B6' : '\u25BC'}
      </button>
      <span className={styles.valBracket}>{bracket[0]}</span>
      {collapsed ? (
        <span className={styles.collapsedHint} onClick={() => setCollapsed(false)}>
          {entries.length} {isArray ? 'items' : 'keys'}...
        </span>
      ) : (
        <span className={styles.treeBlock}>
          {entries.map(([key, val], i) => (
            <span key={key} className={styles.treeLine}>
              {!isArray && <span className={styles.treeKey}>"{key}"</span>}
              {!isArray && <span className={styles.valBracket}>: </span>}
              <JsonTree data={val} depth={depth + 1} />
              {i < entries.length - 1 && <span className={styles.valBracket}>,</span>}
            </span>
          ))}
        </span>
      )}
      <span className={styles.valBracket}>{bracket[1]}</span>
    </span>
  );
}

export default function JsonFormatter() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [view, setView] = useState('formatted');
  const [parsed, setParsed] = useState(null);

  const tryParse = (text) => {
    try {
      const obj = JSON.parse(text);
      setError('');
      return obj;
    } catch (e) {
      setError(e.message);
      setOutput('');
      setParsed(null);
      return null;
    }
  };

  const handlePrettify = () => {
    const obj = tryParse(input);
    if (obj !== null) {
      setOutput(JSON.stringify(obj, null, 2));
      setParsed(obj);
      setView('formatted');
    }
  };

  const handleMinify = () => {
    const obj = tryParse(input);
    if (obj !== null) {
      setOutput(JSON.stringify(obj));
      setParsed(obj);
      setView('formatted');
    }
  };

  const handleTree = () => {
    const obj = tryParse(input);
    if (obj !== null) {
      setParsed(obj);
      setView('tree');
    }
  };

  const handleCopy = () => {
    const text = view === 'tree' ? JSON.stringify(parsed, null, 2) : output;
    navigator.clipboard.writeText(text);
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('jsonFormatter.heading')}</h1>
        <p className={styles.subtitle}>{t('jsonFormatter.subtitle')}</p>
      </div>

      <div className={styles.toolbar}>
        <button className={styles.toolbarBtn} onClick={handlePrettify}>{t('jsonFormatter.prettify')}</button>
        <button className={styles.toolbarBtn} onClick={handleMinify}>{t('jsonFormatter.minify')}</button>
        <button className={styles.toolbarBtn} onClick={handleTree}>{t('jsonFormatter.treeView')}</button>
        <button className={styles.toolbarBtn} onClick={handleCopy}>{t('jsonFormatter.copy')}</button>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.workspace}>
        <div className={styles.pane}>
          <label className={styles.paneLabel}>{t('jsonFormatter.input')}</label>
          <textarea
            className={styles.textarea}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('jsonFormatter.placeholder')}
            spellCheck={false}
          />
        </div>
        <div className={styles.pane}>
          <label className={styles.paneLabel}>{t('jsonFormatter.output')}</label>
          {view === 'tree' && parsed !== null ? (
            <div className={styles.treeOutput}>
              <JsonTree data={parsed} />
            </div>
          ) : (
            <textarea
              className={styles.textarea}
              value={output}
              readOnly
              spellCheck={false}
            />
          )}
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition('/tools')}>
          {t('jsonFormatter.backTools')}
        </button>
      </div>
    </main>
  );
}
