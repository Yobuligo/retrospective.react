import { style } from "../../utils/Style";
import { IIconProps } from "./IIconProps";
import styles from "./Icon.module.css";

const Icon: React.FC<IIconProps> = (props) => {
  return (
    <span
      className={`${style("material-symbols-outlined", props.className)} ${
        styles.icon
      }`}
    >
      {props.icon}
    </span>
  );
};

export default Icon;
