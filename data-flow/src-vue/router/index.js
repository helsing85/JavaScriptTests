import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "@/pages/HomePage/HomePage.vue";
import AboutPageVue from "@/pages/AboutPage/AboutPage.vue";
import TasksListVue from "@/pages/TasksPage/TasksList.vue";
import NewTaskVue from "@/pages/TasksPage/NewTask.vue";
import EditTaskVue from "@/pages/TasksPage/EditTask.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePageVue,
    },
    {
      path: "/about",
      name: "AboutPage",
      component: AboutPageVue,
    },
    {
      path: "/tasks",
      name: "TasksList",
      component: TasksListVue,
    },
    {
      path: "/tasks/new",
      name: "NewTask",
      component: NewTaskVue,
    },
    {
      path: "/tasks/:id",
      name: "EditTask",
      component: EditTaskVue,
    },
  ],
});

export default router;
