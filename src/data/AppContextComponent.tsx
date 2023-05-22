import { useState } from "react";
import { IComment } from "../model/IComment";
import { AppContext } from "./AppContext";
import { IAppContextComponentProps } from "./IAppContextComponentProps";

const AppContextComponent: React.FC<IAppContextComponentProps> = (props) => {
  const [comments, setComments] = useState<IComment[]>([]);

  const onAddComment = (comment: IComment) => {
    setComments((previous) => [...previous, comment]);
  };

  const onDeleteComment = (comment: IComment) => {
    setComments((previous) => {
      const index = previous.findIndex((element) => element === comment);
      previous.splice(index, 1);
      return [...previous];
    });
  };

  return (
    <AppContext.Provider
      value={{
        comments: comments,
        onAddComment: onAddComment,
        onDeleteComment: onDeleteComment,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextComponent;
