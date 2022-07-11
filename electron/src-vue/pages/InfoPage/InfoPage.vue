<template>
  <div class="text-color">Info Page</div>
  <p>{{ message }}</p>
  <button @click="changeText">Change text</button>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Hello World!");

function changeText() {
  message.value = "New click";
}
</script>

<style scoped>
.text-color {
  color: red;
}
</style>
