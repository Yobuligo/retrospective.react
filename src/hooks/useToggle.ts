import { useCallback, useState } from "react";

export const useToggle = (
  initialValue: boolean
): [boolean, (newValue?: boolean) => void] => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback(
    (newValue?: boolean) =>
      newValue !== undefined
        ? setValue(newValue)
        : setValue((previous) => !previous),
    []
  );

  return [value, toggleValue];
};
