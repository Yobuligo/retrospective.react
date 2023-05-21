import { IconType } from "../../../../components/icon/IconType";
import { IBaseVotingButtonProps } from "./IBaseVotingButtonProps";

export interface IVotingButtonProps extends IBaseVotingButtonProps {
  className?: string;
  icon: IconType;
}
