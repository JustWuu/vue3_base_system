<script setup lang="ts">
//define
const props = defineProps({
  modelValue: String,
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
// const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <VField
    v-slot="{ field }"
    :name="name"
    :label="label"
    type="text"
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
        :placeholder="placeholder"
        :id="name"
        type="text"
      />
      <label :for="name">{{ label }}</label>
    </span>
  </VField>
  <ErrorMessage :name="name" class="p-error" />
</template>
