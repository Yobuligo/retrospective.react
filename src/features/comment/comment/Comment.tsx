import { useState } from "react";
import Card from "../../../components/card/Card";
import CommentFooter from "../commentFooter/CommentFooter";
import styles from "./Comment.module.css";
import { ICommentProps } from "./ICommentProps";

const Comment: React.FC<ICommentProps> = (props) => {
  const [comment, setComment] = useState(props.comment.text);
  const [enabled, setEnabled] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.comment.text = event.target.value;
    setComment(event.target.value);
  };

  const toggle = () => setEnabled((previous) => !previous);

  return (
    <Card className={styles.commentCard}>
      <div className={styles.comment}>
        <span
          onChange={onChange}
          onBlur={toggle}
          role="textbox"
          contentEditable={enabled}
        >
          {comment}
        </span>
      </div>
      <CommentFooter
        comment={props.comment}
        commentType={props.commentType}
        onDelete={props.onDelete}
        onEdit={toggle}
      />
    </Card>
  );
};

export default Comment;
