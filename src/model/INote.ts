import { IDataObject } from "../types/IDataObject";
import { VotingState } from "../types/VotingState";

export interface INote extends IDataObject {
  countAgrees: number;
  countDisagrees: number;
  text: string;
  votingState: VotingState;
}
