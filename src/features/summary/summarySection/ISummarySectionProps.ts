import { IComment } from "../../../model/IComment";
import { CommentType } from "./../../../types/CommentType";

export interface ISummarySectionProps {
  comments: IComment[];
  commentType: CommentType;
  title: string;
}
