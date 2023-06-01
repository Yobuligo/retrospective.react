import { IHaveId } from "../types/IHaveId";

export interface IParticipant extends IHaveId {
  firstname: string;
  lastname: string;
}
