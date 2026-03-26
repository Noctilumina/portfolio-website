import { useState, useRef } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import styles from './MdEditor.module.css';

const DEFAULT_MD = `# Hello World

This is a **Markdown editor** with live preview, styled in the portfolio's pop art theme.

## Features

- Live side-by-side preview
- Supports all standard Markdown
- Code blocks with syntax styling
- Print or copy your rendered output

## Example Code

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Blockquotes

> "We have the power to create our own reality. Dream it, Think it, Say it, Do it."
> — Twiggy Pucci Garçon

## Links & Images

Check out [my portfolio](https://noctilumina.github.io/portfolio-website/) for more.

---

Start editing on the left to see your changes here!
`;

export default function MdEditor() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const [md, setMd] = useState(DEFAULT_MD);
  const [tab, setTab] = useState('edit');
  const textareaRef = useRef(null);

  const handleCopyHtml = () => {
    const previewEl = document.getElementById('md-preview-content');
    if (!previewEl) return;
    const blob = new Blob([previewEl.innerHTML], { type: 'text/html' });
    navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })]).catch(() => {
      navigator.clipboard.writeText(previewEl.innerText);
    });
  };

  const handleCopyMd = () => {
    navigator.clipboard.writeText(md);
  };

  const handleDownload = () => {
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleOpen = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.md,.markdown,.txt';
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => setMd(ev.target.result);
      reader.readAsText(file);
    };
    input.click();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = textareaRef.current;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const newValue = md.substring(0, start) + '  ' + md.substring(end);
      setMd(newValue);
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 2;
      });
    }
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('mdEditor.heading')}</h1>
        <p className={styles.subtitle}>{t('mdEditor.subtitle')}</p>
      </div>

      <div className={styles.toolbar}>
        <button className={styles.toolbarBtn} onClick={handleOpen}>{t('mdEditor.open')}</button>
        <button className={styles.toolbarBtn} onClick={handleDownload}>{t('mdEditor.download')}</button>
        <button className={styles.toolbarBtn} onClick={handleCopyMd}>{t('mdEditor.copyMd')}</button>
        <button className={styles.toolbarBtn} onClick={handleCopyHtml}>{t('mdEditor.copyHtml')}</button>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === 'edit' ? styles.tabActive : ''}`}
          onClick={() => setTab('edit')}
        >
          {t('mdEditor.editTab')}
        </button>
        <button
          className={`${styles.tab} ${tab === 'preview' ? styles.tabActive : ''}`}
          onClick={() => setTab('preview')}
        >
          {t('mdEditor.previewTab')}
        </button>
      </div>

      <div className={styles.workspace}>
        <div className={`${styles.editorPane} ${tab === 'edit' ? styles.panelVisible : styles.panelHidden}`}>
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            value={md}
            onChange={(e) => setMd(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
          />
        </div>
        <div className={`${styles.previewPane} ${tab === 'preview' ? styles.panelVisible : styles.panelHidden}`}>
          <div id="md-preview-content" className={styles.articleContent}>
            <Markdown remarkPlugins={[remarkGfm]}>{md}</Markdown>
          </div>
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition('/tools')}>
          {t('mdEditor.backTools')}
        </button>
      </div>
    </main>
  );
}
