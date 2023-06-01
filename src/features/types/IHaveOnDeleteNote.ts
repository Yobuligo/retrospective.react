import { INote } from "../../model/INote";

export interface IHaveOnDeleteNote {
  onDelete: (note: INote) => void;
}
