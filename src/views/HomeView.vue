<script setup lang="ts">
import MainHero from '../components/Home/MainHero.vue'
import ActivityCard from '../components/Home/ActivityCard.vue'
import HeroCard from '../components/HeroCard.vue'
import BottomCard from '../components/Home/BottomCard.vue'
import { activities } from '../config'
import TimeTable from '../components/TimeTable/TimeTable.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { useLanguageStore } from '../stores/languageStore'
import MultiImageHeroCard from '../components/MultiImageHeroCard.vue'

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
    <MultiImageHeroCard
      id="about"
      :button="lang.languageFile.contactUsButton"
      :images="['/base_group.jpg', '/base2.jpg', '/base3.jpg']"
      :leader="true"
      :title="lang.languageFile.introductionTitle"
      :left="false"
      :description="lang.languageFile.introduction"
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
      <MultiImageHeroCard
        id="kids"
        :button="lang.languageFile.contactUsButton"
        :images="['/kids_boxing.jpg', '/kids2.jpg', '/kids3.jpg']"
        :leader="true"
        :title="lang.languageFile.kidsClassesExpanded"
        :left="false"
        :description="lang.languageFile.kidsClassesDescriptionExpanded"
      />
      <MultiImageHeroCard
        id="bjj"
        :button="lang.languageFile.contactUsButton"
        :images="['/activities/bjj.jpg', '/bjj2.jpg', '/bjj3.jpg']"
        :leader="true"
        :title="lang.languageFile.bjjExpanded"
        :left="true"
        :description="lang.languageFile.bjjDescriptionExpanded"
      />
      <MultiImageHeroCard
        id="mma"
        :button="lang.languageFile.contactUsButton"
        :images="['/activities/kickboxing.jpg', '/activities/kickboxing.png', '/kickboxing2.jpg']"
        :leader="true"
        :title="lang.languageFile.kickboxingExpanded"
        :left="false"
        :description="lang.languageFile.kickboxingDescriptionExpanded"
      />
      <HeroCard
        id="private"
        :button="lang.languageFile.bookAPrivateTraining"
        :image="'/privates.jpg'"
        :leader="true"
        :title="lang.languageFile.personalTraining"
        :left="true"
        :description="lang.languageFile.privateClassesDescription"
      />
      <MultiImageHeroCard
        id="about"
        :button="lang.languageFile.contactUsButton"
        :images="[
          '/base_ian_demian.jpg',
          '/base_reception.jpg',
          '/base_outside.jpg',
          '/base_opening.jpg'
        ]"
        :leader="true"
        :title="lang.languageFile.about"
        :left="false"
        :description="lang.languageFile.aboutDescription"
      />
      <!-- <HeroCard
        id="about"
        :button="lang.languageFile.contactUsButton"
        :image="'/base_group.jpg'"
        :leader="true"
        :title="lang.languageFile.about"
        :left="true"
        :description="lang.languageFile.aboutDescription"
      /> -->
      <HeroCard
        id="prices"
        :button="lang.languageFile.contactUsButton"
        :image="'/prices.png'"
        :leader="true"
        :title="lang.languageFile.prices"
        :left="true"
        :description="lang.languageFile.pricesDescription"
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
