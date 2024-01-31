<template>
  <div>
    <PageTitle title="Career." />
    <CareerTimeline />
    <div class="sm:flex items-start mt-10 space-y-6 sm:space-y-0 sm:space-x-12">
      <div class="text-nowrap font-medium text-xl">Technical skills</div>
      <div class="flex flex-wrap justify-between">
        <AppBadge v-for="skill in skills" :key="skill" class="mb-2 mr-2">{{ skill }}</AppBadge>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitle from '@/components/PageTitle.vue'
import CareerTimeline from './CareerTimeline.vue'
import AppBadge from '@/components/AppBadge.vue'

const skills = [
  'JavaScript',
  'Vue',
  'Vite',
  'React',
  'Typescript',
  'C',
  'C++',
  'Webpack',
  'Tailwind',
  'Chart.js',
  'Bulma',
  'ESLint',
  'Git',
  'Vuetify',
  'Vuex',
  'Pinia',
  'React Native',
  'RESTful APIs',
  'Storybook',
  'GraphQL',
  'Docker',
  'HTML',
  'Linear',
  'Figma',
  'Miro',
  'Cypress',
  'CSS',
  'ES6',
  'Basecamp',
  'Jira',
  'Trello',
  'UI/UX',
  'Jest'
]
</script>