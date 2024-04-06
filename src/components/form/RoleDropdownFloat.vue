<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RoleFirebase } from '@/api'
import type { Role } from '@/interface'

// firebase
const roleFirebase = new RoleFirebase()

//define
defineProps({
  modelValue: [String, Number, Object],
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
  }
})

// data
const options = ref<object[]>([{ id: '', displayName: '無' }])

// onMounted
onMounted(() => {
  roleFirebase.array().then((res: Role[]) => {
    res.filter((item) => options.value.push({ id: item.id, displayName: item.displayName }))
  })
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
        optionLabel="displayName"
        :disabled="disabled"
      ></Dropdown>
      <label :for="name">{{ label }}</label>
    </span>
  </VField>
  <ErrorMessage :name="name" class="p-error" />
</template>
