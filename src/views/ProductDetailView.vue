<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-vue-next";
import ContactBlock from "@/components/ContactBlock.vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductGallery from "@/components/ProductGallery.vue";
import { PRODUCTS, getProductById } from "@/constants/site";

const route = useRoute();
const product = computed(() => getProductById(route.params.id));

const relatedProducts = computed(() => {
  if (!product.value) {
    return PRODUCTS.slice(0, 3);
  }

  return PRODUCTS.filter(
    (item) =>
      item.id !== product.value.id &&
      item.categoryIds.some((categoryId) =>
        product.value.categoryIds.includes(categoryId)
      )
  ).slice(0, 3);
});
</script>

<template>
  <main>
    <section v-if="product" class="detail-page container">
      <RouterLink class="text-link back-link" to="/products">
        <ArrowLeft :size="16" aria-hidden="true" />
        返回产品中心
      </RouterLink>

      <div class="detail-grid">
        <ProductGallery :images="product.images" :alt="product.name" />

        <div class="detail-info">
          <p class="eyebrow">{{ product.categoryLabel }}</p>
          <h1>{{ product.name }}</h1>
          <p class="detail-summary">{{ product.description }}</p>

          <div class="tag-list" aria-label="产品标签">
            <span v-for="tag in product.tags" :key="tag">{{ tag }}</span>
          </div>

          <dl class="spec-list">
            <div v-for="spec in product.specs" :key="spec.label">
              <dt>{{ spec.label }}</dt>
              <dd>{{ spec.value }}</dd>
            </div>
          </dl>

          <RouterLink class="button button-primary detail-cta" to="/contact">
            <MessageCircle :size="20" aria-hidden="true" />
            立即咨询这款产品
          </RouterLink>
          <p class="detail-note">咨询时可直接提供产品名称，我们会结合尺寸与安装条件进一步确认方案。</p>
        </div>
      </div>

      <section class="detail-editorial">
        <div class="section-heading">
          <p class="eyebrow">Details</p>
          <h2>匠心细节，服务真实生活</h2>
          <p>门的好坏不只看第一眼，也看日常开合、隔音、清洁和长期稳定性。</p>
        </div>
        <div class="detail-points">
          <article>
            <CheckCircle2 :size="28" aria-hidden="true" />
            <h3>尺寸与现场匹配</h3>
            <p>根据门洞、墙体、地面完成面和开合方向综合确认，减少安装误差。</p>
          </article>
          <article>
            <CheckCircle2 :size="28" aria-hidden="true" />
            <h3>风格与空间协调</h3>
            <p>结合墙面、地板、柜体和整体装修风格推荐颜色与材质。</p>
          </article>
          <article>
            <CheckCircle2 :size="28" aria-hidden="true" />
            <h3>关注后续使用</h3>
            <p>从五金、静音、清洁和维护角度出发，避免只看外观忽略体验。</p>
          </article>
        </div>
      </section>
    </section>

    <section v-else class="not-found container">
      <h1>没有找到这个产品</h1>
      <p>可能是产品已经下架，或链接地址有误。</p>
      <RouterLink class="button button-primary" to="/products">返回产品中心</RouterLink>
    </section>

    <section v-if="product && relatedProducts.length" class="page-section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Related</p>
          <h2>相近产品</h2>
        </div>
        <div class="product-grid product-grid--three">
          <ProductCard
            v-for="item in relatedProducts"
            :key="item.id"
            :product="item"
          />
        </div>
      </div>
    </section>

    <section v-if="product" class="container contact-section-wrap">
      <ContactBlock
        title="想了解更多细节？"
        description="我们可以根据您的户型、装修风格和预算，进一步推荐合适的门型与材质。"
      />
    </section>
  </main>
</template>
