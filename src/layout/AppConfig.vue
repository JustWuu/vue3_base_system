<script setup lang="ts">
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'
import InputSwitch from 'primevue/inputswitch'
import Sidebar from 'primevue/sidebar'

import { ref, onMounted, watch } from 'vue'
import { useLayout } from '@/layout/composables/layout'

const scales = ref([12, 13, 14, 15, 16])
const visible = ref(false)
const theme = ref(false)

const { changeThemeSettings, setScale, layoutConfig } = useLayout()

const onConfigButtonClick = () => {
  visible.value = !visible.value
}
const onChangeTheme = (theme: string, mode: string) => {
  const elementId = 'theme-css'
  const linkElement = document.getElementById(elementId)
  const cloneLinkElement: any = linkElement?.cloneNode(true)
  const newThemeUrl = linkElement?.getAttribute('href')?.replace(layoutConfig.theme.value, theme)
  cloneLinkElement?.setAttribute('id', elementId + '-clone')
  cloneLinkElement?.setAttribute('href', newThemeUrl)
  cloneLinkElement?.addEventListener('load', () => {
    linkElement?.remove()
    cloneLinkElement.setAttribute('id', elementId)
    changeThemeSettings(theme, mode === 'dark')
  })
  linkElement?.parentNode?.insertBefore(cloneLinkElement, linkElement.nextSibling)
}
const decrementScale = () => {
  setScale(layoutConfig.scale.value - 1)
  applyScale()
}
const incrementScale = () => {
  setScale(layoutConfig.scale.value + 1)
  applyScale()
}
const applyScale = () => {
  document.documentElement.style.fontSize = layoutConfig.scale.value + 'px'
}

watch(theme, (newVal) => {
  if (newVal) {
    onChangeTheme('lara-dark-blue', 'dark')
  } else {
    onChangeTheme('lara-light-blue', 'light')
  }
})

onMounted(() => {
  applyScale()
})
</script>

<template>
  <button class="layout-config-button p-link" type="button" @click="onConfigButtonClick()">
    <i class="pi pi-cog"></i>
  </button>

  <Sidebar
    v-model:visible="visible"
    position="right"
    :transitionOptions="'.3s cubic-bezier(0, 0, 0.2, 1)'"
    class="layout-config-sidebar w-20rem"
    header="樣式設定"
  >
    <h5>文字大小</h5>
    <div class="flex align-items-center">
      <Button
        icon="pi pi-minus"
        type="button"
        @click="decrementScale()"
        class="p-button-text p-button-rounded w-2rem h-2rem mr-2"
        :disabled="layoutConfig.scale.value === scales[0]"
      ></Button>
      <div class="flex gap-2 align-items-center">
        <i
          class="pi pi-circle-fill text-300"
          v-for="s in scales"
          :key="s"
          :class="{ 'text-primary-500': s === layoutConfig.scale.value }"
        ></i>
      </div>
      <Button
        icon="pi pi-plus"
        type="button"
        pButton
        @click="incrementScale()"
        class="p-button-text p-button-rounded w-2rem h-2rem ml-2"
        :disabled="layoutConfig.scale.value === scales[scales.length - 1]"
      ></Button>
    </div>

    <h5>選單設定</h5>
    <div class="flex">
      <div class="field-radiobutton flex-1">
        <RadioButton
          name="menuMode"
          value="static"
          v-model="layoutConfig.menuMode.value"
          inputId="mode1"
        ></RadioButton>
        <label for="mode1">固定</label>
      </div>

      <div class="field-radiobutton flex-1">
        <RadioButton
          name="menuMode"
          value="overlay"
          v-model="layoutConfig.menuMode.value"
          inputId="mode2"
        ></RadioButton>
        <label for="mode2">浮動</label>
      </div>
    </div>

    <h5>按鈕波紋效果</h5>
    <InputSwitch v-model="layoutConfig.ripple.value"></InputSwitch>

    <h5>黑暗模式</h5>
    <InputSwitch v-model="theme"></InputSwitch>
  </Sidebar>
</template>

<style lang="scss" scoped></style>
