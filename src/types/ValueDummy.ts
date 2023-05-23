import { IValue } from "./IValue";

export class ValueDummy<T> implements IValue<T> {
  value: T = {} as T;
  setValue(newValue: T): void {}
}
