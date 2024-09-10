<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendarRange } from '@fortawesome/pro-thin-svg-icons/faCalendarRange'
import { faArrowRightLong } from '@fortawesome/pro-regular-svg-icons/faArrowRightLong'
import { faMap } from '@fortawesome/pro-thin-svg-icons/faMap'
import { faEnvelope } from '@fortawesome/pro-thin-svg-icons/faEnvelope'
import { faMessageLines } from '@fortawesome/pro-thin-svg-icons/faMessageLines'
import { faBagShopping } from '@fortawesome/pro-thin-svg-icons/faBagShopping'
import { faBoxingGlove } from '@fortawesome/pro-thin-svg-icons'
import { faList } from '@fortawesome/pro-thin-svg-icons/faList'

const props = defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<template>
  <div
    class="group relative py-[20px] xl:py-[50px] px-[10px] xl:px-[30px] bg-core-lightest overflow-hidden z-30 min-w-[150px] md:min-w-[200px] xl:w-[250px] h-[200px] xl:h-[350px] space-y-[16px] xl:space-y-[30px] hover:bg-accent-1"
  >
    <FontAwesomeIcon
      :icon="faCalendarRange"
      class="text-[35px] xl:text-[50px] text-accent-1 group-hover:text-core-lightest"
      v-if="props.icon === 'calendar'"
    />
    <FontAwesomeIcon
      :icon="faBagShopping"
      class="text-[35px] xl:text-[50px] text-accent-1 group-hover:text-core-lightest"
      v-if="props.icon === 'bag'"
    />
    <FontAwesomeIcon
      :icon="faBoxingGlove"
      class="text-[35px] xl:text-[50px] text-accent-1 group-hover:text-core-lightest"
      v-if="props.icon === 'private'"
    />
    <FontAwesomeIcon
      :icon="faList"
      class="text-[35px] xl:text-[50px] text-accent-1 group-hover:text-core-lightest"
      v-if="props.icon === 'explore'"
    />
    <FontAwesomeIcon
      :icon="faMap"
      class="text-[35px] xl:text-[50px] text-accent-1 group-hover:text-core-lightest"
      v-if="props.icon === 'base'"
    />
    <FontAwesomeIcon
      :icon="faEnvelope"
      class="text-[35px] xl:text-[50px] text-accent-1 group-hover:text-core-lightest"
      v-if="props.icon === 'email'"
    />
    <FontAwesomeIcon
      :icon="faMessageLines"
      class="text-[35px] xl:text-[50px] text-accent-1 group-hover:text-core-lightest"
      v-if="props.icon === 'whatsapp'"
    />
    <div class="flex flex-col space-y-[10px] max-w-[150px] md:max-w-[180px]">
      <p
        class="text-core-darkest text-[14px] xl:text-[21px] font-bold group-hover:text-core-lightest"
      >
        {{ props.title }}
      </p>
      <p class="text-core-light text-[11px] xl:text-[14px] group-hover:text-core-lightest">
        {{ props.description }}
      </p>
    </div>
    <div
      class="absolute bottom-[16px] xl:bottom-[30px] flex text-center items-center justify-center rounded-full w-[25px] h-[25px] xl:w-[50px] xl:h-[50px] border-2 border-accent-1 group-hover:bg-core-lightest"
    >
      <FontAwesomeIcon :icon="faArrowRightLong" class="text-[12px] xl:text-[16px] text-accent-1" />
    </div>
  </div>
</template>
