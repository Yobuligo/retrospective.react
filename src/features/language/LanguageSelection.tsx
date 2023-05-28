import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "../../hooks/useTranslation";
import { LanguageType } from "../../types/LanguageType";
import styles from "./LanguageSelection.module.css";

export const LanguageSelection: React.FC = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLanguage();

  const items = Object.keys(LanguageType)
    .filter((element) => !(parseInt(element) >= 0))
    .map((language) => <option key={language}>{language}</option>);

  return (
    <div className={styles.languageSelection}>
      <div className={styles.languageSelectionText}>{t.language}</div>
      <div >
        <select
          value={LanguageType[language]}
          onChange={(event) => {
            const index = (LanguageType as any)[event.target.value];
            setLanguage(index);
          }}
        >
          {items}
        </select>
      </div>
    </div>
  );
};
