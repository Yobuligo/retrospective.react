import { useEffect, useState } from "react";
import { BoardDAO } from "../../../api/BoardDAO";
import { VotingState } from "../../../types/VotingState";
import AgreeButton from "../votingButton/agreeButton/AgreeButton";
import DisagreeButton from "../votingButton/disagreeButton/DisagreeButton";
import { IVotingSectionProps } from "./IVotingSectionProps";

const VotingSection: React.FC<IVotingSectionProps> = (props) => {
  const [votingState, setVotingState] = useState(props.note.votingState);
  const [countAgree, setCountAgree] = useState(props.note.countAgrees);
  const [countDisagree, setCountDisagree] = useState(props.note.countDisagrees);

  useEffect(() => {
    async function updateNote() {
      await BoardDAO.updateNote(props.note);
    }
    updateNote();
  }, [props.note, props.note.countAgrees, props.note.countDisagrees]);

  const toggleVote = (votingState: VotingState) => {
    props.note.votingState = votingState;
    setVotingState(votingState);
  };

  return (
    <>
      <AgreeButton
        count={countAgree}
        disabled={votingState === VotingState.Disagree}
        onClick={() => {
          if (props.note.votingState === VotingState.Agree) {
            props.note.countAgrees--;
            setCountAgree((previous) => previous - 1);
            toggleVote(VotingState.Open);
          } else {
            props.note.countAgrees++;
            setCountAgree((previous) => previous + 1);
            toggleVote(VotingState.Agree);
          }
        }}
      />
      <DisagreeButton
        count={countDisagree}
        disabled={votingState === VotingState.Agree}
        onClick={() => {
          if (props.note.votingState === VotingState.Disagree) {
            props.note.countDisagrees--;
            setCountDisagree((previous) => previous - 1);
            toggleVote(VotingState.Open);
          } else {
            props.note.countDisagrees++;
            setCountDisagree((previous) => previous + 1);
            toggleVote(VotingState.Disagree);
          }
        }}
      />
    </>
  );
};

export default VotingSection;
