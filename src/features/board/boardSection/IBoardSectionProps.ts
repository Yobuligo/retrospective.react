import { IComment } from "../../../model/IComment";
import { CommentType } from "../../../types/CommentType";
import { IDataAccessObject } from "../../../types/IDataAccessObject";
export interface IBoardSection {
  commentType: CommentType;
  dataObject: IDataAccessObject<IComment>;
  name: string;
}
