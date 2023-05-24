import { useState } from "react";
import { VotingState } from "../../../model/VotingState";
import AgreeButton from "../votingButton/agreeButton/AgreeButton";
import DisagreeButton from "../votingButton/disagreeButton/DisagreeButton";
import { IVotingSectionProps } from "./IVotingSectionProps";

const VotingSection: React.FC<IVotingSectionProps> = (props) => {
  const [votingState, setVotingState] = useState(props.comment.votingState);
  const [countAgree, setCountAgree] = useState(props.comment.countAgrees);
  const [countDisagree, setCountDisagree] = useState(
    props.comment.countDisagrees
  );

  const toggleVote = (votingState: VotingState) => {
    props.comment.votingState = votingState;
    setVotingState(votingState);
  };

  return (
    <>
      <AgreeButton
        count={countAgree}
        disabled={votingState === VotingState.Disagree}
        onClick={() => {
          if (props.comment.votingState === VotingState.Agree) {
            props.comment.countAgrees--;
            setCountAgree((previous) => previous - 1);
            toggleVote(VotingState.Open);
          } else {
            props.comment.countAgrees++;
            setCountAgree((previous) => previous + 1);
            toggleVote(VotingState.Agree);
          }
        }}
      />
      <DisagreeButton
        count={countDisagree}
        disabled={votingState === VotingState.Agree}
        onClick={() => {
          if (props.comment.votingState === VotingState.Disagree) {
            props.comment.countDisagrees--;
            setCountDisagree((previous) => previous - 1);
            toggleVote(VotingState.Open);
          } else {
            props.comment.countDisagrees++;
            setCountDisagree((previous) => previous + 1);
            toggleVote(VotingState.Disagree);
          }
        }}
      />
    </>
  );
};

export default VotingSection;
