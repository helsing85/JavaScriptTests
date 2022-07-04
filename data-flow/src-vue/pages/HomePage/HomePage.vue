<template>
  <TextComponent :text="newText" :isGreenClass="isGreenClass" />
  <ButtonsComponent @buttonClick="newButtonClick" />
</template>

<script setup>
import TextComponent from "@/pages/HomePage/TextComponent.vue";
import ButtonsComponent from "@/pages/HomePage/ButtonsComponent.vue";

import { ref } from "vue";

let newText = ref("Welcome on Home Page - Parent New");
let isGreenClass = ref(false);

function newButtonClick(value) {
  //console.log(value);
  if (value.type == "first") {
    isGreenClass.value = false;
  }
  if (value.type == "second") {
    isGreenClass.value = true;
  }
  newText.value = value.text;
}
</script>

<style scoped></style>
