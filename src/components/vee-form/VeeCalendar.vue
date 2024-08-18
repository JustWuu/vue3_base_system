<script setup lang="ts">
import { ref } from 'vue'
//define
const props = defineProps({
  modelValue: [String, Number, Date],
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
  dateFormat: {
    type: String,
    default: 'yy-mm-dd'
  },
  manualInput: {
    type: Boolean,
    default: false
  },
  view: {
    type: String
  },
  labelHide: {
    type: Boolean
  },
  disabledDays: {
    type: Array
  },
  labelClass: {
    type: String,
    default: 'text-white'
  },
  maxDate: {
    type: Boolean,
    default: false
  },
  minDate: {
    type: Boolean,
    default: false
  }
})

const setMinDate = ref()
const setMaxDate = ref()
if (props.maxDate) {
  setMaxDate.value = new Date()
}
if (props.minDate) {
  setMinDate.value = new Date()
}
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
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <label v-if="!labelHide" :class="[labelClass]" :for="name"
      ><span v-if="rules" class="text-red-500">* </span>{{ label }}</label
    >
    <Calendar
      inputClass="w-full"
      :class="['Calendar', inputClass, { 'p-filled': modelValue }]"
      v-bind="field"
      :modelValue="modelValue"
      :value="modelValue"
      :placeholder="placeholder"
      :id="name"
      :view="view"
      :dateFormat="dateFormat"
      :manualInput="manualInput"
      :inputId="name"
      :disabled="disabled"
      :disabledDays="disabledDays"
      :maxDate="setMaxDate"
      :minDate="setMinDate"
      touchUI
    />
  </VeeField>

  <VeeErrorMessage :name="name" class="p-error" />
</template>

<style lang="scss" scoped>
.Calendar::before {
  content: '';
  background: url('@/assets/icon/date.svg');
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
}
</style>
