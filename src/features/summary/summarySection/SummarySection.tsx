import { Card } from "@mui/material";
import { SummaryCommentList } from "../summaryCommentList/SummaryCommentList";
import { SummaryHeader } from "../summaryHeader/SummaryHeader";
import { ISummarySectionProps } from "./ISummarySectionProps";

export const SummarySection: React.FC<ISummarySectionProps> = (props) => {
  return (
    <Card>
      <SummaryHeader noteType={props.noteType} title={props.title} />
      <SummaryCommentList notes={props.notes} />
    </Card>
  );
};
