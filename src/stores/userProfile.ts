import { ref } from 'vue'
import { defineStore } from 'pinia'

export const UserProfileStores = defineStore('counter', () => {
  const user = ref<any>(null)
  const authOn = ref<boolean>(false)
  const messageOnValue = ref<boolean>(false)

  return { user, authOn, messageOnValue }
})
