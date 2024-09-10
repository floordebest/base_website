<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <p class="text-accent-1">The Base Javea</p>
  <p class="text-[32px] md:text-[40px] font-bold text-core-lightest pb-[50px]">{{ props.title }}</p>
</template>
