import { CommentType } from "../../types/CommentType";
import AgreeButton from "../evaluationButton/agreeButton/AgreeButton";
import DisagreeButton from "../evaluationButton/disagreeButton/DisagreeButton";
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
      <AgreeButton />
      <DisagreeButton />
    </div>
  );
};

export default CommentFooter;
