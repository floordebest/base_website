<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { useLanguageStore } from '../stores/languageStore'

const menuItems = [
  { name: 'Home', link: 'home' },
  { name: 'activities', link: 'activity' },
  { name: 'aboutUs', link: 'about' },
  { name: 'contact', link: 'contact' }
]

const lang = useLanguageStore()

function focusInput(link: string) {
  const element = document.getElementById(link)
  element?.scrollIntoView({ behavior: 'smooth' })
}

function openInstagram() {
  window.open('https://www.instagram.com/thebasejavea', '_blank')
}

function openFacebook() {
  window.open('https://www.facebook.com/thebasejavea', '_blank')
}
</script>

<template>
  <section class="flex flex-row items-center justify-center w-full p-[20px]">
    <div
      class="flex w-full lg:w-auto flex-row items-center justify-between lg:justify-center h-[50px]"
    >
      <div class="w-[333px]"></div>
      <img src="/Base_Logo_Blanc.png" alt="base logo" class="h-[50px]" />
      <div class="w-[333px]" />
      <div id="menuItems" class="flex flex-row items-center w-full justify-evenly">
        <div v-for="item in menuItems" class="hidden lg:flex">
          <p @click="focusInput(item.link)" class="text-core-lightest text-[14px] font-bold">
            {{ item.name != 'Home' ? lang.languageFile[item.name] : 'Home' }}
          </p>
        </div>
        <div class="flex flex-row space-x-[20px]">
          <div
            @click="openInstagram()"
            class="flex w-[50px] h-[50px] bg-accent-1 items-center justify-center"
          >
            <FontAwesomeIcon :icon="faInstagram" class="text-[21px] text-core-lightest" />
          </div>
          <div
            @click="openFacebook()"
            class="flex w-[50px] h-[50px] bg-accent-1 items-center justify-center"
          >
            <FontAwesomeIcon :icon="faFacebookF" class="text-[21px] text-core-lightest" />
          </div>
        </div>
      </div>
      <div class="w-[333px]"></div>
    </div>
  </section>
</template>
