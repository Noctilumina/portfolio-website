import experience from '../../data/experience.json';
import { useI18n } from '../../i18n/I18nContext';
import TimelineEntry from '../../components/TimelineEntry/TimelineEntry';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Experience.module.css';

export default function Experience() {
  const { t } = useI18n();
  const experienceRaw = experience;
  const localizedExperience = experienceRaw.map((entry, i) => ({
    ...entry,
    ...(t(`experienceData.${i}`) || {}),
  }));

  return (
    <section id="experience" className={`${styles.section} ${styles.tinted}`}>
      <ScrollReveal textOnly>
        <h2 className={styles.heading}>{t('experience.heading')}</h2>
      </ScrollReveal>
      <div className={styles.timeline}>
        {localizedExperience.map((entry, i) => (
          <ScrollReveal key={entry.id} delay={i * 0.15} textOnly>
            <TimelineEntry entry={entry} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
