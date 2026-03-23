import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

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
    return <p className={styles.success} role="status">Thanks! I'll get back to you soon.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Contact form">
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">Name <span aria-label="required">*</span></label>
        <input className={styles.input} type="text" id="name" name="name" required aria-required="true" />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Email <span aria-label="required">*</span></label>
        <input className={styles.input} type="email" id="email" name="email" required aria-required="true" />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Message <span aria-label="required">*</span></label>
        <textarea className={styles.textarea} id="message" name="message" required aria-required="true" />
      </div>
      <button
        className={styles.button}
        type="submit"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
      >
        <span className={styles.buttonTop}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </span>
      </button>
      {status === 'error' && (
        <p role="alert" className={styles.error}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
