import { useTheme } from '../../context/ThemeContext';
import { themes } from '../../themes/themes';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { themeName, cycleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={cycleTheme}
      aria-label={`Current theme: ${themes[themeName].name}. Click to switch.`}
      title={themes[themeName].name}
    >
      <span className={styles.icon}>🎨</span>
    </button>
  );
}
