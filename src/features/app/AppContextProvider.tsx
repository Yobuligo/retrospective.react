import { AppContext } from "../../contexts/AppContext";
import { useDataAccessObject } from "../../hooks/useDataAccessObject";
import { useFetchLocalStorage } from "../../hooks/useFetchLocalStorage";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useStateToValue } from "../../hooks/useStateToValue";
import { useValue } from "../../hooks/useValue";
import { INote } from "../../model/INote";
import { LanguageType } from "../../types/LanguageType";
import { IAppContextProviderProps } from "./IAppContextProviderProps";

const AppContextProvider: React.FC<IAppContextProviderProps> = (props) => {
  return (
    <AppContext.Provider
      value={{
        notes: {
          negativeDAO: useDataAccessObject<INote>(),
          positiveDAO: useDataAccessObject<INote>(),
          proposalDAO: useDataAccessObject<INote>(),
        },
        language: useStateToValue<LanguageType>(
          useLocalStorage<LanguageType>("language", LanguageType.en)
        ),
        user: useValue(
          useFetchLocalStorage<string>("user", crypto.randomUUID())
        ),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
