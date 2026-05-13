<script setup>
import { MapPin, Phone } from "lucide-vue-next";
import WechatIcon from "@/components/WechatIcon.vue";
import { CONTACT_INFO, NAV_ITEMS, SITE_INFO } from "@/constants/site";
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <p class="footer-logo">{{ SITE_INFO.name }}</p>
        <p>{{ SITE_INFO.description }}</p>
      </div>

      <div>
        <h2>快速链接</h2>
        <nav class="footer-links" aria-label="页脚导航">
          <RouterLink v-for="item in NAV_ITEMS" :key="item.to" :to="item.to">
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>

      <div>
        <h2>联系方式</h2>
        <ul class="footer-contact">
          <li>
            <Phone :size="16" aria-hidden="true" />
            <span class="footer-phone-links">
              <template v-for="(phone, index) in CONTACT_INFO.phones" :key="phone.href">
                <a :href="phone.href">
                  {{ phone.label }}
                </a>
                <span v-if="index < CONTACT_INFO.phones.length - 1">/</span>
              </template>
            </span>
          </li>
          <li>
            <WechatIcon :size="16" />
            <span class="footer-contact-label">微信</span>
            <span>{{ CONTACT_INFO.wechat }}</span>
          </li>
          <li>
            <MapPin :size="16" aria-hidden="true" />
            <span>{{ CONTACT_INFO.address }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 {{ SITE_INFO.name }} {{ SITE_INFO.englishName }}. All Rights Reserved.</span>
    </div>
  </footer>
</template>
