import EvaluationButton from "../components/EvaluationButton";
import styles from "./DisagreeButton.module.css";

const DisagreeButton: React.FC = () => {
  return (
    <EvaluationButton className={styles.disagreeButton} icon="thumb_down" />
  );
};

export default DisagreeButton;
