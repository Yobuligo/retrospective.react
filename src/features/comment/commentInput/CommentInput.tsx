import { useEffect, useState } from "react";
import Icon from "../../../components/icon/Icon";
import { IconType } from "../../../components/icon/IconType";
import Input from "../../../components/input/Input";
import styles from "./CommentInput.module.css";
import { ICommentInputProps } from "./ICommentInputProps";

const CommentInput: React.FC<ICommentInputProps> = (props) => {
  const [comment, setComment] = useState<string>("");
  const [disableAddButton, setDisableAddButton] = useState(false);

  useEffect(() => {
    setDisableAddButton(comment === "");
  }, [comment]);

  const clearComment = () => {
    setComment("");
  };

  const onAdd = () => {
    if (comment !== "") {
      props.onAdd?.(comment);
      clearComment();
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setComment(event.target.value);

  return (
    <div className={styles.topic}>
      {/* <input
        type="text"
        value={comment}
        placeholder={props.hint}
        onChange={onChange}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            onAdd();
          }
        }}
      /> */}

      <Input
        type="text"
        value={comment}
        placeholder={props.hint}
        onChange={onChange}
        onEnter={onAdd}
      />
      <button disabled={disableAddButton} onClick={onAdd}>
        <Icon icon={IconType.Add} />
      </button>
    </div>
  );
};

export default CommentInput;
