<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, type VNodeRef } from 'vue'
import { useLayout } from '@/layout/composables/layout'
import { useRouter } from 'vue-router'
import AppTopbarConfig from './AppTopbarConfig.vue'

import { Auth } from '@/api'
import { success, error } from '@/utils'

const router = useRouter()

const auth = new Auth()

// interface
type NewVNodeRef = VNodeRef & {
  toggle: Function
}

// data
const { user } = auth.getUser()

const outMenuItems = ref([
  {
    label: '登入',
    icon: 'pi pi-sign-in',
    to: '/auth/login'
  },
  {
    label: '註冊',
    icon: 'pi pi-user-edit',
    to: '/auth/register'
  }
])
const displayConfirmation = ref(false)
const menu = ref<NewVNodeRef>()

// methods
const signOut = () => {
  auth
    .signOut()
    .then((res) => {
      success(`${res}`)
      displayConfirmation.value = false
      router.push('/')
    })
    .catch((e) => {
      error(e)
    })
}

const openConfirmation = () => {
  displayConfirmation.value = true
}
const closeConfirmation = () => {
  displayConfirmation.value = false
}

const toggleMenu = (event: any) => {
  menu.value!.toggle(event)
}

const { layoutConfig, onMenuToggle } = useLayout()

const outsideClickListener = ref<any>(null)
const topbarMenuActive = ref(false)

onMounted(async () => {
  bindOutsideClickListener()
})

onBeforeUnmount(() => {
  unbindOutsideClickListener()
})

const logoUrl = computed(() => {
  return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`
})

const onTopBarMenuButton = () => {
  topbarMenuActive.value = !topbarMenuActive.value
}
// const onSettingsClick = () => {
//   topbarMenuActive.value = false
//   router.push('/documentation')
// }
const topbarMenuClasses = computed(() => {
  return {
    'layout-topbar-menu-mobile-active': topbarMenuActive.value
  }
})

const bindOutsideClickListener = () => {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event: boolean) => {
      if (isOutsideClicked(event)) {
        topbarMenuActive.value = false
      }
    }
    document.addEventListener('click', outsideClickListener.value)
  }
}
const unbindOutsideClickListener = () => {
  if (outsideClickListener.value) {
    document.removeEventListener('click', outsideClickListener.value)
    outsideClickListener.value = null
  }
}
const isOutsideClicked = (event: any) => {
  if (!topbarMenuActive.value) return

  const sidebarEl = document.querySelector('.layout-topbar-menu')
  const topbarEl = document.querySelector('.layout-topbar-menu-button')

  return !(
    sidebarEl?.isSameNode(event.target) ||
    sidebarEl?.contains(event.target) ||
    topbarEl?.isSameNode(event.target) ||
    topbarEl?.contains(event.target)
  )
}
</script>

<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <img :src="logoUrl" alt="logo" />
      <span>SAKAI</span>
    </router-link>

    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
      <i class="pi pi-bars"></i>
    </button>

    <button
      class="p-link layout-topbar-menu-button layout-topbar-button"
      @click="onTopBarMenuButton()"
    >
      <i class="pi pi-ellipsis-v"></i>
    </button>

    <div class="layout-topbar-menu" :class="topbarMenuClasses">
      <!-- <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
        <i class="pi pi-user"></i>
        <span>Profile</span>
      </button> -->
      <!-- <button @click="onSettingsClick()" class="p-link layout-topbar-button">
        <i class="pi pi-cog"></i>
        <span>Settings</span>
      </button> -->
      <app-topbar-config></app-topbar-config>
      <button @click="toggleMenu" class="layout-topbar-button">
        <Avatar
          :image="user.uid !== '' ? user.photoURL : 'src/assets/user.svg'"
          size="large"
          shape="circle"
        ></Avatar>
        <Menu
          ref="menu"
          :model="
            user.uid !== ''
              ? [
                  {
                    label: user.displayName,
                    to: '/account/myaccount'
                  },
                  {
                    separator: true
                  },
                  {
                    label: '登出',
                    icon: 'pi pi-sign-out',
                    command: () => {
                      openConfirmation()
                    }
                  }
                ]
              : outMenuItems
          "
          :popup="true"
        />
      </button>

      <Dialog
        header="確認"
        v-model:visible="displayConfirmation"
        :style="{ width: '350px' }"
        :modal="true"
      >
        <div class="flex align-items-center justify-content-center">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span>是否登出？</span>
        </div>
        <template #footer>
          <Button
            label="No"
            icon="pi pi-times"
            @click="closeConfirmation"
            class="p-button-text"
            autofocus
          />
          <Button label="Yes" icon="pi pi-check" @click="signOut()" class="p-button-text" />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-sidebar-bottom .p-sidebar {
  height: 50vh !important;
}
</style>
