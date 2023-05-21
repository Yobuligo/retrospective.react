import VotingButton from "../components/VotingButton";
import styles from "./AgreeButton.module.css";
import { IAgreeButtonProps } from "./IAgreeButtonProps";

const AgreeButton: React.FC<IAgreeButtonProps> = (props) => {
  return (
    <VotingButton
      className={styles.agreeButton}
      count={props.count}
      icon="thumb_up"
      onClick={props.onClick}
    />
  );
};

export default AgreeButton;
