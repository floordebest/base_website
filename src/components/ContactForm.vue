<script lang="ts" setup>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="w-[30px] fill-accent-1"
          >
            <path
              d="M181.3 32.5c1.6-.6 3.4-.6 5.1-.1L391.8 95.6 533.1 44.2c20.9-7.6 42.9 7.9 42.9 30.1l0 316.9c0 13.5-8.4 25.5-21.1 30.1L394.7 479.5c-1.6 .6-3.4 .6-5.1 .1L184.2 416.4 42.9 467.8C22.1 475.4 0 459.9 0 437.7L0 120.8c0-13.5 8.4-25.5 21.1-30.1L181.3 32.5zM26.5 105.8c-6.3 2.3-10.5 8.3-10.5 15l0 316.9c0 11.1 11 18.8 21.5 15L176 402.4l0-351L26.5 105.8zM384 461.2l0-351.3L192 50.8l0 351.3 192 59.1zm16-.6l149.5-54.4c6.3-2.3 10.5-8.3 10.5-15l0-316.9c0-11.1-11-18.8-21.5-15L400 109.6l0 351z"
            />
          </svg>
          <div class="flex flex-col">
            <p class="font-bold text-[14px] text-core-darkest">The Base Javea</p>
            <p class="text-[14px] text-core-dark">Calle Burdeos 9</p>
            <p class="text-[14px] text-core-dark">03730 Javea, Alicante</p>
            <p class="text-[14px] text-core-dark">Spain</p>
          </div>
        </div>
        <div class="flex flex-row space-x-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-[30px] fill-accent-1"
          >
            <path
              d="M64 80c-26.5 0-48 21.5-48 48l0 28.2L220.8 321.4c20.5 16.5 49.8 16.5 70.3 0L496 156.2l0-28.2c0-26.5-21.5-48-48-48L64 80zM16 176.7L16 384c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-207.3L301.2 333.8c-26.4 21.3-64 21.3-90.4 0L16 176.7zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"
            />
          </svg>
          <div class="flex flex-col">
            <p class="font-bold text-[14px] text-core-darkest">{{ lang.languageFile.emailUs }}</p>
            <p class="text-[14px] text-core-dark">contact@basemma.com</p>
          </div>
        </div>
        <div class="flex flex-row space-x-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-[30px] fill-accent-1"
          >
            <path
              d="M176 416c0-8.8-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-138.7 0c-3.5 0-6.8 1.1-9.6 3.2L176 496l0-80zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l80 0 16 0 0 16 0 64c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zm72 152c-4.4 0-8 3.6-8 8s3.6 8 8 8l240 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-240 0zm0 96c-4.4 0-8 3.6-8 8s3.6 8 8 8l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-144 0z"
            />
          </svg>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="w-[35px] xl:w-[50px] fill-accent-1 group-hover:fill-core-lightest animate-spin"
      >
        <path
          d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
        />
      </svg>
      <div class="absolute top-[-50px] right-[-20px]">
        <CloseButton @click="popUpStore.closePopUp()" />
      </div>
    </div>
  </div>
</template>
