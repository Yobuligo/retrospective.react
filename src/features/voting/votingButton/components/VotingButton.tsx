import { IVotingButtonProps } from "./IVotingButtonProps";
import styles from "./VotingButton.module.css";

const VotingButton: React.FC<IVotingButtonProps> = (props) => {
  return (
    <div className={styles.votingButton}>
      <button disabled={props.disabled} onClick={props.onClick}>
        <span className={`${"material-symbols-outlined"} ${props.className}`}>
          {props.icon}
        </span>
        {props.count}
      </button>
    </div>
  );
};

export default VotingButton;
