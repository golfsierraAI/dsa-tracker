import { createContext } from "react";
import { ApiType } from "../types/types";

export const APIContext = createContext<ApiType | null | string>(null);
