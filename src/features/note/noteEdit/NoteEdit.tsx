import Icon from "../../../components/icon/Icon";
import { IconType } from "../../../components/icon/IconType";
import styles from "./NoteEdit.module.css";
import { INoteEditProps } from "./INoteEditProps";

const NoteEdit: React.FC<INoteEditProps> = (props) => {
  return (
    <div className={styles.noteEdit}>
      <button onClick={props.onEdit}>
        <Icon icon={IconType.Edit} />
      </button>
    </div>
  );
};

export default NoteEdit;
