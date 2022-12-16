// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            bodyAttrs: {
                class: 'dark'
            }
        }
    },
    modules: [
        'nuxt-windicss',
        'nuxt-icon',
        '@vueuse/nuxt',
        'nuxt-headlessui',
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'storeToRefs', 'acceptHMRUpdate']
            }
        ]
    ],
    imports: {
        dirs: ['stores']
    },
    runtimeConfig: {
        public: {
            firebaseApiKey: process.env.FIREBASE_API_KEY,
            firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
            firebaseDbUrl: process.env.FIREBASE_DB_URL,
            firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
            firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            firebaseAppId: process.env.FIREBASE_APP_ID
        }
    }
});
