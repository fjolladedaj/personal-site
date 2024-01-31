<template>
  <div class="text-2xl sm:text-3xl font-semibold space-y-2 pt-4 pb-6 sm:pt-6 sm:pb-10">
    {{ title }}
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>