import { useContext, useEffect } from "react";
import { BoardDAO } from "../../../api/BoardDAO";
import Card from "../../../components/card/Card";
import { AppContext } from "../../../contexts/AppContext";
import { useBoardId } from "../../../hooks/useBoardId";
import { useTranslation } from "../../../hooks/useTranslation";
import { NoteType } from "../../../types/NoteType";
import { Color } from "../../types/Color";
import BoardSection from "../boardSection/BoardSection";
import styles from "./Board.module.css";

const Board: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const boardId = useBoardId();

  useEffect(() => {
    async function fetchNotes() {
      const boardData = await BoardDAO.findNotes(boardId);
      context.notes.positiveDAO.setDataObjects(boardData.positive);
      context.notes.negativeDAO.setDataObjects(boardData.negative);
      context.notes.proposalDAO.setDataObjects(boardData.proposal);
    }

    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.board}>
      <div className={styles.boardSections}>
        <div className={styles.boardSection}>
          <BoardSection
            noteType={NoteType.Positive}
            dataObject={context.notes.positiveDAO}
            name={t.titlePositive}
            backgroundColor={Color.positiveGreen}
          />
        </div>
        <div className={styles.boardSection}>
          <BoardSection
            noteType={NoteType.Negative}
            dataObject={context.notes.negativeDAO}
            name={t.titleNegative}
            backgroundColor={Color.negativeRed}
          />
        </div>
        <div className={styles.boardSection}>
          <BoardSection
            noteType={NoteType.Proposal}
            dataObject={context.notes.proposalDAO}
            name={t.titleProposal}
            backgroundColor={Color.ideaYellow}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
