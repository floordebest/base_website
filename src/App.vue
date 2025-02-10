<script setup lang="ts">
import BaseMenu from './components/BaseMenu.vue'
import BottomMenu from './components/BottomMenu.vue'
import { RouterView } from 'vue-router'
import ContactForm from './components/ContactForm.vue'
import { usePopUpOnLoadStore, usePopUpStore } from './stores/popUpStore'
import { useLanguageStore } from './stores/languageStore'
import DemianPopUp from './components/DemianPopUp.vue'

const popUpStore = usePopUpStore()
const popUpMainStore = usePopUpOnLoadStore()

if (!popUpMainStore.showPopUp) {
  popUpMainStore.enablePopUp()
}

useLanguageStore().init()
</script>

<template>
  <section
    class="w-full h-screen bg-core-darkest z-0"
    :class="
      popUpStore.showPopUp ? 'overflow-hidden' : 'overflow-y-auto md:space-y-[20px] md:pt-[20px]'
    "
  >
    <BaseMenu />
    <RouterView />
    <BottomMenu />
    <ContactForm v-if="popUpStore.showPopUp" />
    <DemianPopUp v-if="popUpMainStore.showPopUp" />
  </section>
</template>
