<template>
  <div
    class="flex flex-col items-center justify-center sm:flex-row sm:justify-between pt-20 sm:pt-6 space-y-4 sm:space-y-0"
  >
    <div class="w-[320px] sm:w-auto">
      <div
        class="h-[110px] sm:h-auto type-name font-semibold text-5xl sm:text-8xl sm:font-medium"
      />
      <div class="mt-5 sm:mt-10 text-xl sm:text-2xl space-y-2">
        <div>Software engineer by profession.</div>
        <div>Visual storyteller through the lens.</div>
      </div>
      <router-link class="block mt-10" :to="{ name: 'contact' }">
        <PrimaryButton>Get in touch</PrimaryButton>
      </router-link>
    </div>
    <v-lazy-image
      :src-placeholder="placeholderUrl"
      :src="imageUrl"
      class="max-h-xs max-w-xs sm:max-w-sm sm:max-h-sm"
    />
  </div>
</template>

<script setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import VLazyImage from 'v-lazy-image'

const imageUrl = new URL(`../assets/home_avatar.png`, import.meta.url).href
const placeholderUrl = new URL(`../assets/home_avatar_placeholder.png`, import.meta.url).href
</script>


<style scoped>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style> 
