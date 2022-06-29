<template>
    <slot></slot>
    <div>
        <h1>{{ props.title }}</h1>
        <table style=" border: 1px solid #ccc">
            <tr>
                <th v-for="column in columns" :key="column">{{ column }}</th>
            </tr>
            <tr v-for="user of props.users" :key="user.id" @click="showUserData(user)">
                <th>{{ user.id }}</th>
                <th>{{ user.firstName }}</th>
                <th>{{ user.secondName }}</th>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['title', 'users']);

function showUserData(user) {
    console.log(user.firstName, user.secondName)
}

const columns = ref(['ID', 'Firs Name', 'Last Name'])

</script>