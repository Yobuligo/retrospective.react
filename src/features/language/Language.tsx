import { useContext, useState } from "react";
import { AppContext } from "../../data/AppContext";
import { LanguageType } from "../../types/LanguageType";

export const Language: React.FC = () => {
  const context = useContext(AppContext);
  const [language, setLanguage] = useState(
    LanguageType[context.language.value]
  );

  const items = Object.keys(LanguageType)
    .filter((element) => !(parseInt(element) >= 0))
    .map((language) => <option key={language}>{language}</option>);

  return (
    <>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
      >
        {items}
      </select>
    </>
  );
};
