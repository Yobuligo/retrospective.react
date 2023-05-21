import Card from "../../components/card/Card";
import { ICommentProps } from "./ICommentProps";

const Comment: React.FC<ICommentProps> = (props) => {
  return <Card>{props.comment.text}</Card>;
};

export default Comment;
