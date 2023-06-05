import AppContextProvider from "../features/app/AppContextProvider";
import { LanguageSelection } from "../features/language/LanguageSelection";
import { TabSection } from "../features/tabs/TabSection";
import styles from "./BoardPage.module.css";

const BoardPage: React.FC = () => {
  return (
    <AppContextProvider>
      <div className={styles.appLanguageSelection}>
        <LanguageSelection />
      </div>
      <TabSection />
    </AppContextProvider>
  );
};

export default BoardPage;
