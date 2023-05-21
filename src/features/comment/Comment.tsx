import Card from "../../components/card/Card";
import { CommentType } from "../../types/CommentType";
import styles from "./Comment.module.css";
import { ICommentProps } from "./ICommentProps";

const Comment: React.FC<ICommentProps> = (props) => {
  const backgroundColor = () => {
    switch (props.commentType) {
      case CommentType.Negative: {
        return styles.negative;
      }

      case CommentType.Neutral: {
        return styles.neutral;
      }

      default: {
        return styles.positive;
      }
    }
  };

  return (
    <Card className={`${styles.commentCard} ${backgroundColor()}`}>
      <div className={styles.comment}>{props.comment}</div>
    </Card>
  );
};

export default Comment;
