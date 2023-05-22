import { useState } from "react";
import Card from "../../../components/card/Card";
import { useToggle } from "../../../hooks/useToggle";
import CommentFooter from "../commentFooter/CommentFooter";
import styles from "./Comment.module.css";
import { ICommentProps } from "./ICommentProps";

const Comment: React.FC<ICommentProps> = (props) => {
  const [comment, setComment] = useState(props.comment.text);
  const [enabled, toggleEnabled] = useToggle(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.comment.text = event.target.value;
    setComment(event.target.value);
  };

  const toggle = () => toggleEnabled();

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
