<script setup lang="ts">
// import { ref, onMounted } from 'vue'
import { DebounceStore } from '@/stores'
import { storeToRefs } from 'pinia'

const debounceStore = DebounceStore()

//define
defineProps({
  label: {
    type: String,
    default: '-'
  },
  buttonClass: {
    type: String
  },
  icon: {
    type: String
  },
  disabled: {
    type: Boolean
  }
})

// data
const loading = storeToRefs(debounceStore)
</script>

<template>
  <Button
    :icon="icon"
    :label="label"
    :class="buttonClass"
    type="submit"
    :loading="loading.debounce.value"
  ></Button>
</template>
