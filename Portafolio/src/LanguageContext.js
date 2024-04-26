import React, { createContext, useState, useContext } from 'react';
import esData from './es.json';
import enData from './en.json';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  const data = language === 'en' ? enData : esData;

  return (
    <LanguageContext.Provider value={{ language, data, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
