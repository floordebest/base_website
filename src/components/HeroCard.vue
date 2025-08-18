<script setup lang="ts">
import { usePopUpStore } from '../stores/popUpStore'
import CustomButton from './CustomButton.vue'

const popUpStore = usePopUpStore()

const props = defineProps<{
  left: boolean
  leader: boolean
  image: string
  title: string
  description: string
  button: string
  hasMap?: boolean
}>()

function openInNewWindow(url: string) {
  console.log('click')
  window.open(url, '_blank')
}
</script>

<template>
  <div class="w-full flex flex-col md:flex-row items-center justify-evenly">
    <div
      v-if="props.left"
      class="hidden md:flex relative bg-accent-1 w-[200px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px]"
    >
      <img
        @click="
          props.image === '/prices.png' || props.image === '/demian.jpg'
            ? openInNewWindow(props.image)
            : null
        "
        v-if="!props.hasMap"
        :src="props.image"
        alt="base team"
        class="absolute top-[-10px] left-[-10px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px] object-cover"
      />
      <iframe
        v-else
        class="absolute top-[-10px] left-[-10px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d388.8074335815903!2d0.183798!3d38.7761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e0fc80797b0d3%3A0x55c7e99fbd2da23f!2sThe%20Base%20Javea!5e0!3m2!1ses!2ses!4v1724770872110!5m2!1ses!2ses"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="flex flex-col items-center max-w-[250px] lg:max-w-[535px] space-y-[20px]">
      <div class="flex flex-col items-center">
        <p v-if="props.leader" class="text-accent-1">THE BASE JAVEA</p>
        <p class="text-[26px] lg:text-[40px] font-bold text-core-lightest">{{ props.title }}</p>
      </div>
      <div class="md:hidden flex relative bg-accent-1 w-[300px] h-[300px]">
        <img
          @click="
            props.image === '/prices.png' || props.image === '/demian.jpg'
              ? openInNewWindow(props.image)
              : null
          "
          v-if="!props.hasMap"
          :src="props.image"
          alt="base team"
          class="absolute top-[-10px] left-[-10px] w-[300px] h-[300px] object-cover"
          :class="
            props.image === '/prices.png' || props.image === '/demian.jpg' ? 'object-top' : null
          "
        />
        <iframe
          v-else
          class="absolute top-[-10px] left-[-10px] w-[300px] h-[300px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d388.8074335815903!2d0.183798!3d38.7761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e0fc80797b0d3%3A0x55c7e99fbd2da23f!2sThe%20Base%20Javea!5e0!3m2!1ses!2ses!4v1724770872110!5m2!1ses!2ses"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p class="text-[12px] lg:text-[18px] text-core-light">
        {{ props.description }}
      </p>
      <CustomButton
        :title="props.button"
        @click="
          props.image === '/demian.jpg'
            ? openInNewWindow('https://www.basemma.com/products/3-day-demian-maia-experience')
            : props.button.includes('Book')
            ? popUpStore.setClass('Private Training')
            : popUpStore.setClass('')
        "
      />
    </div>
    <div
      v-if="!props.left"
      @click="
        image === '/prices.png' || props.image === '/demian.jpg'
          ? openInNewWindow(props.image)
          : null
      "
      class="hidden md:flex relative bg-accent-1 w-[200px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px]"
    >
      <img
        v-if="!props.hasMap"
        :src="props.image"
        alt="base team"
        class="absolute top-[-10px] left-[-10px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px] object-cover"
        :class="image === '/prices.png' || props.image === '/demian.jpg' ? 'object-top' : null"
      />
      <iframe
        v-else
        class="absolute top-[-10px] left-[-10px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d388.8074335815903!2d0.183798!3d38.7761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e0fc80797b0d3%3A0x55c7e99fbd2da23f!2sThe%20Base%20Javea!5e0!3m2!1ses!2ses!4v1724770872110!5m2!1ses!2ses"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
