import { NoteType } from "../../../types/NoteType";
import { style } from "../../../utils/Style";
import VotingSection from "../../voting/votingSection/VotingSection";
import NoteDelete from "../noteDelete/NoteDelete";
import NoteEdit from "../noteEdit/NoteEdit";
import styles from "./NoteFooter.module.css";
import { INoteFooterProps } from "./INoteFooterProps";

const NoteFooter: React.FC<INoteFooterProps> = (props) => {
  const backgroundColor = () => {
    switch (props.noteType) {
      case NoteType.Negative: {
        return styles.negative;
      }

      case NoteType.Proposal: {
        return styles.proposal;
      }

      default: {
        return styles.positive;
      }
    }
  };

  return (
    <div className={style(styles.noteFooter, backgroundColor())}>
      <VotingSection note={props.note} />
      <div className={styles.noteFooterDivider}>
        <NoteEdit onEdit={() => props.onEdit(props.note)} />
        <NoteDelete onDelete={() => props.onDelete(props.note)} />
      </div>
    </div>
  );
};

export default NoteFooter;
