<template>
  <div>About Page</div>
  <div>
    <table class="books-table">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Available</th>
      </tr>
      <tr v-for="book in booksData" :key="book.id">
        <td>{{ book.id }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td v-if="book.isAvailable"><span style="color: green">YES</span></td>
        <td v-else><span style="color: red">NO</span></td>
      </tr>
    </table>
  </div>
  <button @click="loadBookData">Load Book Data</button>
</template>

<script setup>
import { onMounted, ref } from "vue";
import BookService from "@/services/BookService.js";

const booksData = ref([]);

function loadBookData() {
  const service = new BookService();
  service.getData().then((response) => {
    booksData.value = response;
  });
}

onMounted(() => {
  loadBookData();
});


</script>

<style scoped>
.books-table {
  margin: 20px;
  border: 1px solid #ccc;
}

.books-table th,
.books-table td {
  padding: 5px 10px;
  border: 1px solid #ccc;
}
</style>
