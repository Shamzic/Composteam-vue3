<script setup>
const user = useUserStore()
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <div v-if="user.access_token">
      <LoggedHeader />
    </div>
    <div v-else>
      <DefaultHeader />
    </div>

    <RouterView />
  </main>
</template>
