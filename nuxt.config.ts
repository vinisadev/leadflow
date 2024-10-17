// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    }
  },
  runtimeConfig: {
    databaseUrl: '',
    public: {
      url: '',
    },
    google: {
      clientId: '',
      clientSecret: '',
    },
    stripe: {
      publishableKey: '',
      secretKey: '',
      webhookSecret: '',
    },
  },
  modules: ['@nuxt/ui', '@formkit/auto-animate/nuxt', '@nuxtjs/plausible'],
  ui: {
    global: true,
  },
  plausible: {
    domain: process.env.PLAUSIBLE_DOMAIN,
    apiHost: process.env.PLUASIBLE_API_HOST ?? 'https://plausible.io',
    trackLocalhost: true,
  }
})