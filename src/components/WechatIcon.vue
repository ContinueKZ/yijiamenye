<script setup>
defineProps({
  size: {
    type: Number,
    default: 22
  }
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    role="img"
  >
    <path
      d="M9.5 4C5.91 4 3 6.16 3 8.83c0 1.59 1.04 3.01 2.66 3.9L5 15l2.5-1.34c.63.11 1.3.17 2 .17 3.59 0 6.5-2.16 6.5-5S13.09 4 9.5 4ZM7 7.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4.5 2.5c-2.59 0-4.68 1.61-4.68 3.58s2.09 3.58 4.68 3.58c.54 0 1.05-.06 1.53-.16L20 18l-.57-1.78c1.07-.66 1.75-1.6 1.75-2.64C21.18 11.61 19.09 10 16.5 10ZM15 12.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm3 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
    />
  </svg>
</template>
