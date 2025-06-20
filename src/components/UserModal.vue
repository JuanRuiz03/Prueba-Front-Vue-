<template>
  <v-dialog v-model="show" persistent max-width="600px">
    <v-card>
      <v-card-title>{{ user.name }}</v-card-title>
      <v-card-subtitle>{{ user.email }}</v-card-subtitle>
      <v-card-text>
        <p><strong>Teléfono:</strong> {{ user.phone }}</p>
        <p><strong>Sitio web:</strong> {{ user.website }}</p>
        <p><strong>Compañía:</strong> {{ user.company.name }}</p>
        <p><strong>Dirección:</strong> {{ fullAddress }}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="$emit('close')">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
const props = defineProps(['user'])
defineEmits(['close'])

const show = ref(true)
watch(() => props.user, () => { show.value = true })

const fullAddress = computed(() => {
  const a = props.user.address
  return `${a.street}, ${a.suite}, ${a.city}, ${a.zipcode}`
})
</script>
