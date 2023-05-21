import { useState } from "react";
import Icon from "../../../components/icon/Icon";
import { IconType } from "../../../components/icon/IconType";
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
      <span
        className={`${
          enabled ? styles.boardTitleEnabled : styles.boardTitleDisabled
        }`}
        onChange={onChange}
        onBlur={toggle}
        role="textbox"
        contentEditable={enabled}
      >
        {title}
      </span>
      <button onClick={toggle}>
        <Icon icon={IconType.Edit} />
      </button>
    </div>
  );
};

export default BoardTitle;
