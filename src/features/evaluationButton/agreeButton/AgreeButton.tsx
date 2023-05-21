import EvaluationButton from "../components/EvaluationButton";
import styles from "./AgreeButton.module.css";

const AgreeButton: React.FC = () => {
  return <EvaluationButton className={styles.agreeButton} icon="thumb_up" />;
};

export default AgreeButton;
