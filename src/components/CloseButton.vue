<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/pro-thin-svg-icons/faTimes'
</script>

<template>
  <div class="flex rounded-full h-[40px] w-[40px] bg-accent-1 items-center justify-center">
    <FontAwesomeIcon :icon="faTimes" class="text-[30px] text-core-lightest" />
  </div>
</template>
