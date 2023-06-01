import Icon from "../../../components/icon/Icon";
import { IconType } from "../../../components/icon/IconType";
import styles from "./CommentEdit.module.css";
import { ICommentEditProps } from "./ICommentEditProps";

const CommentEdit: React.FC<ICommentEditProps> = (props) => {
  return (
    <div className={styles.commentEdit}>
      <button onClick={props.onEdit}>
        <Icon icon={IconType.Edit} />
      </button>
    </div>
  );
};

export default CommentEdit;
