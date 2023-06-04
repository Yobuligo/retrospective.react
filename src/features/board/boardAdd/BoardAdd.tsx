import { useId } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/icon/Icon";
import { IconType } from "../../../components/icon/IconType";
import { useTranslation } from "../../../hooks/useTranslation";
import { IBoard } from "../../../model/IBoard";
import styles from "./BoardAdd.module.css";

export const BoardAdd: React.FC = () => {
  const addBoardId = useId();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onAddBoard = () => {
    const boardId = crypto.randomUUID();
    const board: IBoard = {
      id: boardId,
    };
    // create new Board
    // Navigate to Board
  };

  return (
    <div className={styles.boardAdd}>
      <label htmlFor={addBoardId}>{t.addBoard}</label>
      <button id={addBoardId} onClick={onAddBoard}>
        <Icon icon={IconType.Add} />
      </button>
    </div>
  );
};
