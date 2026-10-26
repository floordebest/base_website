<script setup lang="ts">
import { useLanguageStore } from '../stores/languageStore'
import { EGJJF_URL } from '../config'

const lang = useLanguageStore()
</script>

<template>
  <a
    :href="EGJJF_URL"
    target="_blank"
    rel="noopener"
    class="flex flex-row items-center space-x-[12px] group"
  >
    <img src="/egjjf_logo.png" alt="EGJJF logo" class="w-[40px] h-[40px] shrink-0" />
    <p class="text-[12px] lg:text-[14px] text-core-light group-hover:text-accent-1">
      {{ lang.languageFile.affiliationBadge }}
    </p>
  </a>
</template>
