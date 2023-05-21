import EvaluationButton from "../components/VotingButton";
import styles from "./DisagreeButton.module.css";

const DisagreeButton: React.FC = () => {
  return (
    <EvaluationButton className={styles.disagreeButton} icon="thumb_down" />
  );
};

export default DisagreeButton;
