# DOCX Editor: Edit Word Files Without Installing Word

Sometimes you need to make a quick edit to a Word document. Fix a name, update a date, change a sentence. Then you remember you need Word for that, and Word costs money, and LibreOffice is fine but takes forever to open, and your online alternative of choice wants you to create an account.

This tool lets you do it in the browser instead.

## How It Works

Drop a .docx file onto the editor or click to open the file picker. The document gets converted from DOCX format to editable rich text using mammoth.js, which handles headings, bold, italic, underline, tables, and images. The converted content appears in a TipTap editor — a proper rich text editor with a full toolbar.

Edit what you need to edit. The editor supports:

- Headings (H1–H3)
- Bold, italic, underline, strikethrough
- Ordered and unordered lists
- Tables with resizable columns
- Inline images
- Undo/redo

When you're done, export back to .docx and download it.

![DOCX editor with a document loaded showing headings and a table](/images/blog/docx-editor/editor-loaded.png)

## What It's For

Quick edits on simple documents. If the document has tracked changes, complex styles, macros, or heavy formatting you want to preserve exactly, use the real software. But for clean documents where you just need to change some content, this is faster than opening anything else.

It runs entirely in the browser. Nothing is uploaded anywhere. The file stays on your machine and the conversion happens locally.

![Export dialog with filename field and download button](/images/blog/docx-editor/export-dialog.png)
