import Comment from "../comment/Comment";
import { ICommentListProps } from "./ICommentListProps";

const CommentList: React.FC<ICommentListProps> = (props) => {
  const items = props.comments.map((comment) => <Comment comment={comment} />);
  return <div>{items}</div>;
};

export default CommentList;
