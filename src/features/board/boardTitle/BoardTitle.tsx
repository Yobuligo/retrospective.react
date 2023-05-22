import { useState } from "react";
import Icon from "../../../components/icon/Icon";
import { IconType } from "../../../components/icon/IconType";
import { useToggle } from "../../../hooks/useToggle";
import styles from "./BoardTitle.module.css";
import { IBoardTitleProps } from "./IBoardTitleProps";

const BoardTitle: React.FC<IBoardTitleProps> = (props) => {
  const [title, setTitle] = useState(props.title);
  const [enabled, toggleEnabled] = useToggle(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const toggle = () => toggleEnabled();

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
