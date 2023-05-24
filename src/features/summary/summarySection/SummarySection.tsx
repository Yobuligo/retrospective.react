import { Card } from "@mui/material";
import { SummaryHeader } from "../summaryHeader/SummaryHeader";
import { ISummarySectionProps } from "./ISummarySectionProps";

export const SummarySection: React.FC<ISummarySectionProps> = (props) => {
  return (
    <Card>
      <SummaryHeader commentType={props.commentType} title={props.title} />
    </Card>
  );
};
