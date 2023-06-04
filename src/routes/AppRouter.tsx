import { createBrowserRouter } from "react-router-dom";
import BoardPage from "../pages/BoardPage";
import HomePage from "../pages/HomePage";

export const AppRouter = createBrowserRouter([
  { index: true, element: <HomePage /> },
  { path: "board/:boardId", element: <BoardPage /> },
]);
