import { useState } from "react";
import { IDataContainer } from "../types/IDataContainer";

export const useDataContainer = <T>(initialValue: T): IDataContainer<T> => {
  const [value, setValue] = useState<T>(initialValue);
  return { data: value, setData: setValue };
};
