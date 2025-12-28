
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import en from '../locales/en.ts';
import ru from '../locales/ru.ts';
import uz from '../locales/uz.ts';

type Language = 'EN' | 'RU' | 'UZ';
const translations: Record<Language, any> = { EN: en, RU: ru, UZ: uz };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = useCallback((path: string): string => {
    const keys = path.split('.');
    let result = translations[language];
    if (!result) return path;

    for (const key of keys) {
      if (result[key] === undefined) return path;
      result = result[key];
    }
    return typeof result === 'string' ? result : path;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
