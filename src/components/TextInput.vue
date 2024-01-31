<template>
  <textarea
    id="message"
    :rows="rows"
    :name="name"
    class="block bg-white placeholder:text-black placeholder:font-semibold border-2 border-black text-gray-900 rounded-lg focus:border-2 focus:border-secondary focus:outline-none p-4 w-full rounded-lg"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
  />
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    required: true
  },
  rows: {
    type: String,
    required: false,
    default: '3'
  },
  name: {
    type: String,
    required: true
  }
})

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>