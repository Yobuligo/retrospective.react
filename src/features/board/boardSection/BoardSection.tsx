import CommentSection from "../../comment/commentSection/CommentSection";
import styles from "./BoardSection.module.css";
import { IBoardSection } from "./IBoardSectionProps";

const BoardSection: React.FC<IBoardSection> = (props) => {
  return (
    <div className={styles.boardSection}>
      <CommentSection
        commentType={props.commentType}
        dataObject={props.dataObject}
        name={props.name}
      />
    </div>
  );
};

export default BoardSection;
