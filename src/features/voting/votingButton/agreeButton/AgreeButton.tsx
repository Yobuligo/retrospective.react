import VotingButton from "../components/VotingButton";
import styles from "./AgreeButton.module.css";
import { IAgreeButtonProps } from "./IAgreeButtonProps";

const AgreeButton: React.FC<IAgreeButtonProps> = (props) => {
  return (
    <VotingButton {...props} className={styles.agreeButton} icon="thumb_up" />
  );
};

export default AgreeButton;
