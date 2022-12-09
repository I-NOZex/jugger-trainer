// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            bodyAttrs: {
                class: 'dark'
            }
        }
    },
    modules: ['nuxt-windicss', 'nuxt-icon', '@vueuse/nuxt', 'nuxt-headlessui']
});
