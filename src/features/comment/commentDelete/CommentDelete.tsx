import Icon from "../../../components/icon/Icon";
import { IconType } from "../../../components/icon/IconType";
import styles from "./CommentDelete.module.css";

const CommentDelete: React.FC = () => {
  return (
    <div className={styles.commentDelete}>
      <button>
        <Icon icon={IconType.Delete} />
      </button>
    </div>
  );
};

export default CommentDelete;
