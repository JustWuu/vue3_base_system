<script setup lang="ts">
import { ref, onMounted } from 'vue'

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
  feedback: {
    type: Boolean,
    default: true
  },
  toggleMask: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean
  },
  inputClass: {
    type: String
  }
})
// data
const key = ref(0)

// onMounted
onMounted(() => {
  setTimeout(() => {
    if (key.value == 0) {
      key.value++
    }
  }, 500)
})
</script>

<template>
  <VField
    :key="key"
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
      <Password
        class="w-full"
        :class="[inputClass, { 'p-filled': modelValue }]"
        v-bind="field"
        :modelValue="field.value"
        :placeholder="placeholder"
        :id="name"
        :inputId="name"
        :feedback="feedback"
        :toggleMask="toggleMask"
        inputClass="w-full"
        promptLabel="請輸入密碼"
        weakLabel="非常簡單"
        mediumLabel="中等複雜"
        strongLabel="複雜的密碼"
        :disabled="disabled"
      >
        <template #footer>
          <Divider />
          <p class="mt-2">建議</p>
          <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
            <li>至少一個大寫英文</li>
            <li>至少一個小寫英文</li>
            <li>至少一個數字</li>
            <li>至少8個字元</li>
          </ul>
        </template>
      </Password>
      <label :for="name">{{ label }}</label>
    </span>
  </VField>
  <ErrorMessage :name="name" class="p-error" />
</template>
