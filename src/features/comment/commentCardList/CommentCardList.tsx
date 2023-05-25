import CommentCard from "../commentCard/CommentCard";
import { ICommentCardListProps } from "./ICommentCardListProps";

const CommentCardList: React.FC<ICommentCardListProps> = (props) => {
  const items = props.comments.map((comment) => (
    <CommentCard
      key={comment.id}
      comment={comment}
      commentType={props.commentType}
      onDelete={props.onDelete}
    />
  ));
  return <>{items}</>;
};

export default CommentCardList;
