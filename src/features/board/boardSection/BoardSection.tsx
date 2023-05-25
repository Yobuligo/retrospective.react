import CommentSection from "../../comment/commentSection/CommentSection";
import { IBoardSection } from "./IBoardSectionProps";

const BoardSection: React.FC<IBoardSection> = (props) => {
  return (
    <>
      <CommentSection
        className={props.className}
        commentType={props.commentType}
        dataObject={props.dataObject}
        name={props.name}
      />
    </>
  );
};

export default BoardSection;
