"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "fr" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (value: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("portfolio-language");
    if (stored === "fr" || stored === "en") {
      setLanguageState(stored);
      return;
    }

    const browserLang = window.navigator.language.toLowerCase();
    setLanguageState(browserLang.startsWith("en") ? "en" : "fr");
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio-language", language);
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (value: Language) => setLanguageState(value),
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
