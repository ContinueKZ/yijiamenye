import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "益嘉门业 - 高端空间门解决方案" }
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
    meta: { title: "产品中心 - 益嘉门业" }
  },
  {
    path: "/products/:id",
    name: "product-detail",
    component: ProductDetailView,
    meta: { title: "产品详情 - 益嘉门业" }
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { title: "关于我们 - 益嘉门业" }
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: { title: "联系我们 - 益嘉门业" }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

router.afterEach((to) => {
  document.title = to.meta.title || "益嘉门业";
});

export default router;
