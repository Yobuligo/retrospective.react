import { ISummaryCommentProps } from "./ISummaryCommentProps";
import styles from "./SummaryComment.module.css";

export const SummaryComment: React.FC<ISummaryCommentProps> = (props) => {
  return (
    <div className={styles.summaryComment}>
      <div className={styles.summaryCommentPositive}>
        {props.comment.countAgrees}
      </div>
      <div className={styles.summaryCommentNegative}>
        {props.comment.countDisagrees}
      </div>
      <div>{props.comment.text}</div>
    </div>
  );
};
