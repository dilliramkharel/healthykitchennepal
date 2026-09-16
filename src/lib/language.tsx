import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "ne";

const LanguageContext = createContext<{ language: Language; toggleLanguage: () => void } | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    setLanguage(window.localStorage.getItem("hkn-language") === "ne" ? "ne" : "en");
  }, []);

  const toggleLanguage = () => setLanguage((current) => {
    const next = current === "en" ? "ne" : "en";
    window.localStorage.setItem("hkn-language", next);
    return next;
  });

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
