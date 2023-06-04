import { useId } from "react";
import { useTranslation } from "../../../hooks/useTranslation";

export const BoardAdd: React.FC = () => {
  const addBoardId = useId();
  const { t } = useTranslation();

  return (
    <>
      <label htmlFor={addBoardId}>{t.addBoard}</label>
      <button id={addBoardId}>Add Board</button>
    </>
  );
};
