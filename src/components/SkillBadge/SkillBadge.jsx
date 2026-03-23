import styles from './SkillBadge.module.css';

export default function SkillBadge({ skill }) {
  return (
    <div className={styles.badge}>
      <span className={styles.icon}>{skill.icon}</span>
      <span className={styles.name}>{skill.name}</span>
    </div>
  );
}
