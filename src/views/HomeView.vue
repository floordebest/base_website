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
    <!-- <HeroCard
      id="seminar"
      :button="lang.languageFile.bookButton"
      :image="'/demian.jpg'"
      :leader="true"
      :title="lang.languageFile.seminarTitle"
      :left="false"
      :description="lang.languageFile.seminarDescription"
    /> -->
    <HeroCard
      id="private"
      :button="lang.languageFile.bookAPrivateTraining"
      :image="'/privates.jpg'"
      :leader="true"
      :title="lang.languageFile.personalTraining"
      :left="false"
      :description="lang.languageFile.privateClassesDescription"
    />
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
        id="kids"
        :button="lang.languageFile.contactUsButton"
        :image="'/kids_boxing.jpg'"
        :leader="true"
        :title="lang.languageFile.kidsClasses"
        :left="false"
        :description="lang.languageFile.kidsClassesDescription"
      />
      <HeroCard
        id="about"
        :button="lang.languageFile.contactUsButton"
        :image="'/base_group.jpg'"
        :leader="true"
        :title="lang.languageFile.about"
        :left="true"
        :description="lang.languageFile.aboutDescription"
      />
      <HeroCard
        id="prices"
        :button="lang.languageFile.contactUsButton"
        :image="'/prices.png'"
        :leader="true"
        :title="lang.languageFile.prices"
        :left="false"
        :description="lang.languageFile.pricesDescription"
      />
      <HeroCard
        :hasMap="true"
        :button="lang.languageFile.contactUsButton"
        :image="''"
        :leader="true"
        :title="lang.languageFile.contactTitle"
        :left="true"
        :description="lang.languageFile.contactDescription"
      />
      <div class="flex items-center justify-center" id="contact">
        <BottomCard />
      </div>
    </div>
  </div>
</template>
