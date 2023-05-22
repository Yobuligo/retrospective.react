import { useContext } from "react";
import { AppContext } from "../../../data/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { CommentType } from "../../../types/CommentType";
import BoardSection from "../boardSection/BoardSection";
import BoardTitle from "../boardTitle/BoardTitle";
import styles from "./Board.module.css";

const Board: React.FC = () => {
  const context = useContext(AppContext);
  const { t } = useTranslation();
  return (
    <div className={styles.board}>
      <div className={styles.boardTitle}>
        <BoardTitle title={t.title} />
      </div>

      <div className={styles.boardSections}>
        <BoardSection
          commentType={CommentType.Positive}
          dataObject={context.positiveComment}
          name={t.titlePositive}
        />
        <BoardSection
          commentType={CommentType.Negative}
          dataObject={context.negativeComment}
          name={t.titleNegative}
        />
        <BoardSection
          commentType={CommentType.Proposal}
          dataObject={context.proposalComment}
          name={t.titleProposal}
        />
      </div>
    </div>
  );
};

export default Board;
