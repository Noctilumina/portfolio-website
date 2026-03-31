import Hero from '../sections/Hero/Hero';
import Projects from '../sections/Projects/Projects';
import Skills from '../sections/Skills/Skills';
import Experience from '../sections/Experience/Experience';
import SectionDivider from '../components/SectionDivider/SectionDivider';
import Footer from '../components/Footer/Footer';

export default function Home() {
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
      <Footer />
    </main>
  );
}
