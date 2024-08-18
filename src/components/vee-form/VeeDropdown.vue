<script setup lang="ts">
import { type PropType } from 'vue'
//define
defineProps({
  modelValue: [String, Number] as PropType<string | number | null>,
  type: { type: String, default: 'text' },
  label: {
    type: String,
    default: '-'
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
  options: {
    type: Array
  },
  disabled: {
    type: Boolean
  },
  inputClass: {
    type: String
  },
  optionLabel: {
    type: String
  },
  optionValue: {
    type: String
  }
})
</script>

<template>
  <VeeField
    v-slot="{ field }"
    :name="name"
    :label="label"
    :type="type"
    class="p-inputtext p-component"
    :rules="rules"
    :value="modelValue"
    :modelValue="modelValue"
    @change="$emit('update:modelValue', $event.value)"
  >
    <Dropdown
      class="w-full"
      :class="[inputClass, { 'p-filled': modelValue }]"
      v-bind="field"
      :modelValue="modelValue"
      :value="modelValue"
      :placeholder="placeholder"
      :id="name"
      :options="options"
      :disabled="disabled"
      :optionLabel="optionLabel"
      :optionValue="optionValue"
    ></Dropdown>
  </VeeField>
  <VeeErrorMessage :name="name" class="p-error" />
</template>
