import Comment from "../comment/Comment";
import { ICommentListProps } from "./ICommentListProps";

const CommentList: React.FC<ICommentListProps> = (props) => {
  const items = props.comments.map((comment) => (
    <Comment
      key={crypto.randomUUID()}
      comment={comment}
      commentType={props.commentType}
    />
  ));
  return <div>{items}</div>;
};

export default CommentList;
