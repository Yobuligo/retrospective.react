import { CommentType } from "../../../types/CommentType";
import VotingSection from "../../voting/votingSection/VotingSection";
import CommentDelete from "../commentDelete/CommentDelete";
import CommentEdit from "../commentEdit/CommentEdit";
import styles from "./CommentFooter.module.css";
import { ICommentFooterProps } from "./ICommentFooterProps";

const CommentFooter: React.FC<ICommentFooterProps> = (props) => {
  const backgroundColor = () => {
    switch (props.commentType) {
      case CommentType.Negative: {
        return styles.negative;
      }

      case CommentType.Proposal: {
        return styles.proposal;
      }

      default: {
        return styles.positive;
      }
    }
  };

  return (
    <div className={`${styles.commentFooter} ${backgroundColor()}`}>
      <VotingSection comment={props.comment} />
      <div className={styles.commentFooterDivider}>
        <CommentEdit onEdit={() => props.onEdit(props.comment)} />
        <CommentDelete onDelete={() => props.onDelete(props.comment)} />
      </div>
    </div>
  );
};

export default CommentFooter;
