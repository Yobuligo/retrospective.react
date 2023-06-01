import { INote } from "../../../model/INote";
import { NoteType } from "../../../types/NoteType";
import { IHaveOnDeleteNote } from "../../types/IHaveOnDeleteNote";

export interface ICommentCardProps extends IHaveOnDeleteNote {
  note: INote;
  noteType: NoteType;
}
