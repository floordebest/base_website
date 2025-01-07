<script setup lang="ts">
import { ref } from 'vue'
import { useLanguageStore } from '../stores/languageStore'

const languageStore = useLanguageStore()

const toggleLanguageSelector = ref<boolean>(false)
</script>

<template>
  <div class="relative flex flex-row items-center">
    <button
      @click="toggleLanguageSelector = !toggleLanguageSelector"
      class="flex flex-row items-center space-x-[8px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="w-[20px] h-[20px] fill-core-lightest"
      >
        <path
          d="M256 480c16.7 0 40.4-14.4 61.9-57.3c9.9-19.8 18.2-43.7 24.1-70.7l-172 0c5.9 27 14.2 50.9 24.1 70.7C215.6 465.6 239.3 480 256 480zM164.3 320l183.4 0c2.8-20.2 4.3-41.7 4.3-64s-1.5-43.8-4.3-64l-183.4 0c-2.8 20.2-4.3 41.7-4.3 64s1.5 43.8 4.3 64zM170 160l172 0c-5.9-27-14.2-50.9-24.1-70.7C296.4 46.4 272.7 32 256 32s-40.4 14.4-61.9 57.3C184.2 109.1 175.9 133 170 160zm210 32c2.6 20.5 4 41.9 4 64s-1.4 43.5-4 64l90.8 0c6-20.3 9.3-41.8 9.3-64s-3.2-43.7-9.3-64L380 192zm78.5-32c-25.9-54.5-73.1-96.9-130.9-116.3c21 28.3 37.6 68.8 47.2 116.3l83.8 0zm-321.1 0c9.6-47.6 26.2-88 47.2-116.3C126.7 63.1 79.4 105.5 53.6 160l83.7 0zm-96 32c-6 20.3-9.3 41.8-9.3 64s3.2 43.7 9.3 64l90.8 0c-2.6-20.5-4-41.9-4-64s1.4-43.5 4-64l-90.8 0zM327.5 468.3c57.8-19.5 105-61.8 130.9-116.3l-83.8 0c-9.6 47.6-26.2 88-47.2 116.3zm-143 0c-21-28.3-37.5-68.8-47.2-116.3l-83.7 0c25.9 54.5 73.1 96.9 130.9 116.3zM256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512z"
        />
      </svg>
      <p class="text-[14px] text-core-lightest">
        {{ languageStore.selectedLanguage.short.toUpperCase() }}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="w-[20px] h-[20px] fill-core-lightest"
      >
        <path
          d="M212.7 363.3c6.2 6.2 16.4 6.2 22.6 0l160-160c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 329.4 75.3 180.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l160 160z"
        />
      </svg>
    </button>
    <div
      v-if="toggleLanguageSelector"
      class="absolute top-[30px] right-0 flex flex-col bg-core-darkest p-[10px] z-30"
    >
      <button
        v-for="language in languageStore.availableLanguages"
        :key="language.name"
        @click="languageStore.setLanguage(language), (toggleLanguageSelector = false)"
        class="text-[14px] text-core-lightest text-start"
      >
        {{ language.name }}
      </button>
    </div>
  </div>
</template>
