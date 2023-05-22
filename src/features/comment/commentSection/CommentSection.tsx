import { useContext } from "react";
import { AppContext } from "../../../data/AppContext";
import CommentInput from "../commentInput/CommentInput";
import CommentList from "../commentList/CommentList";
import { ICommentSectionProps } from "./ICommentSectionProps";

const CommentSection: React.FC<ICommentSectionProps> = (props) => {
  const context = useContext(AppContext);

  const onAdd = (text: string): void =>
    context.positiveComment.onAdd({
      id: crypto.randomUUID(),
      countAgrees: 0,
      countDisagrees: 0,
      text: text,
    });

  return (
    <>
      <CommentInput hint={props.name} onAdd={onAdd} />
      <CommentList
        comments={context.positiveComment.dataObjects}
        commentType={props.commentType}
        onDelete={context.positiveComment.onDelete}
      />
    </>
  );
};

export default CommentSection;
