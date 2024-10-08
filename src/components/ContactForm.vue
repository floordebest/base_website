<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMap } from '@fortawesome/pro-thin-svg-icons/faMap'
import { faSpinner } from '@fortawesome/pro-thin-svg-icons/faSpinner'
import { faEnvelope } from '@fortawesome/pro-thin-svg-icons/faEnvelope'
import { faMessageLines } from '@fortawesome/pro-thin-svg-icons/faMessageLines'
import CustomButton from './CustomButton.vue'
import TextInput from './TextInput.vue'
import { ref } from 'vue'
import { usePopUpStore } from '../stores/popUpStore'
import CloseButton from './CloseButton.vue'
import emailService from '@emailjs/browser'
import { useLanguageStore } from '../stores/languageStore'

const popUpStore = usePopUpStore()

const lang = useLanguageStore()

const userName = ref<string>('')
const email = ref<string>('')
const message = ref<string>('')
const phone = ref<string>('')
const isSubmitted = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const hasError = ref<boolean>(false)

const nameError = ref<string>('')
const emailError = ref<string>('')
const messageError = ref<string>('')

async function submit() {
  if (userName.value.length < 3) {
    nameError.value = lang.languageFile.contactNameError
    return
  } else if (!email.value.includes('@') && !email.value.includes('.')) {
    emailError.value = lang.languageFile.contactEmailError
    return
  } else {
    isLoading.value = true
    const emailParams = {
      from_name: userName.value,
      from_email: email.value,
      message: message.value,
      from_phone: phone.value,
      subject: popUpStore.selectedClass
        ? popUpStore.selectedClass.length > 0
          ? popUpStore.selectedClass
          : 'General Contact'
        : 'General Contact'
    }

    // TODO: Add spinning indicator while waiting for response, then show error or success screen

    emailService
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID!,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID!,
        emailParams,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBKEY,
          blockHeadless: true
        }
      )
      .then(
        (response) => {
          isLoading.value = false
          isSubmitted.value = true
          console.log('SUCCESS!', response.status, response.text)
        },
        (error) => {
          isLoading.value = false
          isSubmitted.value = true
          hasError.value = true
          console.log('FAILED...', error)
        }
      )
  }
}
</script>

<template>
  <div
    class="fixed top-0 left-0 bottom-0 w-full h-[100%] pt-[300px] md:pt-0 flex flex-col items-center justify-center bg-core-darkest bg-opacity-50 backdrop-blur-md z-30 leading-snug overflow-y-auto"
  >
    <div
      v-if="!isSubmitted && !isLoading"
      class="relative max-w-[90%] lg:max-w-[1000px] flex flex-col lg:flex-row items-center justify-between space-y-[30px] lg:space-y-0 lg:space-x-[20px] bg-core-lightest p-[30px]"
    >
      <div class="flex flex-col space-y-[20px] max-w-[500px] lg:max-w-[50%]">
        <div class="flex flex-col">
          <p class="font-light text-accent-1 text-[14px]">The Base Javea</p>
          <p class="font-bold text-accent-1 text-[40px]">
            {{ popUpStore.selectedClass ? 'BOOK A CLASS' : 'CONTACT US' }}
          </p>
        </div>
        <p class="text-[16px] text-core-dark">
          {{ lang.languageFile.contactUsFormTitle }}
        </p>
        <div class="flex flex-row space-x-[10px]">
          <FontAwesomeIcon :icon="faMap" class="text-[30px] text-accent-1" />
          <div class="flex flex-col">
            <p class="font-bold text-[14px] text-core-darkest">The Base Javea</p>
            <p class="text-[14px] text-core-dark">Calle Burdeos 9</p>
            <p class="text-[14px] text-core-dark">03730 Javea, Alicante</p>
            <p class="text-[14px] text-core-dark">Spain</p>
          </div>
        </div>
        <div class="flex flex-row space-x-[10px]">
          <FontAwesomeIcon :icon="faEnvelope" class="text-[30px] text-accent-1" />
          <div class="flex flex-col">
            <p class="font-bold text-[14px] text-core-darkest">{{ lang.languageFile.emailUs }}</p>
            <p class="text-[14px] text-core-dark">contact@basemma.com</p>
          </div>
        </div>
        <div class="flex flex-row space-x-[10px]">
          <FontAwesomeIcon :icon="faMessageLines" class="text-[30px] text-accent-1" />
          <div class="flex flex-col">
            <p class="font-bold text-[14px] text-core-darkest">Whatsapp / Telephone</p>
            <p class="text-[14px] text-core-dark">+34 674 39 46 92</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full space-y-[20px]">
        <div class="w-full px-[20px] py-[10px] bg-[#F2F2F2]">
          <TextInput
            :modelValue="userName"
            @update:modelValue=";(userName = $event), (nameError = '')"
            :field-type="lang.languageFile.yourName"
          />
          <p v-if="nameError.length != 0" class="text-[10px] text-danger font-bold">
            {{ nameError }}
          </p>
        </div>
        <div class="w-full px-[20px] py-[10px] bg-[#F2F2F2]">
          <TextInput
            :modelValue="email"
            @update:modelValue=";(email = $event), (emailError = '')"
            :field-type="lang.languageFile.email"
          />
          <p v-if="emailError.length != 0" class="text-[10px] text-danger font-bold">
            {{ emailError }}
          </p>
        </div>
        <div class="w-full px-[20px] py-[10px] bg-[#F2F2F2]">
          <TextInput
            :modelValue="phone"
            @update:modelValue="phone = $event"
            :field-type="lang.languageFile.phone"
          />
        </div>
        <div
          v-if="popUpStore.selectedClass"
          class="w-full px-[20px] py-[10px] bg-[#F2F2F2] font-bold text-core-darkest"
        >
          Class: {{ popUpStore.selectedClass }}
        </div>
        <div class="w-full px-[20px] py-[10px] bg-[#F2F2F2] h-[150px]">
          <TextInput
            :modelValue="message"
            @update:modelValue=";(message = $event), (messageError = '')"
            :field-type="lang.languageFile.message"
          />
        </div>
        <CustomButton
          @click="submit()"
          :title="lang.languageFile.submitButton"
          :custom-color="'bg-core-lightest'"
        />
      </div>

      <div class="absolute top-[-50px] lg:top-[-20px] right-[-20px]">
        <CloseButton @click="popUpStore.closePopUp()" />
      </div>
    </div>
    <div
      v-if="isSubmitted && !hasError"
      class="relative max-w-[80%] lg:max-w-[1000px] flex flex-col items-center justify-between space-y-[30px] bg-core-lightest p-[30px]"
    >
      <p>
        {{ lang.languageFile.contactSuccess }}
      </p>
      <iframe
        class="w-[350] h-[350] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d388.8074335815903!2d0.183798!3d38.7761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e0fc80797b0d3%3A0x55c7e99fbd2da23f!2sThe%20Base%20Javea!5e0!3m2!1ses!2ses!4v1724770872110!5m2!1ses!2ses"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="absolute top-[-50px] right-[-20px]">
        <CloseButton @click="popUpStore.closePopUp()" />
      </div>
    </div>
    <div
      v-if="isSubmitted && hasError"
      class="relative max-w-[80%] lg:max-w-[1000px] flex flex-col items-center justify-between space-y-[30px] bg-core-lightest p-[30px]"
    >
      <p>
        {{ lang.languageFile.contactError }}
      </p>
      <iframe
        class="w-[350] h-[350] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d388.8074335815903!2d0.183798!3d38.7761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e0fc80797b0d3%3A0x55c7e99fbd2da23f!2sThe%20Base%20Javea!5e0!3m2!1ses!2ses!4v1724770872110!5m2!1ses!2ses"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="absolute top-[-50px] right-[-20px]">
        <CloseButton @click="popUpStore.closePopUp()" />
      </div>
    </div>
    <div
      v-if="isLoading"
      class="relative max-w-[80%] lg:max-w-[1000px] flex flex-col items-center justify-between space-y-[30px] bg-core-lightest p-[30px]"
    >
      <p>{{ lang.languageFile.contactSending }}</p>
      <FontAwesomeIcon
        :icon="faSpinner"
        class="text-[35px] xl:text-[50px] text-accent-1 group-hover:text-core-lightest animate-spin"
      />
      <div class="absolute top-[-50px] right-[-20px]">
        <CloseButton @click="popUpStore.closePopUp()" />
      </div>
    </div>
  </div>
</template>
