import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ja" | "de";

type TranslationContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <TranslationContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};