import { VotingState } from "../../../model/VotingState";
import CommentInput from "../noteInput/CommentInput";
import CommentCardList from "../noteCardList/CommentCardList";
import { ICommentSectionProps } from "./ICommentSectionProps";
import styles from './CommentSection.module.css'

const CommentSection: React.FC<ICommentSectionProps> = (props) => {
  const onAdd = (text: string): void =>
    props.dataObject.onAdd({
      id: crypto.randomUUID(),
      countAgrees: 0,
      countDisagrees: 0,
      votingState: VotingState.Open,
      text: text,
    });

  return (
    <div className={props.className}>
      <CommentInput hint={props.name} onAdd={onAdd} />
      <div className={styles.commentSectionList}>
        <CommentCardList
          notes={props.dataObject.dataObjects}
          noteType={props.noteType}
          onDelete={props.dataObject.onDelete}
        />
      </div>
    </div>
  );
};

export default CommentSection;
