import { INote } from "../../model/INote";

export interface IHaveOnEditNote {
  onEdit: (note: INote) => void;
}
