<template>
  <v-app>
    <v-main>
      <v-container>
        <SearchBar v-model="searchQuery" />
        <UserList :search="searchQuery" @show-user="openUserModal" />
        <UserModal v-if="selectedUser" :user="selectedUser" @close="selectedUser = null" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import UserList from './components/UserList.vue'
import UserModal from './components/UserModal.vue'

const searchQuery = ref('')
const selectedUser = ref(null)
const openUserModal = (user) => selectedUser.value = user
</script>
