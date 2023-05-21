import BoardSection from "../boardSection/BoardSection";
import styles from "./Board.module.css";

const Board: React.FC = () => {
  return (
    <div className={styles.board}>
      <BoardSection name={"Was lief gut"} />
      <BoardSection name={"Was lief schlecht"} />
      <BoardSection name={"Verbesserungsvorschläge"} />
    </div>
  );
};

export default Board;
