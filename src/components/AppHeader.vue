<script setup>
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Menu, Phone, X } from "lucide-vue-next";
import LogoMark from "@/components/LogoMark.vue";
import { CONTACT_INFO, NAV_ITEMS, SITE_INFO } from "@/constants/site";

const route = useRoute();
const isOpen = ref(false);

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false;
  }
);
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <RouterLink class="brand" to="/" :aria-label="`${SITE_INFO.name}首页`">
        <span class="brand-mark"><LogoMark /></span>
        <span>
          <strong>{{ SITE_INFO.name }}</strong>
          <small>{{ SITE_INFO.englishName }}</small>
        </span>
      </RouterLink>

      <nav class="desktop-nav" aria-label="主导航">
        <RouterLink
          v-for="item in NAV_ITEMS"
          :key="item.to"
          :to="item.to"
          class="nav-link"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="header-actions">
        <a class="consult-link" :href="CONTACT_INFO.phoneHref">
          <Phone :size="17" aria-hidden="true" />
          <span>立即咨询</span>
        </a>
        <button
          class="icon-button mobile-menu-button"
          type="button"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          aria-label="打开或关闭导航菜单"
          @click="isOpen = !isOpen"
        >
          <X v-if="isOpen" :size="22" aria-hidden="true" />
          <Menu v-else :size="22" aria-hidden="true" />
        </button>
      </div>
    </div>

    <nav
      v-if="isOpen"
      id="mobile-menu"
      class="mobile-nav"
      aria-label="移动端导航"
    >
      <RouterLink
        v-for="item in NAV_ITEMS"
        :key="item.to"
        :to="item.to"
        class="mobile-nav-link"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>
