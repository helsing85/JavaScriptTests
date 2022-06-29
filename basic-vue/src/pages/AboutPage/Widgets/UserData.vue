<template>
    <div style="border:1px solid #ccc; margin: 5px; padding: 5px;">
        <!-- <input v-model="userName" type="text" @change="changeUser" />
        <input v-model="userSecondName" type="text" @input="changeUser" /> -->
        <input v-model="userName" type="text" />
        <input v-model="userSecondName" type="text" />
        <button @click="changeUser">Change user</button>
    </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'

let userName = ref('');
let userSecondName = ref('');

const props = defineProps(['userName', 'userSecondName']);

const emit = defineEmits(['change'])

function changeUser() {
    emit('change', { changedUserName: userName.value, changedUserSecondName: userSecondName.value })
}

watchEffect(() => {
    userName.value = props.userName
    userSecondName.value = props.userSecondName
})

// onMounted(() => {
//     userName.value = props.userName
//     userSecondName.value = props.userSecondName
// })

</script>