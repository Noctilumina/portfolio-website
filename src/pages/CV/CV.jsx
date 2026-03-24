import { useI18n } from '../../i18n/I18nContext';
import skills from '../../data/skills.json';
import experience from '../../data/experience.json';
import styles from './CV.module.css';

export default function CV() {
  const { t, locale } = useI18n();

  const localizedExperience = experience.map((entry, i) => ({
    ...entry,
    ...(t(`experienceData.${i}`) || {}),
  }));

  const workExperience = localizedExperience.filter((e) => e.id <= 5);
  const education = localizedExperience.filter((e) => e.id === 6);

  const handlePrint = () => window.print();

  const interests = locale === 'nl'
    ? ['HEMA (zwaardvechten)', 'Cyberpunk Red (DM)', 'Game development', 'Planten verzamelen']
    : ['HEMA (sword fighting)', 'Cyberpunk Red (DM)', 'Game development', 'Plant collecting'];

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.printHide}>
        <button className={styles.printButton} onClick={handlePrint}>
          <span className={styles.printButtonTop}>
            {locale === 'nl' ? 'Print / Opslaan als PDF' : 'Print / Save as PDF'}
          </span>
        </button>
      </div>

      <div className={styles.cv}>
        <div className={styles.columns}>
          {/* Left sidebar */}
          <div className={styles.sideCol}>
            <div className={styles.portrait}>
              <span className={styles.portraitPlaceholder}>IP</span>
            </div>

            <section className={styles.section}>
              <h2 className={styles.sideSectionTitle}>
                {locale === 'nl' ? 'Profiel' : 'Profile'}
              </h2>
              <p className={styles.profileText}>
                {locale === 'nl'
                  ? 'Fullstack developer met 4+ jaar ervaring in webapplicaties, cloudinfrastructuur en CI/CD-pipelines. Brede ervaring door consultancy bij meerdere enterprise klanten in diverse sectoren.'
                  : 'Fullstack developer with 4+ years of experience in web applications, cloud infrastructure, and CI/CD pipelines. Broad experience through consulting across multiple enterprise clients in diverse sectors.'
                }
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sideSectionTitle}>{t('skills.heading')}</h2>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className={styles.skillCategory}>
                  <h3 className={styles.skillCategoryTitle}>
                    {t(`skills.categories.${category}`)}
                  </h3>
                  <p className={styles.skillList}>
                    {items.map((s) => locale === 'nl' && s.nameNl ? s.nameNl : s.name).join(', ')}
                  </p>
                </div>
              ))}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sideSectionTitle}>Contact</h2>
              <div className={styles.contactList}>
                <p>irispeters05@gmail.com</p>
                <p>'s-Hertogenbosch, NL</p>
                <p>linkedin.com/in/iris-peters-421774158</p>
                <p>github.com/Noctilumina</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sideSectionTitle}>
                {locale === 'nl' ? 'Interesses' : 'Interests'}
              </h2>
              <ul className={styles.interestList}>
                {interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right main */}
          <div className={styles.mainCol}>
            <header className={styles.header}>
              <h1 className={styles.name}>Iris Peters</h1>
              <p className={styles.role}>Fullstack Developer</p>
            </header>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('experience.heading')}</h2>
              {workExperience.map((entry) => (
                <div key={entry.id} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <h3 className={styles.entryRole}>{entry.role}</h3>
                    <span className={styles.entryPeriod}>{entry.period}</span>
                  </div>
                  <p className={styles.entryCompany}>{entry.company}</p>
                  <p className={styles.entryDescription}>{entry.description}</p>
                  {entry.clients && (
                    <div className={styles.clientGrid}>
                      {entry.clients.map((client) => (
                        <div key={client.company} className={styles.client}>
                          <div className={styles.clientHeader}>
                            <span className={styles.clientName}>{client.company}</span>
                            <span className={styles.clientPeriod}>{client.period}</span>
                          </div>
                          <span className={styles.clientSkills}>{client.skills.join(', ')}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                {locale === 'nl' ? 'Opleiding' : 'Education'}
              </h2>
              {education.map((entry) => (
                <div key={entry.id} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <h3 className={styles.entryRole}>{entry.role}</h3>
                    <span className={styles.entryPeriod}>{entry.period}</span>
                  </div>
                  <p className={styles.entryCompany}>{entry.company}</p>
                  <p className={styles.entryDescription}>{entry.description}</p>
                </div>
              ))}
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <h3 className={styles.entryRole}>
                    {locale === 'nl' ? 'Natuur en Techniek' : 'Nature & Technology'}
                  </h3>
                  <span className={styles.entryPeriod}>2011 — 2015</span>
                </div>
                <p className={styles.entryCompany}>ds. Pierson College</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
