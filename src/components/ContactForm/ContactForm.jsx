import { useState } from 'react';
import { useI18n } from '../../i18n/I18nContext';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const { t } = useI18n();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return <p className={styles.success} role="status">{t('contact.form.success')}</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label={t('contact.form.ariaLabel')}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">{t('contact.form.name')} <span aria-label={t('contact.form.required')}>*</span></label>
        <input className={styles.input} type="text" id="name" name="name" required aria-required="true" />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">{t('contact.form.emailLabel')} <span aria-label={t('contact.form.required')}>*</span></label>
        <input className={styles.input} type="email" id="email" name="email" required aria-required="true" />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">{t('contact.form.message')} <span aria-label={t('contact.form.required')}>*</span></label>
        <textarea className={styles.textarea} id="message" name="message" required aria-required="true" />
      </div>
      <button
        className={styles.button}
        type="submit"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
      >
        <span className={styles.buttonTop}>
          {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
        </span>
      </button>
      {status === 'error' && (
        <p role="alert" className={styles.error}>{t('contact.form.error')}</p>
      )}
    </form>
  );
}
