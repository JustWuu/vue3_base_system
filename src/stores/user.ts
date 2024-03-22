import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/interface'
import { UserObject } from '@/interface'

export const UserStore = defineStore('user', () => {
  const user = ref<User>({ ...UserObject })

  const authOn = ref<boolean>(false)
  const messageOnValue = ref<boolean>(false)

  return { user, authOn, messageOnValue }
})
