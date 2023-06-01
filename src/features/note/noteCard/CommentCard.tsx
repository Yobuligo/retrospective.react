import { useState } from "react";
import Card from "../../../components/card/Card";
import { useToggle } from "../../../hooks/useToggle";
import CommentFooter from "../noteFooter/CommentFooter";
import styles from "./CommentCard.module.css";
import { ICommentCardProps } from "./ICommentCardProps";

const CommentCard: React.FC<ICommentCardProps> = (props) => {
  const [comment, setComment] = useState(props.note.text);
  const [enabled, toggleEnabled] = useToggle(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.note.text = event.target.value;
    setComment(event.target.value);
  };

  const toggle = () => toggleEnabled();

  return (
    <Card className={styles.commentCard}>
      <div className={styles.commentCardDetails}>
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
        note={props.note}
        noteType={props.noteType}
        onDelete={props.onDelete}
        onEdit={toggle}
      />
    </Card>
  );
};

export default CommentCard;