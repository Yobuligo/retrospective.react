import { useEffect, useState } from "react";
import Card from "../../../components/card/Card";
import { useToggle } from "../../../hooks/useToggle";
import NoteFooter from "../noteFooter/NoteFooter";
import { INoteCardProps } from "./INoteCardProps";
import styles from "./NoteCard.module.css";

const NoteCard: React.FC<INoteCardProps> = (props) => {
  const [note, setNote] = useState(props.note.text);
  const [enabled, toggleEnabled] = useToggle(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.note.text = event.target.value;
    setNote(event.target.value);
  };

  const toggle = () => toggleEnabled();

  return (
    <Card className={styles.noteCard}>
      <div className={styles.noteCardDetails}>
        <span
          onChange={onChange}
          onBlur={toggle}
          role="textbox"
          contentEditable={enabled}
        >
          {note}
        </span>
      </div>
      <NoteFooter
        note={props.note}
        noteType={props.noteType}
        onDelete={props.onDelete}
        onEdit={toggle}
      />
    </Card>
  );
};

export default NoteCard;
