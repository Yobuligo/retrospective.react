import NoteSection from "../../note/noteSection/NoteSection";
import { IBoardSection } from "./IBoardSectionProps";
import styles from "./BoardSection.module.css";
import { CSSProperties } from "react";

const BoardSection: React.FC<IBoardSection> = (props) => {
  return (
    <div
      className={styles.boardSection}
      style={{ "--boardSectionBackgroundColor": props.backgroundColor } as CSSProperties}
    >
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
