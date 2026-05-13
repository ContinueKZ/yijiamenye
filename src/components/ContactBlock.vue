<script setup>
import { ref } from "vue";
import { Clock, MapPin, Phone } from "lucide-vue-next";
import WechatIcon from "@/components/WechatIcon.vue";
import { CONTACT_INFO } from "@/constants/site";

const copiedWechat = ref(false);

const copyWechat = async () => {
  copiedWechat.value = true;

  try {
    await navigator.clipboard.writeText(CONTACT_INFO.wechat);
  } catch {
    try {
      const input = document.createElement("input");
      input.value = CONTACT_INFO.wechat;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.focus();
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    } catch {
      // The visible state still gives the user a clear copy cue.
    }
  }

  window.setTimeout(() => {
    copiedWechat.value = false;
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
        @pointerdown="copyWechat"
      >
        <span class="contact-icon">
          <WechatIcon :size="22" />
        </span>
        <span>
          <small>{{ copiedWechat ? "已复制微信号" : "微信咨询" }}</small>
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
