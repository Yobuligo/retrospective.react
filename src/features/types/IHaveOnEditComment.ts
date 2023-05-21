import { IComment } from "../../model/IComment";

export interface IHaveOnEditComment {
  onEdit: (comment: IComment) => void;
}
