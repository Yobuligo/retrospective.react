import Card from "../../components/card/Card";
import CommentFooter from "../commentFooter/CommentFooter";
import styles from "./Comment.module.css";
import { ICommentProps } from "./ICommentProps";

const Comment: React.FC<ICommentProps> = (props) => {
  return (
    <Card className={styles.commentCard}>
      <div className={styles.comment}>{props.comment}</div>
      <CommentFooter commentType={props.commentType} />
    </Card>
  );
};

export default Comment;
