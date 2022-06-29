//@ to jest alias ścieżki bezwzględnej
//aliasy są w pliku: vite.config.js

import { createRouter, createWebHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";
import HomePage from "@/pages/HomePage/HomePage.vue";
import AboutPage from "@/pages/AboutPage/AboutPage.vue";
import InfoPage from "@/pages/InfoPage/InfoPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/about",
      name: "AboutPage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import("../views/AboutView.vue"),
      component: AboutPage,
    },
    {
      path: "/info",
      name: "InfoPage",
      component: InfoPage,
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "HomePage",
    //   component: HomePage,
    // },
    //Otworz HomePage jesli strona nie zostanie znaleziona
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "HomePage" },
    },
  ],
});

export default router;
