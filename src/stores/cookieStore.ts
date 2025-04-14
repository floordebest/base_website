import { defineStore } from 'pinia'

export const useCookieStore = defineStore('cookie', {
  state: () => ({
    hasConsented: false,
    consentChoice: null as 'accepted' | 'rejected' | null
  }),
  actions: {
    acceptCookies() {
      this.hasConsented = true
      this.consentChoice = 'accepted'
      localStorage.setItem('cookieConsent', 'accepted')
    },
    rejectCookies() {
      this.hasConsented = true
      this.consentChoice = 'rejected'
      localStorage.setItem('cookieConsent', 'rejected')
    },
    initialize() {
      const consent = localStorage.getItem('cookieConsent')
      if (consent) {
        this.hasConsented = true
        this.consentChoice = consent as 'accepted' | 'rejected'
      }
    }
  }
})
