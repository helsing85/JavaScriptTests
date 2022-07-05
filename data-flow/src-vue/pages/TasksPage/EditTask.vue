<template>
  <div>Edit Task page</div>
  <div style="padding: 30px">
    <input style="margin-right: 10px" v-model="taskName" />
    <button @click="editTaskName">Edit task</button>
  </div>
</template>

<script setup>
import { useTasksStore } from "@/stores/tasks";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const store = useTasksStore();
const route = useRoute();
let taskName = ref("");

function editTaskName() {
  store.changeTaskName(route.params.id, taskName.value);
}

onMounted(() => {
  taskName.value = store.getTask(route.params.id).name;
});
</script>

<style scoped></style>
