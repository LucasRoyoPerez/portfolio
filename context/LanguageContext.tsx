"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Optional: persist language preference in localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "es")) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      const newLang = prevLang === "en" ? "es" : "en";
      localStorage.setItem("portfolio_lang", newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
