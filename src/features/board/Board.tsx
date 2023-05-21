import Section from "../section/Section";
import styles from "./Board.module.css";

const Board: React.FC = () => {
  return (
    <div className={styles.board}>
      <Section name={"Was lief gut"} />
      <Section name={"Was lief schlecht"} />
      <Section name={"Verbesserungsvorschläge"} />
    </div>
  );
};

export default Board;
