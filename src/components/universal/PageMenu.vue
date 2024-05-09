<script setup lang="ts">
import { ref, type PropType } from 'vue'
//define
const props = defineProps({
  modelValue: [Number],
  model: {
    type: Array as PropType<[]>,
    //
    default() {
      return []
    }
  }
})
// data
const active = ref(props.modelValue)
</script>

<template>
  <TabMenu
    class="tab-menu"
    v-model:activeIndex="active"
    @tab-change="$emit('update:modelValue', $event.index)"
    :model="model"
  />
</template>

<style lang="scss" scoped>
.tab-menu {
  background: var(--surface-card);
  border-radius: 12px;
}
</style>
