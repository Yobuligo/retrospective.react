import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Suspense, lazy, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import Summary from "../../pages/Summary";

const Homepage = lazy(() => import("../../pages/Homepage"));

export const TabSection: React.FC = () => {
  const { t } = useTranslation();
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
    <>
      <Tabs value={page} onChange={(_, value) => setPage(value)}>
        <Tab label={t.tabs.board} />
        <Tab label={t.tabs.summary} />
      </Tabs>
      {content()}
    </>
  );
};
