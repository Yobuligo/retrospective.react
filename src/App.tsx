import { useState } from "react";
import Homepage from "./pages/Homepage";
import Summary from "./pages/Summary";

function App() {
  const [page, setPage] = useState("homepage");

  const content = () => {
    switch (page) {
      case "homepage": {
        return <Homepage />;
      }
      case "summary": {
        return <Summary />;
      }
    }
  };

  return (
    <>
      <button onClick={() => setPage("homepage")}>Board</button>
      <button onClick={() => setPage("summary")}>Summary</button>
      {content()}
    </>
  );
}

export default App;
