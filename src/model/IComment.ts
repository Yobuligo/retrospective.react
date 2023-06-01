import { IHaveId } from "../types/IHaveId";
import { VotingState } from "./VotingState";

export interface IComment extends IHaveId {
  countAgrees: number;
  countDisagrees: number;
  text: string;
  votingState: VotingState;
}
