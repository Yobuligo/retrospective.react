import { INote } from "../../../model/INote";
import { NoteType } from "../../../types/NoteType";
import { IHaveOnDeleteNote } from "../../types/IHaveOnDeleteNote";

export interface INoteCardListProps extends IHaveOnDeleteNote {
  notes: INote[];
  noteType: NoteType;
}
