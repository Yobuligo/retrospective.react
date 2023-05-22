import { IDataAccessObject } from "./IDataAccessObject";

export class DataAccessObjectDummy<T> implements IDataAccessObject<T> {
  dataObjects: T[] = [];
  onAdd(dataObject: T) {}
  onDelete(dataObject: T) {}
}
