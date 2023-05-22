import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import Summary from "./pages/Summary";

function App() {
  const [page, setPage] = useState(0);

  const content = () => {
    switch (page) {
      case 0: {
        return <Homepage />;
      }
      case 1: {
        return <Summary />;
      }
    }
  };

  return (
    <>
      <Tabs value={page} onChange={(_, value) => setPage(value)}>
        <Tab label="Board" />
        <Tab label="Summary" />
      </Tabs>
      {content()}
    </>
  );
}

export default App;
