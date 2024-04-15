<script setup lang="ts">
// import { ref, onMounted } from 'vue'
import { LoadingStore } from '@/stores'
import { storeToRefs } from 'pinia'

const loadingStore = LoadingStore()

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
const loading = storeToRefs(loadingStore)
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
