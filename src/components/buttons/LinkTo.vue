<template>
  <router-link
    :to="to"
    :class="[
      active
        ? 'block text-2xl font-medium text-secondary'
        : 'block text-2xl font-medium transition-colors duration-900 ease-in-out sm:hover:text-secondary'
    ]"
  >
    <slot></slot>
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: Object,
    required: true
  },
  active: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>