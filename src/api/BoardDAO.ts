import { IBoard } from "../model/IBoard";
import { INote } from "../model/INote";
import { DataAccessObject } from "../utils/DataAccessObject/DataAccessObject";
import { NoteType } from "./../types/NoteType";

interface IBoardData {
  positive: INote[];
  negative: INote[];
  proposal: INote[];
}

export class BoardDAO extends DataAccessObject<IBoard> {
  static addNote(
    boardId: string,
    noteType: NoteType,
    note: Omit<INote, "id">
  ): Promise<INote> {
    return new Promise((resolve) => {
      const newNote = { id: crypto.randomUUID(), ...note };
      const item = localStorage.getItem(boardId);
      let boardData: IBoardData = { positive: [], negative: [], proposal: [] };
      if (item) {
        boardData = JSON.parse(item);
      }

      switch (noteType) {
        case NoteType.Positive: {
          boardData.positive.push(newNote);
          break;
        }
        case NoteType.Negative: {
          boardData.negative.push(newNote);
          break;
        }
        case NoteType.Proposal: {
          boardData.proposal.push(newNote);
          break;
        }
        default:
          throw new Error("Type not supported");
      }

      localStorage.setItem(boardId, JSON.stringify(boardData));
      resolve(newNote);
    });
  }

  static findNotes(boardId: string): Promise<IBoardData> {
    return new Promise((resolve) => {
      const item = localStorage.getItem(boardId);
      if (item) {
        resolve(JSON.parse(item));
      } else {
        resolve({ positive: [], negative: [], proposal: [] });
      }
    });
  }
}
