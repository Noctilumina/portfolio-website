import { useParams } from 'react-router-dom';
import { usePageTransition } from '../../App';
import projects from '../../data/projects.json';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { startTransition } = usePageTransition();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main id="main-content" className={styles.page}>
        <div className={styles.notFound}>
          <h1>Project not found</h1>
          <button className={styles.backButton} onClick={() => startTransition('/')}>
            ← Back to home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className={styles.page}>
      <article>
        <nav aria-label="Breadcrumb">
          <button
            className={styles.backButton}
            onClick={() => startTransition('/', { state: { scrollTo: 'projects' } })}
          >
            ← Back to projects
          </button>
        </nav>

        <div className={styles.banner} aria-hidden="true">{project.title.charAt(0)}</div>

        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>

        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <div className={styles.techStack} aria-label="Technologies used">
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>Key Features</h2>
        <ul className={styles.features}>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        {(project.liveUrl || project.githubUrl) && (
          <div className={styles.links}>
            {project.liveUrl && (
              <a className={`${styles.link} ${styles.primaryLink}`} href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a className={`${styles.link} ${styles.secondaryLink}`} href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
        )}
      </article>
    </main>
  );
}
