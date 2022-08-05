<script setup>

const { t } = useI18n()
const router = useRouter()

const go = () => {
    console.log('go')
}
</script>

<template>
    <div>Login
      <button
        btn m-3 text-sm
        @click="go"
      >
      TEST
      </button>


    </div>
</template>