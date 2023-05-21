import VotingButton from "../components/VotingButton";
import styles from "./DisagreeButton.module.css";
import { IDisagreeButtonProps } from "./IDisagreeButtonProps";

const DisagreeButton: React.FC<IDisagreeButtonProps> = (props) => {
  return (
    <VotingButton
      className={styles.disagreeButton}
      count={props.count}
      icon="thumb_down"
      onClick={props.onClick}
    />
  );
};

export default DisagreeButton;
