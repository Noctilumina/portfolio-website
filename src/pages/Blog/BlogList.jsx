import { useI18n } from '../../i18n/I18nContext';
import { usePageTransition } from '../../App';
import { Locale } from '../../constants/locale';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import blogIndex from '../../data/blog/index.json';
import styles from './Blog.module.css';

export default function BlogList() {
  const { t, locale } = useI18n();
  const { startTransition } = usePageTransition();

  const sorted = [...blogIndex].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main id="main-content" className={styles.page}>
      <h1 className={styles.title}>Blog</h1>

      <div className={styles.posts}>
        {sorted.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 0.1}>
            <article
              className={styles.postCard}
              onClick={() => startTransition(`/blog/${post.slug}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && startTransition(`/blog/${post.slug}`)}
            >
              <div className={styles.postMeta}>
                <time className={styles.postDate}>{post.date}</time>
                <div className={styles.postTags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.postTag}>{tag}</span>
                  ))}
                </div>
              </div>
              <h2 className={styles.postTitle}>
                {locale === Locale.NL && post.titleNl ? post.titleNl : post.title}
              </h2>
              <p className={styles.postExcerpt}>
                {locale === Locale.NL && post.excerptNl ? post.excerptNl : post.excerpt}
              </p>
              <span className={styles.readMore}>
                {locale === Locale.NL ? 'Lees meer →' : 'Read more →'}
              </span>
            </article>
          </ScrollReveal>
        ))}
      </div>

      {sorted.length === 0 && (
        <p className={styles.empty}>
          {locale === Locale.NL ? 'Nog geen posts. Komt binnenkort!' : 'No posts yet. Coming soon!'}
        </p>
      )}
    </main>
  );
}
