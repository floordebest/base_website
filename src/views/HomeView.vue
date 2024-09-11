<script setup lang="ts">
import MainHero from '../components/Home/MainHero.vue'
import ActivityCard from '../components/Home/ActivityCard.vue'
import HeroCard from '../components/HeroCard.vue'
import BottomCard from '../components/Home/BottomCard.vue'
import { activities } from '../config'
import TimeTable from '../components/TimeTable/TimeTable.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { useLanguageStore } from '../stores/languageStore'

const lang = useLanguageStore()
</script>

<template>
  <div class="relative w-full space-y-[90px] md:space-y-[120px] xl:space-y-[220px] px-[30px]">
    <MainHero id="home" />
    <TimeTable id="time" />
    <div class="flex flex-col w-full space-y-[90px]">
      <div class="flex flex-col w-full">
        <div class="flex flex-col items-center w-full">
          <SectionTitle :title="lang.languageFile.exploreActivities" />
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
        :button="lang.languageFile.bookAPrivateTraining"
        :image="'/base_kickbocks.png'"
        :leader="true"
        :title="lang.languageFile.personalTraining"
        :left="false"
        :description="lang.languageFile.privateClassesDescription"
      />
      <HeroCard
        id="about"
        :button="lang.languageFile.contactUsButton"
        :image="'/team.png'"
        :leader="true"
        :title="lang.languageFile.about"
        :left="true"
        :description="lang.languageFile.aboutDescription"
      />

      <HeroCard
        :hasMap="true"
        :button="lang.languageFile.contactUsButton"
        :image="''"
        :leader="true"
        :title="lang.languageFile.contactTitle"
        :left="false"
        :description="lang.languageFile.contactDescription"
      />
      <div class="flex items-center justify-center" id="contact">
        <BottomCard />
      </div>
    </div>
  </div>
</template>
