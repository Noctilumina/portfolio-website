import { useState } from 'react';
import { useI18n } from '../../i18n/I18nContext';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './About.module.css';

const dollyImages = [
  'dolly_1.jpeg',
  'dolly_2.jpeg',
  'dolly_3.jpeg',
  'dolly_4.jpeg',
  'dolly_5.jpeg',
];

export default function About() {
  const { t } = useI18n();
  const hobbies = t('about.hobbies');
  const [dollyIndex, setDollyIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  const nextDolly = () => {
    if (flipping) return;
    setFlipping(true);
    // Swap image at halfway point when circle is edge-on
    setTimeout(() => {
      setDollyIndex((i) => (i + 1) % dollyImages.length);
    }, 150);
    setTimeout(() => {
      setFlipping(false);
    }, 300);
  };

  return (
    <main id="main-content" className={styles.page}>
      <article>
        <div className={styles.header}>
          <h1 className={styles.title}>{t('about.title')}</h1>
          <div className={styles.portraitWrapper}>
            <div className={styles.meLabel} aria-hidden="true">
              <span>{t('about.me')}</span>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M5 5 C15 8, 25 18, 32 32" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M34 26 L33 33 L25 31" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div className={styles.portrait}>
              <img src={`${import.meta.env.BASE_URL}images/blog/headshots/headshot_turtleneck_iris.jpeg`} alt="Iris Peters" className={styles.portraitImage} />
            </div>
          </div>
        </div>

        <ScrollReveal textOnly>
          <div className={styles.card}>
            <div className={styles.intro}>
              <p dangerouslySetInnerHTML={{ __html: t('about.intro') }} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal textOnly delay={0.2}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>{t('about.backgroundTitle')}</h2>
            <p className={styles.text}>
              {t('about.backgroundText')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal textOnly delay={0.3}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>{t('about.whatIDoTitle')}</h2>
            <p className={styles.text}>
              {t('about.whatIDoText')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal textOnly delay={0.4}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>{t('about.beyondCodeTitle')}</h2>
            <p className={styles.text}>
              {t('about.beyondCodeText')}
            </p>
            <div className={styles.beyondImageWrapper}>
              <div className={styles.alsoMeLabel} aria-hidden="true">
                <svg width="50" height="45" viewBox="0 0 50 45" fill="none">
                  <path d="M45 14 C30 14, 16 22, 10 42" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M19 34 L10 44 L9 33" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span>{t('about.alsoMe')}</span>
              </div>
              <div className={styles.beyondImage}>
                <img src={`${import.meta.env.BASE_URL}images/me_heimdall_games.jpeg`} alt="Iris at HEMA" className={styles.beyondImageImg} />
              </div>
            </div>
            <p className={`${styles.text} ${styles.hobbiesIntroSpacing}`}>
              {t('about.hobbiesIntro')}
            </p>
            <ul className={styles.hobbyList}>
              {Array.isArray(hobbies) && hobbies.map((hobby, i) => (
                <li key={i}>{hobby}</li>
              ))}
            </ul>
            <div className={styles.plantSection}>
              <div className={styles.plantLabelArea}>
                <div className={styles.plantLabel} aria-hidden="true">
                  <span>{t('about.plantLabel')}</span>
                  <svg width="50" height="45" viewBox="0 0 50 45" fill="none">
                    <path d="M5 5 C15 10, 30 20, 42 35" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <path d="M37 30 L43 37 L35 36" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              </div>
              <div
                className={`${styles.plantCircle} ${flipping ? styles.plantCircleFlip : ''}`}
                onClick={nextDolly}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && nextDolly()}
                aria-label="Click to see more pictures of Dolly"
              >
                <img src={`${import.meta.env.BASE_URL}images/${dollyImages[dollyIndex]}`} alt="Dolly the dog" className={styles.plantImage} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </article>
    </main>
  );
}
