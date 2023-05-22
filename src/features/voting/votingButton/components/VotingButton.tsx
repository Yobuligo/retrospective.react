import Icon from "../../../../components/icon/Icon";
import { IVotingButtonProps } from "./IVotingButtonProps";
import styles from "./VotingButton.module.css";

const VotingButton: React.FC<IVotingButtonProps> = (props) => {
  return (
    <div
      className={`${styles.votingButton} ${
        props.disabled ? "" : styles.votingButtonEnabled
      }`}
    >
      <button disabled={props.disabled} onClick={props.onClick}>
        <Icon className={props.className} icon={props.icon} />
        {props.count}
      </button>
    </div>
  );
};

export default VotingButton;
