<template>
  <div class="overflow-auto overscroll-contain">
    <div class="fixed w-screen z-40 sm:hidden">
      <div class="flex items-center px-4 py-3 bg-primary justify-between space-x-2 sm:space-x-0">
        <AppLogo />
        <NavbarButton />
      </div>
      <Transition
        enter-active-class="duration-300 ease-out transform transition-transform"
        enter-from-class="-translate-y-full"
        enter-to-class="translate-y-0"
        leave-active-class="duration-200 ease-in transform transition-transform"
        leave-from-class="translate-y-0"
        leave-to-class="-translate-y-full"
      >
        <SmallScreenSidebar v-if="isSidebarOpen" :active-view="activeView" />
      </Transition>
    </div>

    <div class="sm:flex">
      <LargeScreenSidebar :active-view="activeView" />

      <div class="flex-1 p-4 sm:mx-14 h-screen">
        <HomeView id="home" />
        <AppDivider class="mt-0" />
        <CareerView id="career" />
        <AppDivider />
        <ProfileView id="profile" />
        <AppDivider />
        <PhotographyView id="photography" />
        <AppDivider />
        <ContactView id="contact" />
        <AppDivider />
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import NavbarButton from '@/components/NavbarButton.vue'
import AppLogo from '@/components/AppLogo.vue'
import HomeView from '@/views/HomeView.vue'
import CareerView from '@/views/CareerView'
import PhotographyView from '@/views/PhotographyView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ContactView from '@/views/ContactView.vue'
import AppDivider from '@/components/AppDivider.vue'
import SmallScreenSidebar from '@/components/SmallScreenSidebar.vue'
import LargeScreenSidebar from '@/components/LargeScreenSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'
import useWindowResize from '@/composables/useWindowResize.js'

const store = useAppStore()
const fullConfig = resolveConfig(tailwindConfig)
const { width } = useWindowResize()

const isSmallScreen = computed(() => width.value <= parseInt(fullConfig.theme.screens.sm, 10))

const activeView = ref('')

const isInViewport = (element, event) => {
  const elementTop = element.offsetTop
  const elementBottom = elementTop + element.clientHeight

  const containerTop = event.target.scrollTop
  const offset = isSmallScreen.value ? 60 : 10

  return elementTop - offset <= containerTop && containerTop <= elementBottom
}

const onScroll = (event) => {
  const { scrollTop, offsetHeight, scrollHeight } = event.target
  const isAtBottom = scrollTop + offsetHeight + 1 >= scrollHeight
  const isAtTop = scrollTop === 0

  if (isAtBottom) {
    activeView.value = 'contact'
  } else {
    if (isInViewport(document.getElementById('home'), event) || isAtTop) {
      activeView.value = 'home'
    }
    if (isInViewport(document.getElementById('career'), event)) {
      activeView.value = 'career'
    }
    if (isInViewport(document.getElementById('photography'), event)) {
      activeView.value = 'photography'
    }
    if (isInViewport(document.getElementById('profile'), event)) {
      activeView.value = 'profile'
    }
    if (isInViewport(document.getElementById('contact'), event)) {
      activeView.value = 'contact'
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', (event) => onScroll(event), true)
  activeView.value = 'home'
})

onUnmounted(() => {
  window.removeEventListener('scroll', (event) => onScroll(event), true)
})

const { isSidebarOpen } = storeToRefs(store)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap');

html,
body {
  font-family: 'Barlow', sans-serif;
}

#app {
  font-family: 'Barlow', sans-serif;
}
</style>
