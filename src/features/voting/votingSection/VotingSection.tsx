import { useState } from "react";
import { useToggle } from "../../../hooks/useToggle";
import AgreeButton from "../votingButton/agreeButton/AgreeButton";
import DisagreeButton from "../votingButton/disagreeButton/DisagreeButton";
import { IVotingSectionProps } from "./IVotingSectionProps";

const VotingSection: React.FC<IVotingSectionProps> = (props) => {
  const [countAgree, setCountAgree] = useState(props.comment.countAgrees);
  const [countDisagree, setCountDisagree] = useState(
    props.comment.countDisagrees
  );
  const [disableAgree, setDisableAgree] = useState(false);
  const [disableDisagree, setDisableDisagree] = useState(false);
  const [voted, toggleVoted] = useToggle(false);

  const setDisables = (agree: boolean, disagree: boolean) => {
    setDisableAgree(agree);
    setDisableDisagree(disagree);
  };

  return (
    <>
      <AgreeButton
        count={countAgree}
        disabled={disableAgree}
        onClick={() => {
          if (voted) {
            props.comment.countAgrees--;
            setCountAgree((previous) => previous - 1);
            setDisables(false, false);
          } else {
            props.comment.countAgrees++;
            setCountAgree((previous) => previous + 1);
            setDisables(false, true);
          }
          toggleVoted();
        }}
      />
      <DisagreeButton
        count={countDisagree}
        disabled={disableDisagree}
        onClick={() => {
          if (voted) {
            props.comment.countDisagrees--;
            setCountDisagree((previous) => previous - 1);
            setDisables(false, false);
          } else {
            props.comment.countDisagrees++;
            setCountDisagree((previous) => previous + 1);
            setDisables(true, false);
          }
          toggleVoted();
        }}
      />
    </>
  );
};

export default VotingSection;
