import { NoteType } from "../../../types/NoteType";
import { style } from "../../../utils/Styles";
import VotingSection from "../../voting/votingSection/VotingSection";
import CommentDelete from "../commentDelete/CommentDelete";
import CommentEdit from "../commentEdit/CommentEdit";
import styles from "./CommentFooter.module.css";
import { ICommentFooterProps } from "./ICommentFooterProps";

const CommentFooter: React.FC<ICommentFooterProps> = (props) => {
  const backgroundColor = () => {
    switch (props.noteType) {
      case NoteType.Negative: {
        return styles.negative;
      }

      case NoteType.Proposal: {
        return styles.proposal;
      }

      default: {
        return styles.positive;
      }
    }
  };

  return (
    <div className={style(styles.commentFooter, backgroundColor())}>
      <VotingSection note={props.note} />
      <div className={styles.commentFooterDivider}>
        <CommentEdit onEdit={() => props.onEdit(props.note)} />
        <CommentDelete onDelete={() => props.onDelete(props.note)} />
      </div>
    </div>
  );
};

export default CommentFooter;
