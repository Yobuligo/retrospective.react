export interface IDataObject<T> {
  dataObjects: T[];
  onAdd: (dataObject: T) => void;
  onDelete: (dataObject: T) => void;
}
