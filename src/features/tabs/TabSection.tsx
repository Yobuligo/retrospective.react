import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { ComponentType, Suspense, lazy, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { SummaryLoading } from "../summary/summaryFrame/SummaryLoading";

const Board = lazy(() => import("../board/board/Board"));
// const SummaryPage = lazy(() => import("../../pages/SummaryPage"));
const SummaryPage = lazy(
  () =>
    new Promise<{ default: ComponentType<any> }>((resolve) => {
      setTimeout(() => {
        resolve(import("../../pages/SummaryPage"));
      }, 5000);
    })
);

export const TabSection: React.FC = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);

  const content = () => {
    switch (page) {
      case 0: {
        return (
          <Suspense fallback={<p>...Loading</p>}>
            <Board />
          </Suspense>
        );
      }
      case 1: {
        return (
          <Suspense fallback={<SummaryLoading />}>
            <SummaryPage />
          </Suspense>
        );
      }
    }
  };

  return (
    <>
      <Tabs value={page} onChange={(_, value) => setPage(value)}>
        <Tab label={t.tabs.board} />
        <Tab label={t.tabs.summary} />
      </Tabs>
      {content()}
    </>
  );
};
