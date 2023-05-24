import { useState } from "react";
import { IValue } from "../types/IValue";
import { useStateToValue } from "./useStateToValue";

export const useValue = <T>(initialValue: T): IValue<T> => {
  return useStateToValue(useState<T>(initialValue));
};
