import { useTranslation } from "../../../hooks/useTranslation";
import { CommentType } from "../../../types/CommentType";
import { SummaryHeader } from "../summaryHeader/SummaryHeader";
import styles from './SummaryFrame.module.css'

export const SummaryFrame: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.summaryFrameHeader}>
        <SummaryHeader
          commentType={CommentType.Positive}
          title={t.titlePositive}
        />
      </div>
      <div className={styles.summaryFrameHeader}>
        <SummaryHeader
          commentType={CommentType.Negative}
          title={t.titleNegative}
        />
      </div>
      <div className={styles.summaryFrameHeader}>
        <SummaryHeader
          commentType={CommentType.Proposal}
          title={t.titleProposal}
        />
      </div>
    </>
  );
};
