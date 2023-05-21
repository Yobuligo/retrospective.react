import { CommentType } from "../../types/CommentType";
import BoardSection from "../boardSection/BoardSection";
import styles from "./Board.module.css";

const Board: React.FC = () => {
  return (
    <div className={styles.board}>
      <BoardSection commentType={CommentType.Positive} name={"Was lief gut"} />
      <BoardSection
        commentType={CommentType.Negative}
        name={"Was lief schlecht"}
      />
      <BoardSection
        commentType={CommentType.Neutral}
        name={"Verbesserungsvorschläge"}
      />
    </div>
  );
};

export default Board;
