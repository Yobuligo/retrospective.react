import { AppContext } from "../../data/AppContext";
import { useDataAccessObject } from "../../hooks/useDataAccessObject";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useStateToValue } from "../../hooks/useStateToValue";
import { INote } from "../../model/INote";
import { LanguageType } from "../../types/LanguageType";
import { IAppContextProviderProps } from "./IAppContextProviderProps";

const AppContextProvider: React.FC<IAppContextProviderProps> = (props) => {
  return (
    <AppContext.Provider
      value={{
        comments: {
          negativeDAO: useDataAccessObject<INote>(),
          positiveDAO: useDataAccessObject<INote>(),
          proposalDAO: useDataAccessObject<INote>(),
        },
        language: useStateToValue<LanguageType>(
          useLocalStorage<LanguageType>("language", LanguageType.en)
        ),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
