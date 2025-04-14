<script setup lang="ts">
import { useCookieStore } from '../stores/cookieStore'
import { useLanguageStore } from '../stores/languageStore'
import { usePolicyModalStore } from '../stores/policyModalStore'

const cookieStore = useCookieStore()
const languageStore = useLanguageStore()
const policyModalStore = usePolicyModalStore()

function acceptCookies() {
  cookieStore.acceptCookies()
}

function rejectCookies() {
  cookieStore.rejectCookies()
}

function goToPrivacyPolicy() {
  policyModalStore.openPrivacyPolicy()
}

function goToCookiePolicy() {
  policyModalStore.openCookiePolicy()
}
</script>

<template>
  <div
    v-if="!cookieStore.hasConsented"
    class="fixed bottom-0 left-0 right-0 bg-core-darkest text-white p-4 z-50 shadow-md"
  >
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <p class="text-sm mb-2 md:mb-0">
        {{ languageStore.languageFile.cookieBannerText }}
        <span @click="goToPrivacyPolicy" class="underline cursor-pointer text-accent-1">
          {{ languageStore.languageFile.privacyPolicyTitle }}
        </span>
        &
        <span @click="goToCookiePolicy" class="underline cursor-pointer text-accent-1">
          {{ languageStore.languageFile.cookiePolicyTitle }}
        </span>
      </p>
      <div class="flex space-x-4">
        <button
          @click="acceptCookies"
          class="bg-accent-1 text-white px-4 py-2 rounded hover:bg-accent-2"
        >
          {{ languageStore.languageFile.acceptCookies }}
        </button>
        <button
          @click="rejectCookies"
          class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          {{ languageStore.languageFile.rejectCookies }}
        </button>
      </div>
    </div>
  </div>
</template>
