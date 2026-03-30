import skills from '../../data/skills.json';
import { useI18n } from '../../i18n/I18nContext';
import SkillBadge from '../../components/SkillBadge/SkillBadge';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Skills.module.css';

export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className={styles.section}>
      <ScrollReveal textOnly>
        <h2 className={styles.heading}>{t('skills.heading')}</h2>
      </ScrollReveal>
      {Object.entries(skills).map(([category, items], catIdx) => (
        <ScrollReveal key={category} delay={catIdx * 0.15}>
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>{t(`skills.categories.${category}`)}</h3>
            <div className={styles.badges}>
              {items.map((skill, i) => (
                <ScrollReveal key={skill.name} delay={catIdx * 0.15 + i * 0.05}>
                  <SkillBadge skill={skill} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
