<script setup>
import { Phone } from "lucide-vue-next";
import { OWNER_PROFILES } from "@/constants/site";

defineProps({
  compact: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <section class="owner-section" :class="{ 'owner-section--compact': compact }">
    <div class="container">
      <div class="owner-heading">
        <p class="eyebrow">Owners</p>
        <h2>到店沟通，直接找负责人</h2>
        <p>老板负责产品、测量和安装落地，老板娘负责选款沟通和门店接待，联系更清楚。</p>
      </div>

      <div class="owner-grid">
        <article
          v-for="profile in OWNER_PROFILES"
          :key="profile.phone"
          class="owner-card"
        >
          <div class="owner-photo">
            <img :src="profile.image" :alt="`${profile.role}证件照`" loading="lazy" />
          </div>
          <div class="owner-copy">
            <span>{{ profile.role }}</span>
            <h3>{{ profile.name }}</h3>
            <p>{{ profile.description }}</p>
            <a class="owner-phone" :href="profile.phoneHref">
              <Phone :size="18" aria-hidden="true" />
              {{ profile.phone }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
