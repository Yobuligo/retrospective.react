import { useState } from "react";

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = (newValue?: boolean) => {
    if (newValue !== undefined) {
      setValue(newValue);
    } else {
      setValue((previous) => !previous);
    }
  };

  return [value, toggleValue];
};
