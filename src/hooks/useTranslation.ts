import * as translations from "../languages";
import { LanguageType } from "../types/LanguageType";
import { useLanguage } from "./useLanguage";

export const useTranslation = () => {
  const [language] = useLanguage();
  switch (language) {
    case LanguageType.de: {
      return { t: translations["de"] };
    }
    default: {
      return { t: translations["en"] };
    }
  }
};
