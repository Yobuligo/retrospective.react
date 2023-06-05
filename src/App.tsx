import { RouterProvider } from "react-router-dom";
import "./color.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={AppRouter} />
    </ErrorBoundary>
  );
}

export default App;
