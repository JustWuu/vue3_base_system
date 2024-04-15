<script setup lang="ts">
import { ref } from 'vue'
import { PageMenu } from '@/components'

import AccountInfo from './components/AccountInfo.vue'
import AccountSecurity from './components/AccountSecurity.vue'

// firebase

//data
const active = ref(0)

const items = ref([
  { label: '個人資訊', icon: 'pi pi-id-card' },
  { label: '安全性', icon: 'pi pi-lock' }
])

//methods

// onMounted

// watchEffect
</script>

<template>
  <div class="grid">
    <div class="col-12 px-2">
      <page-menu v-model="active" :model="items" />
    </div>

    <account-info v-if="active === 0" />
    <account-security v-if="active === 1" />
  </div>
</template>

<style lang="scss" scoped></style>
