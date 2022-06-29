<template>
  <nav class="header-bar">
    <!-- <RouterLink to="/">Home</RouterLink> -->
    <RouterLink class="navigation-element" :to="{ name: 'HomePage' }">Home</RouterLink>
    <RouterLink class="navigation-element" :to="{ name: 'AboutPage' }">About</RouterLink>
    <RouterLink class="navigation-element" :to="{ name: 'InfoPage' }">Info</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from '@/components/HelloWorld.vue'
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
