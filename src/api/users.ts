import type { Got } from 'got-cjs'
import type { User } from '../types/User'

export default (got: Got) => {
  return {
    async list() {
      return (await got.get(`users`).json()) as User[]
    },

    async getCurrentUser() {
      return (await got.get(`users/me`).json()) as User
    },

    async setCurrentUserName({ name }: { name: string }) {
      await got.patch(`users/me`, {
        json: {
          name,
        },
      })
    },

    async deleteUser({ id }: { id: string }) {
      await got.delete(`users/${id}`)
    },
  }
}
