<script setup lang="ts">
import { useLanguageStore } from '../../stores/languageStore'
import MainCard from './MainCard.vue'

const language = useLanguageStore()

function goToLink() {
  window.open('https://www.basemma.com', '_blank')
}

function focusInput(link: string) {
  const element = document.getElementById(link)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div>
    <div
      class="relative w-full flex items-center justify-center h-[500px] md:h-[761px] xl:h-[900px]"
    >
      <div class="absolute w-full max-w-[1680px] h:[400px] md:h-[600px] xl:h-[750px] object-cover">
        <video
          muted
          loop
          poster="/base_poster.png"
          autobuffer
          autoplay
          class="w-full h-[400px] md:h-[600px] xl:h-[750px] object-cover"
        >
          <source src="/base_video.mp4" autoplay />
          Your browser does not support the video tag.
        </video>
        <img
          src="/overlay.png"
          alt=""
          class="absolute top-0 left-0 w-full h-[400px] md:h-[600px] xl:h-[750px] opacity-50"
        />
      </div>
      <div
        class="absolute top-[30%] xl:top-[20%] left-[10%] space-y-[10px] max-w-[60%] xl:max-w-[50%]"
      >
        <p class="text-[14px] font-light text-core-lightest">THE BASE JAVEA</p>
        <p
          class="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[60px] font-extrabold text-core-lightest"
        >
          {{ language.languageFile.mainTitle }}
        </p>
        <p class="hidden md:flex text-[18px] text-core-light md:max-w-[600px] lg:max-w-[800px]">
          {{ language.languageFile.mainSlogan }}
        </p>
      </div>
      <div
        class="absolute bottom-[-5%] xl:bottom-[-10%] w-full flex flex-row items-center lg:justify-center z-20 space-x-[30px] px-[30px] overflow-y-auto xl:overflow-hidden"
      >
        <MainCard
          @click="focusInput('time')"
          icon="calendar"
          :title="language.languageFile.bookAClassButton"
          :description="language.languageFile.bookAClassTitle"
        />
        <MainCard
          @click="goToLink()"
          icon="bag"
          :title="language.languageFile.shop"
          :description="language.languageFile.shopTitle"
        />
        <MainCard
          @click="focusInput('private')"
          icon="private"
          :title="language.languageFile.personalTraining"
          :description="language.languageFile.personalTrainingTitle"
        />
        <MainCard
          @click="focusInput('activity')"
          icon="explore"
          :title="language.languageFile.exploreActivities"
          :description="language.languageFile.exploreActivitiesTitle"
        />
      </div>
    </div>
  </div>
</template>
