import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api/v1',
    },
  },
  routeRules: {
    '/api/v1/**': {
      proxy: `${process.env.NUXT_BACKEND_URL || 'http://127.0.0.1:8000'}/api/v1/**`,
    },
    '/storage/**': {
      proxy: `${process.env.NUXT_BACKEND_URL || 'http://127.0.0.1:8000'}/storage/**`,
    },
  },
})