<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl mt-20>
      <div i-carbon-tree inline-block text-4xl />
    </div>
    <div text-4xl>
      Composteam
    </div>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div flex justify-center>
      <div border-b border-t my-20 py-6 lg:mx-16 class="w-1/2">
        Centralisez l'organisation de votre site de compostage collectif en un seul outil
      </div>
    </div>

    <div flex flex-col sm:flex-row space-x-4 space-y-4 justify-between lg:mx-16>
      <div border-1 rounded-md p-2 mt-4 ml-4>
        <div p-2 text-lg>
          <div text-2xl>
            <div i-carbon-box inline-block />
          </div>
          Suivi des bacs de compostage
        </div>
        <hr>
        <p p-4>
          Suivez l'historique des bacs d'apport et de maturation de votre site.
        </p>
      </div>
      <div border-1 rounded-md p-2>
        <div p-2 text-lg>
          <div text-2xl>
            <div i-carbon-calendar inline-block />
          </div>
          Planning des transferts
        </div>
        <hr>
        <p p-4>
          Agenda et planning collaboratif des rendez-vous de transferts de bacs.
        </p>
      </div>
      <div border-1 rounded-md p-2>
        <div p-2 text-lg>
          <div text-2xl>
            <div i-carbon-send-alt inline-block />
          </div>
          Programmation de rappels
        </div>
        <hr>
        <p p-4>
          SMS/emails de rappels automatiques aux membres participants aux transferts et évênements.
        </p>
      </div>
      <div border-1 rounded-md p-2>
        <div p-2 text-lg>
          <div text-2xl>
            <div i-carbon-user-follow inline-block />
          </div>
          Gestion des membres
        </div><hr>
        <p p-4>
          Administration des utilisateurs, gestion des rôles et des accès au site de compostage.
        </p>
      </div>
    </div>

    <div py-4 />
  </div>
</template>

<route lang="yaml">
# meta:
#   layout: default
</route>
