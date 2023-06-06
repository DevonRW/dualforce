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
  ]
})
