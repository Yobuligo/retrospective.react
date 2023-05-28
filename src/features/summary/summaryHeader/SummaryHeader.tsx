import { CommentType } from "../../../types/CommentType";
import { style } from "../../../utils/Styles";
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

  return (
    <div className={style(styles.summaryHeader, backgroundColor())}>
      <h3>{props.title}</h3>
    </div>
  );
};
