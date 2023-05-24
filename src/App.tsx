import styles from "./App.module.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import AppContextFrame from "./features/app/AppContextFrame";
import { LanguageSelection } from "./features/language/LanguageSelection";
import { TabSection } from "./features/tabs/TabSection";
import "./color.css";

function App() {
  return (
    <ErrorBoundary>
      <AppContextFrame>
        <div className={styles.appLanguageSelection}>
          <LanguageSelection />
        </div>
        <TabSection />
      </AppContextFrame>
    </ErrorBoundary>
  );
}

export default App;
