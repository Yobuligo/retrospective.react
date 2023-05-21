import Card from "../../components/card/Card";
import { ICommentProps } from "./ICommentProps";

const Comment: React.FC<ICommentProps> = (props) => {
  return <Card>{props.comment}</Card>;
};

export default Comment;
