<script setup lang="ts">
import { type PropType } from 'vue'
//define
defineProps({
  modelValue: [String, Number] as PropType<string | number | null>,
  type: { type: String, default: 'number' },
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
  disabled: {
    type: Boolean
  },
  inputClass: {
    type: String
  },
  labelHide: {
    type: Boolean
  },
  labelClass: {
    type: String,
    default: 'text-white'
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
    @input="$emit('update:modelValue', $event.value)"
  >
    <label v-if="!labelHide" :class="[labelClass]" :for="name"
      ><span v-if="rules" class="text-red-500">* </span>{{ label }}</label
    >
    <InputNumber
      class="w-full mt-1"
      :class="[inputClass, { 'p-filled': modelValue }]"
      v-bind="field"
      :modelValue="modelValue"
      :value="modelValue"
      :placeholder="placeholder"
      :id="name"
      :disabled="disabled"
      inputId="withoutgrouping"
      :useGrouping="false"
    />
  </VeeField>
  <VeeErrorMessage :name="name" class="p-error" />
</template>
