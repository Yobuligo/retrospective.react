import { createContext } from "react";
import { IComment } from "../model/IComment";
import { DataAccessObjectDummy } from "../types/DataAccessObjectDummy";

export const AppContextData = {
  comments: {
    negativeDAO: new DataAccessObjectDummy<IComment>(),
    positiveDAO: new DataAccessObjectDummy<IComment>(),
    proposalDAO: new DataAccessObjectDummy<IComment>(),
  },
};

export const AppContext = createContext(AppContextData);
