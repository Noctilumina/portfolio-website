import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './About.module.css';

export default function About() {
  return (
    <main id="main-content" className={styles.page}>
      <article>
        <ScrollReveal>
          <div className={styles.header}>
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.portrait}>
              <span className={styles.portraitPlaceholder}>IP</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className={styles.card}>
            <div className={styles.intro}>
              <p>
                Hi, I'm <strong>Iris Peters</strong> — a fullstack developer based in 's-Hertogenbosch, the Netherlands. I build web applications, cloud infrastructure, and everything in between.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Background</h2>
            <p className={styles.text}>
              With a Bachelor's in Computer Software Engineering from Avans Hogeschool, I've spent 4+ years working across the full stack. From building CI/CD pipelines and Azure infrastructure at Info Support, to developing AR applications on the HoloLens 2, to my current role as a fullstack medior developer at Gynzy building educational software.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>What I Do</h2>
            <p className={styles.text}>
              I enjoy working across the entire stack — whether that's crafting responsive frontends with Flutter, Ember.js, or React, designing cloud architectures on Azure, or setting up robust DevOps pipelines. I'm always looking to learn new technologies and improve my craft.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.text}>
              When I'm not coding, you can find me exploring new technologies, contributing to side projects, or enjoying life in the Netherlands. I'm always open to interesting conversations and new opportunities.
            </p>
            <div className={styles.beyondImage}>
              <span className={styles.beyondPlaceholder}>📸</span>
            </div>
          </div>
        </ScrollReveal>
      </article>
    </main>
  );
}
