<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75"
      @click.self="close"
    >
      <div
        class="relative w-full h-full bg-black/90 shadow-lg p-8 flex items-center justify-center"
        @click.self="close"
      >
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="z-40 absolute top-6 right-3 text-xl text-white my-2 mx-4 hover:cursor-pointer"
          @click.prevent="close"
        />
        <div class="flex items-center justify-center" @click.self="close">
          <div class="relative">
            <v-lazy-image
              :src-placeholder="placeholder"
              :src="imageUrl"
              class="max-w-screen max-h-screen"
            />

            <div
              class="absolute bottom-2 sm:bottom-4 right-2 text-white text-xs font-medium sm:text-md"
            >
              <div class="font-thin bg-black/30 px-1 drop-shadow-xl">
                {{ title }}
                <hr class="h-0.5 border-t-0 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
 
<script setup>
import VLazyImage from 'v-lazy-image'
import { watch } from 'vue'

const emit = defineEmits(['close'])

const props = defineProps({
  isOpen: {
    required: true,
    type: Boolean
  },
  imageUrl: {
    type: String,
    required: false,
    default: ''
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  title: {
    type: String,
    required: false,
    default: ''
  }
})

const close = () => {
  emit('close')
}

watch(
  () => props.isOpen,
  (value) => {
    if (value) {
      document.querySelector('body').classList.add('overflow-hidden')
    } else {
      document.querySelector('body').classList.remove('overflow-hidden')
    }
  }
)
</script>
 
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.5s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
