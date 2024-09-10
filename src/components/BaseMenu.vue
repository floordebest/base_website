<script setup lang="ts">
import { usePopUpStore } from '../stores/popUpStore'
import CustomButton from './CustomButton.vue'

const popUpStore = usePopUpStore()

const menuItems = [
  { name: 'TimeTable', link: 'time' },
  { name: 'Personal Training', link: 'private' },
  { name: 'Activities', link: 'activity' },
  { name: 'About Us', link: 'about' },
  { name: 'Contact', link: 'contact' }
  //{ name: 'Language', link: '/language' }
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
      <div class="hidden lg:flex w-[333px]"></div>
      <img src="/Base_Logo_Blanc.png" alt="base logo" class="h-[50px]" />
      <div class="hidden lg:flex w-[333px]" />
      <div id="menuItems" class="hidden lg:flex flex-row items-center w-full justify-evenly">
        <div v-for="item in menuItems">
          <button
            @click="focusInput(item.link)"
            :class="'text-core-lightest text-[14px] font-bold'"
          >
            {{ item.name }}
          </button>
        </div>
        <CustomButton title="Book a Class" @click="popUpStore.setClass('')" />
      </div>
      <CustomButton title="Book a Class" class="lg:hidden" @click="popUpStore.setClass('')" />
      <div class="hidden lg:flex w-[333px]"></div>
    </div>
  </section>
</template>
