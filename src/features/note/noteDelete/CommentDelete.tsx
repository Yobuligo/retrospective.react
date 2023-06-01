import Icon from "../../../components/icon/Icon";
import { IconType } from "../../../components/icon/IconType";
import styles from "./CommentDelete.module.css";
import { ICommentDeleteProps } from "./ICommentDeleteProps";

const CommentDelete: React.FC<ICommentDeleteProps> = (props) => {
  return (
    <div className={styles.commentDelete}>
      <button onClick={props.onDelete}>
        <Icon icon={IconType.Delete} />
      </button>
    </div>
  );
};

export default CommentDelete;
