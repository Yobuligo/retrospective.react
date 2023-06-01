import { INote } from "../../../model/INote";
import { NoteType } from "../../../types/NoteType";
import { IHaveOnDeleteNote } from "../../types/IHaveOnDeleteNote";

export interface ICommentCardListProps extends IHaveOnDeleteNote {
  notes: INote[];
  noteType: NoteType;
}
