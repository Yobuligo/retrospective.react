import { useState } from "react";
import Input from "../../../components/input/Input";
import styles from "./CommentInput.module.css";
import { ICommentInputProps } from "./ICommentInputProps";

const CommentInput: React.FC<ICommentInputProps> = (props) => {
  const [comment, setComment] = useState<string>("");

  const clearComment = () => {
    setComment("");
  };

  const onAdd = () => {
    props.onAdd?.(comment);
    clearComment();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setComment(event.target.value);

  return (
    <div className={styles.topic}>
      <Input
        type="text"
        value={comment}
        placeholder={props.hint}
        onChange={onChange}
        onEnter={onAdd}
      />
      <button onClick={onAdd}>
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};

export default CommentInput;
