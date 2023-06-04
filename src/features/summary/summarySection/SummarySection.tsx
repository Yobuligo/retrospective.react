import { Card } from "@mui/material";
import { SummaryNoteList } from "../summaryNoteList/SummaryNoteList";
import { SummaryHeader } from "../summaryHeader/SummaryHeader";
import { ISummarySectionProps } from "./ISummarySectionProps";

export const SummarySection: React.FC<ISummarySectionProps> = (props) => {
  return (
    <Card>
      <SummaryHeader noteType={props.noteType} title={props.title} />
      <SummaryNoteList notes={props.notes} />
    </Card>
  );
};
