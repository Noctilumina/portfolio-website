import { useI18n } from '../../i18n/I18nContext';
import styles from './SkillBadge.module.css';

export default function SkillBadge({ skill }) {
  const { locale } = useI18n();
  const displayName = locale === 'nl' && skill.nameNl ? skill.nameNl : skill.name;

  return (
    <div className={styles.badge}>
      <span className={styles.icon}>{skill.icon}</span>
      <span className={styles.name}>{displayName}</span>
    </div>
  );
}
