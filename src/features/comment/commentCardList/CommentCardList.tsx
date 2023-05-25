import CommentCard from "../commentCard/CommentCard";
import { ICommentCardListProps } from "./ICommentCardListProps";
import styles from './CommentCardList.module.css'

const CommentCardList: React.FC<ICommentCardListProps> = (props) => {
  const items = props.comments.map((comment) => (
    <div className={styles.commentCardListItem}>
      <CommentCard
        key={comment.id}
        comment={comment}
        commentType={props.commentType}
        onDelete={props.onDelete}
      />
    </div>
  ));
  return <>{items}</>;
};

export default CommentCardList;
