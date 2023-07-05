import NoteSection from "../../note/noteSection/NoteSection";
import { IBoardSection } from "./IBoardSectionProps";
import styles from "./BoardSection.module.css";

const BoardSection: React.FC<IBoardSection> = (props) => {
  return (
    <div className={styles.boardSection}>
      <NoteSection
        className={props.className}
        noteType={props.noteType}
        dataObject={props.dataObject}
        name={props.name}
      />
    </div>
  );
};

export default BoardSection;
