import { RouterProvider } from "react-router-dom";
import "./color.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import AppContextProvider from "./features/app/AppContextProvider";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <RouterProvider router={AppRouter} />
      </AppContextProvider>
    </ErrorBoundary>
  );
}

export default App;
