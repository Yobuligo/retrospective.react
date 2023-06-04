import { useId } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/icon/Icon";
import { IconType } from "../../../components/icon/IconType";
import { useTranslation } from "../../../hooks/useTranslation";
import styles from "./BoardAdd.module.css";

export const BoardAdd: React.FC = () => {
  const addBoardId = useId();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onAddBoard = () => {
    const boardId = crypto.randomUUID();
    navigate(`board/${boardId}`);
  };

  return (
    <div className={styles.boardAdd}>
      <button id={addBoardId} onClick={onAddBoard}>
        <Icon icon={IconType.Add} />
        {t.addBoard}
      </button>
    </div>
  );
};
