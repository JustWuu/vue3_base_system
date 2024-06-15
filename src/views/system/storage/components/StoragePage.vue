<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { FloatText, FloatImg } from '@/components'
import { StorageFirebase } from '@/api'
import type { Storage } from '@/interface'
import { StorageObject } from '@/interface'
import { useRoute } from 'vue-router'
import { ConvertDate } from '@/utils'

const route = useRoute()

const convertDate = new ConvertDate()
// props
const props = defineProps({
  mode: {
    type: String,
    default: ''
  }
})

// firebase
const storageFirebase = new StorageFirebase()

//data
const id = ref('')
const storage = ref<Storage>({ ...StorageObject })

//methods

// onMounted
onMounted(() => {
  if (props.mode === 'read') {
    id.value = route.params.id as string
    storageFirebase.get(id.value).then((res) => {
      storage.value = res
    })
  }
})
</script>

<template>
  <div class="grid">
    <div class="col-12 px-2">
      <VForm ref="signupForm">
        <div class="card p-fluid">
          <div class="flex">
            <div class="flex align-items-center">
              <h5>貯存管理</h5>
            </div>
          </div>

          <div class="grid p-fluid mt-3">
            <div class="col-12">
              <float-img label="瀏覽" :src="storage.url" width="auto" height="300" />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="ID" :content="storage.id" />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="檔名" :content="storage.name" />
            </div>
            <div class="col-12">
              <float-text label="網址" :content="storage.url" copy-button />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="用途" :content="storage.methods" />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="上傳者帳號" :content="storage.uploaderemail" />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="上傳者UID" :content="storage.uploaderuid" copy-button />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="上傳時間" :content="convertDate.convertDate(storage.createdAt)" />
            </div>
          </div>
        </div>
      </VForm>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
