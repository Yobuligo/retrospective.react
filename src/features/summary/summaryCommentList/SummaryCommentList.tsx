import { SummaryComment } from "../summaryComment/SummaryComment";
import { ISummaryCommentListProps } from "./ISummaryCommentListProps";
import styles from "./SummaryCommentList.module.css";

export const SummaryCommentList: React.FC<ISummaryCommentListProps> = (
  props
) => {
  const items = props.comments.map((comment) => (
    <div className={styles.summaryCommentListComment}>
      <SummaryComment key={comment.id} comment={comment} />
    </div>
  ));
  return <div className={styles.summaryCommentList}>{items}</div>;
};
