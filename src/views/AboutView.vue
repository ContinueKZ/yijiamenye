<script setup>
import { CheckCircle2 } from "lucide-vue-next";
import ContactBlock from "@/components/ContactBlock.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import { BRAND_ADVANTAGES, IMAGE_ASSETS, SITE_INFO } from "@/constants/site";
</script>

<template>
  <main>
    <section class="about-hero">
      <div class="container about-hero-grid">
        <div>
          <p class="eyebrow">About Yijia</p>
          <h1>做更懂家装空间的门业服务商</h1>
          <p>
            {{ SITE_INFO.name }}不是追求复杂噱头的网站品牌，而是希望通过清晰选品、真实图片和专业服务，让客户更轻松地选到适合自己家的门。
          </p>
        </div>
        <img :src="IMAGE_ASSETS.store" alt="益嘉门业现代展厅门店" />
      </div>
    </section>

    <section class="page-section">
      <div class="container story-grid">
        <SectionHeading
          eyebrow="Story"
          title="一扇门背后，是空间、工艺和服务"
          description="门的选择并不只是看颜色。它会影响动线、采光、隔音、清洁和家里的整体气质。"
        />
        <div class="story-list">
          <article>
            <span>01</span>
            <h3>从使用场景出发</h3>
            <p>卫生间、厨房、卧室、阳台和入户空间对材质、开合方式和耐用性的要求都不同。</p>
          </article>
          <article>
            <span>02</span>
            <h3>用图片建立第一判断</h3>
            <p>客户往往先被图片打动，再进一步了解材质和安装条件，所以产品展示必须清晰、统一、有质感。</p>
          </article>
          <article>
            <span>03</span>
            <h3>用服务完成最后落地</h3>
            <p>门最终要安装进真实的家里，尺寸、墙体、地面和五金细节都需要被认真确认。</p>
          </article>
        </div>
      </div>
    </section>

    <section class="split-section split-section--surface">
      <div class="container split-grid split-grid--reverse">
        <div class="image-panel">
          <img :src="IMAGE_ASSETS.showroom" alt="高端门业展厅空间" loading="lazy" />
        </div>
        <div class="split-copy">
          <p class="eyebrow">Why Choose Us</p>
          <h2>看得见的产品，找得到的服务</h2>
          <p>
            对展示型门业网站来说，客户最在意的是图片是否真实、分类是否好找、联系方式是否清楚。益嘉门业会围绕这些核心体验持续优化。
          </p>
          <ul class="check-list">
            <li v-for="advantage in BRAND_ADVANTAGES" :key="advantage.title">
              <CheckCircle2 :size="22" aria-hidden="true" />
              <span>
                <strong>{{ advantage.title }}</strong>
                {{ advantage.description }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container testimonial-grid">
        <article>
          <p>“图片清楚、分类也好找，先在网站上看好款式，再到店确认材质，效率高很多。”</p>
          <span>张先生 / 家装客户</span>
        </article>
        <article>
          <p>“厨房和卧室的门需求完全不同，工作人员会根据空间用途推荐，不会一味推贵的。”</p>
          <span>李女士 / 改善型装修客户</span>
        </article>
        <article>
          <p>“最放心的是后续能联系到人，尺寸和安装细节有人跟进。”</p>
          <span>王女士 / 本地客户</span>
        </article>
      </div>
    </section>

    <section class="container contact-section-wrap">
      <ContactBlock />
    </section>
  </main>
</template>
