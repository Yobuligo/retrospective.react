import { useEffect, useState } from "react";
import Icon from "../../../components/icon/Icon";
import { IconType } from "../../../components/icon/IconType";
import Input from "../../../components/input/Input";
import { LoadingSpinner } from "../../../components/loadingSpinner/LoadingSpinner";
import { INoteInputProps } from "./INoteInputProps";
import styles from "./NoteInput.module.css";

const NoteInput: React.FC<INoteInputProps> = (props) => {
  const [note, setNote] = useState<string>("");
  const [disableAddButton, setDisableAddButton] = useState(false);

  useEffect(() => {
    setDisableAddButton(note === "");
  }, [note]);

  const clearNote = () => {
    setNote("");
  };

  const onAdd = () => {
    if (note !== "") {
      props.onAdd?.(note);
      clearNote();
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNote(event.target.value);

  return (
    <div className={styles.topic}>
      <Input
        type="text"
        value={note}
        placeholder={props.hint}
        onChange={onChange}
        onEnter={onAdd}
      />
      <button disabled={disableAddButton} onClick={onAdd}>
        {props.showLoadingSpinner ? (
          <LoadingSpinner />
        ) : (
          <Icon icon={IconType.Add} />
        )}
      </button>
    </div>
  );
};

export default NoteInput;
