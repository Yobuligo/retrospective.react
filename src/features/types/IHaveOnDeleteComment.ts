import { IComment } from "../../model/IComment";

export interface IHaveOnDeleteComment {
  onDelete: (comment: IComment) => void;
}
