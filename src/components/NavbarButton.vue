<template>
  <button
    type="button"
    :class="[
      isSidebarOpen
        ? 'bg-secondary p-2 text-sm text-black border-2 border-black rounded-lg'
        : 'p-2 text-sm text-black border-2 border-black rounded-lg'
    ]"
    @click="toggleSidebar"
  >
    <font-awesome-icon size="lg" icon="fa-solid fa-bars" />
  </button>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const store = useAppStore()

const { toggleSidebar } = store
const { isSidebarOpen } = storeToRefs(store)
</script>