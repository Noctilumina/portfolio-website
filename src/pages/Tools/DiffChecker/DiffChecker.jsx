import { useState } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import styles from './DiffChecker.module.css';

function computeDiff(a, b) {
  const linesA = a.split('\n');
  const linesB = b.split('\n');
  const max = Math.max(linesA.length, linesB.length);
  const result = [];
  for (let i = 0; i < max; i++) {
    const la = i < linesA.length ? linesA[i] : undefined;
    const lb = i < linesB.length ? linesB[i] : undefined;
    if (la === undefined) {
      result.push({ type: 'added', left: '', right: lb });
    } else if (lb === undefined) {
      result.push({ type: 'removed', left: la, right: '' });
    } else if (la === lb) {
      result.push({ type: 'same', left: la, right: lb });
    } else {
      result.push({ type: 'changed', left: la, right: lb });
    }
  }
  return result;
}

export default function DiffChecker() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [diff, setDiff] = useState(null);

  const handleCompare = () => {
    setDiff(computeDiff(left, right));
  };

  const handleClear = () => {
    setLeft('');
    setRight('');
    setDiff(null);
  };

  const stats = diff ? {
    same: diff.filter((d) => d.type === 'same').length,
    changed: diff.filter((d) => d.type === 'changed').length,
    added: diff.filter((d) => d.type === 'added').length,
    removed: diff.filter((d) => d.type === 'removed').length,
  } : null;

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('diffChecker.heading')}</h1>
        <p className={styles.subtitle}>{t('diffChecker.subtitle')}</p>
      </div>

      <div className={styles.toolbar}>
        <button className={styles.toolbarBtn} onClick={handleCompare}>{t('diffChecker.compare')}</button>
        <button className={styles.toolbarBtnSecondary} onClick={handleClear}>{t('diffChecker.clear')}</button>
      </div>

      <div className={styles.inputArea}>
        <div className={styles.pane}>
          <label className={styles.paneLabel}>{t('diffChecker.original')}</label>
          <textarea
            className={styles.textarea}
            value={left}
            onChange={(e) => setLeft(e.target.value)}
            placeholder={t('diffChecker.pasteHere')}
            spellCheck={false}
          />
        </div>
        <div className={styles.pane}>
          <label className={styles.paneLabel}>{t('diffChecker.modified')}</label>
          <textarea
            className={styles.textarea}
            value={right}
            onChange={(e) => setRight(e.target.value)}
            placeholder={t('diffChecker.pasteHere')}
            spellCheck={false}
          />
        </div>
      </div>

      {diff && (
        <>
          <div className={styles.stats}>
            <span className={styles.statSame}>{stats.same} {t('diffChecker.unchanged')}</span>
            <span className={styles.statChanged}>{stats.changed} {t('diffChecker.changed')}</span>
            <span className={styles.statAdded}>{stats.added} {t('diffChecker.added')}</span>
            <span className={styles.statRemoved}>{stats.removed} {t('diffChecker.removed')}</span>
          </div>

          <div className={styles.diffOutput}>
            <div className={styles.diffTable}>
              {diff.map((line, i) => (
                <div key={i} className={`${styles.diffRow} ${styles[`diff_${line.type}`]}`}>
                  <span className={styles.lineNum}>{i + 1}</span>
                  <span className={styles.diffLeft}>{line.left}</span>
                  <span className={styles.diffSep}>
                    {line.type === 'same' ? ' ' : line.type === 'added' ? '+' : line.type === 'removed' ? '-' : '~'}
                  </span>
                  <span className={styles.diffRight}>{line.right}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition('/tools')}>
          {t('diffChecker.backTools')}
        </button>
      </div>
    </main>
  );
}
