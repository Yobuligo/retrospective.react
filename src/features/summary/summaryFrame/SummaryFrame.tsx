import { useTranslation } from "../../../hooks/useTranslation";
import { CommentType } from "../../../types/CommentType";
import { SummaryHeader } from "../summaryHeader/SummaryHeader";

export const SummaryFrame: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SummaryHeader
        commentType={CommentType.Positive}
        title={t.titlePositive}
      />
      <SummaryHeader
        commentType={CommentType.Negative}
        title={t.titleNegative}
      />
      <SummaryHeader
        commentType={CommentType.Proposal}
        title={t.titleProposal}
      />
    </>
  );
};
