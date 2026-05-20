import { useState, useRef, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { Table, TableRow, TableHeader, TableCell } from '@tiptap/extension-table';
import { Image } from '@tiptap/extension-image';
import mammoth from 'mammoth';
import EditorToolbar from './EditorToolbar';
import styles from './DocxEditor.module.css';

export default function DocxEditor() {
  const [html, setHtml] = useState(null);
  const [fileName, setFileName] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Image,
    ],
    content: html || '',
  });

  const loadFile = useCallback(async (file) => {
    if (!file || !file.name.endsWith('.docx')) return;
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });
    setFileName(file.name);
    setHtml(result.value);
    editor?.commands.setContent(result.value);
  }, [editor]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    loadFile(file);
  }, [loadFile]);

  const handleFileInput = useCallback((e) => {
    loadFile(e.target.files[0]);
  }, [loadFile]);

  const handleNewFile = () => {
    setHtml(null);
    setFileName('');
    editor?.commands.clearContent();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDownload = async () => {
    const { Document, Packer, Paragraph, TextRun, HeadingLevel, UnderlineType } = await import('docx');

    const getRuns = (el) => {
      const runs = [];
      const walk = (node, fmt = {}) => {
        if (node.nodeType === 3) {
          if (node.textContent) runs.push(new TextRun({ text: node.textContent, ...fmt }));
        } else if (node.nodeType === 1) {
          const t = node.tagName.toLowerCase();
          const f = { ...fmt };
          if (t === 'strong' || t === 'b') f.bold = true;
          if (t === 'em' || t === 'i') f.italics = true;
          if (t === 'u') f.underline = { type: UnderlineType.SINGLE };
          node.childNodes.forEach(c => walk(c, f));
        }
      };
      walk(el);
      return runs;
    };

    const parsed = new DOMParser().parseFromString(editor.getHTML(), 'text/html');
    const children = [];
    for (const el of parsed.body.children) {
      const tag = el.tagName.toLowerCase();
      if (tag === 'h1') {
        children.push(new Paragraph({ children: getRuns(el), heading: HeadingLevel.HEADING_1 }));
      } else if (tag === 'h2') {
        children.push(new Paragraph({ children: getRuns(el), heading: HeadingLevel.HEADING_2 }));
      } else if (tag === 'ul' || tag === 'ol') {
        for (const li of el.children) {
          children.push(new Paragraph({ children: getRuns(li), bullet: { level: 0 } }));
        }
      } else {
        children.push(new Paragraph({ children: getRuns(el) }));
      }
    }

    const doc = new Document({ sections: [{ children }] });
    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName || 'document.docx';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!html) {
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>DOCX Editor</span>
        </div>
        <div className={styles.uploadZone}>
          <div
            className={`${styles.dropArea} ${dragOver ? styles.dropAreaActive : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <span className={styles.dropIcon}>📄</span>
            <p className={styles.dropLabel}>Drop a .docx file here</p>
            <p className={styles.dropSub}>or click to browse</p>
            <button className={styles.browseBtn} type="button">Browse Files</button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".docx"
            className={styles.fileInput}
            onChange={handleFileInput}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>DOCX Editor</span>
        <div className={styles.headerActions}>
          <button className={styles.headerBtn} onClick={handleNewFile} type="button">↑ New File</button>
          <button className={`${styles.headerBtn} ${styles.headerBtnAccent}`} onClick={handleDownload} type="button">↓ Download</button>
        </div>
      </div>
      <div className={styles.editorShell}>
        <EditorToolbar editor={editor} />
        <div className={styles.editorContent}>
          <EditorContent editor={editor} />
        </div>
        <div className={styles.statusBar}>
          <span>📄 {fileName}</span>
        </div>
      </div>
    </div>
  );
}
