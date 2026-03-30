import { createContext, useContext, useState, useCallback } from 'react';
import en from './en.json';
import nl from './nl.json';
import { StorageKey } from '../constants/storage';
import { Locale } from '../constants/locale';

const translations = { en, nl };
const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    const saved = localStorage.getItem(StorageKey.LANGUAGE);
    if (saved && translations[saved]) return saved;
    // Dutch for Netherlands (nl-NL) and Flanders/Belgium (nl-BE)
    const lang = navigator.language;
    if (lang === 'nl' || lang.startsWith('nl-')) return Locale.NL;
    return Locale.EN;
  });

  const toggleLocale = useCallback(() => {
    setLocale((current) => {
      const next = current === Locale.EN ? Locale.NL : Locale.EN;
      localStorage.setItem(StorageKey.LANGUAGE, next);
      return next;
    });
  }, []);

  const t = useCallback((key, params) => {
    const keys = key.split('.');
    let value = translations[locale];
    for (const k of keys) {
      if (value == null) return key;
      value = value[k];
    }
    if (value == null) return key;
    if (typeof value === 'string' && params) {
      return value.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? `{${k}}`);
    }
    return value;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}
