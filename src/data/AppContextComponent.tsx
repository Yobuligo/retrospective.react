import { useDataObject } from "../hooks/useDataObject";
import { IComment } from "../model/IComment";
import { AppContext } from "./AppContext";
import { IAppContextComponentProps } from "./IAppContextComponentProps";

const AppContextComponent: React.FC<IAppContextComponentProps> = (props) => {
  return (
    <AppContext.Provider
      value={{
        negativeComment: useDataObject<IComment>(),
        positiveComment: useDataObject<IComment>(),
        proposalComment: useDataObject<IComment>(),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextComponent;
