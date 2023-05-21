import { IComment } from "../../../model/IComment";
import { CommentType } from "../../../types/CommentType";
import { IHaveOnDeleteComment } from "../../types/IHaveOnDeleteComment";

export interface ICommentFooterProps extends IHaveOnDeleteComment {
  comment: IComment;
  commentType: CommentType;
}
