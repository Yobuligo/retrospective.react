import { INote } from "../../../model/INote";
import { NoteType } from "../../../types/NoteType";
import { IHaveOnDeleteNote } from "../../types/IHaveOnDeleteNote";

export interface INoteCardProps extends IHaveOnDeleteNote {
  note: INote;
  noteType: NoteType;
}
