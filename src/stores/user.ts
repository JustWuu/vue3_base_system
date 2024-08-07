import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/interface'
import { UserObject } from '@/interface'

export const UserStore = defineStore('user', () => {
  const user = ref<User>({ ...UserObject })

  const roleOn = ref<boolean>(false)
  // authOn不代表登入，代表監視auth啟動
  const authOn = ref<boolean>(false)
  const messageOnValue = ref<boolean>(false)

  return { user, roleOn, authOn, messageOnValue }
})
