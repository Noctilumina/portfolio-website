import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { useI18n } from '../../i18n/I18nContext';
import { usePageTransition } from '../../App';
import blogIndex from '../../data/blog/index.json';
import styles from './Blog.module.css';

// Import all markdown files from the blog directory
const markdownFiles = import.meta.glob('../../data/blog/*.md', { as: 'raw', eager: true });

export default function BlogPost() {
  const { slug } = useParams();
  const { locale } = useI18n();
  const { startTransition } = usePageTransition();

  const post = blogIndex.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main id="main-content" className={styles.page}>
        <div className={styles.notFound}>
          <h1>{locale === 'nl' ? 'Post niet gevonden' : 'Post not found'}</h1>
          <button className={styles.backButton} onClick={() => startTransition('/blog')}>
            {locale === 'nl' ? '← Terug naar blog' : '← Back to blog'}
          </button>
        </div>
      </main>
    );
  }

  // Try localized markdown first, fall back to English
  const nlKey = Object.keys(markdownFiles).find((k) => k.endsWith(`/${slug}.nl.md`));
  const enKey = Object.keys(markdownFiles).find((k) => k.endsWith(`/${slug}.md`) && !k.endsWith('.nl.md'));
  const content = locale === 'nl' && nlKey ? markdownFiles[nlKey] : (enKey ? markdownFiles[enKey] : '');

  const title = locale === 'nl' && post.titleNl ? post.titleNl : post.title;

  return (
    <main id="main-content" className={styles.page}>
      <nav aria-label="Breadcrumb">
        <button className={styles.backButton} onClick={() => startTransition('/blog')}>
          {locale === 'nl' ? '← Terug naar blog' : '← Back to blog'}
        </button>
      </nav>

      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <time className={styles.postDate}>{post.date}</time>
          <div className={styles.postTags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.postTag}>{tag}</span>
            ))}
          </div>
        </header>

        <div className={styles.articleContent}>
          <Markdown components={{
            img: ({ src, alt, ...props }) => (
              <img
                src={src?.startsWith('/') ? `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}` : src}
                alt={alt || ''}
                {...props}
              />
            )
          }}>{content}</Markdown>
        </div>
      </article>
    </main>
  );
}
