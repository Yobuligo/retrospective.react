export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onEnter?: () => void;
}
