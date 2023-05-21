import { IInputProps } from "./IInputProps";

const Input: React.FC<IInputProps> = (props) => {
  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.onEnter?.();
    }
  };

  return <input {...props} onKeyUp={onEnter} />;
};

export default Input;
