export interface IDataContainer<T> {
  readonly data: T;
  setData: (newData: T) => void;
}
