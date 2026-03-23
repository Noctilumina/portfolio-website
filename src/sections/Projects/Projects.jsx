import projects from '../../data/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={`${styles.section} ${styles.tinted}`}>
      <ScrollReveal>
        <h2 className={styles.heading}>Projects</h2>
      </ScrollReveal>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} index={i} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
