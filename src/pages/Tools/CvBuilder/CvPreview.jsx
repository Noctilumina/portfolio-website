import styles from './CvPreview.module.css';

const EmailIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
);
const LocationIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
);
const LinkedinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);
const WebIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
);

export default function CvPreview({ data }) {
  const accent = data.accentColor || '#E91E63';
  const hasContact = data.contact.email || data.contact.location || data.contact.linkedin || data.contact.github || data.contact.website;
  const hasSkills = data.skillCategories.some((c) => c.category && c.skills);

  return (
    <div className={styles.cv}>
      <div className={styles.columns}>
        {/* Sidebar */}
        <div className={styles.sideCol} style={{ background: accent }}>
          {data.photoUrl && (
            <div className={styles.portrait}>
              <img src={data.photoUrl} alt="" className={styles.portraitImage} />
            </div>
          )}
          {!data.photoUrl && data.name && (
            <div className={styles.portrait} style={{ background: accent, filter: 'brightness(0.85)' }}>
              <span className={styles.portraitPlaceholder}>
                {data.name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2)}
              </span>
            </div>
          )}

          {data.aboutText && (
            <section className={styles.section}>
              <h2 className={styles.sideSectionTitle}>About Me</h2>
              <p className={styles.profileText}>{data.aboutText}</p>
            </section>
          )}

          {hasSkills && (
            <section className={styles.section}>
              <h2 className={styles.sideSectionTitle}>Skills</h2>
              {data.skillCategories.map((cat, i) => cat.category && cat.skills ? (
                <div key={i} className={styles.skillCategory}>
                  <h3 className={styles.skillCategoryTitle}>{cat.category}</h3>
                  <p className={styles.skillList}>{cat.skills}</p>
                </div>
              ) : null)}
            </section>
          )}

          {hasContact && (
            <section className={styles.section}>
              <h2 className={styles.sideSectionTitle}>Contact</h2>
              <div className={styles.contactList}>
                {data.contact.email && <p><EmailIcon /> {data.contact.email}</p>}
                {data.contact.location && <p><LocationIcon /> {data.contact.location}</p>}
                {data.contact.linkedin && <p><LinkedinIcon /> {data.contact.linkedin}</p>}
                {data.contact.github && <p><GithubIcon /> {data.contact.github}</p>}
                {data.contact.website && <p><WebIcon /> {data.contact.website}</p>}
              </div>
            </section>
          )}
        </div>

        {/* Main column */}
        <div className={styles.mainCol}>
          <header className={styles.header}>
            <h1 className={styles.name}>{data.name || 'Your Name'}</h1>
            <p className={styles.role} style={{ color: accent }}>{data.role || 'Job Title'}</p>
          </header>

          {data.experience.some((e) => e.role) && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle} style={{ color: accent, borderBottomColor: 'var(--color-border)' }}>Experience</h2>
              {data.experience.map((entry, i) => entry.role ? (
                <div key={i} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <h3 className={styles.entryRole}>{entry.role}</h3>
                    <span className={styles.entryPeriod}>{entry.period}</span>
                  </div>
                  {entry.company && <p className={styles.entryCompany}>{entry.company}</p>}
                  {entry.description && <p className={styles.entryDescription}>{entry.description}</p>}
                  {entry.clients.length > 0 && entry.clients.some((c) => c.company) && (
                    <div className={styles.clientGrid}>
                      {entry.clients.map((client, j) => client.company ? (
                        <div key={j} className={styles.client} style={{ borderLeftColor: accent }}>
                          <div className={styles.clientHeader}>
                            <span className={styles.clientName}>{client.company}</span>
                            <span className={styles.clientPeriod}>{client.period}</span>
                          </div>
                          {client.skills && <span className={styles.clientSkills} style={{ color: accent }}>{client.skills}</span>}
                        </div>
                      ) : null)}
                    </div>
                  )}
                </div>
              ) : null)}
            </section>
          )}

          {data.education.some((e) => e.role) && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle} style={{ color: accent, borderBottomColor: 'var(--color-border)' }}>Education</h2>
              {data.education.map((entry, i) => entry.role ? (
                <div key={i} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <h3 className={styles.entryRole}>{entry.role}</h3>
                    <span className={styles.entryPeriod}>{entry.period}</span>
                  </div>
                  {entry.company && <p className={styles.entryCompany}>{entry.company}</p>}
                  {entry.description && <p className={styles.entryDescription}>{entry.description}</p>}
                </div>
              ) : null)}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
