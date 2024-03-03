import { ref } from 'vue'
import { defineStore } from 'pinia'

export const userProfileStores = defineStore('counter', () => {
  const user = ref(null)
  const authOn = ref(false)
  const messageOnValue = ref(false)

  return { user, authOn, messageOnValue }
})
