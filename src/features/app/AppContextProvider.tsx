import { AppContext } from "../../data/AppContext";
import { useDataAccessObject } from "../../hooks/useDataAccessObject";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useStateToValue } from "../../hooks/useStateToValue";
import { IComment } from "../../model/IComment";
import { LanguageType } from "../../types/LanguageType";
import { IAppContextProviderProps } from "./IAppContextProviderProps";

const AppContextProvider: React.FC<IAppContextProviderProps> = (props) => {
  return (
    <AppContext.Provider
      value={{
        comments: {
          negativeDAO: useDataAccessObject<IComment>(),
          positiveDAO: useDataAccessObject<IComment>(),
          proposalDAO: useDataAccessObject<IComment>(),
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
