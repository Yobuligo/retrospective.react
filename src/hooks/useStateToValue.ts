import { IValue } from "../types/IValue";

export const useStateToValue = <T>(
  state: [value: T, setValue: (newValue: T) => void]
): IValue<T> => {
  return { value: state[0], setValue: state[1] };
};
