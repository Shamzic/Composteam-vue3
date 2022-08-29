import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(async (to) => {
      if (to.name !== 'login' && to.meta.auth && !localStorage.getItem('token'))
        return { name: 'login' }
    })
  }
}
