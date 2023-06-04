import NoteSection from "../../note/noteSection/NoteSection";
import { IBoardSection } from "./IBoardSectionProps";

const BoardSection: React.FC<IBoardSection> = (props) => {
  return (
    <>
      <NoteSection
        className={props.className}
        noteType={props.noteType}
        dataObject={props.dataObject}
        name={props.name}
      />
    </>
  );
};

export default BoardSection;
