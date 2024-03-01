<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppMenuItem from './AppMenuItem.vue'

const router = useRouter()
const allRouter = ref(router.options.routes)
console.log(allRouter.value)
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in allRouter" :key="item">
      <app-menu-item v-if="!item.meta?.hide" :item="item" :index="i"></app-menu-item>
    </template>
    <li>
      <a href="https://www.primefaces.org/primeblocks-vue/#/" target="_blank">
        <img src="https://picsum.photos/150/100" alt="Prime Blocks" class="w-full mt-3" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
