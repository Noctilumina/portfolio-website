import styles from './Button.module.css';

/**
 * Shared button component with pop art styling.
 *
 * Props:
 *   - primary    : filled primary color, white text
 *   - secondary  : filled secondary color, white text
 *   - outline    : bordered, transparent background
 *   - danger     : red bordered/filled
 *   - dashed     : dashed border (for add/create actions)
 *   - ghost      : text-only, no border or background
 *   - raised     : 3D push-button effect (dark base, colored top)
 *   - small      : smaller padding and font
 *   - fullWidth  : takes full container width
 */
export default function Button({
  children,
  primary,
  secondary,
  outline,
  danger,
  dashed,
  ghost,
  raised,
  small,
  fullWidth,
  className,
  ...props
}) {
  const classes = [
    styles.btn,
    primary && styles.primary,
    secondary && styles.secondary,
    outline && styles.outline,
    danger && styles.danger,
    dashed && styles.dashed,
    ghost && styles.ghost,
    raised && styles.raised,
    small && styles.small,
    fullWidth && styles.fullWidth,
    // Default to outline if no color variant specified
    !primary && !secondary && !danger && !dashed && !ghost && !raised && styles.outline,
    className,
  ].filter(Boolean).join(' ');

  if (raised) {
    return (
      <button className={classes} {...props}>
        <span className={`${styles.raisedTop} ${primary ? styles.raisedPrimary : ''} ${secondary ? styles.raisedSecondary : ''} ${danger ? styles.raisedDanger : ''}`}>
          {children}
        </span>
      </button>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
