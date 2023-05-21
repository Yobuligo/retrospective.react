import { useState } from "react";
import AgreeButton from "../votingButton/agreeButton/AgreeButton";
import DisagreeButton from "../votingButton/disagreeButton/DisagreeButton";

const VotingSection: React.FC = () => {
  const [countAgree, setCountAgree] = useState(0);
  const [countDisagree, setCountDisagree] = useState(0);

  return (
    <>
      <AgreeButton
        count={countAgree}
        onClick={() => setCountAgree((previous) => previous + 1)}
      />
      <DisagreeButton
        count={countDisagree}
        onClick={() => setCountDisagree((previous) => previous + 1)}
      />
    </>
  );
};

export default VotingSection;
