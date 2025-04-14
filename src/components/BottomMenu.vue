<script setup lang="ts">
import { useLanguageStore } from '../stores/languageStore'
import { usePolicyModalStore } from '../stores/policyModalStore'

const menuItems = [
  { name: 'Home', link: 'home' },
  { name: 'activities', link: 'activity' },
  { name: 'aboutUs', link: 'about' },
  { name: 'contact', link: 'contact' }
]

const languageStore = useLanguageStore()
const policyModalStore = usePolicyModalStore()

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

function goToPrivacyPolicy() {
  policyModalStore.openPrivacyPolicy()
}

function goToCookiePolicy() {
  policyModalStore.openCookiePolicy()
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
            {{ item.name != 'Home' ? languageStore.languageFile[item.name] : 'Home' }}
          </p>
        </div>
        <div class="flex flex-row space-x-[20px]">
          <div
            @click="openInstagram()"
            class="flex w-[50px] h-[50px] bg-accent-1 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="w-[21px] fill-core-lightest"
            >
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </div>
          <div
            @click="openFacebook()"
            class="flex w-[50px] h-[50px] bg-accent-1 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="w-[21px] fill-core-lightest"
            >
              <path
                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-[333px]"></div>
    </div>
  </section>
  <footer class="bg-core-darkest text-white py-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p>&copy; {{ new Date().getFullYear() }} The Base Javea. All rights reserved.</p>
        </div>
        <div class="flex space-x-6">
          <span @click="goToPrivacyPolicy" class="cursor-pointer hover:text-accent-1">
            {{ languageStore.languageFile.privacyPolicyTitle }}
          </span>
          <span @click="goToCookiePolicy" class="cursor-pointer hover:text-accent-1">
            {{ languageStore.languageFile.cookiePolicyTitle }}
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
