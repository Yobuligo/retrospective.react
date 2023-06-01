import { SummaryComment } from "../summaryComment/SummaryComment";
import { ISummaryCommentListProps } from "./ISummaryCommentListProps";
import styles from "./SummaryCommentList.module.css";

export const SummaryCommentList: React.FC<ISummaryCommentListProps> = (
  props
) => {
  const items = props.notes.map((comment) => (
    <div key={comment.id} className={styles.summaryCommentListComment}>
      <SummaryComment note={comment} />
    </div>
  ));
  return <div className={styles.summaryCommentList}>{items}</div>;
};
