<template>
    <h1>Welcome 4</h1>
    <home-child />
    <HomeChild />

    <div>{{ props.message }}</div>
</template>

<!-- SETUP bardzo ważne aby zadziałało osadzenie innych kopmonentów -->
<script setup>
import HomeChild from "@/pages/HomePage/HomeChild.vue";

const props = defineProps(['message']);

</script>


<style>
</style>
