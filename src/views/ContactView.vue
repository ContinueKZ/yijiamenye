<script setup>
import { Clock, MapPin, Navigation, Phone } from "lucide-vue-next";
import ContactBlock from "@/components/ContactBlock.vue";
import WechatIcon from "@/components/WechatIcon.vue";
import { CONTACT_INFO, IMAGE_ASSETS } from "@/constants/site";
</script>

<template>
  <main>
    <section class="subpage-hero">
      <div class="container">
        <p class="eyebrow">Contact</p>
        <h1>联系我们</h1>
        <p>欢迎把喜欢的门款、户型照片或装修风格发给我们，先沟通，再到店确认实物质感。</p>
      </div>
    </section>

    <section class="contact-page container">
      <div class="contact-info-panel">
        <article>
          <MapPin :size="26" aria-hidden="true" />
          <h2>门店地址</h2>
          <p>{{ CONTACT_INFO.address }}</p>
          <a class="button button-primary" href="#map">
            <Navigation :size="18" aria-hidden="true" />
            查看位置
          </a>
        </article>
        <article>
          <Clock :size="26" aria-hidden="true" />
          <h2>营业时间</h2>
          <p>{{ CONTACT_INFO.businessHours }}</p>
        </article>
        <article>
          <Phone :size="26" aria-hidden="true" />
          <h2>咨询热线</h2>
          <a class="contact-phone" :href="CONTACT_INFO.phoneHref">
            {{ CONTACT_INFO.phone }}
          </a>
        </article>
      </div>

      <div class="wechat-panel">
        <div>
          <WechatIcon :size="28" />
          <h2>微信咨询</h2>
          <p>微信号：{{ CONTACT_INFO.wechat }}</p>
        </div>
        <div class="qr-placeholder" aria-label="微信二维码占位">
          <span>QR</span>
        </div>
        <small>后续替换为真实微信二维码图片。</small>
      </div>

      <div class="showroom-panel">
        <img :src="IMAGE_ASSETS.showroom" alt="益嘉门业展厅实景" />
        <p>实地展厅，材质、颜色、五金和开合手感都可以现场确认。</p>
      </div>
    </section>

    <section id="map" class="map-section">
      <div class="map-canvas" aria-label="益嘉门业展厅位置示意图">
        <img class="map-image" :src="IMAGE_ASSETS.contactMap" alt="" aria-hidden="true" />
      </div>
      <div class="map-summary">
        <div>
          <p class="eyebrow">Location</p>
          <h2>益嘉门业展厅</h2>
          <p>{{ CONTACT_INFO.address }}</p>
        </div>
        <div>
          <a :href="CONTACT_INFO.phoneHref">
            <Phone :size="16" aria-hidden="true" />
            {{ CONTACT_INFO.phone }}
          </a>
          <span>
            <Clock :size="16" aria-hidden="true" />
            {{ CONTACT_INFO.businessHours }}
          </span>
        </div>
      </div>
    </section>

    <section class="container contact-section-wrap">
      <ContactBlock
        title="到店前，可以先沟通需求"
        description="发送户型、门洞尺寸或喜欢的图片，我们会提前帮您判断适合的门型方向。"
      />
    </section>
  </main>
</template>
