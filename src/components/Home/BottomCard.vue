<script setup lang="ts">
import { useLanguageStore } from '../../stores/languageStore'
import { usePopUpStore } from '../../stores/popUpStore'
import MainCard from './MainCard.vue'

const popUpStore = usePopUpStore()
const lang = useLanguageStore()

function goToLink() {
  window.open('https://www.basemma.com', '_blank')
}
</script>

<template>
  <div
    class="relative w-full py-[80px] pb-[250px] sm:pb-[200px] md:pb-0 px-[30px] bg-core-darker flex flex-col items-center"
  >
    <p
      class="hidden md:flex absolute top-[5%] items-center justify-center text-center text-[100px] md:text-[120px] px-[40px] md:px-0 z-0 font-bold text-core-darker drop-shadow-[0.4px_0.4px_0.4px_rgba(255,255,255,1)]"
    >
      {{ lang.languageFile.getInTouch }}
    </p>
    <p class="text-accent-1 z-20">THE BASE JAVEA</p>
    <p class="text-[28px] md:text-[40px] font-bold text-core-lightest pb-[20px] z-20 pb-[200px]">
      {{ lang.languageFile.getInTouch }}
    </p>

    <div
      class="absolute md:relative bottom-[-10px] lg:bottom-0 w-full lg:w-auto flex flex-row space-x-[30px] items-center px-[10px] overflow-x-auto"
    >
      <MainCard
        @click="popUpStore.setClass('')"
        title="The Base Jávea"
        description="Calle Burdeos 9, 03730 Xàbia, Alicante"
        icon="base"
      />
      <MainCard
        :title="lang.languageFile.emailUs"
        description="contact@basemma.com"
        icon="email"
        @click="popUpStore.setClass('')"
      />
      <MainCard
        title="WhatsApp"
        description="+34 674 39 46 92"
        icon="whatsapp"
        @click="popUpStore.setClass('')"
      />
      <MainCard
        @click="goToLink()"
        :title="lang.languageFile.shop"
        :description="lang.languageFile.shopTitle"
        icon="bag"
      />
    </div>
  </div>
</template>
