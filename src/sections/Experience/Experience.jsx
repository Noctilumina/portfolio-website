import experience from '../../data/experience.json';
import TimelineEntry from '../../components/TimelineEntry/TimelineEntry';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={`${styles.section} ${styles.tinted}`}>
      <ScrollReveal>
        <h2 className={styles.heading}>Experience</h2>
      </ScrollReveal>
      <div className={styles.timeline}>
        {experience.map((entry, i) => (
          <ScrollReveal key={entry.id} delay={i * 0.15}>
            <TimelineEntry entry={entry} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
