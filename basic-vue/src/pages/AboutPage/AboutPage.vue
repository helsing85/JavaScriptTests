<template>
    <h1>Books</h1>
    <ul v-if="show">
        <li v-for="book of books" :key="book">{{ book }}</li>
    </ul>
    <div>
        <button @click="show = false">Hide</button>
        <button @click="show = true">Show</button>
    </div>
    <br>

    <table style="border: 1px solid #ccc">
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
        </tr>
        <tr v-for="user of users" :key="user.id" @click="showUserData(user)">
            <th>{{ user.id }}</th>
            <th>{{ user.firstName }}</th>
            <th>{{ user.secondName }}</th>
        </tr>
    </table>

    <button @click="changeUser">Zmień użytkownika</button>

</template>

<script setup>
import { ref } from "vue";

const books = ref([
    "Book 1", "Book 2", "Book 3"
])

let show = ref(false)

let users = ref([
    { id: 1, firstName: 'Jan', secondName: 'Kowalski' },
    { id: 2, firstName: 'Piotr', secondName: 'Nowak' },
    { id: 3, firstName: 'Adam', secondName: 'Jakiś' },
])

function changeUser() {
    users.value[1].firstName = 'Michał'
}

function showUserData(user) {
    console.log(user.firstName, user.secondName)
}
</script>

<style>
</style>