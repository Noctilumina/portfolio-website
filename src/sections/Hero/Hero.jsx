import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/I18nContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <motion.div
          className={styles.accentBlock}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          aria-hidden="true"
        />
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {t('hero.name')}
        </motion.h1>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {t('hero.rolePrefix')} <span className={styles.developerWord}>{t('hero.roleSuffix')}</span>
        </motion.p>
        <motion.div
          className={styles.decorLine}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
