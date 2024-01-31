<template>
  <div>
    <PageTitle title="Photography." />
    <ImagePopup
      class="z-40"
      :is-open="isOpen"
      :image-url="imageUrl"
      :title="imageTitle"
      :placeholder="imagePlaceholder"
      @close="isOpen = false"
    />
    <div class="space-y-6">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
        <div v-for="image in verticalImages" :key="image.name">
          <div class="h-auto max-w-full rounded-xl overflow-hidden">
            <v-lazy-image
              :src="image.thumbnailUrl.href"
              :src-placeholder="image.placeholderUrl.href"
              class="hover:scale-105 transition duration-500 rounded-xl hover:cursor-pointer"
              @click="
                openImagePopup({
                  url: image.imageUrl.href,
                  placeholder: image.placeholderUrl.href,
                  title: image.title
                })
              "
            />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-2 gap-4 items-center">
        <div v-for="image in horizontalImages" :key="image.name">
          <div class="h-auto max-w-full rounded-xl overflow-hidden">
            <v-lazy-image
              class="hover:scale-105 transition duration-500 rounded-xl hover:cursor-pointer"
              :src="image.thumbnailUrl.href"
              :src-placeholder="image.placeholderUrl.href"
              @click="
                openImagePopup({
                  url: image.imageUrl.href,
                  placeholder: image.placeholderUrl.href,
                  title: image.title
                })
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import ImagePopup from '@/components/ImagePopup.vue'
import VLazyImage from 'v-lazy-image'

const isOpen = ref(false)
const imageUrl = ref('')
const imagePlaceholder = ref('')
const imageTitle = ref('')

const openImagePopup = ({ url, placeholder, title }) => {
  imageUrl.value = url
  imagePlaceholder.value = placeholder
  imageTitle.value = title
  isOpen.value = true
}

const verticalImages = [
  {
    title: 'Krujë, Albania',
    name: 'albania-1',
    placeholderUrl: new URL(`../assets/images/vertical/albania_1_placeholder.jpg`, import.meta.url),
    thumbnailUrl: new URL(`../assets/images/vertical/albania_1_thumbnail.jpg`, import.meta.url),
    imageUrl: new URL(`../assets/images/vertical/albania_1.jpg`, import.meta.url)
  },
  {
    title: 'Rruga e Kombit Highway, Albania',
    name: 'albania-2',
    placeholderUrl: new URL(`../assets/images/vertical/albania_2_placeholder.jpg`, import.meta.url),
    thumbnailUrl: new URL(`../assets/images/vertical/albania_2_thumbnail.jpg`, import.meta.url),
    imageUrl: new URL(`../assets/images/vertical/albania_2.jpg`, import.meta.url)
  },
  {
    title: 'Krujë, Albania',
    name: 'albania-3',
    placeholderUrl: new URL(`../assets/images/vertical/albania_3_placeholder.jpg`, import.meta.url),
    thumbnailUrl: new URL(`../assets/images/vertical/albania_3_thumbnail.jpg`, import.meta.url),
    imageUrl: new URL(`../assets/images/vertical/albania_3.jpg`, import.meta.url)
  },
  {
    title: 'Spille beach, Albania',
    name: 'albania-4',
    placeholderUrl: new URL(`../assets/images/vertical/albania_4_placeholder.jpg`, import.meta.url),
    thumbnailUrl: new URL(`../assets/images/vertical/albania_4_thumbnail.jpg`, import.meta.url),
    imageUrl: new URL(`../assets/images/vertical/albania_4.jpg`, import.meta.url)
  },
  {
    title: 'Cologne, Germany',
    name: 'cologne-germany',
    placeholderUrl: new URL(
      `../assets/images/vertical/cologne_germany_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/cologne_germany_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/cologne_germany.jpg`, import.meta.url)
  },
  {
    title: 'Amsterdam, Netherlands',
    name: 'amsterdam-netherlands-1',
    placeholderUrl: new URL(
      `../assets/images/vertical/amsterdam_netherlands_1_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/amsterdam_netherlands_1_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/amsterdam_netherlands_1.jpg`, import.meta.url)
  },
  {
    title: 'Berlin U-bahn',
    name: 'berlin-3',
    placeholderUrl: new URL(`../assets/images/vertical/berlin_3_placeholder.jpg`, import.meta.url),
    thumbnailUrl: new URL(`../assets/images/vertical/berlin_3_thumbnail.jpg`, import.meta.url),
    imageUrl: new URL(`../assets/images/vertical/berlin_3.jpg`, import.meta.url)
  },
  {
    title: 'Dresden, Germany',
    name: 'dresden-germany',
    placeholderUrl: new URL(
      `../assets/images/vertical/dresden_germany_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/dresden_germany_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/dresden_germany.jpg`, import.meta.url)
  },
  {
    title: 'Köpenick, Berlin',
    name: 'kopenick-berlin-1',
    placeholderUrl: new URL(
      `../assets/images/vertical/kopenick_berlin_1_placeholder.jpg`,
      import.meta.url
    ),

    thumbnailUrl: new URL(
      `../assets/images/vertical/kopenick_berlin_1_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/kopenick_berlin_1.jpg`, import.meta.url)
  },
  {
    title: 'Köpenick, Berlin',
    name: 'kopenick-berlin-2',
    placeholderUrl: new URL(
      `../assets/images/vertical/kopenick_berlin_2_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/kopenick_berlin_2_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/kopenick_berlin_2.jpg`, import.meta.url)
  },

  {
    title: 'Lisbon, Portugal',
    name: 'lisbon-portugal-1',
    placeholderUrl: new URL(
      `../assets/images/vertical/lisbon_portugal_1_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/lisbon_portugal_1_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/lisbon_portugal_1.jpg`, import.meta.url)
  },
  {
    title: 'Lisbon, Portugal',
    name: 'lisbon-portugal-2',
    placeholderUrl: new URL(
      `../assets/images/vertical/lisbon_portugal_2_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/lisbon_portugal_2_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/lisbon_portugal_2.jpg`, import.meta.url)
  },
  {
    title: 'Lisbon, Portugal',
    name: 'lisbon-portugal-3',
    placeholderUrl: new URL(
      `../assets/images/vertical/lisbon_portugal_3_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/lisbon_portugal_3_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/lisbon_portugal_3.jpg`, import.meta.url)
  },
  {
    title: 'Lisbon, Portugal',
    name: 'lisbon-portugal-4',
    placeholderUrl: new URL(
      `../assets/images/vertical/lisbon_portugal_4_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/lisbon_portugal_4_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/lisbon_portugal_4.jpg`, import.meta.url)
  },
  {
    title: 'Lisbon, Portugal',
    name: 'lisbon-portugal-5',
    placeholderUrl: new URL(
      `../assets/images/vertical/lisbon_portugal_5_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/lisbon_portugal_5_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/lisbon_portugal_5.jpg`, import.meta.url)
  },
  {
    title: 'Lisbon, Portugal',
    name: 'lisbon-portugal-6',
    placeholderUrl: new URL(
      `../assets/images/vertical/lisbon_portugal_6_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/lisbon_portugal_6_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/lisbon_portugal_6.jpg`, import.meta.url)
  },
  {
    title: 'Piazza Navona, Rome, Italy',
    name: 'piazza-navona-rome',
    placeholderUrl: new URL(
      `../assets/images/vertical/piazza_navona_rome_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/piazza_navona_rome_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/piazza_navona_rome.jpg`, import.meta.url)
  },

  {
    title: 'Rome, Italy',
    name: 'street-in-rome',
    placeholderUrl: new URL(
      `../assets/images/vertical/street_in_rome_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/street_in_rome_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/street_in_rome.jpg`, import.meta.url)
  },
  {
    title: 'Aachen, Germany',
    name: 'aachen-germany',
    placeholderUrl: new URL(
      `../assets/images/vertical/aachen_germany_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/aachen_germany_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/aachen_germany.jpg`, import.meta.url)
  },
  {
    title: 'Schöneberg, Berlin',
    name: 'schoneberg-berlin',
    placeholderUrl: new URL(
      `../assets/images/vertical/schoneberg_berlin_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/schoneberg_berlin_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/schoneberg_berlin.jpg`, import.meta.url)
  },
  {
    title: 'Köpenick, Berlin',
    name: 'kopenick-berlin-3',
    placeholderUrl: new URL(
      `../assets/images/vertical/kopenick_berlin_3_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/vertical/kopenick_berlin_3_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/vertical/kopenick_berlin_3.jpg`, import.meta.url)
  }
]

const horizontalImages = [
  {
    title: 'Amsterdam, Netherlands',
    name: 'amsterdam-netherlands-2',
    placeholderUrl: new URL(
      `../assets/images/horizontal/amsterdam_netherlands_2_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/amsterdam_netherlands_2_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/amsterdam_netherlands_2.jpg`, import.meta.url)
  },
  {
    title: 'Sintra, Portugal',
    name: 'sintra-portugal-1',
    placeholderUrl: new URL(
      `../assets/images/horizontal/sintra_portugal_1_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/sintra_portugal_1_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/sintra_portugal_1.jpg`, import.meta.url)
  },
  {
    title: 'Sintra, Portugal',
    name: 'sintra-portugal-2',
    placeholderUrl: new URL(
      `../assets/images/horizontal/sintra_portugal_2_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/sintra_portugal_2_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/sintra_portugal_2.jpg`, import.meta.url)
  },
  {
    title: 'Trevi Fountain',
    name: 'trevi-fountain',
    placeholderUrl: new URL(
      `../assets/images/horizontal/trevi_fountain_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/trevi_fountain_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/trevi_fountain.jpg`, import.meta.url)
  },
  {
    title: 'Dresden, Germany',
    name: 'dresden-germany-1',
    placeholderUrl: new URL(
      `../assets/images/horizontal/dresden_germany_1_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/dresden_germany_1_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/dresden_germany_1.jpg`, import.meta.url)
  },
  {
    title: 'Berlin U-bahn',
    name: 'berlin-2',
    placeholderUrl: new URL(
      `../assets/images/horizontal/berlin_2_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(`../assets/images/horizontal/berlin_2_thumbnail.jpg`, import.meta.url),
    imageUrl: new URL(`../assets/images/horizontal/berlin_2.jpg`, import.meta.url)
  },
  {
    title: 'Berlin U-bahn',
    name: 'berlin-1',
    placeholderUrl: new URL(
      `../assets/images/horizontal/berlin_1_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(`../assets/images/horizontal/berlin_1_thumbnail.jpg`, import.meta.url),
    imageUrl: new URL(`../assets/images/horizontal/berlin_1.jpg`, import.meta.url)
  },
  {
    title: 'Colosseum, Rome, Italy',
    name: 'colosseum-rome',
    placeholderUrl: new URL(
      `../assets/images/horizontal/colosseum_rome_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/colosseum_rome_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/colosseum_rome.jpg`, import.meta.url)
  },
  {
    title: 'Dresden, Germany',
    name: 'dresden-germany-2',
    placeholderUrl: new URL(
      `../assets/images/horizontal/dresden_germany_2_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/dresden_germany_2_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/dresden_germany_2.jpg`, import.meta.url)
  },
  {
    title: 'Dresden, Germany',
    name: 'dresden-germany-3',
    placeholderUrl: new URL(
      `../assets/images/horizontal/dresden_germany_3_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/dresden_germany_3_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/dresden_germany_3.jpg`, import.meta.url)
  },
  {
    title: 'The Vatican Museums',
    name: 'the-vatican-museums-1',
    placeholderUrl: new URL(
      `../assets/images/horizontal/the_vatican_museums_1_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/the_vatican_museums_1_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/the_vatican_museums_1.jpg`, import.meta.url)
  },
  {
    title: 'The Vatican Museums',
    name: 'the-vatican-museums-2',
    placeholderUrl: new URL(
      `../assets/images/horizontal/the_vatican_museums_2_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/the_vatican_museums_2_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/the_vatican_museums_2.jpg`, import.meta.url)
  },
  {
    title: 'Prizren, Kosovo',
    name: 'prizren-kosovo',
    placeholderUrl: new URL(
      `../assets/images/horizontal/prizren_kosovo_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/prizren_kosovo_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/prizren_kosovo.jpg`, import.meta.url)
  },
  {
    title: 'Piazza di Spagna, Rome, Italy',
    name: 'piazza-di-spagna-rome',
    placeholderUrl: new URL(
      `../assets/images/horizontal/piazza_di_spagna_rome_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/piazza_di_spagna_rome_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/piazza_di_spagna_rome.jpg`, import.meta.url)
  },
  {
    title: 'Lisbon, Portugal',
    name: 'lisbon-portugal',
    placeholderUrl: new URL(
      `../assets/images/horizontal/lisbon_portugal_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/lisbon_portugal_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/lisbon_portugal.jpg`, import.meta.url)
  },
  {
    title: 'Spille beach, Albania',
    name: 'spille-albania',
    placeholderUrl: new URL(
      `../assets/images/horizontal/spille_albania_placeholder.jpg`,
      import.meta.url
    ),
    thumbnailUrl: new URL(
      `../assets/images/horizontal/spille_albania_thumbnail.jpg`,
      import.meta.url
    ),
    imageUrl: new URL(`../assets/images/horizontal/spille_albania.jpg`, import.meta.url)
  }
]
</script>


<style scoped>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.5s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>