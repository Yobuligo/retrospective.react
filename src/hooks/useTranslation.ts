import * as translations from "../languages";

export const useTranslation = () => {
  const language: string = "en";
  switch (language) {
    case "de": {
      return { t: translations["de"] };
    }
    default: {
      return { t: translations["en"] };
    }
  }
};
