<script setup>
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import CategoryFilter from "@/components/CategoryFilter.vue";
import ContactBlock from "@/components/ContactBlock.vue";
import ProductCard from "@/components/ProductCard.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import { PRODUCT_CATEGORIES, PRODUCTS, getCategoryById } from "@/constants/site";

const route = useRoute();
const router = useRouter();
const initialCategory = PRODUCT_CATEGORIES.some(
  (category) => category.id === route.query.category
)
  ? route.query.category
  : "all";
const activeCategory = ref(initialCategory);

watch(
  () => route.query.category,
  (category) => {
    activeCategory.value = PRODUCT_CATEGORIES.some((item) => item.id === category)
      ? category
      : "all";
  }
);

watch(activeCategory, (category) => {
  router.replace({
    query: category === "all" ? {} : { category }
  });
});

const activeCategoryInfo = computed(() => getCategoryById(activeCategory.value));

const filteredProducts = computed(() => {
  if (activeCategory.value === "all") {
    return PRODUCTS;
  }

  return PRODUCTS.filter((product) =>
    product.categoryIds.includes(activeCategory.value)
  );
});
</script>

<template>
  <main>
    <section class="subpage-hero">
      <div class="container">
        <p class="eyebrow">Products</p>
        <h1>产品中心</h1>
        <p>按门类和空间用途浏览产品图片，找到适合您家的那一扇门。</p>
      </div>
    </section>

    <section class="product-toolbar">
      <div class="container">
        <CategoryFilter v-model="activeCategory" />
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <SectionHeading
          :title="activeCategoryInfo?.name || '全部产品'"
          :description="activeCategoryInfo?.description || '查看益嘉门业精选产品。'"
        />
        <div class="product-grid">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>

    <section class="container contact-section-wrap">
      <ContactBlock
        title="喜欢某款门？直接联系我们"
        description="把产品名称或截图发给我们，我们会根据尺寸、材质和安装条件给您进一步建议。"
      />
    </section>
  </main>
</template>
