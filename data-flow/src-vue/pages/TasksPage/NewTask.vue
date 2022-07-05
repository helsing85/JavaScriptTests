<template>
  <div>New Task page</div>
  <div style="padding: 30px">
    <input style="margin-right: 10px" v-model="taskName" />
    <button @click="addNewTask">Add new task</button>
  </div>
</template>

<script setup>
import { useTasksStore } from "@/stores/tasks";
import { ref } from "vue";

const store = useTasksStore();
let taskName = ref("");

function addNewTask() {
  store.insertTask(taskName.value);
}
</script>

<style scoped></style>
