import { useContext } from "react";
import { AppContext } from "../../../data/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { CommentType } from "../../../types/CommentType";
import BoardSection from "../boardSection/BoardSection";
import BoardTitle from "../boardTitle/BoardTitle";
import styles from "./Board.module.css";

const Board: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  return (
    <div className={styles.board}>
      <div className={styles.boardTitle}>
        <BoardTitle />
      </div>
      <div className={styles.boardSections}>
        <div className={styles.boardSection}>
          <BoardSection
            commentType={CommentType.Positive}
            dataObject={context.comments.positiveDAO}
            name={t.titlePositive}
          />
        </div>
        <div className={styles.boardSection}>
          <BoardSection
            commentType={CommentType.Negative}
            dataObject={context.comments.negativeDAO}
            name={t.titleNegative}
          />
        </div>
        <div className={styles.boardSection}>
          <BoardSection
            commentType={CommentType.Proposal}
            dataObject={context.comments.proposalDAO}
            name={t.titleProposal}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
