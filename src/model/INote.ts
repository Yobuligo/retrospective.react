import { IDataObject } from "../types/IDataObject";
import { NoteType } from "../types/NoteType";
import { VotingState } from "../types/VotingState";

export interface INote extends IDataObject {
  boardId: string;
  countAgrees: number;
  countDisagrees: number;
  noteType: NoteType;
  text: string;
  votingState: VotingState;
}
