import skills from '../../data/skills.json';
import SkillBadge from '../../components/SkillBadge/SkillBadge';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <ScrollReveal>
        <h2 className={styles.heading}>Skills</h2>
      </ScrollReveal>
      {Object.entries(skills).map(([category, items], catIdx) => (
        <ScrollReveal key={category} delay={catIdx * 0.15}>
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
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
