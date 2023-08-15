import { createBrowserRouter } from "react-router-dom";
import BoardPage from "../pages/BoardPage";
import HomePage from "../pages/Homepage";
import { CSSAnimationPage } from "../pages/CSSAnimationPage";

export const AppRouter = createBrowserRouter([
  // { index: true, element: <CSSAnimationPage /> },
  { index: true, element: <HomePage /> },
  { path: "board/:boardId", element: <BoardPage /> },
]);
