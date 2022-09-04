import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const data = ref(null)
  const access_token = ref(null)
  /**
   * Update user access token
   * @param user - new user to set
   */
  function setUserAccessToken(token: any) {
    if (token) {
      access_token.value = token
      localStorage.setItem('access_token', token)
    }
    else {
      access_token.value = null
      localStorage.removeItem('access_token')
    }
  }

  /**
   * Update user data
   * @param userData - new user dsata to set
   */
  function setUserData(userData: any) {
    userData ? data.value = userData : data.value = null
  }

  return {
    setUserAccessToken,
    setUserData,
    data,
    access_token,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
