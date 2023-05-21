import { IIconProps } from "./IIconProps";

const Icon: React.FC<IIconProps> = (props) => {
  return (
    <span className={`${"material-symbols-outlined"} ${props.className}`}>
      {props.icon}
    </span>
  );
};

export default Icon;
