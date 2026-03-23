import styles from './TimelineEntry.module.css';

export default function TimelineEntry({ entry }) {
  return (
    <div className={styles.entry}>
      <div className={styles.dot} />
      <h3 className={styles.role}>{entry.role}</h3>
      <p className={styles.company}>{entry.company}</p>
      <p className={styles.period}>{entry.period}</p>
      <p className={styles.description}>{entry.description}</p>
      {entry.clients && (
        <div className={styles.clients}>
          {entry.clients.map((client) => (
            <div key={client.company} className={styles.client}>
              <div className={styles.clientHeader}>
                <span className={styles.clientCompany}>{client.company}</span>
                <span className={styles.clientPeriod}>{client.period}</span>
              </div>
              <div className={styles.clientSkills}>
                {client.skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
