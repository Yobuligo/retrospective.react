import { IComment } from "../../../model/IComment";
import { CommentType } from "../../../types/CommentType";
import { IHaveOnDeleteComment } from "../../types/IHaveOnDeleteComment";

export interface ICommentCardListProps extends IHaveOnDeleteComment {
  comments: IComment[];
  commentType: CommentType;
}
