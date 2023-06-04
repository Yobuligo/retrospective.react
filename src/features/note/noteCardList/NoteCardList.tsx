import NoteCard from "../noteCard/NoteCard";
import { INoteCardListProps } from "./INoteCardListProps";
import styles from "./NoteCardList.module.css";

const NoteCardList: React.FC<INoteCardListProps> = (props) => {
  const items = props.notes.map((note) => (
    <div key={note.id} className={styles.noteCardListItem}>
      <NoteCard
        note={note}
        noteType={props.noteType}
        onDelete={props.onDelete}
      />
    </div>
  ));
  return <>{items}</>;
};

export default NoteCardList;
