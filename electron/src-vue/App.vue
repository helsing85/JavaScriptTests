<template>
  <nav class="navigation">
    <RouterLink :to="{name: 'HomePage'}">Home</RouterLink>
    <RouterLink :to="{name: 'AboutPage'}">About</RouterLink>
    <RouterLink :to="{name: 'InfoPage'}">Info</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
@import "@/assets/base.css";

.navigation {
  display: flex;
  justify-content: center;
  background: blue;
  padding: 20px;
}

.navigation a {
  margin-right: 10px;
  color: yellow;
  font-size: 24px;
}
</style>
