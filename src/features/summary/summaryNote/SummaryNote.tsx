import { ISummaryNoteProps } from "./ISummaryNoteProps";
import styles from "./SummaryNote.module.css";

export const SummaryNote: React.FC<ISummaryNoteProps> = (props) => {
  return (
    <div className={styles.summaryNote}>
      <div className={styles.summaryNotePositive}>{props.note.countAgrees}</div>
      <div className={styles.summaryNoteNegative}>
        {props.note.countDisagrees}
      </div>
      <div>{props.note.text}</div>
    </div>
  );
};
