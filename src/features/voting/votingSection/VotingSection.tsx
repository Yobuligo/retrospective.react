import { useState } from "react";
import AgreeButton from "../votingButton/agreeButton/AgreeButton";
import DisagreeButton from "../votingButton/disagreeButton/DisagreeButton";
import { IVotingSectionProps } from "./IVotingSectionProps";
import { useToggle } from "../../../hooks/useToggle";

const VotingSection: React.FC<IVotingSectionProps> = (props) => {
  const [countAgree, setCountAgree] = useState(props.comment.countAgrees);
  const [countDisagree, setCountDisagree] = useState(
    props.comment.countDisagrees
  );
  const [disableAgree, setDisableAgree] = useState(false);
  const [disableDisagree, setDisableDisagree] = useState(false);
  const [voted, toggleVoted] = useToggle(false)

  return (
    <>
      <AgreeButton
        count={countAgree}
        disabled={disableAgree}
        onClick={() => {
          if (voted) {
            props.comment.countAgrees--;
            setCountAgree((previous) => previous - 1);
            setDisableAgree(false);
            setDisableDisagree(false);
          } else {
            props.comment.countAgrees++;
            setCountAgree((previous) => previous + 1);
            setDisableAgree(false);
            setDisableDisagree(true);
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
            setDisableAgree(false);
            setDisableDisagree(false);
          } else {
            props.comment.countDisagrees++;
            setCountDisagree((previous) => previous + 1);
            setDisableAgree(true);
            setDisableDisagree(false);
          }
          toggleVoted();
        }}
      />
    </>
  );
};

export default VotingSection;
