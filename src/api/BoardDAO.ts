import { IBoard } from "../model/IBoard";
import { INote } from "../model/INote";
import { DataAccessObject } from "../utils/DataAccessObject/DataAccessObject";

export class BoardDAO extends DataAccessObject<IBoard> {
  static addNote(boardId: string, note: Omit<INote, "id">): Promise<INote> {
    return new Promise((resolve) => {
      const newNote = { id: crypto.randomUUID(), ...note };
      const item = localStorage.getItem(boardId);
      let notes: INote[] = [];
      if (item) {
        notes = JSON.parse(item);
      }
      notes.push(newNote);
      localStorage.setItem(boardId, JSON.stringify(notes));
      resolve(newNote);
    });
  }

  static findNotes(boardId: string): Promise<INote[]> {
    return new Promise((resolve) => {
      const item = localStorage.getItem(boardId);
      if (item) {
        resolve(JSON.parse(item));
      } else {
        resolve([]);
      }
    });
  }
}
