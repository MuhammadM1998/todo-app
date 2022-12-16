export default defineNuxtConfig({
  app: {
    head: {
      title: 'alexapps Task'
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],

  imports: {
    dirs: ['./stores'] // Auto import Pinia stores
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  }
});
