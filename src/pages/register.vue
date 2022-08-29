<script setup>
const test = ref(0)
</script>

<template>
  <div class="">
    TEST
  </div>
  <button @click="test++">
    Valeur : {{ test }}
  </button>
</template>
