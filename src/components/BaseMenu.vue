<script setup lang="ts">
import { usePopUpStore } from '../stores/popUpStore'
import CustomButton from './CustomButton.vue'
import LanguageSelector from './LanguageSelector.vue'
import { useLanguageStore } from '../stores/languageStore'

const popUpStore = usePopUpStore()
const languageStore = useLanguageStore()

const menuItems = [
  { name: 'timeTable', link: 'time' },
  { name: 'personalTraining', link: 'private' },
  { name: 'activities', link: 'activity' },
  { name: 'aboutUs', link: 'about' },
  { name: 'contact', link: 'contact' }
]

function focusInput(link: string) {
  const element = document.getElementById(link)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="flex flex-row lg:items-center lg:justify-center w-full md:p-[20px]">
    <div
      class="flex w-full lg:w-auto flex-col md:flex-row items-center justify-between lg:justify-center md:h-[50px] space-y-[40px] md:space-y-0"
    >
      <img src="/Base_Logo_Blanc.png" alt="base logo" class="h-[50px]" />
      <div class="hidden lg:flex w-[333px]" />
      <div id="menuItems" class="hidden lg:flex flex-row items-center w-full justify-evenly">
        <div v-for="item in menuItems">
          <button
            @click="focusInput(item.link)"
            :class="'text-core-lightest text-[14px] font-bold hover:text-accent-1'"
          >
            {{ languageStore.languageFile[item.name] }}
          </button>
        </div>
        <LanguageSelector />
        <CustomButton
          :title="languageStore.languageFile.bookAClassButton"
          @click="popUpStore.setClass('')"
        />
      </div>
      <LanguageSelector class="lg:hidden" />
      <CustomButton
        :title="languageStore.languageFile.bookAClassButton"
        class="lg:hidden"
        @click="popUpStore.setClass('')"
      />
    </div>
  </section>
</template>
