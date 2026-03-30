import { useParams } from 'react-router-dom';
import { usePageTransition } from '../../App';
import { useI18n } from '../../i18n/I18nContext';
import { Routes } from '../../constants/routes';
import { NavSection } from '../../constants/nav';
import projects from '../../data/projects.json';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { startTransition } = usePageTransition();
  const { t } = useI18n();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const projectRaw = projectIndex !== -1 ? projects[projectIndex] : null;

  if (!projectRaw) {
    return (
      <main id="main-content" className={styles.page}>
        <div className={styles.notFound}>
          <h1>{t('projectDetail.notFound')}</h1>
          <button className={styles.backButton} onClick={() => startTransition(Routes.HOME)}>
            {t('projectDetail.backHome')}
          </button>
        </div>
      </main>
    );
  }

  const project = {
    ...projectRaw,
    title: t(`projectData.${projectIndex}.title`) || projectRaw.title,
    description: t(`projectData.${projectIndex}.description`) || projectRaw.description,
    features: t(`projectData.${projectIndex}.features`) || projectRaw.features,
  };

  return (
    <main id="main-content" className={styles.page}>
      <article>
        <nav aria-label="Breadcrumb">
          <button
            className={styles.backButton}
            onClick={() => startTransition(Routes.HOME, { state: { scrollTo: NavSection.PROJECTS } })}
          >
            {t('projectDetail.backProjects')}
          </button>
        </nav>

        <div className={styles.banner} aria-hidden="true">
          {project.image ? (
            <img
              src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
              alt=""
              className={styles.bannerImage}
              style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
            />
          ) : (
            project.title.charAt(0)
          )}
        </div>

        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>

        <h2 className={styles.sectionTitle}>{t('projectDetail.techStack')}</h2>
        <div className={styles.techStack} aria-label={t('projects.techUsed')}>
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>{t('projectDetail.keyFeatures')}</h2>
        <ul className={styles.features}>
          {Array.isArray(project.features) && project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        {(project.liveUrl || project.githubUrl) && (
          <div className={styles.links}>
            {project.liveUrl && (
              <a className={`${styles.link} ${styles.primaryLink}`} href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                {t('projectDetail.liveDemo')}
              </a>
            )}
            {project.githubUrl && (
              <a className={`${styles.link} ${styles.secondaryLink}`} href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                {t('projectDetail.github')}
              </a>
            )}
          </div>
        )}
      </article>
    </main>
  );
}
