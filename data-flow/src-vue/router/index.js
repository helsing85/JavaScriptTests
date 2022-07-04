import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "@/pages/HomePage/HomePage.vue";
import AboutPageVue from "@/pages/AboutPage/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePageVue,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPageVue,
    },
  ],
});

export default router;
