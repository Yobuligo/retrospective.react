import { VotingState } from "../../../types/VotingState";
import NoteInput from "../noteInput/NoteInput";
import NoteCardList from "../noteCardList/NoteCardList";
import { INoteSectionProps } from "./INoteSectionProps";
import styles from './NoteSection.module.css'

const NoteSection: React.FC<INoteSectionProps> = (props) => {
  const onAdd = (text: string): void =>
    props.dataObject.onAdd({
      id: crypto.randomUUID(),
      countAgrees: 0,
      countDisagrees: 0,
      votingState: VotingState.Open,
      text: text,
    });

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
