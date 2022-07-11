import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "@/pages/HomePage/HomePage.vue";
import AboutPageVue from "@/pages/AboutPage/AboutPage.vue";
import InfoPageVue from "@/pages/InfoPage/InfoPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "HomePage",
      component: HomePageVue,
    },

    {
      path: "/about",
      name: "AboutPage",
      component: AboutPageVue,
    },
    {
      path: "/info",
      name: "InfoPage",
      component: InfoPageVue,
    },
    //Otworz HomePage jesli strona nie zostanie znaleziona
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "HomePage" },
    },
  ],
});

export default router;
