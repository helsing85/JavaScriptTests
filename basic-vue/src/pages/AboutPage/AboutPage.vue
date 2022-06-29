<template>

    <BooksComponent title="Books" :books="books" />
    <br>
    <UsersComponent title="Users" :users="users" />
    <button @click="setNewUser">New User</button>
    <UserData @change="changeUser($event)" :userName="users[1].firstName" :userSecondName="users[1].secondName" />

</template>

<script setup>
import { ref } from "vue";
import BooksComponent from "@/pages/AboutPage/Widgets/Books/BooksComponent.vue";
import UsersComponent from "@/pages/AboutPage/Widgets/Users/UsersComponent.vue";
import UserData from "@/pages/AboutPage/Widgets/UserData.vue";

const books = ref([
    "Book 1", "Book 2", "Book 6"
])

let users = ref([
    { id: 1, firstName: 'Jan', secondName: 'Kowalski' },
    { id: 2, firstName: 'Piotr', secondName: 'Nowak' },
    { id: 3, firstName: 'Adam', secondName: 'Jakiś' },
])

function changeUser(userDetails) {
    console.log('New user details:', userDetails)
    users.value[1].firstName = userDetails.changedUserName
    users.value[1].secondName = userDetails.changedUserSecondName
}

function setNewUser() {
    //users.value[1].firstName = 'Tomasz'
    //users.value[1].secondName = 'Czarny'
    changeUser({ changedUserName: 'Tomasz', changedUserSecondName: 'Czarny' })
}

</script>

<style>
</style>