<script lang="ts" setup>
import { usePopUpOnLoadStore } from '../stores/popUpStore'
import CloseButton from './CloseButton.vue'

const popUpStore = usePopUpOnLoadStore()

async function submit() {
  // open external window to link
  window.open('https://www.basemma.com/products/3-day-demian-maia-experience', '_blank')
  popUpStore.closePopUp()
}
</script>

<template>
  <div
    class="fixed top-0 left-0 bottom-0 w-full h-[100%] pt-[100px] md:pt-20 flex items-center justify-center backdrop-blur-md z-30 leading-snug overflow-y-auto"
  >
    <div
      class="relative max-w-[90%] lg:max-w-[40%] flex flex-col items-center justify-between space-y-[30px] bg-core-lightest p-[30px]"
    >
      <div class="flex flex-col space-y-[20px]">
        <img @click="submit()" src="/demian.jpg" alt="Demian Maia Experience" />
      </div>

      <button @click="submit()" class="py-[15px] px-[30px] overflow-hidden bg-accent-1">
        <p class="text-[20px] md:text-[40px] font-bold text-core-lightest">Book Now</p>
      </button>

      <div class="absolute top-[-50px] right-[-20px]">
        <CloseButton @click="popUpStore.closePopUp()" />
      </div>
    </div>
  </div>
</template>
