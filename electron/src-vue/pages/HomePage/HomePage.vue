<template>
  <div>Home Page</div>
  <div>
    <table class="user-table">
      <tr>
        <th>ID</th>
        <th>First name</th>
        <th>Second name</th>
        <th>Is active</th>
        <th>Last login</th>
      </tr>
      <!--       <tr v-for="user in usersData" :key="user.id">
        <th>{{ user.id }}</th>
        <th>{{ user.firstName }}</th>
        <th>{{ user.secondName }}</th>
        <th>{{ isActiveUser(user) }}</th>
        <th>{{ user.isActive ? "Yes" : "No" }}</th>
        <th>{{ user.lastLoginDate }}</th>
      </tr> -->

      <tr v-for="user in usersData" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.secondName }}</td>
        <td v-if="user.isActive"><span style="color: green">YES</span></td>
        <td v-else><span style="color: red">NO</span></td>
        <td>{{ user.lastLoginDate }}</td>
      </tr>
    </table>
  </div>
  <button @click="loadUserData">Load User Data</button>
</template>

<script setup>
import { onMounted, ref } from "vue";
import UserService from "@/services/UserService.js"

const usersData = ref([]);

function isActiveUser(user) {
  return user.isActive ? "Yes" : "No";
}

function loadUserData() {
  const service = new UserService();
  service.getData().then(response =>{usersData.value = response;})
}

onMounted(() => {
  loadUserData();
});

</script>

<style scoped>
.user-table {
  margin: 20px;
  border: 1px solid #ccc;
}

.user-table th,
.user-table td {
  padding: 5px 10px;
  border: 1px solid #ccc;
}
</style>
