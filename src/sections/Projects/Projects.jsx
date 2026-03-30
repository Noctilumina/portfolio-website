import projects from '../../data/projects.json';
import { useI18n } from '../../i18n/I18nContext';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Projects.module.css';

export default function Projects() {
  const { t } = useI18n();
  const projectsRaw = projects;
  const localizedProjects = projectsRaw.map((p, i) => ({
    ...p,
    title: t(`projectData.${i}.title`) || p.title,
    shortDescription: t(`projectData.${i}.shortDescription`) || p.shortDescription,
  }));

  return (
    <section id="projects" className={`${styles.section} ${styles.tinted}`}>
      <ScrollReveal textOnly>
        <h2 className={styles.heading}>{t('projects.heading')}</h2>
      </ScrollReveal>
      <div className={styles.grid}>
        {localizedProjects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} index={i} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
