import { useTranslation } from "../../../hooks/useTranslation";
import { CommentType } from "../../../types/CommentType";
import BoardSection from "../boardSection/BoardSection";
import BoardTitle from "../boardTitle/BoardTitle";
import styles from "./Board.module.css";

const Board: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.board}>
      <div className={styles.boardTitle}>
        <BoardTitle title="Default" />
      </div>

      <div className={styles.boardSections}>
        <BoardSection
          commentType={CommentType.Positive}
          name={t.titlePositive}
        />
        <BoardSection
          commentType={CommentType.Negative}
          name={t.titleNegative}
        />
        <BoardSection
          commentType={CommentType.Neutral}
          name={t.titleProposal}
        />
      </div>
    </div>
  );
};

export default Board;
