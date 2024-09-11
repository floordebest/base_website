<script setup lang="ts">
import { Activity } from '../../config'
import { useLanguageStore } from '../../stores/languageStore'
import { usePopUpStore } from '../../stores/popUpStore'
import CustomButton from '../CustomButton.vue'

const props = defineProps<{
  activity: Activity
}>()

const lang = useLanguageStore()

const popUpStore = usePopUpStore()
</script>

<template>
  <div class="relative w-[350px] h-[350px] xl:h-[500px] group">
    <div
      class="relative flex w-[250px] lg:w-[350px] flex justify-center h-full z-10"
      :class="'group-hover:invisible'"
    >
      <img :src="activity.image" alt="activityImage" class="w-full object-cover grayscale" />
      <p
        class="absolute bottom-[20px] flex text-center items-center text-core-lightest font-bold text-[21px]"
      >
        {{ lang.languageFile[activity.name].toUpperCase() }}
      </p>
    </div>
    <div
      class="absolute top-0 left-0 flex flex-col z-0 items-center justify-center p-[15px] space-y-[20px] h-full bg-accent-1 overflow-y-auto"
    >
      <p class="text-[16px] lg:text-[21px] text-core-lightest font-bold">
        {{ lang.languageFile[activity.name].toUpperCase() }}
      </p>
      <p class="text-[11px] lg:text-[14px] text-core-light pb-[10px]">
        {{ lang.languageFile[activity.description] }}
      </p>
      <CustomButton
        :title="lang.languageFile.bookAClassButton"
        :invertedColors="true"
        @click="popUpStore.setClass(activity.name)"
      />
    </div>
  </div>
</template>
