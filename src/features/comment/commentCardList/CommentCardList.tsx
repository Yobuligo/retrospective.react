import CommentCard from "../commentCard/CommentCard";
import { ICommentCardListProps } from "./ICommentCardListProps";
import styles from "./CommentCardList.module.css";

const CommentCardList: React.FC<ICommentCardListProps> = (props) => {
  const items = props.comments.map((comment) => (
    <div key={comment.id} className={styles.commentCardListItem}>
      <CommentCard
        comment={comment}
        commentType={props.commentType}
        onDelete={props.onDelete}
      />
    </div>
  ));
  return <>{items}</>;
};

export default CommentCardList;
