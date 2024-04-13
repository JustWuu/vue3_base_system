import { ref } from 'vue'
import { defineStore } from 'pinia'

export const DebounceStore = defineStore('debounce', () => {
  const debounce = ref<boolean>(false)

  return { debounce }
})
