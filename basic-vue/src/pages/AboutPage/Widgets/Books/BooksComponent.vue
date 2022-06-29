<template>
    <slot></slot>
    <div>
        <h1>{{ props.title }}</h1>
        <div>
            <button @click="show = false">Hide</button>
            <button @click="show = true">Show</button>
        </div>
        <ul v-if="show">
            <li v-for="book of props.books" :key="book">{{ book }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['title', 'books']);
let show = ref(false);

</script>