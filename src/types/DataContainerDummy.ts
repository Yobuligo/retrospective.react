import { IDataContainer } from "./IDataContainer";

export class DataContainerDummy<T> implements IDataContainer<T> {
  data: T = {} as T;
  setData(newData: T): void {}
}
