import { IBoard } from "../model/IBoard";
import { DataAccessObject } from "../utils/DataAccessObject/DataAccessObject";

class BoardDAO extends DataAccessObject<IBoard> {}

export const Board = new BoardDAO();
