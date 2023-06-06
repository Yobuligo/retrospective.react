import { INote } from "../model/INote";
import { IDataAccessObject } from "../types/IDataAccessObject";
import { IValue } from "../types/IValue";
import { LanguageType } from "../types/LanguageType";

export type IAppContext = {
  notes: {
    negativeDAO: IDataAccessObject<INote>;
    positiveDAO: IDataAccessObject<INote>;
    proposalDAO: IDataAccessObject<INote>;
  };
  language: IValue<LanguageType>;
  user: IValue<string>;
};
