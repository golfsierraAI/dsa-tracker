import { ApiType } from "../types/types";
import axios, { AxiosResponse } from "axios";

export const fetchData = async (): Promise<AxiosResponse<ApiType>> => {
  const data = await axios.get(import.meta.env.VITE_API_URL);
  return data;
};
