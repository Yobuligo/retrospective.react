import { useState } from "react";
import styles from "./BoardTitle.module.css";
import { IBoardTitleProps } from "./IBoardTitleProps";

const BoardTitle: React.FC<IBoardTitleProps> = (props) => {
  const [title, setTitle] = useState(props.title);
  const [enabled, setEnabled] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const toggle = () => {
    setEnabled((previous) => !previous);
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      toggle();
    }
  };
  return (
    <div className={styles.boardTitle}>
      <input
        
        className={`${
          enabled ? styles.boardTitleEnabled : styles.boardTitleDisabled
        }`}
        value={title}
        disabled={!enabled}
        onKeyUp={onEnter}
        onChange={onChange}
        onBlur={toggle}
      />

      <button onClick={toggle}>
        <span className="material-symbols-outlined">edit</span>
      </button>
    </div>
  );
};

export default BoardTitle;
