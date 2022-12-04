import axios from "axios";
import { Book } from "./types";
export const useOpenBd = () => {
  const base_url = "https://api.openbd.jp/v1/get";
  const fetchBook = async (isbn: string) => {
    const response = await axios.get<Book[]>(base_url, {
      params: {
        isbn: isbn,
      },
    });
    return response.data[0];
  };
  return {
    fetchBook,
  };
};
