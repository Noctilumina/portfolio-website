import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { themes, defaultTheme, themeKeys } from '../themes/themes';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved && themes[saved] ? saved : defaultTheme;
  });

  useEffect(() => {
    const theme = themes[themeName];
    const root = document.documentElement;
    Object.entries(theme.properties).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    localStorage.setItem('portfolio-theme', themeName);
  }, [themeName]);

  const cycleTheme = useCallback(() => {
    setThemeName((current) => {
      const idx = themeKeys.indexOf(current);
      return themeKeys[(idx + 1) % themeKeys.length];
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
