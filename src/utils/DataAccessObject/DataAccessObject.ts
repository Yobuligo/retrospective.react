import { IDataObject } from "../../types/IDataObject";

export class DataAccessObject<T extends IDataObject> {
  create(props: Omit<T, "id">): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: crypto.randomUUID(), ...props } as T);
      }, 5000);
    });
  }

  findAll(id: string): Promise<T[]> {
    return new Promise((resolve) => {
      const item = localStorage.getItem(id);
      if (item) {
        resolve(JSON.parse(item));
      } else {
        resolve([]);
      }
    });
  }

  save(dataObject: T): Promise<T> {
    throw new Error();
  }
}
