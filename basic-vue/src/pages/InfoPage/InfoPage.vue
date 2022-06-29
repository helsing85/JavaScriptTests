<template>
    <h1 style="padding: 10px; color: darkred">INFO</h1>
    <h2 class="color-text" :class="backgroundClass">INFO 2</h2>
    <div style="display: flex; justify-content: space-around;">
        <span @click="changeColorToBlue">change color to blue</span>
        <br>
        <span @click="changeColorToRed">change color to red</span>
        <br>
        <span @click="changeText">change text below</span>
    </div>
    <p>{{ text }}</p>
</template>


<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

let color = ref('');
let backgroundClass = ref('')
let text = ref('pierwszy tekst')

function changeColorToBlue() {
    color.value = 'blue';
    backgroundClass.value = 'background';
}
function changeColorToRed() {
    color.value = 'red';
    backgroundClass.value = '';
}
function changeText() {
    text.value = 'drugi tekst'
}

onMounted(() => {
    color.value = 'red'
});

onBeforeUnmount(() => {
    console.log('skasowany')
})

</script>


<style scoped>
.color-text {
    color: v-bind(color)
}

.background {
    background: yellow;
}
</style>