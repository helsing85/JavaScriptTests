<template>
  <div>Tasks List page</div>

  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Date</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
    <tr v-for="task of store.getTasks" :key="task">
      <td>{{ task.id }}</td>
      <td>{{ task.name }}</td>
      <td>{{ task.date }}</td>
      <td>{{ task.status }}</td>
      <td>
        <button @click="store.copleteTask(task.id)">Complete</button>
        <button @click="store.removeTask(task.id)">Remove</button>
        <!-- <RouterLink :to="{ name: 'EditTask', params: { id: task.id } }"
          >Edit Task</RouterLink
        > -->
        <router-link
          :to="{ name: 'EditTask', params: { id: task.id } }"
          v-slot="{ href, route, navigate }"
        >
          <button :href="href" @click="navigate" class="whatever-you-want">
            Edit Task
          </button>
        </router-link>
      </td>
    </tr>
  </table>
  <button @click="store.loadTasks">Load Tasks</button>
  <!-- <button @click="loadTasks">Load Tasks</button> -->
</template>

<script setup>
import { useTasksStore } from "@/stores/tasks";
//import TasksService from "@/services/TasksService";

const store = useTasksStore();

//funkcja skopiowana do App.vue aby ładowała się raz przy starcie aplikacji
/* function loadTasks() {
  const service = new TasksService();
  service.getTasks().then((response) => {
    store.insertTasks(response);
  });
} */
</script>

<style scoped>
table {
  margin: 20px;
  border: 1px solid #ccc;
}

td {
  border: 1px solid #ccc;
  padding: 5px 10px;
}
</style>
