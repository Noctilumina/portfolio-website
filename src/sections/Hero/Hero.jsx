import { useI18n } from '../../i18n/I18nContext';
import PixelScene from '../../components/PixelScene/PixelScene';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="hero" className={styles.hero}>
      <PixelScene />
      <div className={styles.title}>
        <h1 className={styles.name}>{t('hero.name')}</h1>
        <p className={styles.role}>
          {t('hero.rolePrefix')} {t('hero.roleSuffix')}
        </p>
      </div>
    </section>
  );
}
