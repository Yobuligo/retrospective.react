export interface IDataAccessObject<T> {
  dataObjects: T[];
  onAdd: (...dataObjects: T[]) => void;
  onDelete: (dataObject: T) => void;
  onUpdate: (dataObject: T) => void;
}
