<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue'
import { default as map } from '@/assets/data/data-zh'
import { DebounceButton } from '@/components'

/**
 * 待修正，
 *
 * 若地址帶初始值時，且啟用驗證規則
 * 此組件無法驗證到收到的初始值，會判斷未填寫
 *
 */

// 定義 props
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
    default: () => ({})
  },
  label: {
    type: String,
    default: '-'
  },
  name: {
    type: String,
    default: '-'
  },
  rules: {
    type: String
  },
  cityField: {
    type: String,
    required: true
  },
  regionField: {
    type: String,
    required: true
  },
  addressField: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean
  },
  inputClass: {
    type: String
  },
  group: {
    type: Boolean
  }
})

// 定義 emits
const emit = defineEmits(['update:modelValue', 'search'])

// 地址數據
const city = ref(map.counties)
const region = ref(map.districts)

// 計算過濾後的地區
const filteredRegions = computed(() => {
  const selectedCity = props.modelValue[props.cityField]
  const cityIndex = city.value.findIndex((c) => c === selectedCity)
  return cityIndex !== -1 ? region.value[cityIndex][0] : []
})

// 處理地址選擇變更
const updateAddressCity = (value: string) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [props.cityField]: value,
    [props.regionField]: '', // 重置區域選擇
    [props.addressField]: value
  })
}

const updateAddressRegion = (value: string) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [props.regionField]: value,
    [props.addressField]: props.modelValue[props.cityField] + value
  })
}

const updateAddressDetail = (value: string) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [props.addressField]: value
  })
}

// search
const search = () => {
  emit('search')
}
</script>

<template>
  <div class="-mx-1 flex flex-wrap">
    <div class="w-1/2 flex flex-col px-1">
      <VeeField
        v-slot="{ field }"
        :name="cityField"
        label="縣市"
        :rules="rules"
        :modelValue="modelValue[cityField]"
      >
        <Dropdown
          v-bind="field"
          class="w-full"
          :class="[inputClass, { 'p-filled': modelValue[cityField] }]"
          placeholder="縣市"
          :options="city"
          :disabled="disabled"
          :modelValue="modelValue[cityField]"
          @update:modelValue="updateAddressCity"
        ></Dropdown>
      </VeeField>
      <VeeErrorMessage :name="cityField" class="p-error" />
    </div>

    <div class="w-1/2 flex flex-col px-1">
      <VeeField
        v-slot="{ field }"
        :name="regionField"
        label="鄉鎮市區"
        :rules="rules"
        :modelValue="modelValue[regionField]"
      >
        <Dropdown
          v-bind="field"
          class="w-full"
          :class="[inputClass, { 'p-filled': modelValue[regionField] }]"
          :modelValue="modelValue[regionField]"
          placeholder="鄉鎮市區"
          :options="filteredRegions"
          :disabled="filteredRegions.length === 0"
          @update:modelValue="updateAddressRegion"
        ></Dropdown>
      </VeeField>
      <VeeErrorMessage :name="regionField" class="p-error" />
    </div>

    <div v-if="addressField" class="mt-1 w-full flex flex-col px-1">
      <VeeField
        v-slot="{ field }"
        :name="addressField"
        label="詳細地址"
        :rules="rules"
        :modelValue="modelValue[addressField]"
      >
        <InputText
          v-if="!group"
          v-bind="field"
          class="w-full mt-1"
          :class="['mt-1', inputClass, { 'p-filled': modelValue[addressField] }]"
          :modelValue="modelValue[addressField]"
          :value="modelValue[addressField]"
          placeholder="詳細地址"
          type="text"
          :disabled="disabled"
          @update:modelValue="updateAddressDetail!"
          @input:modelValue="updateAddressDetail!"
        />

        <InputGroup v-else>
          <InputText
            v-bind="field"
            class="w-full mt-1"
            :class="['mt-1', { 'p-filled': modelValue[addressField] }]"
            :modelValue="modelValue[addressField]"
            :value="modelValue[addressField]"
            placeholder="詳細地址"
            type="text"
            :disabled="disabled"
            @update:modelValue="updateAddressDetail!"
            @input:modelValue="updateAddressDetail!"
          />
          <debounce-button class="mt-1" icon="pi pi-search" @click.stop="search" />
        </InputGroup>
      </VeeField>
      <VeeErrorMessage :name="addressField" class="p-error" />
    </div>
  </div>
</template>
