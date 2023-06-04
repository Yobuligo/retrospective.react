import { SummaryNote } from "../summaryNote/SummaryNote";
import { ISummaryNoteListProps } from "./ISummaryNoteListProps";
import styles from "./SummaryNoteList.module.css";

export const SummaryNoteList: React.FC<ISummaryNoteListProps> = (props) => {
  const items = props.notes.map((note) => (
    <div key={note.id} className={styles.summaryNoteListNote}>
      <SummaryNote note={note} />
    </div>
  ));
  return <div className={styles.summaryNoteList}>{items}</div>;
};
