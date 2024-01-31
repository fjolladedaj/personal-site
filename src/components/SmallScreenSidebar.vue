<template>
  <ul class="font-medium flex flex-col border-y-2 border-black bg-primary">
    <LinkTo
      class="text-xl py-2 px-5"
      :to="{ name: 'home' }"
      :active="activeView === 'home'"
      @click="toggleSidebar"
      >Home.</LinkTo
    >
    <LinkTo
      class="text-xl py-2 px-5"
      :to="{ name: 'career' }"
      :active="activeView === 'career'"
      @click="toggleSidebar"
      >Career.</LinkTo
    >
    <LinkTo
      class="text-xl py-2 px-5"
      :to="{ name: 'profile' }"
      :active="activeView === 'profile'"
      @click="toggleSidebar"
      >Profile.</LinkTo
    >
    <LinkTo
      class="text-xl py-2 px-5"
      :to="{ name: 'photography' }"
      :active="activeView === 'photography'"
      @click="toggleSidebar"
      >Photography.</LinkTo
    >
    <LinkTo
      class="text-xl py-2 px-5"
      :to="{ name: 'contact' }"
      :active="activeView === 'contact'"
      @click="toggleSidebar"
      >Contact.</LinkTo
    >
    <AppDivider class="my-2" />
    <div class="flex items-center justify-center pb-4 pt-2 px-5">
      <AppSocials class="text-xs" />
    </div>
  </ul>
</template>

<script setup>
import LinkTo from '@/components/buttons/LinkTo.vue'
import AppSocials from '@/components/AppSocials.vue'
import AppDivider from '@/components/AppDivider.vue'
import { useAppStore } from '@/stores/app'

const store = useAppStore()

const { toggleSidebar } = store

defineProps({
  activeView: {
    type: String,
    required: false,
    default: 'home'
  }
})
</script>
