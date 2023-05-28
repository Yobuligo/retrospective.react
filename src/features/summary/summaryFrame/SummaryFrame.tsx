import { useContext } from "react";
import { useTranslation } from "../../../hooks/useTranslation";
import { CommentType } from "../../../types/CommentType";
import { SummarySection } from "../summarySection/SummarySection";
import styles from "./SummaryFrame.module.css";
import { AppContext } from "../../../data/AppContext";

export const SummaryFrame: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  return (
    <>
      <div className={styles.summaryFrameHeader}>
        <SummarySection
          comments={context.comments.positiveDAO.dataObjects}
          commentType={CommentType.Positive}
          title={t.titlePositive}
        />
      </div>
      <div className={styles.summaryFrameHeader}>
        <SummarySection
          comments={context.comments.negativeDAO.dataObjects}
          commentType={CommentType.Negative}
          title={t.titleNegative}
        />
      </div>
      <div className={styles.summaryFrameHeader}>
        <SummarySection
          comments={context.comments.proposalDAO.dataObjects}
          commentType={CommentType.Proposal}
          title={t.titleProposal}
        />
      </div>
    </>
  );
};
