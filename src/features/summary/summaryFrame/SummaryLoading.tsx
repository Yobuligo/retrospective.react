import styles from "./SummaryLoading.module.css";
import summaryStyles from "./SummaryFrame.module.css"

export const SummaryLoading: React.FC = () => {
  return (
    <div className={summaryStyles.summaryFrameHeader}>
      <div className={styles.loadingBar}></div>
      <div className={styles.loadingBar}></div>
      <div className={styles.loadingBar}></div>
    </div>
  );
};
