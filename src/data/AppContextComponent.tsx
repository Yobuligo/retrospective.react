import { useDataAccessObject } from "../hooks/useDataAccessObject";
import { useValue } from "../hooks/useValue";
import { IComment } from "../model/IComment";
import { LanguageType } from "../types/LanguageType";
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
        language: useValue<LanguageType>(LanguageType.en),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextComponent;
