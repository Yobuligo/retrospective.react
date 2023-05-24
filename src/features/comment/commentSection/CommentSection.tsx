import { VotingState } from "../../../model/VotingState";
import CommentInput from "../commentInput/CommentInput";
import CommentList from "../commentList/CommentList";
import { ICommentSectionProps } from "./ICommentSectionProps";

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
    <>
      <CommentInput hint={props.name} onAdd={onAdd} />
      <CommentList
        comments={props.dataObject.dataObjects}
        commentType={props.commentType}
        onDelete={props.dataObject.onDelete}
      />
    </>
  );
};

export default CommentSection;
