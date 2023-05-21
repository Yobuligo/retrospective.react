import { useState } from "react";
import CommentList from "../commentList/CommentList";
import CommentInput from "../commentInput/CommentInput";
import { ICommentSectionProps } from "./ICommentSectionProps";

const CommentSection: React.FC<ICommentSectionProps> = (props) => {
  const [comments, setComments] = useState<string[]>([]);

  const onAdd = (comment: string): void =>
    setComments((previous) => [...previous, comment]);

  return (
    <>
      <CommentInput hint={props.name} onAdd={onAdd} />
      <CommentList comments={comments} commentType={props.commentType} />
    </>
  );
};

export default CommentSection;
