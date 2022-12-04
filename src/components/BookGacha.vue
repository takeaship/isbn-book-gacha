<script setup lang="ts">
import { onMounted } from "vue";
import { useBookGacha } from "../composables/useBookGacha";
import { useBook } from "../composables/useBook";
import Loading from "vue-loading-overlay";
import TwitterShare from "./TwitterShare.vue";

const { foundBook, isLoading, doBookGacha } = useBookGacha();
const { bookUrl, bookPubDate } = useBook(foundBook);
onMounted(() => {
  doBookGacha();
});
</script>

<template>
  <div
    class="mx-auto my-8 min-h-[85vh] max-w-sm overflow-hidden rounded shadow-lg"
    :class="isLoading ? 'flex items-center justify-center' : ''"
  >
    <loading v-model:active="isLoading" />
    <div v-if="!isLoading">
      <div class="min-h-[50vh]">
        <img
          class="w-full"
          v-if="!!foundBook?.summary.cover"
          :src="foundBook?.summary.cover"
          alt="book cover"
        />
        <img
          class="w-full"
          v-else
          src="../assets/No-Image-Placeholder.png"
          alt="book cover not found"
        />
      </div>
      <div class="px-6 py-4">
        <div class="mb-2 text-xl font-bold">{{ foundBook?.summary.title }}</div>
        <p class="text-base text-gray-600">
          {{ foundBook?.summary.author || "不明" }}
        </p>
        <p class="text-base text-gray-600">
          {{ foundBook?.summary.publisher || "不明" }}
        </p>
        <p class="mb-5 text-base text-gray-600">
          {{ bookPubDate || "不明" }}
        </p>
        <a
          :href="bookUrl"
          class="text-blue-600 visited:text-purple-600 hover:underline"
        >
          この本を購入する
        </a>
      </div>
      <div class="mb-7 flex justify-center">
        <TwitterShare
          url="https://takeaship.github.io/isbn-book-gacha/"
          :shareComment="`ISBNブックガチャで「${foundBook?.summary.title}(${foundBook?.summary.publisher})」を見つけました！`"
          hashTags="ISBNブックガチャ"
          class="mr-5 text-2xl text-sky-500"
        />
        <button
          @click="doBookGacha"
          class="rounded-lg bg-gray-600 px-4 py-2 text-gray-100 duration-300 hover:bg-gray-700"
        >
          もう一度回す
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
