<script setup>
import { ref } from "vue";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-vue-next";
import ContactBlock from "@/components/ContactBlock.vue";
import {
  BRAND_ADVANTAGES,
  FEATURED_PRODUCT_IDS,
  IMAGE_ASSETS,
  PRODUCT_CATEGORIES,
  PRODUCTS,
  SITE_INFO
} from "@/constants/site";

const featuredRail = ref(null);

const categoryShowcase = [
  {
    id: "entry-door",
    title: "实木门",
    image: IMAGE_ASSETS.entry
  },
  {
    id: "bathroom-door",
    title: "卫生间门",
    image: IMAGE_ASSETS.partition
  },
  {
    id: "bedroom-door",
    title: "房门",
    image: IMAGE_ASSETS.whiteDoor
  },
  {
    id: "sliding-door",
    title: "推拉门",
    image: IMAGE_ASSETS.sliding
  }
].map((item) => ({
  ...PRODUCT_CATEGORIES.find((category) => category.id === item.id),
  ...item
}));

const featuredProducts = FEATURED_PRODUCT_IDS.map((id) =>
  PRODUCTS.find((product) => product.id === id)
).filter(Boolean);

const scrollFeatured = (direction) => {
  const rail = featuredRail.value;

  if (!rail) return;

  rail.scrollBy({
    left: direction * Math.round(rail.clientWidth * 0.82),
    behavior: "smooth"
  });
};
</script>

<template>
  <main>
    <section class="hero-section">
      <img class="hero-image" :src="IMAGE_ASSETS.hero" alt="现代高端空间中的木质门" />
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <p class="eyebrow">Yijia Doors</p>
        <h1>{{ SITE_INFO.heroTitle }}</h1>
        <p>{{ SITE_INFO.heroSubtitle }}</p>
        <div class="hero-actions">
          <RouterLink class="button button-primary button-on-dark" to="/products">
            查看产品
            <ArrowRight :size="18" aria-hidden="true" />
          </RouterLink>
          <RouterLink class="button button-secondary button-on-dark" to="/contact">
            联系我们
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="page-section home-showcase-section">
      <div class="container">
        <div class="home-section-head">
          <h2>产品分类</h2>
        </div>

        <div class="category-showcase">
          <RouterLink
            v-for="category in categoryShowcase"
            :key="category.id"
            class="category-card"
            :to="`/products?category=${category.id}`"
          >
            <span class="category-image">
              <img :src="category.image" :alt="category.title" loading="lazy" />
            </span>
            <span class="category-card-footer">
              <strong>{{ category.title }}</strong>
              <ArrowRight :size="20" aria-hidden="true" />
            </span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="page-section home-showcase-section home-showcase-section--featured">
      <div class="container">
        <div class="home-section-head home-section-head--row">
          <h2>明星产品</h2>
          <div class="featured-controls" aria-label="明星产品切换">
            <span>左右滑动查看</span>
            <button class="rail-control" type="button" aria-label="查看上一组明星产品" @click="scrollFeatured(-1)">
              <ChevronLeft :size="18" aria-hidden="true" />
            </button>
            <button class="rail-control" type="button" aria-label="查看下一组明星产品" @click="scrollFeatured(1)">
              <ChevronRight :size="18" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div ref="featuredRail" class="featured-rail" aria-label="明星产品">
          <RouterLink
            v-for="product in featuredProducts"
            :key="product.id"
            class="star-product-card"
            :to="`/products/${product.id}`"
          >
            <span class="star-product-media">
              <img :src="product.images[0]" :alt="product.name" loading="lazy" />
            </span>
            <span class="star-product-info">
              <strong>{{ product.name }}</strong>
              <small>{{ product.categoryLabel }} · {{ product.tags.slice(0, 2).join(" · ") }}</small>
            </span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="split-section split-section--surface">
      <div class="container split-grid">
        <div class="split-copy">
          <p class="eyebrow">Brand Philosophy</p>
          <h2>专注品质，匠心致远</h2>
          <p>
            益嘉门业关注门在家庭空间里的真实使用体验：开合是否顺手、视觉是否耐看、安装是否贴合、后续维护是否方便。
          </p>
          <p>
            我们希望每一扇门都不只是隔断空间，而是让居住体验更安静、更有秩序、更有品质。
          </p>
          <div class="stat-grid">
            <div>
              <strong>15+</strong>
              <span>年行业经验沉淀</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>重视测量与安装细节</span>
            </div>
          </div>
        </div>
        <div class="image-panel">
          <img :src="IMAGE_ASSETS.craftsmanship" alt="工匠检查高品质木门饰面" loading="lazy" />
        </div>
      </div>
    </section>

    <section class="page-section page-section--compact">
      <div class="container advantage-grid">
        <article v-for="advantage in BRAND_ADVANTAGES" :key="advantage.title">
          <CheckCircle2 :size="28" aria-hidden="true" />
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
        </article>
      </div>
    </section>

    <section class="container contact-section-wrap">
      <ContactBlock />
    </section>
  </main>
</template>
