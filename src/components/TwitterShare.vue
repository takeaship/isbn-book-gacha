<script setup lang="ts">
defineProps({
  url: { type: String, required: true },
  shareComment: { type: String, required: true },
  hashTags: { type: String },
});
</script>

<template>
  <ShareNetwork
    network="twitter"
    :url="url"
    :title="shareComment"
    :hashtags="hashTags"
  >
    <font-awesome-icon icon="fab fa-twitter" />
  </ShareNetwork>
</template>
