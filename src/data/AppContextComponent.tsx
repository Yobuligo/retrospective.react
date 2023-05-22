import { useDataAccessObject } from "../hooks/useDataAccessObject";
import { IComment } from "../model/IComment";
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextComponent;
