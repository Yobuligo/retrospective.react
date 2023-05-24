import styles from "./App.module.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import AppContextComponent from "./data/AppContextComponent";
import { LanguageSelection } from "./features/language/LanguageSelection";
import { TabSection } from "./features/tabs/TabSection";

function App() {
  return (
    <ErrorBoundary>
      <AppContextComponent>
        <div className={styles.appLanguageSelection}>
          <LanguageSelection />
        </div>
        <TabSection />
      </AppContextComponent>
    </ErrorBoundary>
  );
}

export default App;
