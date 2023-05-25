import { IComment } from "../../../model/IComment";
import { CommentType } from "../../../types/CommentType";
import { IDataAccessObject } from "../../../types/IDataAccessObject";
export interface IBoardSection {
  className?: string
  commentType: CommentType;
  dataObject: IDataAccessObject<IComment>;
  name: string;
}
