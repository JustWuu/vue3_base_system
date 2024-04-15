<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { StateArray } from '@/interface'

//define
defineProps({
  modelValue: [String, Number, Object],
  type: { type: String, default: 'text' },
  label: {
    type: String,
    default: '狀態'
  },
  name: {
    type: String,
    default: '-'
  },
  placeholder: {
    type: String
  },
  rules: {
    type: String
  },
  disabled: {
    type: Boolean
  }
})

// data
const options = ref<object[]>([...StateArray])
const key = ref(0)

// onMounted
onMounted(() => {
  setTimeout(() => {
    if (key.value == 0) {
      key.value++
    }
  }, 500)
})
</script>

<template>
  <VField
    :key="key"
    v-slot="{ field }"
    :name="name"
    :label="label"
    :type="type"
    class="p-inputtext p-component"
    :rules="rules"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.value)"
  >
    <span class="p-float-label">
      <Dropdown
        class="w-full"
        :class="{ 'p-filled': modelValue }"
        v-bind="field"
        :modelValue="modelValue"
        :value="modelValue"
        :placeholder="placeholder"
        :id="name"
        :options="options"
        optionLabel="text"
        optionValue="value"
        :disabled="disabled"
      ></Dropdown>
      <label :for="name">{{ label }}</label>
    </span>
  </VField>
  <ErrorMessage :name="name" class="p-error" />
</template>
