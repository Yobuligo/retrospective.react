import { IHaveId } from "../types/IHaveId";
import { VotingState } from "./VotingState";

export interface INote extends IHaveId {
  countAgrees: number;
  countDisagrees: number;
  text: string;
  votingState: VotingState;
}
