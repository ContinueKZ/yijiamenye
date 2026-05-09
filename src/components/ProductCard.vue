<script setup>
import { ArrowRight } from "lucide-vue-next";

defineProps({
  product: {
    type: Object,
    required: true
  },
  horizontal: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <article class="product-card" :class="{ 'product-card--horizontal': horizontal }">
    <RouterLink class="product-media" :to="`/products/${product.id}`">
      <img :src="product.images[0]" :alt="product.name" loading="lazy" />
    </RouterLink>
    <div class="product-info">
      <span>{{ product.categoryLabel }}</span>
      <h3>{{ product.name }}</h3>
      <p>{{ product.summary }}</p>
      <RouterLink class="text-link" :to="`/products/${product.id}`">
        了解详情
        <ArrowRight :size="16" aria-hidden="true" />
      </RouterLink>
    </div>
  </article>
</template>
