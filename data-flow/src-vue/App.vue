<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navigation">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

.navigation {
  background: blue;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 24px;
  padding: 10px;
}

.navigation a {
  margin-right: 10px;
}

.navigation a:visited {
  color: white;
}
</style>
