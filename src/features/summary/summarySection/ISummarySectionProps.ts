import { INote } from "../../../model/INote";
import { NoteType } from "../../../types/NoteType";

export interface ISummarySectionProps {
  notes: INote[];
  noteType: NoteType;
  title: string;
}
