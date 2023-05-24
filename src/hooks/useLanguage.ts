import { useState } from "react";
import { LanguageType } from "../types/LanguageType";

export const useLanguage = (): [
  language: LanguageType,
  setLanguage: (newLanguage: LanguageType) => void
] => {
  const [language, setLanguage] = useState<LanguageType>(LanguageType.en);
  return [language, setLanguage];
};
