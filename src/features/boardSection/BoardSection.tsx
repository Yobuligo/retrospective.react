import Section from "../section/Section";
import styles from "./BoardSection.module.css";
import { IBoardSection } from "./IBoardSectionProps";

const BoardSection: React.FC<IBoardSection> = (props) => {
  return (
    <div className={styles.boardSection}>
      <Section name={props.name} />
    </div>
  );
};

export default BoardSection;
