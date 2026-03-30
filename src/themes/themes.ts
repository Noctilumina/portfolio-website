import { ThemeName } from '../constants/themes';

export const themes = {
  [ThemeName.LIGHT]: {
    name: 'Light',
    properties: {
      '--color-bg': '#f5f0eb',
      '--color-primary': '#E91E63',
      '--color-secondary': '#9C27B0',
      '--color-light': '#F8BBD0',
      '--color-text': '#1a1a1a',
      '--color-muted': '#666666',
      '--color-surface': '#ffffff',
      '--color-border': '#000000',
      '--color-shadow': '#000000',
    },
  },
  [ThemeName.DARK]: {
    name: 'Dark',
    properties: {
      '--color-bg': '#1a1a1a',
      '--color-primary': '#FF4081',
      '--color-secondary': '#CE93D8',
      '--color-light': '#F8BBD0',
      '--color-text': '#f5f0eb',
      '--color-muted': '#aaaaaa',
      '--color-surface': '#2a2a2a',
      '--color-border': '#f5f0eb',
      '--color-shadow': '#000000',
    },
  },
};

export const themeKeys = Object.keys(themes);
export const defaultTheme = ThemeName.LIGHT;
