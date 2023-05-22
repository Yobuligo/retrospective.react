import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Suspense, lazy, useState } from "react";
import AppContextComponent from "./data/AppContextComponent";
import Summary from "./pages/Summary";

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
    <AppContextComponent>
      <Tabs value={page} onChange={(_, value) => setPage(value)}>
        <Tab label="Board" />
        <Tab label="Summary" />
      </Tabs>
      {content()}
    </AppContextComponent>
  );
}

export default App;
