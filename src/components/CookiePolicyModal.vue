<script setup lang="ts">
import { useLanguageStore } from '../stores/languageStore'
import { usePolicyModalStore } from '../stores/policyModalStore'
import { computed } from 'vue'
import CloseButton from './CloseButton.vue'

const languageStore = useLanguageStore()
const policyModalStore = usePolicyModalStore()

// Define a type for the content structure
interface PolicyContent {
  title: string
  sections: { title: string; text: string }[]
}

interface ContentMap {
  en: PolicyContent
  es: PolicyContent
  fr: PolicyContent
}

// Use a computed property to reactively update language when it changes in the store
// Restrict the language to be one of the keys of ContentMap
const language = computed<keyof ContentMap>(() => {
  const lang = languageStore.selectedLanguage?.short
  return lang === 'en' || lang === 'es' || lang === 'fr' ? lang : 'en'
})

// Content for different languages, fully extracted from CookiePolicyEN.vue, CookiePolicyES.vue, CookiePolicyFR.vue
const content: ContentMap = {
  en: {
    title: 'Cookie Policy',
    sections: [
      {
        title: '1. Introduction',
        text: 'This Cookie Policy explains how The Base Javea uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are, why we use them, and your rights to control our use of them.'
      },
      {
        title: '2. What Are Cookies?',
        text: 'Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.'
      },
      {
        title: '3. Types of Cookies We Use',
        text: 'We use the following types of cookies on our website:\n<ul class="list-disc pl-5">\n<li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</li>\n<li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously. This allows us to improve the website\'s performance.</li>\n<li><strong>Functional Cookies:</strong> These cookies enable personalized features like remembering your preferences (e.g., language selection).</li>\n<li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites to display relevant advertisements. They are set by third parties with our permission.</li>\n</ul>\n<p>Specific cookies we use include:</p>\n<ul class="list-disc pl-5">\n<li><strong>_ga</strong> - Purpose: Used by Google Analytics to distinguish users, Duration: 2 years, Type: Performance/Marketing</li>\n<li><strong>_ga_#</strong> - Purpose: Used by Google Analytics to collect data on the number of times a user has visited the website as well as dates for the first and most recent visit, Duration: 2 years, Type: Performance/Marketing</li>\n</ul>'
      },
      {
        title: '4. How We Use Cookies',
        text: 'We use cookies for the following purposes:\n<ul class="list-disc pl-5">\n<li>To ensure the website functions correctly and securely.</li>\n<li>To analyze how our website is used, helping us improve user experience.</li>\n<li>To remember your preferences and settings.</li>\n<li>To provide personalized content or advertisements (if applicable and with your consent).</li>\n</ul>'
      },
      {
        title: '5. Third-Party Cookies',
        text: 'In some cases, we use cookies provided by trusted third parties. The following third-party services may set cookies through our site:\n<ul class="list-disc pl-5">\n<li><strong>Google Analytics:</strong> To analyze website traffic and user behavior. These cookies may transfer data to the USA. You can opt-out via Google\'s tools (e.g., Google Analytics Opt-out Browser Add-on).</li>\n</ul>'
      },
      {
        title: '6. Your Choices Regarding Cookies',
        text: "You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-in or opt-out buttons in our cookie consent banner when you first visit our site.\n<p>You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.</p>"
      },
      {
        title: '7. How to Contact Us',
        text: 'If you have any questions about our use of cookies or other technologies, please contact us at:\n<p>Email: contact@basemma.com<br />\nPhone: +34 674 39 46 92<br />\nAddress: Calle Burdeos 8 & 9, 03730 Javea, Spain</p>'
      },
      {
        title: '8. Updates to This Cookie Policy',
        text: 'We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this policy regularly to stay informed about our use of cookies and related technologies.\n<p><strong>Last Updated:</strong> October 2023</p>'
      }
    ]
  },
  es: {
    title: 'Política de Cookies',
    sections: [
      {
        title: '1. Introducción',
        text: 'Esta Política de Cookies explica cómo The Base Javea utiliza cookies y tecnologías similares para reconocerte cuando visitas nuestro sitio web. Explica qué son estas tecnologías, por qué las usamos y tus derechos para controlar nuestro uso de ellas.'
      },
      {
        title: '2. ¿Qué son las Cookies?',
        text: 'Las cookies son pequeños archivos de datos que se colocan en tu computadora o dispositivo móvil cuando visitas un sitio web. Las cookies son ampliamente utilizadas por los propietarios de sitios web para hacer que sus sitios funcionen, o funcionen de manera más eficiente, así como para proporcionar información de informes.'
      },
      {
        title: '3. Tipos de Cookies que Usamos',
        text: 'Usamos los siguientes tipos de cookies en nuestro sitio web:\n<ul class="list-disc pl-5">\n<li><strong>Cookies Esenciales:</strong> Estas cookies son necesarias para que el sitio web funcione correctamente. Habilitan funciones básicas como la navegación por páginas y el acceso a áreas seguras del sitio web. El sitio web no puede funcionar correctamente sin estas cookies.</li>\n<li><strong>Cookies de Rendimiento:</strong> Estas cookies nos ayudan a entender cómo los visitantes interactúan con el sitio web al recopilar e informar información de manera anónima. Esto nos permite mejorar el rendimiento del sitio web.</li>\n<li><strong>Cookies Funcionales:</strong> Estas cookies habilitan funciones personalizadas como recordar tus preferencias (por ejemplo, selección de idioma).</li>\n<li><strong>Cookies de Marketing:</strong> Estas cookies se utilizan para rastrear a los visitantes a través de sitios web para mostrar anuncios relevantes. Son establecidas por terceros con nuestro permiso.</li>\n</ul>\n<p>Cookies específicas que usamos incluyen:</p>\n<ul class="list-disc pl-5">\n<li><strong>_ga</strong> - Propósito: Usado por Google Analytics para distinguir usuarios, Duración: 2 años, Tipo: Rendimiento/Marketing</li>\n<li><strong>_ga_#</strong> - Propósito: Usado por Google Analytics para recopilar datos sobre la cantidad de veces que un usuario ha visitado el sitio web, así como las fechas de la primera y más reciente visita, Duración: 2 años, Tipo: Rendimiento/Marketing</li>\n</ul>'
      },
      {
        title: '4. Cómo Usamos las Cookies',
        text: 'Usamos cookies para los siguientes propósitos:\n<ul class="list-disc pl-5">\n<li>Para asegurar que el sitio web funcione correctamente y de manera segura.</li>\n<li>Para analizar cómo se usa nuestro sitio web, ayudándonos a mejorar la experiencia del usuario.</li>\n<li>Para recordar tus preferencias y configuraciones.</li>\n<li>Para proporcionar contenido o anuncios personalizados (si aplica y con tu consentimiento).</li>\n</ul>'
      },
      {
        title: '5. Cookies de Terceros',
        text: 'En algunos casos, usamos cookies proporcionadas por terceros de confianza. Los siguientes servicios de terceros pueden establecer cookies a través de nuestro sitio:\n<ul class="list-disc pl-5">\n<li><strong>Google Analytics:</strong> Para analizar el tráfico del sitio web y el comportamiento del usuario. Estas cookies pueden transferir datos a los EE. UU. Puedes optar por no participar a través de las herramientas de Google (por ejemplo, el complemento de navegador de exclusión de Google Analytics).</li>\n</ul>'
      },
      {
        title: '6. Tus Opciones Respecto a las Cookies',
        text: 'Tienes el derecho de decidir si aceptas o rechazas las cookies. Puedes ejercer tus preferencias de cookies haciendo clic en los botones correspondientes de aceptación o rechazo en nuestro banner de consentimiento de cookies cuando visitas nuestro sitio por primera vez.\n<p>También puedes configurar o modificar los controles de tu navegador web para aceptar o rechazar cookies. Si eliges rechazar las cookies, aún puedes usar nuestro sitio web, aunque tu acceso a algunas funcionalidades y áreas de nuestro sitio web puede estar restringido. Dado que los medios por los cuales puedes rechazar cookies a través de los controles de tu navegador web varían de un navegador a otro, deberías visitar el menú de ayuda de tu navegador para obtener más información.</p>'
      },
      {
        title: '7. Cómo Contactarnos',
        text: 'Si tienes alguna pregunta sobre nuestro uso de cookies u otras tecnologías, por favor contáctanos en:\n<p>Correo Electrónico: contact@basemma.com<br />\nTeléfono: +34 674 39 46 92<br />\nDirección: Calle Burdeos 8 & 9, 03730 Javea, Spain</p>'
      },
      {
        title: '8. Actualizaciones a Esta Política de Cookies',
        text: 'Podemos actualizar esta Política de Cookies de vez en cuando para reflejar, por ejemplo, cambios en las cookies que usamos o por otras razones operativas, legales o regulatorias. Por favor, revisa esta política regularmente para mantenerte informado sobre nuestro uso de cookies y tecnologías relacionadas.\n<p><strong>Última Actualización:</strong> Octubre 2023</p>'
      }
    ]
  },
  fr: {
    title: 'Politique des Cookies',
    sections: [
      {
        title: '1. Introduction',
        text: 'Cette Politique des Cookies explique comment The Base Javea utilise des cookies et des technologies similaires pour vous reconnaître lorsque vous visitez notre site web. Elle explique ce que sont ces technologies, pourquoi nous les utilisons et vos droits pour contrôler notre utilisation de celles-ci.'
      },
      {
        title: '2. Que sont les Cookies ?',
        text: 'Les cookies sont de petits fichiers de données qui sont placés sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies sont largement utilisés par les propriétaires de sites web pour faire fonctionner leurs sites, ou pour les faire fonctionner plus efficacement, ainsi que pour fournir des informations de rapport.'
      },
      {
        title: '3. Types de Cookies que Nous Utilisons',
        text: 'Nous utilisons les types de cookies suivants sur notre site web :\n<ul class="list-disc pl-5">\n<li><strong>Cookies Essentiels :</strong> Ces cookies sont nécessaires pour que le site web fonctionne correctement. Ils permettent des fonctions de base comme la navigation sur les pages et l\'accès aux zones sécurisées du site web. Le site web ne peut pas fonctionner correctement sans ces cookies.</li>\n<li><strong>Cookies de Performance :</strong> Ces cookies nous aident à comprendre comment les visiteurs interagissent avec le site web en collectant et en rapportant des informations de manière anonyme. Cela nous permet d\'améliorer les performances du site web.</li>\n<li><strong>Cookies Fonctionnels :</strong> Ces cookies permettent des fonctionnalités personnalisées comme se souvenir de vos préférences (par exemple, la sélection de la langue).</li>\n<li><strong>Cookies de Marketing :</strong> Ces cookies sont utilisés pour suivre les visiteurs à travers les sites web afin d\'afficher des publicités pertinentes. Ils sont définis par des tiers avec notre permission.</li>\n</ul>\n<p>Les cookies spécifiques que nous utilisons incluent :</p>\n<ul class="list-disc pl-5">\n<li><strong>_ga</strong> - Objectif : Utilisé par Google Analytics pour distinguer les utilisateurs, Durée : 2 ans, Type : Performance/Marketing</li>\n<li><strong>_ga_#</strong> - Objectif : Utilisé par Google Analytics pour collecter des données sur le nombre de fois qu\'un utilisateur a visité le site web ainsi que les dates de la première et de la plus récente visite, Durée : 2 ans, Type : Performance/Marketing</li>\n</ul>'
      },
      {
        title: '4. Comment Nous Utilisons les Cookies',
        text: 'Nous utilisons les cookies aux fins suivantes :\n<ul class="list-disc pl-5">\n<li>Pour garantir que le site web fonctionne correctement et en toute sécurité.</li>\n<li>Pour analyser la manière dont notre site web est utilisé, ce qui nous aide à améliorer l\'expérience utilisateur.</li>\n<li>Pour mémoriser vos préférences et paramètres.</li>\n<li>Pour fournir du contenu ou des publicités personnalisés (si applicable et avec votre consentement).</li>\n</ul>'
      },
      {
        title: '5. Cookies Tiers',
        text: 'Dans certains cas, nous utilisons des cookies fournis par des tiers de confiance. Les services tiers suivants peuvent définir des cookies via notre site :\n<ul class="list-disc pl-5">\n<li><strong>Google Analytics :</strong> Pour analyser le trafic du site web et le comportement des utilisateurs. Ces cookies peuvent transférer des données aux États-Unis. Vous pouvez vous désinscrire via les outils de Google (par exemple, le module complémentaire de navigateur pour la désactivation de Google Analytics).</li>\n</ul>'
      },
      {
        title: '6. Vos Choix Concernant les Cookies',
        text: "Vous avez le droit de décider si vous acceptez ou refusez les cookies. Vous pouvez exercer vos préférences en matière de cookies en cliquant sur les boutons d'acceptation ou de refus appropriés dans notre bannière de consentement aux cookies lors de votre première visite sur notre site.\n<p>Vous pouvez également configurer ou modifier les contrôles de votre navigateur web pour accepter ou refuser les cookies. Si vous choisissez de refuser les cookies, vous pouvez toujours utiliser notre site web, bien que votre accès à certaines fonctionnalités et zones de notre site web puisse être restreint. Comme les moyens de refuser les cookies via les contrôles de votre navigateur web varient d'un navigateur à l'autre, vous devriez consulter le menu d'aide de votre navigateur pour plus d'informations.</p>"
      },
      {
        title: '7. Comment Nous Contacter',
        text: "Si vous avez des questions sur notre utilisation des cookies ou d'autres technologies, veuillez nous contacter à :\n<p>Email : contact@basemma.com<br />\nTéléphone : +34 674 39 46 92<br />\nAdresse : Calle Burdeos 8 & 9, 03730 Javea, Spain</p>"
      },
      {
        title: '8. Mises à Jour de Cette Politique des Cookies',
        text: "Nous pouvons mettre à jour cette Politique des Cookies de temps à autre afin de refléter, par exemple, des modifications des cookies que nous utilisons ou pour d'autres raisons opérationnelles, légales ou réglementaires. Veuillez consulter cette politique régulièrement pour rester informé de notre utilisation des cookies et des technologies associées.\n<p><strong>Dernière Mise à Jour :</strong> Octobre 2023</p>"
      }
    ]
  }
}

function closeModal() {
  policyModalStore.closeCookiePolicy()
}
</script>

<template>
  <div
    v-if="policyModalStore.showCookiePolicy"
    class="fixed top-0 left-0 bottom-0 w-full h-[100%] pt-[100px] md:pt-20 flex items-center justify-center backdrop-blur-md z-40 leading-snug overflow-y-auto"
  >
    <div
      class="relative max-w-[90%] lg:max-w-[60%] flex flex-col items-center justify-between space-y-[30px] bg-core-lightest p-[30px] text-core-darkest overflow-y-auto max-h-[80vh]"
    >
      <div class="flex flex-col space-y-[20px] w-full">
        <h1 class="text-3xl font-bold">{{ content[language].title }}</h1>
        <div class="space-y-6 text-lg leading-relaxed">
          <section v-for="section in content[language].sections" :key="section.title">
            <h2 class="text-2xl font-semibold mb-3">{{ section.title }}</h2>
            <p v-html="section.text"></p>
          </section>
        </div>
      </div>

      <button @click="closeModal" class="py-[15px] px-[30px] bg-accent-1">
        <p class="text-[20px] font-bold text-core-lightest">Close</p>
      </button>

      <div class="absolute top-0 right-2">
        <CloseButton @click="closeModal()" />
      </div>
    </div>
  </div>
</template>
