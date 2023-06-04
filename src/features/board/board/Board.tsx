import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { NoteType } from "../../../types/NoteType";
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
            noteType={NoteType.Positive}
            dataObject={context.notes.positiveDAO}
            name={t.titlePositive}
          />
        </div>
        <div className={styles.boardSection}>
          <BoardSection
            noteType={NoteType.Negative}
            dataObject={context.notes.negativeDAO}
            name={t.titleNegative}
          />
        </div>
        <div className={styles.boardSection}>
          <BoardSection
            noteType={NoteType.Proposal}
            dataObject={context.notes.proposalDAO}
            name={t.titleProposal}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
