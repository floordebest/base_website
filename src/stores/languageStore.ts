import { ref } from 'vue'
import { defineStore } from 'pinia'
import en from '../en.json'
import es from '../es.json'
import fr from '../fr.json'
import nl from '../nl.json'

type Language = {
  name: string
  short: string
}

const languages: Language[] = [
  { name: 'English', short: 'en' },
  { name: 'Español', short: 'es' },
  { name: 'Français', short: 'fr' },
  { name: 'Nederlands', short: 'nl' }
]

export const useLanguageStore = defineStore('language', () => {
  const selectedLanguage = ref<Language>(languages[0])
  const availableLanguages = languages
  const languageFile = ref()

  function init() {
    // load the language from the local storage
    const lang = localStorage.getItem('lang')
    if (lang) {
      const language = JSON.parse(lang)
      selectedLanguage.value = language
    } else {
      selectedLanguage.value = languages[0]
    }
    // load the language file
    switch (selectedLanguage.value.short) {
      case 'en':
        languageFile.value = en
        break
      case 'fr':
        languageFile.value = fr
        break
      case 'es':
        languageFile.value = es
        break
      case 'nl':
        languageFile.value = nl
        break
    }
  }

  function setLanguage(language: Language) {
    localStorage.setItem('lang', JSON.stringify(language))
    selectedLanguage.value = language

    switch (language.short) {
      case 'en':
        languageFile.value = en
        break
      case 'fr':
        languageFile.value = fr
        break
      case 'es':
        languageFile.value = es
        break
      case 'nl':
        languageFile.value = nl
        break
    }
  }

  return { selectedLanguage, availableLanguages, setLanguage, init, languageFile }
})
