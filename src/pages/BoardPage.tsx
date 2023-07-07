import BoardTitle from "../features/board/boardTitle/BoardTitle";
import { LanguageSelection } from "../features/language/LanguageSelection";
import { TabSection } from "../features/tabs/TabSection";
import styles from "./BoardPage.module.css";

const BoardPage: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.boardTitle}>
          <BoardTitle />
        </div>
        <div className={styles.appLanguageSelection}>
          <LanguageSelection />
        </div>
      </div>
      <TabSection classNameTabs={styles.tabSection} />
    </>
  );
};

export default BoardPage;
