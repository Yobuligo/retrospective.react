import { INote } from "../../../model/INote";
import { NoteType } from "../../../types/NoteType";
import { IDataAccessObject } from "../../../types/IDataAccessObject";

export interface ICommentSectionProps {
  className?: string
  noteType: NoteType;
  dataObject: IDataAccessObject<INote>;
  name: string;
}
