import { VotingState } from "../../../model/VotingState";
import CommentInput from "../commentInput/CommentInput";
import CommentCardList from "../commentCardList/CommentCardList";
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
          comments={props.dataObject.dataObjects}
          commentType={props.commentType}
          onDelete={props.dataObject.onDelete}
        />
      </div>
    </div>
  );
};

export default CommentSection;
