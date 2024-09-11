<script setup lang="ts">
import { ref } from 'vue'
import { useLanguageStore } from '../stores/languageStore'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGlobe } from '@fortawesome/pro-light-svg-icons/faGlobe'
import { faAngleDown } from '@fortawesome/pro-light-svg-icons/faAngleDown'

const languageStore = useLanguageStore()

const toggleLanguageSelector = ref<boolean>(false)
</script>

<template>
  <div class="relative flex flex-row items-center">
    <button
      @click="toggleLanguageSelector = !toggleLanguageSelector"
      class="flex flex-row items-center space-x-[8px]"
    >
      <FontAwesomeIcon :icon="faGlobe" class="text-[20px] text-core-lightest" />
      <p class="text-[14px] text-core-lightest">
        {{ languageStore.selectedLanguage.short.toUpperCase() }}
      </p>
      <FontAwesomeIcon :icon="faAngleDown" class="text-[20px] text-core-lightest" />
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
