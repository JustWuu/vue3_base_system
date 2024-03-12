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
  }
})
</script>

<template>
  <VField
    v-slot="{ field }"
    :name="name"
    :label="label"
    :type="type"
    class="p-inputtext p-component"
    :rules="rules"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <span class="p-float-label">
      <InputText
        class="w-full"
        :class="{ 'p-filled': modelValue }"
        v-bind="field"
        :modelValue="modelValue"
        :value="modelValue"
        :placeholder="placeholder"
        :id="name"
        :type="type"
      />
      <label :for="name">{{ label }}</label>
    </span>
  </VField>
  <ErrorMessage :name="name" class="p-error" />
</template>
