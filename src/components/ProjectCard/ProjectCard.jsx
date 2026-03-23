import { usePageTransition } from '../../App';
import styles from './ProjectCard.module.css';

const LAYOUTS = [
  {
    corner: { top: '-0.8em', right: '-0.8em' },
    accent: { bottom: '-0.8em', right: '1.5em' },
    accentSmall: { bottom: '1em', right: '4.5em' },
    slice: { bottom: 0, left: 0, borderRight: '0.15em solid #000', borderTop: '0.15em solid #000', borderRadius: '0 0.4em 0 0' },
  },
  {
    corner: { bottom: '-0.8em', right: '-0.8em' },
    accent: { top: '-0.8em', right: '2em' },
    accentSmall: { top: '4em', left: '0.5em' },
    slice: { top: 0, left: 0, borderRight: '0.15em solid #000', borderBottom: '0.15em solid #000', borderRadius: '0 0 0.4em 0' },
  },
  {
    corner: { top: '-0.8em', right: '3em' },
    accent: { bottom: '-0.8em', left: '2em' },
    accentSmall: { bottom: '1em', right: '1.5em' },
    slice: { top: 0, right: 0, borderLeft: '0.15em solid #000', borderBottom: '0.15em solid #000', borderRadius: '0 0 0 0.4em' },
  },
];

export default function ProjectCard({ project, index = 0 }) {
  const { startTransition } = usePageTransition();
  const layout = LAYOUTS[index % LAYOUTS.length];

  const handleClick = (e) => {
    e.preventDefault();
    startTransition(`/project/${project.slug}`);
  };

  return (
    <a
      href={`/project/${project.slug}`}
      className={styles.card}
      onClick={handleClick}
      aria-label={`View project: ${project.title}`}
    >
      <div className={styles.patternGrid} aria-hidden="true" />
      <div className={styles.overlayDots} aria-hidden="true" />
      <div className={styles.cornerTriangle} style={layout.corner} aria-hidden="true" />

      <div className={styles.titleArea}>
        <span className={styles.titleText}>{project.title}</span>
      </div>

      <div className={styles.imageWrapper} aria-hidden="true">
        {project.image ? (
          <img
            src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
            alt=""
            className={styles.logo}
            style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
          />
        ) : (
          project.title.charAt(0)
        )}
      </div>

      <div className={styles.body}>
        <p className={styles.description}>{project.shortDescription}</p>
        <div className={styles.tags} aria-label="Technologies used">
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>
      </div>

      <div className={styles.accentShape} style={layout.accent} aria-hidden="true" />
      <div className={styles.accentShapeSmall} style={layout.accentSmall} aria-hidden="true" />
      <div className={styles.cornerSlice} style={layout.slice} aria-hidden="true" />
    </a>
  );
}
