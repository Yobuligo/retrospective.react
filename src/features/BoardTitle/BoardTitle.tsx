import { useState } from "react";
import styles from "./BoardTitle.module.css";
import { IBoardTitleProps } from "./IBoardTitleProps";

const BoardTitle: React.FC<IBoardTitleProps> = (props) => {
  const [title, setTitle] = useState(props.title);
  return (
    <div className={styles.boardTitle}>
      {title}
      <button>
        <span className="material-symbols-outlined">edit</span>
      </button>
    </div>
  );
};

export default BoardTitle;
