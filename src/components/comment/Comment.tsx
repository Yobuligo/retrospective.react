import { useId, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import styles from "./Comment.module.css";
import { ICommentProps } from "./ICommentProps";

const Comment: React.FC<ICommentProps> = (props) => {
  const commentId = useId();
  const comment = useRef<HTMLInputElement>(null);
  const onAdd = () => {
    props.onAdd?.({ text: comment.current?.value ?? "" });
  };

  return (
    <div className={styles.comment}>
      <input
        id={commentId}
        type="text"
        placeholder={props.hint}
        ref={comment}
      />
      <button onClick={onAdd}>
        <IoIosAddCircleOutline />
      </button>
    </div>
  );
};

export default Comment;
