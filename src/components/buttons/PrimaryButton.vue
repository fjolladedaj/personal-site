<template>
  <button
    type="button"
    class="focus:outline-none bg-secondary transition-colors duration-400 ease-in-out sm:hover:bg-black sm:hover:text-primary ring-2 ring-black font-bold rounded-lg px-8 py-4"
    @click="emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])
</script>