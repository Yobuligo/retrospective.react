import { IComment } from "../../../model/IComment";
import { CommentType } from "../../../types/CommentType";
import { IDataObject } from "../../../types/IDataObject";

export interface ICommentSectionProps {
  commentType: CommentType;
  dataObject: IDataObject<IComment>;
  name: string;
}
