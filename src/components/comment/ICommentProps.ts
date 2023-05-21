import { IComment } from "../../model/IComment";

export interface ICommentProps {
  hint?: string;
  onAdd?: (comment: IComment) => void;
}
