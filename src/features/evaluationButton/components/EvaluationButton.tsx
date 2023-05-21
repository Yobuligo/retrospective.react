import { useState } from "react";
import styles from "./EvaluationButton.module.css";
import { IEvaluationButtonProps } from "./IEvaluationButtonProps";

const EvaluationButton: React.FC<IEvaluationButtonProps> = (props) => {
  const [count, setCounter] = useState(0);

  return (
    <div
      className={styles.evaluationButton}
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
