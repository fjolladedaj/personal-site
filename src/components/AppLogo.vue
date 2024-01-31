<template>
  <router-link :to="{ name: 'home' }">
    <div class="flex items-center space-x-3">
      <div class="w-7 h-7 border-2 border-black rounded-full bg-secondary" />
      <div
        class="text-3xl font-medium transition-colors duration-900 ease-in-out hover:text-secondary"
      >
        Fjolla.
      </div>
    </div>
  </router-link>
</template>