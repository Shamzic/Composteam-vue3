<script setup>
const user = useUserStore()
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <div v-if="user.userLog === null">
      <DefaultHeader />
    </div>
    <div v-else>
      <LoggedHeader />
    </div>
    <RouterView />
  </main>
</template>
