import { useState } from "react";
import { IEvaluationButtonProps } from "./IVotingButtonProps";
import styles from "./VotingButton.module.css";

const EvaluationButton: React.FC<IEvaluationButtonProps> = (props) => {
  const [count, setCounter] = useState(0);

  return (
    <div
      className={styles.votingButton}
      onClick={() => setCounter((previous) => previous + 1)}
    >
      <button>
        <span className={`${"material-symbols-outlined"} ${props.className}`}>
          {props.icon}
        </span>
        {count}
      </button>
    </div>
  );
};

export default EvaluationButton;
