<script setup lang="ts">
const props = defineProps<{
  title: string
  invertedColors?: boolean
  customColor?: string
  customBG?: string
}>()
</script>
<template>
  <button
    class="relative py-[15px] px-[30px] overflow-hidden"
    :class="
      !props.invertedColors ? (props.customBG ? props.customBG : 'bg-accent-1') : 'bg-core-lightest'
    "
  >
    <p
      class="text-[11px] lg:text-[14px font-bold]"
      :class="!props.invertedColors ? 'text-core-lightest' : 'text-accent-1'"
    >
      {{ props.title.toUpperCase() }}
    </p>
    <div
      class="absolute w-[20px] h-[20px] top-[-10px] left-[-10px] rotate-45 z-10"
      :class="
        !props.invertedColors
          ? props.customColor
            ? props.customColor
            : 'bg-core-darkest'
          : 'bg-accent-1'
      "
    ></div>
  </button>
</template>
