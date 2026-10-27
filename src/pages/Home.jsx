import Hero from '../sections/Hero/Hero';
import Projects from '../sections/Projects/Projects';
import Skills from '../sections/Skills/Skills';
import Experience from '../sections/Experience/Experience';
import DitherEdge from '../components/DitherEdge/DitherEdge';
import Footer from '../components/Footer/Footer';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main id="main-content" className={styles.home}>
      <Hero />
      <DitherEdge from="--px-ground" to="--px-s1" seed={1} />
      <Projects />
      <DitherEdge from="--px-s1" to="--px-s2" seed={2} />
      <Skills />
      <DitherEdge from="--px-s2" to="--px-s3" seed={3} />
      <Experience />
      <DitherEdge from="--px-s3" to="--px-night" seed={4} />
      <Footer />
    </main>
  );
}
