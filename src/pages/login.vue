<script setup>
const { t } = useI18n()
const router = useRouter()
const user = useUserStore()

const go = () => {
  user.setUserLog({ name: 'Simon', age: 27, token: 'k7zed85fd85d8s' })
}
const out = () => {
  user.setUserLog(null)
}

const showErrorMessage = $ref(false)
const loading = $ref(false)
const userStore = useUserStore()
const submit = async (e) => {
  e.preventDefault()
  loading.value = true
  const result = await signInUser(e.target[0].value, e.target[1].value)
  // console.log('result.user', result.user)
  if (!result.errorCode) {
    userStore.setUser(result.user)
    router.push('/home')
  }
  else {
    showErrorMessage.value = true
  }
  loading.value = false
}
</script>

<template>
  <div flex justify-center>
    <div class="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:text-gray-100">
      <div class="mb-8 text-center">
        <h1 class="my-3 text-4xl font-bold">
          Composteam
        </h1>
        <p class="text-sm dark:text-gray-400">
          Connectez-vous pour accéder à votre compte
        </p>
      </div>
      <form novalidate="" action="" class="space-y-6 ng-untouched ng-pristine ng-valid" @submit="submit">
        <div class="space-y-4">
          <div>
            <label for="email" class="block mb-2 text-sm">Adresse email</label>
            <input
              id="email"
              autocomplete="email"
              type="email"
              name="email"
              placeholder="adresse@email.fr"
              class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              @click="showErrorMessage = false"
            >
          </div>
          <div>
            <div class="flex justify-between mb-2">
              <label for="password" class="text-sm">Mot de passe</label>
              <a rel="noopener noreferrer" href="#" class="text-xs hover:underline dark:text-gray-400">Mot de passe oublié ?</a>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              autocomplete="current-password"
              placeholder="********"
              class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              @click="showErrorMessage = false"
            >
          </div>
          <div v-if="showErrorMessage">
            <div class="text-red-500 mt-2 items-center">
              Email ou mot de passe invalides
            </div>
          </div>
        </div>
        <div class="space">
          <div>
            <button type="submit" class="w-full px-8 py-3 font-semibold rounded-md dark:bg-green-400 dark:text-gray-900">
              Se connecter
            </button>
          </div>
          <p class="pt-3 px-6 text-sm text-center dark:text-gray-400">
            Vous n'avez pas encore de compte?
            <a
              rel="noopener noreferrer"
              href="#"
              class="hover:underline dark:text-green-400"
              @click="router.push('/register')"
            >S'inscrire</a>.
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<route lang="yaml">
name: login
layout: default
</route>
