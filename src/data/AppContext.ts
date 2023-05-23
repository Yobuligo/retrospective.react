import { createContext } from "react";
import { IComment } from "../model/IComment";
import { DataAccessObjectDummy } from "../types/DataAccessObjectDummy";
import { ValueDummy } from "../types/ValueDummy";
import { Language } from "./../types/Language";

export const AppContextData = {
  comments: {
    negativeDAO: new DataAccessObjectDummy<IComment>(),
    positiveDAO: new DataAccessObjectDummy<IComment>(),
    proposalDAO: new DataAccessObjectDummy<IComment>(),
  },
  language: new ValueDummy<Language>(),
};

export const AppContext = createContext(AppContextData);
