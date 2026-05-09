<script setup>
import { Clock, MapPin, MessageCircle, Phone } from "lucide-vue-next";
import { CONTACT_INFO } from "@/constants/site";

defineProps({
  variant: {
    type: String,
    default: "light"
  },
  title: {
    type: String,
    default: "定制您的理想空间"
  },
  description: {
    type: String,
    default: "专业顾问一对一沟通，根据户型、风格和预算为您推荐合适门类。"
  }
});
</script>

<template>
  <section class="contact-block" :class="`contact-block--${variant}`">
    <div class="contact-copy">
      <p class="eyebrow">Contact</p>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>

    <div class="contact-cards">
      <a class="contact-card" :href="CONTACT_INFO.phoneHref">
        <span class="contact-icon"><Phone :size="22" aria-hidden="true" /></span>
        <span>
          <small>咨询热线</small>
          <strong>{{ CONTACT_INFO.phone }}</strong>
        </span>
      </a>
      <div class="contact-card">
        <span class="contact-icon">
          <MessageCircle :size="22" aria-hidden="true" />
        </span>
        <span>
          <small>微信咨询</small>
          <strong>{{ CONTACT_INFO.wechat }}</strong>
        </span>
      </div>
      <div class="contact-card">
        <span class="contact-icon"><MapPin :size="22" aria-hidden="true" /></span>
        <span>
          <small>展厅地址</small>
          <strong>{{ CONTACT_INFO.address }}</strong>
        </span>
      </div>
      <div class="contact-card">
        <span class="contact-icon"><Clock :size="22" aria-hidden="true" /></span>
        <span>
          <small>营业时间</small>
          <strong>{{ CONTACT_INFO.businessHours }}</strong>
        </span>
      </div>
    </div>
  </section>
</template>
