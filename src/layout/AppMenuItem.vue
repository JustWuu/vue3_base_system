<script setup lang="ts">
import { ref, onBeforeMount, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLayout } from '@/layout/composables/layout'

const route = useRoute()

const { layoutConfig, layoutState, setActiveMenuItem } = useLayout()
// const { layoutConfig, layoutState, setActiveMenuItem, onMenuToggle } = useLayout()

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    default: 0
  },
  root: {
    type: Boolean,
    default: true
  },
  parentItemKey: {
    type: String,
    default: null
  }
})

const isActiveMenu = ref<any>(false)
const itemKey = ref<any>(null)

onBeforeMount(() => {
  itemKey.value = props.parentItemKey
    ? props.parentItemKey + '-' + props.index
    : String(props.index)

  const activeItem = layoutState.activeMenuItem

  isActiveMenu.value =
    activeItem === itemKey.value || activeItem
      ? activeItem.value.startsWith(itemKey.value + '-')
      : false
})

watch(
  () => layoutConfig.activeMenuItem.value,
  (newVal) => {
    isActiveMenu.value = newVal === itemKey.value || newVal?.startsWith(itemKey.value + '-')
  }
)
const itemClick = (event: any, item: any) => {
  if (item.disabled) {
    event.preventDefault()
    return
  }

  // 該函式會導致選單在浮動狀態時展開導覽後收起選單，所以註解
  // const { overlayMenuActive, staticMenuMobileActive } = layoutState
  // if ((item.path || item.url) && (staticMenuMobileActive.value || overlayMenuActive.value)) {
  //   onMenuToggle()
  // }

  if (item.command) {
    item.command({ originalEvent: event, item: item })
  }

  const foundItemKey = item.children
    ? isActiveMenu.value
      ? props.parentItemKey
      : itemKey
    : itemKey.value

  setActiveMenuItem(foundItemKey)
}

const checkActiveRoute = (item: any) => {
  return route.path === item.path
}
</script>

<template>
  <li :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }">
    <div v-if="root && item.visible !== false" class="layout-menuitem-root-text">
      {{ item.meta.title }}
    </div>
    <a
      v-if="(!item.path || item.children) && item.visible !== false"
      :href="item.url"
      @click="itemClick($event, item)"
      :class="item.class"
      :target="item.target"
      tabindex="0"
    >
      <i :class="item.meta.icon" class="pi pi-fw layout-menuitem-icon"></i>
      <span class="layout-menuitem-text">{{ item.meta.title }}</span>
      <i class="pi pi-fw pi-angle-down layout-submenu-toggler" v-if="item.children"></i>
    </a>
    <router-link
      v-if="item.path && !item.children && item.visible !== false"
      @click="itemClick($event, item)"
      :class="[item.class, { 'active-route': checkActiveRoute(item) }]"
      tabindex="0"
      :to="item.path"
    >
      <i :class="item.meta.icon" class="layout-menuitem-icon"></i>
      <span class="layout-menuitem-text">{{ item.meta.title }}</span>
      <i class="pi pi-fw pi-angle-down layout-submenu-toggler" v-if="item.children"></i>
    </router-link>
    <Transition v-if="item.children && item.visible !== false" name="layout-submenu">
      <ul v-show="root ? true : isActiveMenu" class="layout-submenu">
        <template v-for="(child, i) in item.children" :key="child">
          <app-menu-item
            :key="child"
            :index="i"
            :item="child"
            :parentItemKey="itemKey"
            :root="false"
            v-if="!child.meta?.hide"
          ></app-menu-item>
        </template>
      </ul>
    </Transition>
  </li>
</template>

<style lang="scss" scoped></style>
