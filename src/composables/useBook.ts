import { Book } from "./types";
import moment from "moment";
import { computed, Ref } from "vue";

export const useBook = (book: Ref<Book | null>) => {
  const bookUrl = computed(
    () => `https://www.hanmoto.com/bd/isbn/${book.value?.summary.isbn}`
  );
  const bookPubDate = computed(() => {
    if (!book.value?.summary.pubdate) return null;
    return moment(book.value.summary.pubdate).format("L");
  });
  return {
    bookUrl,
    bookPubDate,
  };
};
