import styles from './DocxEditor.module.css';

export default function EditorToolbar({ editor }) {
  if (!editor) return null;

  const btn = (label, action, isActive) => (
    <button
      key={label}
      type="button"
      className={`${styles.toolbarBtn} ${isActive ? styles.toolbarBtnActive : ''}`}
      onMouseDown={(e) => { e.preventDefault(); action(); }}
      title={label}
    >
      {label}
    </button>
  );

  return (
    <div className={styles.toolbar}>
      {btn('B', () => editor.chain().focus().toggleBold().run(), editor.isActive('bold'))}
      {btn('I', () => editor.chain().focus().toggleItalic().run(), editor.isActive('italic'))}
      {btn('U', () => editor.chain().focus().toggleUnderline().run(), editor.isActive('underline'))}
      <div className={styles.toolbarDivider} />
      {btn('H1', () => editor.chain().focus().toggleHeading({ level: 1 }).run(), editor.isActive('heading', { level: 1 }))}
      {btn('H2', () => editor.chain().focus().toggleHeading({ level: 2 }).run(), editor.isActive('heading', { level: 2 }))}
      <div className={styles.toolbarDivider} />
      {btn('•', () => editor.chain().focus().toggleBulletList().run(), editor.isActive('bulletList'))}
      {btn('1.', () => editor.chain().focus().toggleOrderedList().run(), editor.isActive('orderedList'))}
      <div className={styles.toolbarDivider} />
      {btn('Table', () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(), false)}
    </div>
  );
}
