import { IDataObject } from "./IDataObject";

export class DataObject<T> implements IDataObject<T> {
  dataObjects: T[] = [];
  onAdd(dataObject: T) {}
  onDelete(dataObject: T) {}
}
