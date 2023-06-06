// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lazy-load',
    '@pinia/nuxt',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    /* PWA options */
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
  }
})
