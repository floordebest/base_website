<script setup lang="ts">
defineProps({ modelValue: String, fieldType: { type: String, default: 'address' } })
defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="w-full bg-[#F2F2F2]">
    <input
      v-if="fieldType != 'Message'"
      class="remove-arrow outline-none w-full font-extrabold text-core-darkest text-[14px] bg-[#F2F2F2]"
      :value="modelValue"
      :placeholder="fieldType"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <textarea
      v-else
      rows="7"
      class="remove-arrow outline-none w-full font-extrabold text-core-darkest text-[14px] bg-[#F2F2F2]"
      :value="modelValue"
      :placeholder="fieldType"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    ></textarea>
  </div>
</template>
