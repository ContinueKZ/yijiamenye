<script setup>
import { PRODUCT_CATEGORIES } from "@/constants/site";

defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="category-filter" aria-label="产品分类筛选">
    <button
      v-for="category in PRODUCT_CATEGORIES"
      :key="category.id"
      class="category-pill"
      :class="{ active: modelValue === category.id }"
      type="button"
      @click="$emit('update:modelValue', category.id)"
    >
      {{ category.name }}
    </button>
  </div>
</template>
