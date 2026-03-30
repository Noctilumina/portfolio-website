import { useI18n } from '../../i18n/I18nContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className={styles.footer}>
      {t('footer.text', { year: new Date().getFullYear() })}
    </footer>
  );
}
