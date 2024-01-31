<template>
  <div class="w-[350px]">
    <aside
      id="default-sidebar"
      class="fixed hidden md:block z-40 h-screen transition-transform translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full flex flex-col justify-between p-10 overflow-y-auto">
        <div class="space-y-36">
          <AppLogo />

          <div class="space-y-5">
            <LinkTo :to="{ name: 'home' }" :active="activeView === 'home'">Home.</LinkTo>
            <LinkTo :to="{ name: 'career' }" :active="activeView === 'career'">Career.</LinkTo>
            <LinkTo :to="{ name: 'profile' }" :active="activeView === 'profile'">Profile.</LinkTo>
            <LinkTo :to="{ name: 'photography' }" :active="activeView === 'photography'"
              >Photography.</LinkTo
            >
            <LinkTo :to="{ name: 'contact' }" :active="activeView === 'contact'">Contact.</LinkTo>
          </div>
        </div>
        <AppSocials />
      </div>
    </aside>
  </div>
</template>

<script setup>
import AppLogo from '@/components/AppLogo.vue'
import LinkTo from '@/components/buttons/LinkTo.vue'
import AppSocials from '@/components/AppSocials.vue'

defineProps({
  activeView: {
    type: String,
    required: false,
    default: 'home'
  }
})
</script>