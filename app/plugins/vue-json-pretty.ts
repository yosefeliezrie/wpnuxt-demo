import VueJsonPretty from 'vue-json-pretty'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('vue-json-pretty', VueJsonPretty)
})
