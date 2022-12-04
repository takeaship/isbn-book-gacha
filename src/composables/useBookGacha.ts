import { useIsbn } from "./useIsbn";
import { useOpenBd } from "./useOpenBd";
import { ref } from "vue";
import { Book } from "./types";
import { useCookies } from "vue3-cookies";

export const useBookGacha = () => {
  const { generateIsbn } = useIsbn();
  const { fetchBook } = useOpenBd();
  const { cookies } = useCookies();
  const gachaCount = ref(0);
  const foundBook = ref<Book | null>(null);
  const isLoading = ref(false);
  const doBookGacha = async () => {
    if (cookies.get("gachaCount")) {
      gachaCount.value = parseInt(cookies.get("gachaCount"));
      if (gachaCount.value >= 1000) {
        alert(
          "API制限により一時的にガチャを行えません。5分ほど待ってから再度お試しください。"
        );
        return;
      }
    }
    isLoading.value = true;
    foundBook.value = null;
    while (foundBook.value === null) {
      gachaCount.value++;
      const isbn = generateIsbn();
      foundBook.value = await fetchBook(isbn);
    }
    cookies.set("gachaCount", gachaCount.value.toString(), "5min");
    isLoading.value = false;
  };
  return {
    gachaCount,
    foundBook,
    isLoading,
    doBookGacha,
  };
};
