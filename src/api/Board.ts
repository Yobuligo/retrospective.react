import { IBoard } from "../model/IBoard";
import { INote } from "../model/INote";
import { DataAccessObject } from "../utils/DataAccessObject/DataAccessObject";

class BoardDAO extends DataAccessObject<IBoard> {
  addNote(boardId: string, note: Omit<INote, "id">): Promise<INote> {
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
}

export const Board = new BoardDAO();
