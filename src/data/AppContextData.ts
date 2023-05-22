import { IComment } from "../model/IComment";

export class AppContextData {
  comments: IComment[] = [];
  onAddComment(comment: IComment): void {}
  onDeleteComment(comment: IComment): void {}
}
