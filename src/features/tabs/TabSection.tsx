import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { ComponentType, Suspense, lazy, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { SummaryLoading } from "../summary/summaryFrame/SummaryLoading";
import { ITabSectionProps } from "./ITabSectionProps";
import { styled } from "@mui/material";

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

export const TabSection: React.FC<ITabSectionProps> = (props) => {
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

  const StyledTabs = styled(Tabs)`
    background-color: var(--paleBackground);
    border-radius: 10px 10px 0 0;
  `;

  const StyledTab = styled(Tab)({
    fontFamily: "inherit",
    color: "#444444",
    fontSize: "large",
    fontWeight: 700,
    "&.Mui-selected": {
      color: "black",
    },
  });

  return (
    <div className={props.className}>
      <span className={props.classNameTabs}>
        <StyledTabs
          value={page}
          onChange={(_, value) => setPage(value)}
          TabIndicatorProps={{
            style: {
              backgroundColor: "black",
            },
          }}
        >
          <StyledTab label={t.tabs.board} />
          <StyledTab label={t.tabs.summary} />
        </StyledTabs>
      </span>
      <div className={props.classNameContent}>{content()}</div>
    </div>
  );
};
