import { useState } from "react";
import { IValue } from "../types/IValue";

export const useValue = <T>(initialValue: T): IValue<T> => {
  const [value, setValue] = useState<T>(initialValue);
  return { value, setValue };
};
