import { useContext, useState } from "react";
import { AppContext } from "../../data/AppContext";
import { useTranslation } from "../../hooks/useTranslation";
import { LanguageType } from "../../types/LanguageType";
import styles from "./LanguageSelection.module.css";

export const LanguageSelection: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const [language, setLanguage] = useState(
    LanguageType[context.language.value]
  );

  const items = Object.keys(LanguageType)
    .filter((element) => !(parseInt(element) >= 0))
    .map((language) => <option key={language}>{language}</option>);

  return (
    <div className={styles.languageSelection}>
      <div className={styles.languageSelectionText}>{t.language}</div>
      <div>
        <select
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          {items}
        </select>
      </div>
    </div>
  );
};
