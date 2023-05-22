import { useState } from "react";
import { IDataObject } from "../types/IDataObject";

export const useDataObject = <T>(): IDataObject<T> => {
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
