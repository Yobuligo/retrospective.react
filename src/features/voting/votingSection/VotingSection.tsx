import { useEffect, useState } from "react";
import AgreeButton from "../votingButton/agreeButton/AgreeButton";
import DisagreeButton from "../votingButton/disagreeButton/DisagreeButton";

const VotingSection: React.FC = () => {
  const [countAgree, setCountAgree] = useState(0);
  const [countDisagree, setCountDisagree] = useState(0);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    if (countAgree > 0 || countDisagree > 0) {
      setVoted(true);
    }
  }, [countAgree, countDisagree]);

  return (
    <>
      <AgreeButton
        count={countAgree}
        disabled={voted}
        onClick={() => setCountAgree((previous) => previous + 1)}
      />
      <DisagreeButton
        count={countDisagree}
        disabled={voted}
        onClick={() => setCountDisagree((previous) => previous + 1)}
      />
    </>
  );
};

export default VotingSection;
