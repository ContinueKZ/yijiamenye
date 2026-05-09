<script setup>
import { ArrowRight, CheckCircle2 } from "lucide-vue-next";
import ContactBlock from "@/components/ContactBlock.vue";
import ProductCard from "@/components/ProductCard.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import {
  BRAND_ADVANTAGES,
  FEATURED_PRODUCT_IDS,
  IMAGE_ASSETS,
  PRODUCT_CATEGORIES,
  PRODUCTS,
  SITE_INFO
} from "@/constants/site";

const categoryShowcase = PRODUCT_CATEGORIES.filter((category) =>
  ["bedroom-door", "sliding-door", "entry-door"].includes(category.id)
).map((category) => ({
  ...category,
  image:
    category.id === "bedroom-door"
      ? IMAGE_ASSETS.whiteDoor
      : category.id === "sliding-door"
        ? IMAGE_ASSETS.sliding
        : IMAGE_ASSETS.entry
}));

const featuredProducts = FEATURED_PRODUCT_IDS.map((id) =>
  PRODUCTS.find((product) => product.id === id)
).filter(Boolean);
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

    <section class="page-section">
      <div class="container">
        <SectionHeading
          eyebrow="Categories"
          title="从空间出发选择门"
          description="先按使用空间和门型结构浏览，后续可以继续扩展更多细分类目。"
        />

        <div class="category-showcase">
          <RouterLink
            v-for="category in categoryShowcase"
            :key="category.id"
            class="category-card"
            :to="`/products?category=${category.id}`"
          >
            <span class="category-image">
              <img :src="category.image" :alt="category.name" loading="lazy" />
            </span>
            <span class="category-card-footer">
              <span>
                <strong>{{ category.name }}</strong>
                <small>{{ category.description }}</small>
              </span>
              <ArrowRight :size="20" aria-hidden="true" />
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

    <section class="page-section">
      <div class="container">
        <div class="section-row">
          <SectionHeading
            eyebrow="Selections"
            title="精选系列"
            description="用真实图片和清晰描述，帮助客户快速判断是否适合自己的空间。"
          />
          <RouterLink class="text-link section-more" to="/products">
            浏览全部
            <ArrowRight :size="16" aria-hidden="true" />
          </RouterLink>
        </div>

        <div class="featured-grid">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
            horizontal
          />
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
