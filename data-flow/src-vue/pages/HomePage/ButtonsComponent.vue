<template>
  <div>
    <button @click="emitButtonClick('first', 'First text')">First text</button>
    <button @click="emitButtonClick('second', 'Second text')">
      Second text
    </button>
    <button @click="emitButtonClick('third', 'End text')">Third text</button>
  </div>
</template>

<script setup>
const emit = defineEmits(["buttonClick"]);

function emitButtonClick(type, text) {
  //console.log("klik");
  emit("buttonClick", { type: type, text: text });
}
</script>

<style scoped></style>
