import { CommentType } from "../../../types/CommentType";
import BoardTitle from "../boardTitle/BoardTitle";
import BoardSection from "../boardSection/BoardSection";
import styles from "./Board.module.css";

const Board: React.FC = () => {
  return (
    <div className={styles.board}>
      <div className={styles.boardTitle}>
        <BoardTitle title="Default" />
      </div>

      <div className={styles.boardSections}>
        <BoardSection
          commentType={CommentType.Positive}
          name={"Was lief gut"}
        />
        <BoardSection
          commentType={CommentType.Negative}
          name={"Was lief schlecht"}
        />
        <BoardSection
          commentType={CommentType.Neutral}
          name={"Verbesserungsvorschläge"}
        />
      </div>
    </div>
  );
};

export default Board;
