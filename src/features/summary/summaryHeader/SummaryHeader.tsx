import { NoteType } from "../../../types/NoteType";
import { style } from "../../../utils/Style";
import { ISummaryHeaderProps } from "./ISummaryHeaderProps";
import styles from "./SummaryHeader.module.css";

export const SummaryHeader: React.FC<ISummaryHeaderProps> = (props) => {
  const backgroundColor = () => {
    switch (props.noteType) {
      case NoteType.Negative: {
        return styles.summaryHeaderNegative;
      }

      case NoteType.Proposal: {
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
