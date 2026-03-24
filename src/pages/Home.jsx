import { useI18n } from '../i18n/I18nContext';
import Hero from '../sections/Hero/Hero';
import Projects from '../sections/Projects/Projects';
import Skills from '../sections/Skills/Skills';
import Experience from '../sections/Experience/Experience';
import Contact from '../sections/Contact/Contact';
import SectionDivider from '../components/SectionDivider/SectionDivider';

export default function Home() {
  const { t } = useI18n();

  return (
    <main id="main-content">
      <Hero />
      <SectionDivider color="var(--color-primary)" />
      <Projects />
      <SectionDivider flip color="var(--color-primary)" />
      <Skills />
      <SectionDivider color="var(--color-secondary)" />
      <Experience />
      <SectionDivider flip color="var(--color-secondary)" />
      <Contact />
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--color-muted)',
        fontSize: '0.85rem',
        borderTop: '1px solid var(--color-border)',
      }}>
        {t('footer.text', { year: new Date().getFullYear() })}
      </footer>
    </main>
  );
}
