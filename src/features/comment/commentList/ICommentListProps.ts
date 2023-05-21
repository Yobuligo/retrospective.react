import { IComment } from "../../../model/IComment";
import { CommentType } from "../../../types/CommentType";
import { IHaveOnDeleteComment } from "../../types/IHaveOnDeleteComment";

export interface ICommentListProps extends IHaveOnDeleteComment {
  comments: IComment[];
  commentType: CommentType;
}
