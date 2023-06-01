import { INote } from "../../../model/INote";
import { NoteType } from "../../../types/NoteType";
import { IHaveOnDeleteNote } from "../../types/IHaveOnDeleteNote";
import { IHaveOnEditNote } from "../../types/IHaveOnEditNote";

export interface ICommentFooterProps
  extends IHaveOnDeleteNote,
    IHaveOnEditNote {
  note: INote;
  noteType: NoteType;
}
