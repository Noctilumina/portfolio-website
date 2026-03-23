import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './About.module.css';

export default function About() {

  return (
    <main id="main-content" className={styles.page}>
      <article>
        <div className={styles.header}>
          <h1 className={styles.title}>About Me</h1>
          <div className={styles.portraitWrapper}>
            <div className={styles.meLabel} aria-hidden="true">
              <span>me!</span>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M5 5 C15 8, 25 18, 32 32" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M34 26 L33 33 L25 31" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div className={styles.portrait}>
              <span className={styles.portraitPlaceholder}>IP</span>
            </div>
          </div>
        </div>

        <ScrollReveal>
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
              When I'm not coding, you can find me enjoying one of my hobbies. My greatest passion so far in life has definitely been HEMA (Historical European Martial Arts), where I fight with a two handed sword called a federschwert.
            </p>
            <div className={styles.beyondImageWrapper}>
              <div className={styles.alsoMeLabel} aria-hidden="true">
                <svg width="50" height="45" viewBox="0 0 50 45" fill="none">
                  <path d="M45 14 C30 14, 16 22, 10 42" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M19 34 L10 44 L9 33" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span>also me!</span>
              </div>
              <div className={styles.beyondImage}>
                <img src={`${import.meta.env.BASE_URL}images/me_heimdall_games.jpeg`} alt="Iris at HEMA" className={styles.beyondImageImg} />
              </div>
            </div>
            <p className={styles.text} style={{ marginTop: '1.2rem' }}>
              Besides that I also like:
            </p>
            <ul className={styles.hobbyList}>
              <li>DM-ing a few Cyberpunk Red games</li>
              <li>Maintaining an extensive plant collection</li>
              <li>Trying to develop games whenever I have time</li>
              <li>And if there is anything left after all that, making my house a little bit better day by day</li>
            </ul>
            <div className={styles.plantSection}>
              <div className={styles.plantLabelArea}>
                <div className={styles.plantLabel} aria-hidden="true">
                  <span>Not me! That's my plant</span>
                  <svg width="50" height="45" viewBox="0 0 50 45" fill="none">
                    <path d="M5 5 C15 10, 30 20, 42 35" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <path d="M37 30 L43 37 L35 36" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              </div>
              <div className={styles.plantCircle}>
                <span className={styles.plantPlaceholder}>🪴</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </article>
    </main>
  );
}
