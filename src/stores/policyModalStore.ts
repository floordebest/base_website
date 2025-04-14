import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePolicyModalStore = defineStore('policyModal', () => {
  const showPrivacyPolicy = ref(false)
  const showCookiePolicy = ref(false)

  function openPrivacyPolicy() {
    showPrivacyPolicy.value = true
  }

  function closePrivacyPolicy() {
    showPrivacyPolicy.value = false
  }

  function openCookiePolicy() {
    showCookiePolicy.value = true
  }

  function closeCookiePolicy() {
    showCookiePolicy.value = false
  }

  return {
    showPrivacyPolicy,
    showCookiePolicy,
    openPrivacyPolicy,
    closePrivacyPolicy,
    openCookiePolicy,
    closeCookiePolicy
  }
})
