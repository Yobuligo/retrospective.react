import { useCallback, useState } from "react";
import { useReadLocalStorage } from "./useReadLocalStorage";

export const useLocalStorage = <T>(
  key: string,
  fallback: T
): [value: T, setValue: (newValue: T) => void] => {
  const [value, setValue] = useState(useReadLocalStorage(key) ?? fallback);

  const updateValue = useCallback(
    (newValue: T) => {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    [key]
  );

  return [value, updateValue];
};
