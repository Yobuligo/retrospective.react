import CommentCard from "../noteCard/CommentCard";
import { ICommentCardListProps } from "./ICommentCardListProps";
import styles from "./CommentCardList.module.css";

const CommentCardList: React.FC<ICommentCardListProps> = (props) => {
  const items = props.notes.map((comment) => (
    <div key={comment.id} className={styles.commentCardListItem}>
      <CommentCard
        note={comment}
        noteType={props.noteType}
        onDelete={props.onDelete}
      />
    </div>
  ));
  return <>{items}</>;
};

export default CommentCardList;
