<template>
  <nav class="header-bar">
    <!-- <RouterLink to="/">Home</RouterLink> -->
    <RouterLink class="navigation-element" :to="{ name: 'HomePage' }">Home</RouterLink>
    <RouterLink class="navigation-element" :to="{ name: 'AboutPage' }">About</RouterLink>
    <RouterLink class="navigation-element" :to="{ name: 'InfoPage' }">Info</RouterLink>
    <RouterLink class="navigation-element" :to="{ name: 'NewDataPage' }">Data</RouterLink>
  </nav>

  <RouterView :message="message" @change="changeText" />

</template>

<script setup>

import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from '@/components/HelloWorld.vue'

import { ref } from 'vue'
let message = ref('Last page test')

function changeText(newText) {
  console.log('received:', newText)
  message.value = newText
}


</script>

<!-- scoped ogranicza dzialanie styli do jednego pliku -->
<style scoped>
.header-bar {
  display: flex;
  justify-content: center;
}

.navigation-element {
  margin-right: 10px;
}
</style>
























































<style src="@/assets/base.css" />
