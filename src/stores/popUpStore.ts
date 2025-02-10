import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePopUpStore = defineStore('popUp', () => {
  const selectedClass = ref<string>()
  const showPopUp = ref<boolean>(false)

  function setClass(className: string) {
    selectedClass.value = className
    showPopUp.value = true
  }

  function closePopUp() {
    selectedClass.value = undefined
    showPopUp.value = false
  }

  return { showPopUp, selectedClass, setClass, closePopUp }
})

export const usePopUpOnLoadStore = defineStore('popUpOnLoad', () => {
  const showPopUp = ref<boolean>(false)

  const enablePopUp = () => {
    showPopUp.value = true
  }

  function closePopUp() {
    showPopUp.value = false
  }

  return { showPopUp, closePopUp, enablePopUp }
})
