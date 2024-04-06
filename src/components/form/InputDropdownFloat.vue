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
  options: {
    type: Array
  },
  disabled: {
    type: Boolean
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
