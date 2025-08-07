<script setup lang="ts">
import { usePopUpStore } from '../stores/popUpStore'
import CustomButton from './CustomButton.vue'
import { computed } from 'vue'

const popUpStore = usePopUpStore()

const props = defineProps<{
  left: boolean
  leader: boolean
  images: string[]
  title: string
  description: string
  button: string
  hasMap?: boolean
}>()

function openInNewWindow(url: string) {
  console.log('click')
  window.open(url, '_blank')
}

// Calculate grid layout based on number of images
const gridLayout = computed(() => {
  const count = props.images.length
  if (count <= 1) return { cols: 1, rows: 1 }
  if (count === 2) return { cols: 1, rows: 2 }
  if (count === 3) return { cols: 2, rows: 2 }
  if (count === 4) return { cols: 2, rows: 2 }
  // Fallback for 5+ images
  return { cols: 3, rows: 3 }
})

// Get position and span for each image in the grid
const getImagePosition = (index: number) => {
  const count = props.images.length

  if (count === 1) {
    return { row: 1, col: 1, rowSpan: 1, colSpan: 1 }
  }

  if (count === 2) {
    return { row: index + 1, col: 1, rowSpan: 1, colSpan: 1 }
  }

  if (count === 3) {
    if (index < 2) {
      // First two images: side by side on top row
      return { row: 1, col: index + 1, rowSpan: 1, colSpan: 1 }
    } else {
      // Third image: full width on bottom row
      return { row: 2, col: 1, rowSpan: 1, colSpan: 2 }
    }
  }

  if (count === 4) {
    const row = Math.floor(index / 2) + 1
    const col = (index % 2) + 1
    return { row, col, rowSpan: 1, colSpan: 1 }
  }

  // Fallback for 5+ images
  const row = Math.floor(index / 3) + 1
  const col = (index % 3) + 1
  return { row, col, rowSpan: 1, colSpan: 1 }
}
</script>

<template>
  <div class="w-full flex flex-col md:flex-row items-center justify-evenly">
    <div
      v-if="props.left"
      class="hidden md:flex relative bg-accent-1 w-[200px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px]"
    >
      <div
        class="absolute top-[-10px] left-[-10px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px] grid gap-1 p-2"
        :style="{
          gridTemplateColumns: `repeat(${gridLayout.cols}, 1fr)`,
          gridTemplateRows: `repeat(${gridLayout.rows}, 1fr)`
        }"
      >
        <div
          v-for="(image, index) in props.images"
          :key="index"
          class="relative overflow-hidden"
          :style="{
            gridRow: `${getImagePosition(index).row} / span ${getImagePosition(index).rowSpan}`,
            gridColumn: `${getImagePosition(index).col} / span ${getImagePosition(index).colSpan}`
          }"
        >
          <img
            v-if="!props.hasMap"
            :src="image"
            alt="base team"
            class="w-full h-full object-cover object-[center_top]"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center max-w-[250px] lg:max-w-[535px] space-y-[20px]">
      <div class="flex flex-col items-center">
        <p v-if="props.leader" class="text-accent-1">THE BASE JAVEA</p>
        <p
          class="text-[26px] lg:text-[40px] font-bold text-core-lightest text-center"
          v-html="props.title"
        ></p>
      </div>

      <div class="md:hidden flex relative bg-accent-1 w-[300px] h-[300px]">
        <div
          class="absolute top-[-10px] left-[-10px] w-[300px] h-[300px] grid gap-1 p-2"
          :style="{
            gridTemplateColumns: `repeat(${gridLayout.cols}, 1fr)`,
            gridTemplateRows: `repeat(${gridLayout.rows}, 1fr)`
          }"
        >
          <div
            v-for="(image, index) in props.images"
            :key="index"
            class="relative overflow-hidden"
            :style="{
              gridRow: `${getImagePosition(index).row} / span ${getImagePosition(index).rowSpan}`,
              gridColumn: `${getImagePosition(index).col} / span ${getImagePosition(index).colSpan}`
            }"
          >
            <img
              v-if="!props.hasMap"
              :src="image"
              alt="base team"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <p
        class="text-[12px] lg:text-[18px] text-core-light text-center"
        v-html="props.description"
      ></p>
      <CustomButton
        :title="props.button"
        @click="
          props.button.includes('Book')
            ? popUpStore.setClass('Private Training')
            : popUpStore.setClass('')
        "
      />
    </div>

    <div
      v-if="!props.left"
      class="hidden md:flex relative bg-accent-1 w-[200px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px]"
    >
      <div
        class="absolute top-[-10px] left-[-10px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px] grid gap-1 p-2"
        :style="{
          gridTemplateColumns: `repeat(${gridLayout.cols}, 1fr)`,
          gridTemplateRows: `repeat(${gridLayout.rows}, 1fr)`
        }"
      >
        <div
          v-for="(image, index) in props.images"
          :key="index"
          class="relative overflow-hidden"
          :style="{
            gridRow: `${getImagePosition(index).row} / span ${getImagePosition(index).rowSpan}`,
            gridColumn: `${getImagePosition(index).col} / span ${getImagePosition(index).colSpan}`
          }"
        >
          <img
            v-if="!props.hasMap"
            :src="image"
            alt="base team"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  </div>
</template>
