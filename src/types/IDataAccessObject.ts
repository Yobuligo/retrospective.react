export interface IDataAccessObject<T> {
  dataObjects: T[];
  onAdd: (dataObject: T) => void;
  onDelete: (dataObject: T) => void;
}
