import { ISummaryCommentProps } from "./ISummaryCommentProps";
import styles from "./SummaryComment.module.css";

export const SummaryComment: React.FC<ISummaryCommentProps> = (props) => {
  return (
    <div className={styles.summaryComment}>
      <div className={styles.summaryCommentPositive}>
        {props.note.countAgrees}
      </div>
      <div className={styles.summaryCommentNegative}>
        {props.note.countDisagrees}
      </div>
      <div>{props.note.text}</div>
    </div>
  );
};
