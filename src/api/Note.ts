import { INote } from "../model/INote";
import { DataAccessObject } from "../utils/DataAccessObject/DataAccessObject";

class NoteDAO extends DataAccessObject<INote> {}

export const Note = new NoteDAO();
