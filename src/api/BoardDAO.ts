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

  static updateNote(note: INote): Promise<boolean> {
    const boardId = note.boardId;
    const item = localStorage.getItem(boardId);
    if (!item) {
      return new Promise((_, reject) => {
        reject(new Error("Board and note not found"));
      });
    }

    const boardData: IBoardData = JSON.parse(item);
    switch (note.noteType) {
      case NoteType.Positive: {
        return this.updateList(boardId, note, boardData, boardData.positive);
      }
      case NoteType.Negative: {
        return this.updateList(boardId, note, boardData, boardData.negative);
      }
      case NoteType.Proposal: {
        return this.updateList(boardId, note, boardData, boardData.proposal);
      }
      default:
        throw new Error("Error updating note");
    }
  }

  private static updateList(
    boardId: string,
    note: INote,
    boardData: IBoardData,
    notes: INote[]
  ): Promise<boolean> {
    return new Promise((resolve) => {
      const index = notes.findIndex((element) => element.id === note.id);
      notes.splice(index, 1, note);
      this.saveBoardData(boardId, boardData);
      resolve(true);
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
    this.saveBoardData(boardId, boardData);
    return true;
  }

  private static saveBoardData(boardId: string, boardData: IBoardData) {
    localStorage.setItem(boardId, JSON.stringify(boardData));
  }
}
