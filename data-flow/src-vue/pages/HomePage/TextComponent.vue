<template>
  <div class="home" :class="{ green: props.isGreenClass }">
    {{ props.text }}
  </div>
</template>

<script setup>
const props = defineProps(["text", "isGreenClass"]);
</script>

<style scoped>
.home {
  margin: 20px;
  background: #ccc;
  color: #d00;
}
.green {
  color: green;
}
</style>
