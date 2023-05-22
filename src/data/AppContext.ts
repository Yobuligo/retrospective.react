import { createContext } from "react";
import { AppContextData } from "./AppContextData";

export const AppContext = createContext(new AppContextData());
