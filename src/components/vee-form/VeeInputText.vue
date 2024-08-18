<script setup lang="ts">
//define
defineProps({
  modelValue: [String, Number],
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
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <label v-if="!labelHide" :class="[labelClass]" :for="name"
      ><span v-if="rules && rules.includes('required')" class="text-red-500">* </span
      >{{ label }}</label
    >
    <InputText
      class="w-full mt-1"
      :class="[inputClass, { 'p-filled': modelValue }]"
      v-bind="field"
      :value="modelValue"
      :placeholder="placeholder"
      :id="name"
      :type="type"
      :disabled="disabled"
    />
  </VeeField>
  <VeeErrorMessage :name="name" class="p-error" />
</template>
