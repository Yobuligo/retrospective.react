import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ITopicProps } from "./ITopicProps";
import styles from "./Topic.module.css";

const Topic: React.FC<ITopicProps> = (props) => {
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

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd();
    }
  };
  return (
    <div className={styles.topic}>
      <input
        type="text"
        value={comment}
        placeholder={props.hint}
        onChange={onChange}
        onKeyUp={onEnter}
      />
      <button onClick={onAdd}>
        <IoIosAddCircleOutline />
      </button>
    </div>
  );
};

export default Topic;
