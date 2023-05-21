import { useState } from "react";
import Input from "../../components/input/Input";
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

  return (
    <div className={styles.boardTitle}>
      <Input
        className={`${
          enabled ? styles.boardTitleEnabled : styles.boardTitleDisabled
        }`}
        value={title}
        disabled={!enabled}
        onEnter={toggle}
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
