import { useCallback, useState } from "react";
import { IDataAccessObject } from "../types/IDataAccessObject";

export const useDataAccessObject = <T>(
  initialDataObjects?: T[]
): IDataAccessObject<T> => {
  const [dataObjects, setDataObjects] = useState<T[]>(initialDataObjects ?? []);

  const onAdd = useCallback(
    () => (dataObject: T) =>
      setDataObjects((previous) => [...previous, dataObject]),
    []
  );

  const onDelete = useCallback(
    () => (dataObject: T) =>
      setDataObjects((previous) => {
        const index = previous.findIndex((element) => element === dataObject);
        previous.splice(index, 1);
        return [...previous];
      }),
    []
  );

  const onUpdate = useCallback(
    () => (dataObject: T) =>
      setDataObjects((previous) => {
        const index = previous.findIndex((element) => element === dataObject);
        previous.splice(index, 1, dataObject);
        return [...previous];
      }),
    []
  );

  return { dataObjects, onAdd, onDelete, onUpdate };
};
