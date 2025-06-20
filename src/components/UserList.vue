<template>
  <v-progress-circular v-if="loading" indeterminate color="primary" />
  <v-alert v-if="error" type="error">{{ error }}</v-alert>

  <v-row v-if="!loading && !error" dense>
    <v-col v-for="user in filteredUsers" :key="user.id" cols="12" md="4" lg="3">
      <v-card class="ma-2" outlined>
        <v-card-title>{{ user.name }}</v-card-title>
        <v-card-subtitle>{{ user.email }}</v-card-subtitle>
        <v-avatar size="100" class="mx-auto">
          <img :src="`https://i.pravatar.cc/150?img=${user.id}`" alt="avatar" />
        </v-avatar>
        <v-card-actions>
          <v-btn color="primary" @click="$emit('show-user', user)">Ver más</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { fetchUsers } from '../services/userService'

const props = defineProps()
defineEmits(['show-user'])

const users = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    users.value = await fetchUsers()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})

const filteredUsers = computed(() =>
  users.value.filter(user =>
    user.name.toLowerCase().includes((props.search || '').toLowerCase())
  )
)
</script>
