<template>
  <nav class="navigation">
    <!-- linkowanie poprzez ades (path) routingu
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/tasks">Tasks List</RouterLink>
    <RouterLink to="/newtask">New Task</RouterLink> -->

    <!-- linkowanie poprzez nazwe (name) routingu -->
    <RouterLink :to="{ name: 'HomePage' }">Home</RouterLink>
    <RouterLink :to="{ name: 'AboutPage' }">About</RouterLink>
    <RouterLink :to="{ name: 'TasksList' }">Tasks List</RouterLink>
    <RouterLink :to="{ name: 'NewTask' }">New Task</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup>
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useTasksStore } from "@/stores/tasks";
//import TasksService from "@/services/TasksService";

const store = useTasksStore();

/* function loadTasks() {
  const service = new TasksService();
  service.getTasks().then((response) => {
    store.insertTasks(response);
  });
} */

onMounted(() => {
  //loadTasks();
  store.loadTasks();
});
</script>

<style>
@import "@/assets/base.css";

.navigation {
  background: blue;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 24px;
  padding: 10px;
}

.navigation a {
  margin-right: 10px;
  color: white;
}

.navigation a:visited {
  color: white;
}
</style>
