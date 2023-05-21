import { IComment } from "../../../model/IComment";
import { CommentType } from "../../../types/CommentType";
import { IHaveOnDeleteComment } from "../../types/IHaveOnDeleteComment";
import { IHaveOnEditComment } from "../../types/IHaveOnEditComment";

export interface ICommentFooterProps
  extends IHaveOnDeleteComment,
    IHaveOnEditComment {
  comment: IComment;
  commentType: CommentType;
}
