import styles from "./App.module.css";
import "./color.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import AppContextProvider from "./features/app/AppContextProvider";
import { BoardAdd } from "./features/board/boardAdd/BoardAdd";
import { LanguageSelection } from "./features/language/LanguageSelection";
import { TabSection } from "./features/tabs/TabSection";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        {/* <div className={styles.appLanguageSelection}>
          <LanguageSelection />
        </div>
        <TabSection /> */}
        <HomePage />
      </AppContextProvider>
    </ErrorBoundary>
  );
}

export default App;
