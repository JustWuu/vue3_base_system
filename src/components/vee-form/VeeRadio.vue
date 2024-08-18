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
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <label class="text-white" :for="name"
      ><span v-if="rules" class="text-red-500">* </span>{{ label }}</label
    >
    <RadioButton
      class="w-full mt-1"
      :class="[inputClass, { 'p-filled': modelValue }]"
      v-bind="field"
      :modelValue="modelValue"
      :value="modelValue"
      :placeholder="placeholder"
      :id="name"
      :type="type"
      :disabled="disabled"
    />
  </VeeField>
  <VeeErrorMessage :name="name" class="p-error" />
</template>
