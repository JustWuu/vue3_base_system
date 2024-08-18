<script setup lang="ts">
//define
defineProps({
  modelValue: [String, Number],
  label: {
    type: String,
    default: '驗證碼'
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
  length: {
    type: Number,
    default: 4
  }
})
</script>

<template>
  <VeeField
    v-slot="{ field }"
    :name="name"
    :label="label"
    class="p-inputotp p-component"
    :rules="rules"
    :value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event.target.value)"
  >
    {{ field }}
    <InputOtp
      class="w-full"
      :class="[inputClass, { 'p-filled': modelValue }]"
      v-bind="field"
      :modelValue="modelValue"
      :value="modelValue"
      :placeholder="placeholder"
      :id="name"
      :disabled="disabled"
      :length="length"
    />
  </VeeField>
  <VeeErrorMessage :name="name" class="p-error" />
</template>
