import { useParams } from "react-router-dom";
import { error } from "../utils/error";

export const useBoardId = (): string => {
  const params = useParams<{ boardId: string }>();
  return params.boardId ?? error("Error loading BoardId");
};
