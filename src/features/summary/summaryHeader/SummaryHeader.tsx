import { CommentType } from "../../../types/CommentType";
import { ISummaryHeaderProps } from "./ISummaryHeaderProps";
import styles from "./SummaryHeader.module.css";

export const SummaryHeader: React.FC<ISummaryHeaderProps> = (props) => {
  const backgroundColor = () => {
    switch (props.commentType) {
      case CommentType.Negative: {
        return styles.summaryHeaderNegative;
      }

      case CommentType.Proposal: {
        return styles.summaryHeaderProposal;
      }

      default: {
        return styles.summaryHeaderPositive;
      }
    }
  };

  return <div className={backgroundColor()}>{props.title}</div>;
};
