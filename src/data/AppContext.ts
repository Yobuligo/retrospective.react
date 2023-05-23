import { createContext } from "react";
import { IComment } from "../model/IComment";
import { DataAccessObjectDummy } from "../types/DataAccessObjectDummy";
import { ValueDummy } from "../types/ValueDummy";
import { LanguageType } from "../types/LanguageType";

export const AppContextData = {
  comments: {
    negativeDAO: new DataAccessObjectDummy<IComment>(),
    positiveDAO: new DataAccessObjectDummy<IComment>(),
    proposalDAO: new DataAccessObjectDummy<IComment>(),
  },
  language: new ValueDummy<LanguageType>(),
};

export const AppContext = createContext(AppContextData);
