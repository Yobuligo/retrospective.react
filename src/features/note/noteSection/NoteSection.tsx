import { Note } from "../../../api/Note";
import { VotingState } from "../../../types/VotingState";
import { LoadingSpinner } from "../../../components/loadingSpinner/LoadingSpinner";
import NoteCardList from "../noteCardList/NoteCardList";
import NoteInput from "../noteInput/NoteInput";
import { INoteSectionProps } from "./INoteSectionProps";
import styles from "./NoteSection.module.css";

const NoteSection: React.FC<INoteSectionProps> = (props) => {
  const onAdd = (text: string) => {
    const note = Note.create({
      countAgrees: 0,
      countDisagrees: 0,
      votingState: VotingState.Open,
      text: text,
    });

    props.dataObject.onAdd(note);
  };

  return (
    <div className={props.className}>
      <NoteInput hint={props.name} onAdd={onAdd} />
      <div className={styles.noteSectionList}>
        <NoteCardList
          notes={props.dataObject.dataObjects}
          noteType={props.noteType}
          onDelete={props.dataObject.onDelete}
        />
      </div>
    </div>
  );
};

export default NoteSection;
