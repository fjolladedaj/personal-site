<template>
  <div
    :class="[
      variants[variant],
      'flex items-center p-4 text-sm rounded-lg space-x-2 border-2 border-black'
    ]"
    role="alert"
  >
    <font-awesome-icon icon="fa-solid fa-circle-info" />
    <div>
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    required: true
  }
})

const variants = {
  success: 'text-green-800 bg-green-100',
  danger: 'text-red-700 bg-red-100'
}
</script>