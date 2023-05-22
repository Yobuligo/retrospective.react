import { useState } from "react";
import { IDataAccessObject } from "../types/IDataAccessObject";

export const useDataAccessObject = <T>(): IDataAccessObject<T> => {
  const [dataObjects, setDataObjects] = useState<T[]>([]);

  const onAdd = (dataObject: T) => {
    setDataObjects((previous) => [...previous, dataObject]);
  };

  const onDelete = (dataObject: T) => {
    setDataObjects((previous) => {
      const index = previous.findIndex((element) => element === dataObject);
      previous.splice(index, 1);
      return [...previous];
    });
  };

  return { dataObjects, onAdd, onDelete };
};
