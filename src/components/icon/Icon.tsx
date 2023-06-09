import { style } from "../../utils/Style";
import { IIconProps } from "./IIconProps";

const Icon: React.FC<IIconProps> = (props) => {
  return (
    <span className={style("material-symbols-outlined", props.className)}>
      {props.icon}
    </span>
  );
};

export default Icon;
