import { IInputProps } from "./IInputProps";

const Input: React.FC<IInputProps> = (props) => {
  const { onEnter, ...newProps } = props;

  const onEnterPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.onEnter?.();
    }
    props.onKeyUp?.(event);
  };

  return <input {...newProps} onKeyUp={onEnterPressed} />;
};

export default Input;
