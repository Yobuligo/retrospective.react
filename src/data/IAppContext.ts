import { IComment } from "../model/IComment";
import { IDataAccessObject } from "../types/IDataAccessObject";
import { IValue } from "../types/IValue";
import { LanguageType } from "../types/LanguageType";

export type IAppContext = {
  comments: {
    negativeDAO: IDataAccessObject<IComment>;
    positiveDAO: IDataAccessObject<IComment>;
    proposalDAO: IDataAccessObject<IComment>;
  };
  language: IValue<LanguageType>;
};
