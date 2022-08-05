<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <RouterView />
    <Footer />
    <div class="h-screen">
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            COMPOSTEAM
          </p>
        </div>
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span class="relative inline-block">
            <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              <defs>
                <pattern id="18302e52-9e2a-4c8e-9550-0cbb21b38e55" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)" width="52" height="24"></rect>
            </svg>
            <span class="relative">La</span>
          </span>
          gestion de sites de compostage collectifs simplifiée
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          Centralisez l'organisation de votre site de compostage collectif en un seul outil
        </p>
      </div>
      <div class="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
            <h6 class="mb-2 font-semibold leading-5">Suivi des bacs</h6>
            <p class="mb-3 text-sm text-gray-900">
              Suivez l'historique des bacs d'apport et de maturation de votre site.
            </p>
          </div>
          <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">En savoir plus</a>
        </div>
        <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
            <h6 class="mb-2 font-semibold leading-5">Planning des transfert</h6>
            <p class="mb-3 text-sm text-gray-900">
              Agenda et planning collaboratif des rendez-vous de transferts de bacs.
            </p>
          </div>
          <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">En savoir plus</a>
        </div>
        <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
            <h6 class="mb-2 font-semibold leading-5">Programmation de rappels</h6>
            <p class="mb-3 text-sm text-gray-900">
              SMS/emails de rappels automatiques aux membres participants aux transferts et évênements.
            </p>
          </div>
          <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">En savoir plus</a>
        </div>
        <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
            <h6 class="mb-2 font-semibold leading-5">Gestion des membres</h6>
            <p class="mb-3 text-sm text-gray-900">
              Administration des utilisateurs, gestion des rôles et des accès au site de compostage.
            </p>
          </div>
          <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">En savoir plus</a>
        </div>
      </div>
    </div>
  </div>
  </main>
</template>
