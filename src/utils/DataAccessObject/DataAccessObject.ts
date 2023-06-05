import { IDataObject } from "../../types/IDataObject";

export class DataAccessObject<T extends IDataObject> {
  create(props: Omit<T, "id" | "isLoading">): T {
    return { id: crypto.randomUUID(), isLoading: true, ...props } as T;
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({ id: crypto.randomUUID(), ...props } as T);
    //   }, 5000);
    // });
  }

  findAll(): Promise<T[]> {
    throw new Error();
  }

  save(dataObject: T): Promise<T> {
    throw new Error();
  }
}
