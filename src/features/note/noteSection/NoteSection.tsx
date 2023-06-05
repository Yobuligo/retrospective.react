import { useState } from "react";
import { useParams } from "react-router-dom";
import { Board } from "../../../api/Board";
import { VotingState } from "../../../types/VotingState";
import { error } from "../../../utils/error";
import NoteCardList from "../noteCardList/NoteCardList";
import NoteInput from "../noteInput/NoteInput";
import { INoteSectionProps } from "./INoteSectionProps";
import styles from "./NoteSection.module.css";

const NoteSection: React.FC<INoteSectionProps> = (props) => {
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const params = useParams<{ boardId: string }>();
  const boardId = params.boardId ?? error("No BoardId");

  const onAdd = async (text: string) => {
    setShowLoadingSpinner(true);
    const note = await Board.addNote(boardId, {
      countAgrees: 0,
      countDisagrees: 0,
      votingState: VotingState.Open,
      text: text,
    });

    props.dataObject.onAdd(note);
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
          onDelete={props.dataObject.onDelete}
        />
      </div>
    </div>
  );
};

export default NoteSection;
