import { useContext } from "react";
import { useTranslation } from "../../../hooks/useTranslation";
import { NoteType } from "../../../types/NoteType";
import { SummarySection } from "../summarySection/SummarySection";
import styles from "./SummaryFrame.module.css";
import { AppContext } from "../../../context/AppContext";

export const SummaryFrame: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  return (
    <>
      <div className={styles.summaryFrameHeader}>
        <SummarySection
          notes={context.comments.positiveDAO.dataObjects}
          noteType={NoteType.Positive}
          title={t.titlePositive}
        />
      </div>
      <div className={styles.summaryFrameHeader}>
        <SummarySection
          notes={context.comments.negativeDAO.dataObjects}
          noteType={NoteType.Negative}
          title={t.titleNegative}
        />
      </div>
      <div className={styles.summaryFrameHeader}>
        <SummarySection
          notes={context.comments.proposalDAO.dataObjects}
          noteType={NoteType.Proposal}
          title={t.titleProposal}
        />
      </div>
    </>
  );
};
