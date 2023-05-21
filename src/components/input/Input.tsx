import { IInputProps } from "./IInputProps";

const Input: React.FC<IInputProps> = (props) => {
  return (
    <input
      {...props}
      onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
          props.onEnter?.();
        }
      }}
    />
  );
};

export default Input;
