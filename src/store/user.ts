import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  /**
   * Current name of the user.
   */
  const savedName = ref('')
  const userLog = ref(null)
  const previousNames = ref(new Set<string>())

  const usedNames = computed(() => Array.from(previousNames.value))
  const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewName(name: string) {
    if (savedName.value)
      previousNames.value.add(savedName.value)

    savedName.value = name
  }

  /**
   * Update user log
   *
   * @param user - new user to set
   */
  function setUserLog(user: any) {
    if (user) {
      userLog.value = user
      localStorage.setItem('token', user.token)
    }
    else {
      userLog.value = null
      localStorage.removeItem('token')
    }
  }

  return {
    setNewName,
    otherNames,
    savedName,
    setUserLog,
    userLog,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
