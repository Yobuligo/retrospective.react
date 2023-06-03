import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { LanguageType } from "../types/LanguageType";

export const useLanguage = (): [
  language: LanguageType,
  setLanguage: (newLanguage: LanguageType) => void
] => {
  const context = useContext(AppContext);
  return [context.language.value, context.language.setValue];
};
