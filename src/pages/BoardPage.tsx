import { LanguageSelection } from "../features/language/LanguageSelection";
import { TabSection } from "../features/tabs/TabSection";
import styles from "./BoardPage.module.css";

const BoardPage: React.FC = () => {
  return (
    <>
      <div className={styles.appLanguageSelection}>
        <LanguageSelection />
      </div>
      <TabSection />
    </>
  );
};

export default BoardPage;
