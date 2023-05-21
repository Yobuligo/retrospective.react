import { useState } from "react";
import { IComment } from "../../../model/IComment";
import CommentInput from "../commentInput/CommentInput";
import CommentList from "../commentList/CommentList";
import { ICommentSectionProps } from "./ICommentSectionProps";

const CommentSection: React.FC<ICommentSectionProps> = (props) => {
  const [comments, setComments] = useState<IComment[]>([]);

  const onAdd = (text: string): void =>
    setComments((previous) => [...previous, { text: text }]);

  const onDelete = (comment: IComment): void => {
    setComments((previous) => {
      const index = previous.findIndex((element) => element === comment);
      previous.splice(index, 1);
      return [...previous];
    });
  };

  return (
    <>
      <CommentInput hint={props.name} onAdd={onAdd} />
      <CommentList
        comments={comments}
        commentType={props.commentType}
        onDelete={onDelete}
      />
    </>
  );
};

export default CommentSection;
