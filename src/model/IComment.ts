import { VotingState } from "./VotingState";

export interface IComment {
  id: string;
  countAgrees: number;
  countDisagrees: number;
  text: string;
  votingState: VotingState;
}
