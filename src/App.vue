<script setup lang="ts">
import BaseMenu from './components/BaseMenu.vue'
import BottomMenu from './components/BottomMenu.vue'
import { RouterView } from 'vue-router'
import ContactForm from './components/ContactForm.vue'
import CookieConsent from './components/CookieConsent.vue'
import PrivacyPolicyModal from './components/PrivacyPolicyModal.vue'
import CookiePolicyModal from './components/CookiePolicyModal.vue'
import { usePopUpStore } from './stores/popUpStore'
import { useLanguageStore } from './stores/languageStore'
import { useCookieStore } from './stores/cookieStore'

const popUpStore = usePopUpStore()
const cookieStore = useCookieStore()

useLanguageStore().init()
cookieStore.initialize()
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
    <CookieConsent />
    <PrivacyPolicyModal />
    <CookiePolicyModal />
  </section>
</template>
