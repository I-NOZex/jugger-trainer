
export default defineNuxtRouteMiddleware((to, from) => {
      const { $auth } = useNuxtApp()
      console.log('AUTH: ', $auth?.currentUser)
      if (!$auth?.currentUser?.uid) {
        return to('/error/')
      }
})