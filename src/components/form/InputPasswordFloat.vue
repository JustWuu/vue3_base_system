//**
該組件綁定的值因AJAX等...變動時,不會自動更新值,因此使用該組件時需在VForm綁key(不可直接綁在此組件上)*/
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
