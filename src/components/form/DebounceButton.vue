<script setup lang="ts">
import { type PropType } from 'vue'
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
  },
  severity: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<'submit' | 'reset' | 'button'>,
    default: 'submit'
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
    :type="type"
    :loading="loading.debounce.value"
    :severity="severity"
  ></Button>
</template>
