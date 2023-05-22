import { IComment } from "../model/IComment";
import { DataObject as DataObjectDummy } from "../types/DataObjectDummy";
import { IDataObject } from "../types/IDataObject";

export class AppContextData {
  positiveComment: IDataObject<IComment> = new DataObjectDummy();
  negativeComment: IDataObject<IComment> = new DataObjectDummy();
  proposalComment: IDataObject<IComment> = new DataObjectDummy();
}
