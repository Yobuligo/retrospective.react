import { INote } from "../model/INote";
import { DataAccessObject } from "../utils/DataAccessObject/DataAccessObject";

export class NoteDAO extends DataAccessObject<INote> {}
