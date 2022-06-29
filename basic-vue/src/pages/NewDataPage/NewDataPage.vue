<template>
    <div style="border:1px solid #ccc; margin: 5px; padding: 5px;">
        <input v-model="newText" type="text" />

        <button @click="changeText">Change text on main page</button>
    </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'

let newText = ref('');

const emit = defineEmits(['change'])

const props = defineProps(['message']);

function changeText() {
    console.log('emits:', newText)
    emit('change', newText.value)
}

onMounted(() => {
    newText.value = props.message
})

</script>