import Icon from "../../../components/icon/Icon";
import { IconType } from "../../../components/icon/IconType";
import { INoteDeleteProps } from "./INoteDeleteProps";
import styles from "./NoteDelete.module.css";

const NoteDelete: React.FC<INoteDeleteProps> = (props) => {
  return (
    <div className={styles.noteDelete}>
      <button onClick={props.onDelete}>
        <Icon icon={IconType.Delete} />
      </button>
    </div>
  );
};

export default NoteDelete;
