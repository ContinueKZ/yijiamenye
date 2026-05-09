<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
});

const activeIndex = ref(0);

watch(
  () => props.images,
  () => {
    activeIndex.value = 0;
  }
);
</script>

<template>
  <div class="product-gallery">
    <div class="gallery-main">
      <img :src="images[activeIndex]" :alt="alt" />
    </div>
    <div class="gallery-thumbs" aria-label="产品图片切换">
      <button
        v-for="(image, index) in images"
        :key="image"
        class="gallery-thumb"
        :class="{ active: activeIndex === index }"
        type="button"
        :aria-label="`查看${alt}图片${index + 1}`"
        @click="activeIndex = index"
      >
        <img :src="image" :alt="`${alt}缩略图${index + 1}`" />
      </button>
    </div>
  </div>
</template>
