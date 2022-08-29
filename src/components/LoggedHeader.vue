<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()
const user = useUserStore()
const router = useRouter()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const logout = () => {
  // change to some real logic
  user.setUserLog(null)
  router.push('/').catch((err) => {
    console.error(err)
  })
}
</script>

<template>
  <nav text-xl mt-6>
    <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
      <div i-carbon-home />
    </RouterLink>

    <RouterLink class="icon-btn mx-2" to="/members" :title="t('button.members')">
      <div i-carbon-user />
    </RouterLink>

    <RouterLink class="icon-btn mx-2" to="/settings" :title="t('button.settings')">
      <div i-carbon-settings />
    </RouterLink>

    <button class="icon-btn mx-2" to="/login" :title="t('button.logout')" @click="logout()">
      <div i-carbon-logout />
    </button>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <!-- <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
      <div i-carbon-language />
    </a> -->

    <!-- <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </RouterLink> -->

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/shamzic/composteam-vue3" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
