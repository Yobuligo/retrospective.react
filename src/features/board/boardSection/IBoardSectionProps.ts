import { INote } from "../../../model/INote";
import { NoteType } from "../../../types/NoteType";
import { IDataAccessObject } from "../../../types/IDataAccessObject";
import { Color } from "../../types/Color";

export interface IBoardSection {
  className?: string
  noteType: NoteType;
  dataObject: IDataAccessObject<INote>;
  name: string;
  backgroundColor: Color;
}
