import styles from "./App.module.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import AppContextProvider from "./features/app/AppContextProvider";
import { LanguageSelection } from "./features/language/LanguageSelection";
import { TabSection } from "./features/tabs/TabSection";
import "./color.css";

function App() {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <div className={styles.appLanguageSelection}>
          <LanguageSelection />
        </div>
        <TabSection />
      </AppContextProvider>
    </ErrorBoundary>
  );
}

export default App;
