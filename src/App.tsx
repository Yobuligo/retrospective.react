import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Suspense, lazy, useState } from "react";
import ErrorBoundary from "./components/error/ErrorBoundary";
import AppContextComponent from "./data/AppContextComponent";
import { LanguageSelection } from "./features/language/LanguageSelection";
import Summary from "./pages/Summary";
import styles from "./App.module.css";

const Homepage = lazy(() => import("./pages/Homepage"));

function App() {
  const [page, setPage] = useState(0);

  const content = () => {
    switch (page) {
      case 0: {
        return <Summary />;
      }
      case 1: {
        return (
          <Suspense fallback={<p>...Loading</p>}>
            <Homepage />
          </Suspense>
        );
      }
    }
  };

  return (
    <ErrorBoundary>
      <AppContextComponent>
        <div className={styles.appLanguageSelection}>
          <LanguageSelection />
        </div>
        <Tabs value={page} onChange={(_, value) => setPage(value)}>
          <Tab label="Board" />
          <Tab label="Summary" />
        </Tabs>
        {content()}
      </AppContextComponent>
    </ErrorBoundary>
  );
}

export default App;
