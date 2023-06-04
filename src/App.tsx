import styles from "./App.module.css";
import "./color.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import AppContextProvider from "./features/app/AppContextProvider";
import { BoardAdd } from "./features/board/boardAdd/BoardAdd";
import { LanguageSelection } from "./features/language/LanguageSelection";
import { TabSection } from "./features/tabs/TabSection";

function App() {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <div className={styles.appAddBoard}>
          <BoardAdd />
        </div>
        <div className={styles.appLanguageSelection}>
          <LanguageSelection />
        </div>
        <TabSection />
      </AppContextProvider>
    </ErrorBoundary>
  );
}

export default App;
