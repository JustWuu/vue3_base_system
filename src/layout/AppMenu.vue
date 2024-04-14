<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import AppMenuItem from './AppMenuItem.vue'
import { UserStore } from '@/stores'
import type { RouteRecordRaw } from 'vue-router'
import { cloneDeep } from 'lodash-es'

const userStore = UserStore()
const router = useRouter()

// data
const allRouter = ref<RouteRecordRaw[]>([])
const roles = ref(userStore.user.roles!)

// methods
function roleHide(children: any) {
  children.forEach((child: any) => {
    if (child.meta.roles && child.meta.roles.length > 0) {
      const hasRole = roles.value.some((role) => {
        return child.meta.roles.includes(role)
      })
      if (!hasRole) {
        child.meta.hide = true
      }
    }
    if (child.children && child.children.length > 0) {
      roleHide(child.children)
    }
  })
}

// watchEffect
watchEffect(() => {
  allRouter.value = cloneDeep([...router.options.routes])
  roles.value = userStore.user.roles!
  // 判斷權限
  allRouter.value.forEach((obj: any) => {
    if (obj.meta.roles && obj.meta.roles.length > 0) {
      const hasRole = roles.value.some((role) => {
        return obj.meta.roles.includes(role)
      })
      if (!hasRole) {
        obj.meta.hide = true
      }
    }
    if (obj.children && obj.children.length > 0) {
      roleHide(obj.children)
    }
  })
  // 判斷子項目是否皆為hide
  allRouter.value.forEach((obj: any) => {
    if (obj.children && obj.children.length > 0) {
      const allChildrenHidden = obj.children.every((child: any) => child.meta && child.meta.hide)
      obj.meta.hide = allChildrenHidden
    }
  })
})
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
