<template>
  <div
    class="flex items-center justify-center w-10 h-10 border border-black rounded-full bg-secondary shadow"
  >
    <font-awesome-icon class="text-black" :icon="icon" />
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>