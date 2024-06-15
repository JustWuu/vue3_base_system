<script setup lang="ts">
//define
defineProps({
  label: {
    type: String,
    default: '-'
  },
  content: {
    type: [Boolean]
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
      <i
        class="pi"
        :class="{
          'pi-check-circle text-green-500': content,
          'pi-times-circle text-red-400': !content
        }"
      ></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-inputtext {
  height: 40px;
  overflow-x: auto;
  overflow-y: hidden;
  // pointer-events: none;
  // border: none;
  border: 1px dashed #d1d5db;
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
.copy-button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
