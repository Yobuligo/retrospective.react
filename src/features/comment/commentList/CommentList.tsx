import Comment from "../comment/Comment";
import { ICommentListProps } from "./ICommentListProps";

const CommentList: React.FC<ICommentListProps> = (props) => {
  const items = props.comments.map((comment) => (
    <Comment
      key={comment.id}
      comment={comment}
      commentType={props.commentType}
      onDelete={props.onDelete}
    />
  ));
  return <>{items}</>;
};

export default CommentList;
