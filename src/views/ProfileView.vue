<template>
  <div>
    <PageTitle title="Profile." />
    <div
      class="flex flex-col items-center justify-center sm:flex-row sm:justify-between space-y-4 sm:space-y-0 space-x-0 sm:space-x-16 sm:py-6"
    >
      <v-lazy-image
        :src-placeholder="placeholderUrl"
        :src="imageUrl"
        class="max-h-xs max-w-xs sm:max-w-md sm:max-h-md"
      />
      <div class="sm:flex sm:items-center">
        <div class="space-y-4 px-6">
          <div class="text-2xl font-semibold space-y-2">Fjolla Dedaj</div>
          <p class="text-sm sm:text-base font-medium font-mono">
            I'm a 24 year old software engineer dedicated to creating exceptional user experience.
            Highly skilled in software architecture, problem-solving, and effective collaboration.
            Committed to innovation and armed with a deep understanding of design principles, I
            bring precision and creativity to every project, ensuring user satisfaction and product
            excellence.
            <br />
            <br />
            In my free time, I enjoy street photography and staying active through sports.
          </p>
          <img src="@/assets/signature.png" width="200" height="200" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitle from '@/components/PageTitle.vue'
import VLazyImage from 'v-lazy-image'

const imageUrl = new URL(`../assets/profile_avatar_with_background.png`, import.meta.url).href
const placeholderUrl = new URL(
  `../assets/profile_avatar_with_background_placeholder.png`,
  import.meta.url
).href
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