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
  nl: PolicyContent
}

// Use a computed property to reactively update language when it changes in the store
// Restrict the language to be one of the keys of ContentMap
const language = computed<keyof ContentMap>(() => {
  const lang = languageStore.selectedLanguage?.short
  return lang === 'en' || lang === 'es' || lang === 'fr' || lang === 'nl' ? lang : 'en'
})

// Content for different languages, fully extracted from PrivacyPolicyEN.vue, PrivacyPolicyES.vue, PrivacyPolicyFR.vue
const content: ContentMap = {
  en: {
    title: 'Privacy Policy',
    sections: [
      {
        title: '1. Introduction',
        text: 'Welcome to The Base Javea. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.'
      },
      {
        title: '2. Data Controller',
        text: 'The data controller responsible for your personal data is:\n\n<strong>The Base Javea S.L.</strong><br />\nAddress: Calle Burdeos 8 & 9, 03730 Javea, Spain<br />\nEmail: contact@basemma.com<br />\nPhone: +34 674 39 46 92'
      },
      {
        title: '3. Information We Collect',
        text: 'We may collect the following types of personal information:\n<ul class="list-disc pl-5">\n<li><strong>Personal Identifiers:</strong> Name, email address, phone number, and other contact details provided when you fill out forms on our website (e.g., contact or booking forms).</li>\n<li><strong>Usage Data:</strong> Information about how you use our website, such as IP address, browser type, pages visited, and time spent on the site.</li>\n<li><strong>Cookies and Tracking Technologies:</strong> Data collected through cookies and similar technologies to enhance your browsing experience and analyze site traffic. See our Cookie Policy for more details.</li>\n<li><strong>Other Data:</strong> Any additional information you voluntarily provide, such as feedback or messages sent to us.</li>\n</ul>'
      },
      {
        title: '4. How We Use Your Information',
        text: 'We use the information we collect for the following purposes:\n<ul class="list-disc pl-5">\n<li>To provide and maintain our services, including processing bookings and responding to inquiries.</li>\n<li>To improve our website and services through analytics and user feedback.</li>\n<li>To communicate with you, including sending promotional materials or updates about our services (with your consent where required).</li>\n<li>To comply with legal obligations and protect our rights or the safety of our users.</li>\n</ul>'
      },
      {
        title: '5. Legal Basis for Processing',
        text: 'Under the General Data Protection Regulation (GDPR), we process your data based on:\n<ul class="list-disc pl-5">\n<li><strong>Consent:</strong> Where you have given explicit consent, such as for marketing emails or cookie usage.</li>\n<li><strong>Contractual Necessity:</strong> To fulfill a contract or service request, such as processing a class booking.</li>\n<li><strong>Legitimate Interests:</strong> For purposes like improving our services or ensuring website security, provided these interests do not override your rights.</li>\n<li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations.</li>\n</ul>'
      },
      {
        title: '6. Data Sharing and Disclosure',
        text: 'We may share your data with:\n<ul class="list-disc pl-5">\n<li><strong>Legal Authorities:</strong> When required by law or to protect our rights, safety, or property.</li>\n<li>We do not sell your personal data to third parties.</li>\n</ul>'
      },
      {
        title: '7. Data Retention',
        text: 'We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, or resolve disputes. Specific retention periods will depend on the type of data and purpose of collection.'
      },
      {
        title: '8. Your Rights',
        text: 'Under GDPR, you have the following rights regarding your personal data:\n<ul class="list-disc pl-5">\n<li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>\n<li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>\n<li><strong>Erasure:</strong> Request deletion of your data under certain conditions.</li>\n<li><strong>Restriction:</strong> Request that we limit the processing of your data.</li>\n<li><strong>Objection:</strong> Object to processing based on legitimate interests or for direct marketing.</li>\n<li><strong>Data Portability:</strong> Request a copy of your data in a structured, commonly used, and machine-readable format.</li>\n<li><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent.</li>\n</ul>\n<p>To exercise these rights, please contact us at contact@basemma.com.</p>'
      },
      {
        title: '9. Data Security',
        text: 'We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or alteration. However, no internet transmission is completely secure, and we cannot guarantee absolute security.'
      },
      {
        title: '10. International Data Transfers',
        text: 'We do not transfer your personal data outside the European Economic Area (EEA) except as noted in our Cookie Policy regarding certain third-party cookies that may transfer data to the USA. Please refer to our Cookie Policy for details on safeguards for such transfers.'
      },
      {
        title: '11. Complaints',
        text: 'If you are not satisfied with how we handle your data, you have the right to lodge a complaint with a supervisory authority in the EU member state where you reside or work. We would, however, appreciate the chance to address your concerns directly at contact@basemma.com.'
      },
      {
        title: '12. Updates to This Policy',
        text: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.\n<p><strong>Last Updated:</strong> October 2023</p>'
      },
      {
        title: '13. Contact Us',
        text: 'If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:\n<p>Email: contact@basemma.com<br />\nPhone: +34 674 39 46 92<br />\nAddress: Calle Burdeos 8 & 9, 03730 Javea, Spain</p>'
      }
    ]
  },
  es: {
    title: 'Política de Privacidad',
    sections: [
      {
        title: '1. Introducción',
        text: 'Bienvenido a The Base Javea. Estamos comprometidos a proteger su información personal y su derecho a la privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web, utiliza nuestros servicios o interactúa con nosotros.'
      },
      {
        title: '2. Responsable del Tratamiento de Datos',
        text: 'El responsable del tratamiento de sus datos personales es:\n\n<strong>The Base Javea S.L.</strong><br />\nDirección: Calle Burdeos 8 & 9, 03730 Javea, Spain<br />\nCorreo Electrónico: contact@basemma.com<br />\nTeléfono: +34 674 39 46 92'
      },
      {
        title: '3. Información que Recopilamos',
        text: 'Podemos recopilar los siguientes tipos de información personal:\n<ul class="list-disc pl-5">\n<li><strong>Identificadores Personales:</strong> Nombre, dirección de correo electrónico, número de teléfono y otros datos de contacto proporcionados cuando completa formularios en nuestro sitio web (por ejemplo, formularios de contacto o reserva).</li>\n<li><strong>Datos de Uso:</strong> Información sobre cómo utiliza nuestro sitio web, como dirección IP, tipo de navegador, páginas visitadas y tiempo pasado en el sitio.</li>\n<li><strong>Cookies y Tecnologías de Seguimiento:</strong> Datos recopilados a través de cookies y tecnologías similares para mejorar su experiencia de navegación y analizar el tráfico del sitio. Consulte nuestra Política de Cookies para más detalles.</li>\n<li><strong>Otros Datos:</strong> Cualquier información adicional que proporcione voluntariamente, como comentarios o mensajes enviados a nosotros.</li>\n</ul>'
      },
      {
        title: '4. Cómo Usamos Su Información',
        text: 'Usamos la información que recopilamos para los siguientes propósitos:\n<ul class="list-disc pl-5">\n<li>Para proporcionar y mantener nuestros servicios, incluyendo el procesamiento de reservas y la respuesta a consultas.</li>\n<li>Para mejorar nuestro sitio web y servicios a través de análisis y retroalimentación de los usuarios.</li>\n<li>Para comunicarnos con usted, incluyendo el envío de materiales promocionales o actualizaciones sobre nuestros servicios (con su consentimiento cuando sea necesario).</li>\n<li>Para cumplir con obligaciones legales y proteger nuestros derechos o la seguridad de nuestros usuarios.</li>\n</ul>'
      },
      {
        title: '5. Base Legal para el Tratamiento',
        text: 'Bajo el Reglamento General de Protección de Datos (GDPR), procesamos sus datos basados en:\n<ul class="list-disc pl-5">\n<li><strong>Consentimiento:</strong> Cuando ha dado su consentimiento explícito, como para correos electrónicos de marketing o uso de cookies.</li>\n<li><strong>Necesidad Contractual:</strong> Para cumplir con un contrato o solicitud de servicio, como procesar una reserva de clase.</li>\n<li><strong>Intereses Legítimos:</strong> Para propósitos como mejorar nuestros servicios o garantizar la seguridad del sitio web, siempre que estos intereses no prevalezcan sobre sus derechos.</li>\n<li><strong>Obligación Legal:</strong> Para cumplir con las leyes y regulaciones aplicables.</li>\n</ul>'
      },
      {
        title: '6. Compartir y Divulgar Datos',
        text: 'Podemos compartir sus datos con:\n<ul class="list-disc pl-5">\n<li><strong>Autoridades Legales:</strong> Cuando sea requerido por la ley o para proteger nuestros derechos, seguridad o propiedad.</li>\n<li>No vendemos sus datos personales a terceros.</li>\n</ul>'
      },
      {
        title: '7. Retención de Datos',
        text: 'Retenemos sus datos personales solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, cumplir con obligaciones legales o resolver disputas. Los períodos de retención específicos dependerán del tipo de datos y del propósito de la recopilación.'
      },
      {
        title: '8. Sus Derechos',
        text: 'Bajo el GDPR, usted tiene los siguientes derechos respecto a sus datos personales:\n<ul class="list-disc pl-5">\n<li><strong>Acceso:</strong> Solicitar una copia de los datos personales que tenemos sobre usted.</li>\n<li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>\n<li><strong>Borrado:</strong> Solicitar la eliminación de sus datos bajo ciertas condiciones.</li>\n<li><strong>Restricción:</strong> Solicitar que limitemos el procesamiento de sus datos.</li>\n<li><strong>Oposición:</strong> Objetar el procesamiento basado en intereses legítimos o para marketing directo.</li>\n<li><strong>Portabilidad de Datos:</strong> Solicitar una copia de sus datos en un formato estructurado, de uso común y legible por máquina.</li>\n<li><strong>Retirar Consentimiento:</strong> Retirar el consentimiento en cualquier momento cuando el procesamiento se base en el consentimiento.</li>\n</ul>\n<p>Para ejercer estos derechos, por favor contáctenos en contact@basemma.com.</p>'
      },
      {
        title: '9. Seguridad de los Datos',
        text: 'Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos de accesos no autorizados, pérdida o alteración. Sin embargo, ninguna transmisión por internet es completamente segura, y no podemos garantizar una seguridad absoluta.'
      },
      {
        title: '10. Transferencias Internacionales de Datos',
        text: 'No transferimos sus datos personales fuera del Área Económica Europea (EEA) excepto como se indica en nuestra Política de Cookies respecto a ciertas cookies de terceros que pueden transferir datos a los EE. UU. Consulte nuestra Política de Cookies para detalles sobre las salvaguardas para dichas transferencias.'
      },
      {
        title: '11. Quejas',
        text: 'Si no está satisfecho con cómo manejamos sus datos, tiene derecho a presentar una queja ante una autoridad de supervisión en el estado miembro de la UE donde reside o trabaja. Sin embargo, apreciaríamos la oportunidad de abordar sus inquietudes directamente en contact@basemma.com.'
      },
      {
        title: '12. Actualizaciones a Esta Política',
        text: 'Podemos actualizar esta Política de Privacidad de vez en cuando. Los cambios se publicarán en esta página con una fecha de efectividad actualizada. Le animamos a revisar esta política periódicamente.\n<p><strong>Última Actualización:</strong> Octubre 2023</p>'
      },
      {
        title: '13. Contáctenos',
        text: 'Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o nuestras prácticas de datos, por favor contáctenos en:\n<p>Correo Electrónico: contact@basemma.com<br />\nTeléfono: +34 674 39 46 92<br />\nDirección: Calle Burdeos 8 & 9, 03730 Javea, Spain</p>'
      }
    ]
  },
  fr: {
    title: 'Politique de Confidentialité',
    sections: [
      {
        title: '1. Introduction',
        text: 'Bienvenue à The Base Javea. Nous nous engageons à protéger vos informations personnelles et votre droit à la confidentialité. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web, utilisez nos services ou interagissez avec nous.'
      },
      {
        title: '2. Responsable du Traitement des Données',
        text: 'Le responsable du traitement de vos données personnelles est :\n\n<strong>The Base Javea S.L.</strong><br />\nAdresse : Calle Burdeos 8 & 9, 03730 Javea, Spain<br />\nEmail : contact@basemma.com<br />\nTéléphone : +34 674 39 46 92'
      },
      {
        title: '3. Informations que Nous Collectons',
        text: "Nous pouvons collecter les types d'informations personnelles suivants :\n<ul class=\"list-disc pl-5\">\n<li><strong>Identifiants Personnels :</strong> Nom, adresse email, numéro de téléphone et autres coordonnées fournies lorsque vous remplissez des formulaires sur notre site web (par exemple, formulaires de contact ou de réservation).</li>\n<li><strong>Données d'Utilisation :</strong> Informations sur la manière dont vous utilisez notre site web, telles que l'adresse IP, le type de navigateur, les pages visitées et le temps passé sur le site.</li>\n<li><strong>Cookies et Technologies de Suivi :</strong> Données collectées via des cookies et des technologies similaires pour améliorer votre expérience de navigation et analyser le trafic du site. Consultez notre Politique des Cookies pour plus de détails.</li>\n<li><strong>Autres Données :</strong> Toute information supplémentaire que vous fournissez volontairement, comme des commentaires ou des messages envoyés à nous.</li>\n</ul>"
      },
      {
        title: '4. Comment Nous Utilisons Vos Informations',
        text: 'Nous utilisons les informations que nous collectons aux fins suivantes :\n<ul class="list-disc pl-5">\n<li>Pour fournir et maintenir nos services, y compris le traitement des réservations et la réponse aux demandes.</li>\n<li>Pour améliorer notre site web et nos services grâce à des analyses et des retours d\'utilisateurs.</li>\n<li>Pour communiquer avec vous, y compris l\'envoi de matériel promotionnel ou de mises à jour sur nos services (avec votre consentement lorsque cela est requis).</li>\n<li>Pour respecter les obligations légales et protéger nos droits ou la sécurité de nos utilisateurs.</li>\n</ul>'
      },
      {
        title: '5. Base Légale du Traitement',
        text: "En vertu du Règlement Général sur la Protection des Données (RGPD), nous traitons vos données sur la base de :\n<ul class=\"list-disc pl-5\">\n<li><strong>Consentement :</strong> Lorsque vous avez donné un consentement explicite, comme pour les emails marketing ou l'utilisation de cookies.</li>\n<li><strong>Nécessité Contractuelle :</strong> Pour exécuter un contrat ou une demande de service, comme le traitement d'une réservation de cours.</li>\n<li><strong>Intérêts Légitimes :</strong> Pour des finalités telles que l'amélioration de nos services ou la garantie de la sécurité du site web, à condition que ces intérêts ne prévalent pas sur vos droits.</li>\n<li><strong>Obligation Légale :</strong> Pour se conformer aux lois et réglementations applicables.</li>\n</ul>"
      },
      {
        title: '6. Partage et Divulgation des Données',
        text: 'Nous pouvons partager vos données avec :\n<ul class="list-disc pl-5">\n<li><strong>Autorités Légales :</strong> Lorsque cela est requis par la loi ou pour protéger nos droits, notre sécurité ou notre propriété.</li>\n<li>Nous ne vendons pas vos données personnelles à des tiers.</li>\n</ul>'
      },
      {
        title: '7. Conservation des Données',
        text: "Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique, respecter les obligations légales ou résoudre des litiges. Les périodes de conservation spécifiques dépendent du type de données et de l'objectif de la collecte."
      },
      {
        title: '8. Vos Droits',
        text: 'En vertu du RGPD, vous disposez des droits suivants concernant vos données personnelles :\n<ul class="list-disc pl-5">\n<li><strong>Accès :</strong> Demander une copie des données personnelles que nous détenons à votre sujet.</li>\n<li><strong>Rectification :</strong> Demander la correction de données inexactes ou incomplètes.</li>\n<li><strong>Effacement :</strong> Demander la suppression de vos données dans certaines conditions.</li>\n<li><strong>Restriction :</strong> Demander que nous limitions le traitement de vos données.</li>\n<li><strong>Opposition :</strong> Vous opposer au traitement basé sur des intérêts légitimes ou à des fins de marketing direct.</li>\n<li><strong>Portabilité des Données :</strong> Demander une copie de vos données dans un format structuré, couramment utilisé et lisible par machine.</li>\n<li><strong>Retrait du Consentement :</strong> Retirer votre consentement à tout moment lorsque le traitement repose sur le consentement.</li>\n</ul>\n<p>Pour exercer ces droits, veuillez nous contacter à contact@basemma.com.</p>'
      },
      {
        title: '9. Sécurité des Données',
        text: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre l'accès non autorisé, la perte ou l'altération. Cependant, aucune transmission sur Internet n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue."
      },
      {
        title: '10. Transferts Internationaux de Données',
        text: "Nous ne transférons pas vos données personnelles en dehors de l'Espace Économique Européen (EEE), sauf comme indiqué dans notre Politique des Cookies concernant certains cookies tiers qui peuvent transférer des données aux États-Unis. Veuillez consulter notre Politique des Cookies pour des détails sur les garanties pour de tels transferts."
      },
      {
        title: '11. Plaintes',
        text: "Si vous n'êtes pas satisfait de la manière dont nous gérons vos données, vous avez le droit de déposer une plainte auprès d'une autorité de contrôle dans l'État membre de l'UE où vous résidez ou travaillez. Nous apprécierions cependant l'opportunité de répondre à vos préoccupations directement à contact@basemma.com."
      },
      {
        title: '12. Mises à Jour de Cette Politique',
        text: "Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Les modifications seront publiées sur cette page avec une date d'effet mise à jour. Nous vous encourageons à consulter cette politique périodiquement.\n<p><strong>Dernière Mise à Jour :</strong> Octobre 2023</p>"
      },
      {
        title: '13. Contactez-Nous',
        text: 'Si vous avez des questions ou des préoccupations concernant cette Politique de Confidentialité ou nos pratiques en matière de données, veuillez nous contacter à :\n<p>Email : contact@basemma.com<br />\nTéléphone : +34 674 39 46 92<br />\nAdresse : Calle Burdeos 8 & 9, 03730 Javea, Spain</p>'
      }
    ]
  },
  nl: {
    title: 'Privacybeleid',
    sections: [
      {
        title: '1. Introductie',
        text: 'Welkom bij The Base Javea. Wij zetten ons in om je persoonlijke informatie en je recht op privacy te beschermen. Dit Privacybeleid legt uit hoe wij je informatie verzamelen, gebruiken, bekendmaken en beschermen wanneer je onze website bezoekt, onze diensten gebruikt of met ons interacteert.'
      },
      {
        title: '2. Verantwoordelijke voor Gegevensverwerking',
        text: 'De verantwoordelijke voor de verwerking van je persoonsgegevens is:\n\n<strong>The Base Javea S.L.</strong><br />\nAdres: Calle Burdeos 8 & 9, 03730 Javea, Spain<br />\nE-mail: contact@basemma.com<br />\nTelefoon: +34 674 39 46 92'
      },
      {
        title: '3. Informatie die Wij Verzamelen',
        text: 'Wij kunnen de volgende soorten persoonlijke informatie verzamelen:\n<ul class="list-disc pl-5">\n<li><strong>Persoonlijke Identificatiegegevens:</strong> Naam, e-mailadres, telefoonnummer en andere contactgegevens die je verstrekt wanneer je formulieren op onze website invult (bijvoorbeeld contact- of boekingsformulieren).</li>\n<li><strong>Gebruiksgegevens:</strong> Informatie over hoe je onze website gebruikt, zoals IP-adres, browsertype, bezochte pagina\'s en tijd doorgebracht op de site.</li>\n<li><strong>Cookies en Trackingtechnologieën:</strong> Gegevens verzameld via cookies en vergelijkbare technologieën om je browse-ervaring te verbeteren en het siteverkeer te analyseren. Zie ons Cookiebeleid voor meer details.</li>\n<li><strong>Andere Gegevens:</strong> Alle aanvullende informatie die je vrijwillig verstrekt, zoals feedback of berichten die naar ons worden gestuurd.</li>\n</ul>'
      },
      {
        title: '4. Hoe We Je Informatie Gebruiken',
        text: 'We gebruiken de informatie die we verzamelen voor de volgende doeleinden:\n<ul class="list-disc pl-5">\n<li>Om onze diensten te leveren en te onderhouden, inclusief het verwerken van boekingen en het beantwoorden van vragen.</li>\n<li>Om onze website en diensten te verbeteren door middel van analyses en gebruikersfeedback.</li>\n<li>Om met je te communiceren, inclusief het verzenden van promotionele materialen of updates over onze diensten (met je toestemming waar vereist).</li>\n<li>Om te voldoen aan wettelijke verplichtingen en onze rechten of de veiligheid van onze gebruikers te beschermen.</li>\n</ul>'
      },
      {
        title: '5. Wettelijke Basis voor Verwerking',
        text: 'Onder de Algemene Verordening Gegevensbescherming (AVG) verwerken we je gegevens op basis van:\n<ul class="list-disc pl-5">\n<li><strong>Toestemming:</strong> Waar je uitdrukkelijke toestemming hebt gegeven, zoals voor marketingmails of cookiegebruik.</li>\n<li><strong>Contractuele Noodzaak:</strong> Om een contract of serviceverzoek te vervullen, zoals het verwerken van een lesboeking.</li>\n<li><strong>Legitieme Belangen:</strong> Voor doeleinden zoals het verbeteren van onze diensten of het waarborgen van websitebeveiliging, op voorwaarde dat deze belangen niet zwaarder wegen dan je rechten.</li>\n<li><strong>Wettelijke Verplichting:</strong> Om te voldoen aan toepasselijke wet- en regelgeving.</li>\n</ul>'
      },
      {
        title: '6. Gegevens Delen en Bekendmaking',
        text: 'We kunnen je gegevens delen met:\n<ul class="list-disc pl-5">\n<li><strong>Wettelijke Autoriteiten:</strong> Wanneer vereist door de wet of om onze rechten, veiligheid of eigendom te beschermen.</li>\n<li>We verkopen je persoonlijke gegevens niet aan derden.</li>\n</ul>'
      },
      {
        title: '7. Gegevensbewaring',
        text: 'We bewaren je persoonlijke gegevens alleen zo lang als nodig is om de doeleinden die in dit beleid worden beschreven te vervullen, te voldoen aan wettelijke verplichtingen of geschillen op te lossen. Specifieke bewaartermijnen zijn afhankelijk van het type gegevens en het doel van de verzameling.'
      },
      {
        title: '8. Je Rechten',
        text: 'Onder de AVG heb je de volgende rechten met betrekking tot je persoonlijke gegevens:\n<ul class="list-disc pl-5">\n<li><strong>Toegang:</strong> Een kopie opvragen van de persoonlijke gegevens die we over je hebben.</li>\n<li><strong>Rectificatie:</strong> Verzoeken om correctie van onnauwkeurige of onvolledige gegevens.</li>\n<li><strong>Wissen:</strong> Verzoeken om verwijdering van je gegevens onder bepaalde voorwaarden.</li>\n<li><strong>Beperking:</strong> Verzoeken dat we de verwerking van je gegevens beperken.</li>\n<li><strong>Bezwaar:</strong> Bezwaar maken tegen verwerking op basis van legitieme belangen of voor directe marketing.</li>\n<li><strong>Gegevensoverdraagbaarheid:</strong> Een kopie van je gegevens opvragen in een gestructureerd, algemeen gebruikt en machineleesbaar formaat.</li>\n<li><strong>Intrekken Toestemming:</strong> Toestemming op elk moment intrekken wanneer verwerking gebaseerd is op toestemming.</li>\n</ul>\n<p>Om deze rechten uit te oefenen, neem contact met ons op via contact@basemma.com.</p>'
      },
      {
        title: '9. Gegevensbeveiliging',
        text: 'We implementeren passende technische en organisatorische maatregelen om je gegevens te beschermen tegen ongeautoriseerde toegang, verlies of wijziging. Echter, geen enkele internettransmissie is volledig veilig, en we kunnen geen absolute veiligheid garanderen.'
      },
      {
        title: '10. Internationale Gegevensoverdrachten',
        text: 'We dragen je persoonlijke gegevens niet over buiten de Europese Economische Ruimte (EER), behalve zoals vermeld in ons Cookiebeleid met betrekking tot bepaalde cookies van derden die gegevens naar de VS kunnen overdragen. Raadpleeg ons Cookiebeleid voor details over waarborgen voor dergelijke overdrachten.'
      },
      {
        title: '11. Klachten',
        text: 'Als je niet tevreden bent met hoe we je gegevens behandelen, heb je het recht om een klacht in te dienen bij een toezichthoudende autoriteit in de EU-lidstaat waar je woont of werkt. We zouden het echter op prijs stellen als je ons de kans zou geven om je zorgen rechtstreeks te behandelen via contact@basemma.com.'
      },
      {
        title: '12. Updates van Dit Beleid',
        text: 'We kunnen dit Privacybeleid van tijd tot tijd bijwerken. Wijzigingen worden op deze pagina geplaatst met een bijgewerkte ingangsdatum. We moedigen je aan dit beleid regelmatig te bekijken.\n<p><strong>Laatst Bijgewerkt:</strong> Oktober 2023</p>'
      },
      {
        title: '13. Contact met Ons Opnemen',
        text: 'Als je vragen of zorgen hebt over dit Privacybeleid of onze gegevenspraktijken, neem dan contact met ons op via:\n<p>E-mail: contact@basemma.com<br />\nTelefoon: +34 674 39 46 92<br />\nAdres: Calle Burdeos 8 & 9, 03730 Javea, Spain</p>'
      }
    ]
  }
}

function closeModal() {
  policyModalStore.closePrivacyPolicy()
}
</script>

<template>
  <div
    v-if="policyModalStore.showPrivacyPolicy"
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
