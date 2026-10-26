<script setup lang="ts">
import { useLanguageStore } from '../../stores/languageStore'
import { EGJJF_URL } from '../../config'
import SectionTitle from '../SectionTitle.vue'
import CustomButton from '../CustomButton.vue'

const lang = useLanguageStore()

function openEgjjf() {
  window.open(EGJJF_URL, '_blank')
}
</script>

<template>
  <div class="w-full flex flex-col md:flex-row items-center justify-evenly gap-[40px]">
    <div class="flex items-center justify-center bg-core-darker p-[30px] md:p-[50px]">
      <img
        src="/egjjf_logo.png"
        alt="European Grappling & Jiu-Jitsu Federation logo"
        class="w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px]"
      />
    </div>
    <div class="flex flex-col items-center text-center max-w-[300px] lg:max-w-[535px]">
      <SectionTitle :title="lang.languageFile.affiliationTitle" />
      <p
        class="text-[12px] lg:text-[18px] text-core-light pb-[30px]"
        v-html="lang.languageFile.affiliationDescription"
      />
      <CustomButton :title="lang.languageFile.affiliationLink" @click="openEgjjf" />
    </div>
  </div>
</template>
