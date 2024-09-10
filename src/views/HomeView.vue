<script setup lang="ts">
import MainHero from '../components/Home/MainHero.vue'
import ActivityCard from '../components/Home/ActivityCard.vue'
import HeroCard from '../components/HeroCard.vue'
import BottomCard from '../components/Home/BottomCard.vue'
import { activities } from '../config'
import TimeTable from '../components/TimeTable/TimeTable.vue'
import SectionTitle from '../components/SectionTitle.vue'
</script>

<template>
  <div class="relative w-full space-y-[90px] md:space-y-[120px] xl:space-y-[220px] px-[30px]">
    <MainHero id="home" />
    <TimeTable id="time" />
    <div class="flex flex-col w-full space-y-[90px]">
      <div class="flex flex-col w-full">
        <div class="flex flex-col items-center w-full">
          <SectionTitle title="Explore Activities" />
        </div>
        <div
          id="activity"
          class="flex flex-row items-center overflow-x-auto space-x-[16px] md:space-x-[30px]"
        >
          <ActivityCard v-for="activity in activities" :activity="activity" />
        </div>
      </div>
      <HeroCard
        id="private"
        :button="'Book a private training'"
        :image="'/base_kickbocks.png'"
        :leader="true"
        :title="'Personal Training'"
        :left="false"
        :description="'Whether it is to learn Gracie Jiu-Jitsu, MMA, Self-Defence, get fit, work on your fighting skills and technique, build self-esteem and feel more confident or to prepare for a professional career, we adapt our private classes to you.'"
      />
      <HeroCard
        id="about"
        :button="'Contact Us'"
        :image="'/team.png'"
        :leader="true"
        :title="'About the Base'"
        :left="true"
        :description="'The Base is a Gracie Jiu-Jitsu and MMA Academy that was founded in Melbourne Australia 10 years ago. After the founders Yas and Elias moved back to Europe, they opened their second school in Paris. We are now open in Javea in a brand new gym with Fuji mats, a shop, showers, weights area and drinks.'"
      />

      <HeroCard
        :hasMap="true"
        :button="'Contact Us'"
        :image="''"
        :leader="true"
        :title="'Come check us out!'"
        :left="false"
        :description="'Our new gym is located near the Arenal area in Jávea. For google maps directions please use the address: Ctra. del Cap de la Nau Pla 121, Jávea. ​You will enjoy our beautiful facilities with free parking in the street, the best Fuji Smooth Mats, weight training area, changing rooms and showers, air conditionning and heating.'"
      />
      <div class="flex items-center justify-center" id="contact">
        <BottomCard />
      </div>
    </div>
  </div>
</template>
