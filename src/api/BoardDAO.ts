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
  static addNote(boardId: string, note: Omit<INote, "id">): Promise<INote> {
    return new Promise((resolve) => {
      const newNote = { id: crypto.randomUUID(), ...note };
      const item = localStorage.getItem(boardId);
      let boardData: IBoardData = { positive: [], negative: [], proposal: [] };
      if (item) {
        boardData = JSON.parse(item);
      }

      switch (note.noteType) {
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

  static deleteNote(boardId: string, note: INote): Promise<boolean> {
    const item = localStorage.getItem(boardId);
    if (!item) {
      return new Promise((resolve) => resolve(false));
    }

    return new Promise((resolve) => {
      const boardData: IBoardData = JSON.parse(item);
      switch (note.noteType) {
        case NoteType.Positive: {
          resolve(
            this.removeNoteFromList(
              boardId,
              note,
              boardData,
              boardData.positive
            )
          );
          break;
        }
        case NoteType.Negative: {
          resolve(
            this.removeNoteFromList(
              boardId,
              note,
              boardData,
              boardData.negative
            )
          );
          break;
        }
        case NoteType.Proposal: {
          resolve(
            this.removeNoteFromList(
              boardId,
              note,
              boardData,
              boardData.proposal
            )
          );
          break;
        }
        default:
          throw new Error("Type not supported");
      }
    });
  }

  private static removeNoteFromList(
    boardId: string,
    note: INote,
    boardData: IBoardData,
    notes: INote[]
  ): boolean {
    const index = notes.findIndex((element) => element.id === note.id);
    if (index < 0) {
      return false;
    }
    notes.splice(index, 1);
    localStorage.setItem(boardId, JSON.stringify(boardData));
    return true;
  }
}
