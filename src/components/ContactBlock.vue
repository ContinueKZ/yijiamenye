<script setup>
import { ref } from "vue";
import { Clock, MapPin, Phone } from "lucide-vue-next";
import WechatIcon from "@/components/WechatIcon.vue";
import { CONTACT_INFO } from "@/constants/site";
import { copyTextToClipboard } from "@/utils/clipboard";

const copiedWechat = ref(false);
const copyFailed = ref(false);
let copyTimer;

const copyWechat = async () => {
  window.clearTimeout(copyTimer);

  const copied = await copyTextToClipboard(CONTACT_INFO.wechat);
  copiedWechat.value = copied;
  copyFailed.value = !copied;

  copyTimer = window.setTimeout(() => {
    copiedWechat.value = false;
    copyFailed.value = false;
  }, 1800);
};

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
      <div class="contact-card">
        <span class="contact-icon"><Phone :size="22" aria-hidden="true" /></span>
        <span>
          <small>咨询热线</small>
          <strong class="phone-link-list">
            <template v-for="(phone, index) in CONTACT_INFO.phones" :key="phone.href">
              <a class="phone-link" :href="phone.href">
                {{ phone.label }}
              </a>
              <span v-if="index < CONTACT_INFO.phones.length - 1" class="phone-separator">/</span>
            </template>
          </strong>
        </span>
      </div>
      <button
        class="contact-card contact-card--button"
        type="button"
        @click="copyWechat"
      >
        <span class="contact-icon">
          <WechatIcon :size="22" />
        </span>
        <span>
          <small>{{ copiedWechat ? "已复制微信号" : copyFailed ? "请长按复制" : "微信咨询" }}</small>
          <strong>{{ CONTACT_INFO.wechat }}</strong>
        </span>
      </button>
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
