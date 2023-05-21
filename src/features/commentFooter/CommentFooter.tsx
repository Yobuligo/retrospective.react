import { CommentType } from "../../types/CommentType";
import styles from "./CommentFooter.module.css";
import { ICommentFooterProps } from "./ICommentFooterProps";

const CommentFooter: React.FC<ICommentFooterProps> = (props) => {
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
    <div className={`${styles.commentFooter} ${backgroundColor()}`}>
      <span className="material-symbols-outlined">thumb_up</span>
      <span className="material-symbols-outlined">thumb_down</span>
    </div>
  );
};

export default CommentFooter;
