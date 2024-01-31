<template>
  <div class="relative space-y-4 md:space-y-2">
    <div class="md:flex items-center md:space-x-4">
      <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
        <div
          class="flex items-center justify-center w-10 h-10 border border-black rounded-full bg-secondary shadow md:order-1"
        >
          <font-awesome-icon class="text-black" :icon="icon" />
        </div>
        <time class="font-medium italic text-xl md:w-28">{{ date }}</time>
      </div>
      <div class="ml-14 text-xl">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="bg-slate-200 p-4 rounded-lg border-2 border-black text-slate-900 ml-14 md:ml-44">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})
</script>