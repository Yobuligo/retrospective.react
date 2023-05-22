import { useDataAccessObject } from "../hooks/useDataAccessObject";
import { useDataContainer } from "../hooks/useDataContainer";
import { IComment } from "../model/IComment";
import { Language } from "../types/Language";
import { AppContext } from "./AppContext";
import { IAppContextComponentProps } from "./IAppContextComponentProps";

const AppContextComponent: React.FC<IAppContextComponentProps> = (props) => {
  return (
    <AppContext.Provider
      value={{
        comments: {
          negativeDAO: useDataAccessObject<IComment>(),
          positiveDAO: useDataAccessObject<IComment>(),
          proposalDAO: useDataAccessObject<IComment>(),
        },
        language: useDataContainer<Language>(Language.en),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextComponent;
