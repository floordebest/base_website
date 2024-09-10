<script setup lang="ts">
import MainCard from './MainCard.vue'

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
          src="/base_video.mp4"
          type="video/mp4"
          poster="/base_poster.png"
          muted
          loop
          autoplay
          class="w-full h-[400px] md:h-[600px] xl:h-[750px] object-cover"
        />
        <img
          src="/overlay.png"
          alt=""
          class="absolute top-0 left-0 w-full h-[400px] md:h-[600px] xl:h-[750px] opacity-50"
        />
      </div>
      <div
        class="absolute top-[30%] xl:top-[20%] left-[10%] space-y-[10px] max-w-[60%] xl:max-w-[40%]"
      >
        <p class="text-[14px] font-light text-core-lightest">THE BASE JAVEA</p>
        <p
          class="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[60px] font-extrabold text-core-lightest"
        >
          Gracie Jiu-Jitsu and Mixed Martial Arts Academy
        </p>
        <p class="hidden md:flex text-[18px] text-core-light md:max-w-[600px] lg:max-w-[800px]">
          Master Jiu-Jitsu, Muay Thai, Kickboxing, Boxing and Self-Defence for every age and level.
        </p>
      </div>
      <div
        class="absolute bottom-[-5%] xl:bottom-[-10%] w-full flex flex-row items-center lg:justify-center z-20 space-x-[30px] px-[30px] overflow-y-auto xl:overflow-hidden"
      >
        <MainCard
          @click="focusInput('time')"
          icon="calendar"
          title="Book a Class"
          description="Join us for a class and learn from the best instructors."
        />
        <MainCard
          @click="goToLink()"
          icon="bag"
          title="Online Shop"
          description="Find the best BJJ and MMA gear in our online shop."
        />
        <MainCard
          @click="focusInput('private')"
          icon="private"
          title="Personal Training"
          description="Improve your skills with a private training session."
        />
        <MainCard
          @click="focusInput('activity')"
          icon="explore"
          title="Explore Activities"
          description="Explore our activities and find the perfect one for you."
        />
      </div>
    </div>
  </div>
</template>
