import { useState } from "react";
import { BoardDAO } from "../../../api/BoardDAO";
import { useBoardId } from "../../../hooks/useBoardId";
import { INote } from "../../../model/INote";
import { VotingState } from "../../../types/VotingState";
import NoteCardList from "../noteCardList/NoteCardList";
import NoteInput from "../noteInput/NoteInput";
import { INoteSectionProps } from "./INoteSectionProps";
import styles from "./NoteSection.module.css";

const NoteSection: React.FC<INoteSectionProps> = (props) => {
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const boardId = useBoardId();

  const onAdd = async (text: string) => {
    setShowLoadingSpinner(true);
    const note = await BoardDAO.addNote(boardId, {
      countAgrees: 0,
      countDisagrees: 0,
      noteType: props.noteType,
      votingState: VotingState.Open,
      text: text,
    });

    props.dataObject.onAdd(note);
    setShowLoadingSpinner(false);
  };

  const onDelete = async (note: INote) => {
    setShowLoadingSpinner(true);
    await BoardDAO.deleteNote(boardId, note);
    props.dataObject.onDelete(note);
    setShowLoadingSpinner(false);
  };

  return (
    <div className={props.className}>
      <NoteInput
        hint={props.name}
        onAdd={onAdd}
        showLoadingSpinner={showLoadingSpinner}
      />
      <div className={styles.noteSectionList}>
        <NoteCardList
          notes={props.dataObject.dataObjects}
          noteType={props.noteType}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};

export default NoteSection;
