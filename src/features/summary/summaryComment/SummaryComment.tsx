import { ISummaryCommentProps } from "./ISummaryCommentProps";

export const SummaryComment: React.FC<ISummaryCommentProps> = (props) => {
  return <>{props.comment.text}</>;
};
