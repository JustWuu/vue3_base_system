<script setup lang="ts">
//define
defineProps({
  label: {
    type: String,
    default: '-'
  },
  text: {
    type: [String, Number],
    default: '-'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="relative">
    <span class="absolute float-span">{{ label }}</span>
    <div class="p-inputtext" :class="{ 'opacity-90': disabled }">
      <span class="text-base">{{ text }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-inputtext {
  height: 40px;
  overflow-x: auto;
  overflow-y: hidden;
  // pointer-events: none;
}
.p-inputtext::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #c2c2c2;
}
.p-inputtext::-webkit-scrollbar-thumb {
  width: 1px;
  background-color: #6b7280;
}

.float-span {
  position: absolute;
  pointer-events: none;
  margin-top: -0.5rem;
  line-height: 1;
  top: -0.75rem;
  left: 0.75rem;
  font-size: 12px;
  color: #6b7280;
}
</style>
