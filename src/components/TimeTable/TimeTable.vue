<script setup lang="ts">
import { classes } from '../../classes'
import { useLanguageStore } from '../../stores/languageStore'
import { usePopUpStore } from '../../stores/popUpStore'
import SectionTitle from '../SectionTitle.vue'

const lang = useLanguageStore()

const popUpStore = usePopUpStore()
</script>

<template>
  <div class="w-full text-center">
    <SectionTitle :title="lang.languageFile.ourClasses" />
    <div class="w-full flex flex-col text-center xl:items-center overflow-auto">
      <div
        class="w-[1000px] md:w-[1400px] flex flex-col items-center md:justify-center border-2 border-core-dark"
      >
        <div class="w-full grid grid-cols-6 divide-x-2 divide-core-dark">
          <div
            v-for="lesson in classes(lang.languageFile)"
            class="grid-cols-1 divide-y-2 divide-core-dark"
          >
            <div class="p-[15px]">
              <p class="text-white text-[21px] font-bold">
                {{ lesson.day.toString().toUpperCase() }}
              </p>
            </div>
            <div v-for="classes in lesson.classes" class="group p-[10px] lg:p-[15px]">
              <div class="w-full flex flex-row px-[20px]">
                <div
                  v-if="
                    classes.name != lang.languageFile.noClass &&
                    classes.name != lang.languageFile.comingSoon
                  "
                  class="w-[6px] h-[64px] md:h-[86px] group-hover:bg-accent-1"
                  :class="
                    classes.color === 'class-green'
                      ? `bg-class-green`
                      : classes.color === 'class-purple'
                      ? 'bg-class-purple'
                      : classes.color === 'class-grey'
                      ? 'bg-class-grey'
                      : classes.color === 'class-red'
                      ? 'bg-red-700'
                      : 'bg-class-blue'
                  "
                ></div>
                <div
                  @click="
                    classes.name != lang.languageFile.noClass
                      ? classes.name != lang.languageFile.comingSoon
                        ? popUpStore.setClass(classes.name)
                        : popUpStore.setClass('')
                      : popUpStore.setClass('Private Training')
                  "
                  class="w-full h-[64px] md:h-[86px] text-center flex flex-col items-center justify-center group-hover:bg-accent-1 group-hover:text-core-lightest"
                  :class="
                    classes.name != lang.languageFile.noClass &&
                    classes.name != lang.languageFile.comingSoon
                      ? 'bg-white text-core-darkest'
                      : classes.name != lang.languageFile.noClass
                      ? 'bg-core-darker text-core-lightest'
                      : 'bg-core-darker text-core-dark'
                  "
                >
                  <p class="font-bold text-[11px] l:text-[14px] group-hover:hidden">
                    {{ classes.name }}
                  </p>
                  <p
                    class="font-bold text-[11px] l:text-[14px] text-core-lightest hidden group-hover:flex"
                  >
                    {{
                      classes.name == lang.languageFile.noClass
                        ? lang.languageFile.bookAPrivateTraining
                        : lang.languageFile.bookAClassButton
                    }}
                  </p>
                  <p
                    v-if="
                      classes.name != lang.languageFile.noClass &&
                      classes.name != lang.languageFile.comingSoon
                    "
                    class="text-[11px] l:text-[14px] group-hover:hidden"
                  >
                    {{ classes.time }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
