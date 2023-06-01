import { IHaveId } from "../types/IHaveId";
import { IComment } from "./IComment";
import { IParticipant } from "./IParticipant";

export interface ISession extends IHaveId {
  comments: IComment[];
  participants: IParticipant[];
}
