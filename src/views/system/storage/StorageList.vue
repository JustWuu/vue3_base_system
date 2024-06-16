<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { UniversalTable } from '@/components/table'
import { StorageFirebase, MemberFirebase, FireStorage } from '@/api'
import type { Storage, User, Filter } from '@/interface'
import { success, error } from '@/utils'

const router = useRouter()

// firebase
const storageFirebase = new StorageFirebase()
const memberFirebase = new MemberFirebase()
const fireStorage = new FireStorage()

// data
const storages = ref<Storage[]>([])
const storage = ref<Storage>()
const selectedStorages = ref<Storage[]>([])

const deleteStorageDialog = ref(false)
const deleteStoragesDialog = ref(false)

const dt = ref()
const columns = ref([
  {
    field: 'id',
    header: 'ID',
    sortable: true,
    style: 'min-width:6rem;'
  },
  {
    field: 'name',
    header: '檔名',
    sortable: true,
    style: 'min-width:6rem;'
  },
  {
    field: 'methods',
    header: '用途',
    sortable: true,
    style: 'min-width:8rem;'
  },
  {
    field: 'uploaderemail',
    header: '上傳者帳號',
    sortable: true,
    style: 'min-width:12rem;'
  },
  {
    field: 'uploaderuid',
    header: '上傳者UID',
    sortable: true,
    style: 'min-width:10rem;'
  },
  {
    type: 'date',
    field: 'createdAt',
    header: '上傳時間',
    sortable: true,
    style: 'min-width:12rem;'
  }
])

const filter = ref<Filter[]>([
  {
    type: 'Dropdown',
    options: [],
    placeholder: '帳號',
    class: 'md:mr-1 md:w-3',
    field: 'uploaderemail'
  },
  {
    type: 'InputText',
    placeholder: 'Search...',
    class: 'md:w-3',
    field: 'id'
  }
])

// methods
const uploadFile = ref<File[]>()
const selectFile = (files: any) => {
  uploadFile.value = files.files
}
const upload = () => {
  uploadFile.value!.map((file) => {
    fireStorage
      .uploadStorage(file)
      .then((res) => {
        if (res) {
          success(res)
        }
      })
      .catch((e) => {
        error(e)
      })
  })
}

const getStorage = () => {
  storageFirebase.array().then((res: Storage[]) => {
    storages.value = res
  })
}

const read = (storage: Storage) => {
  router.push(`/system/storage/read/${storage.id}`)
}

// dialog
const confirmDeleteStorage = (editStorage: Storage) => {
  storage.value = editStorage
  deleteStorageDialog.value = true
}
// 確定刪除
const deleteStorage = async () => {
  await fireStorage
    .deleteStorage(storage.value!)
    .then((res) => {
      success(res)
      router.push('/system/storage/list')
    })
    .catch((e) => {
      error(e)
    })
  getStorage()
  deleteStorageDialog.value = false
}

const confirmDeleteSelected = () => {
  deleteStoragesDialog.value = true
}
const deleteSelectedStorages = async () => {
  await Promise.all(
    selectedStorages.value.map(async (item) => {
      await fireStorage
        .deleteStorage(item)
        .then(() => {
          success('刪除成功')
          selectedStorages.value = []
        })
        .catch((e) => {
          error(e)
        })
    })
  )
  getStorage()
  deleteStoragesDialog.value = false
}

// onMounted
onMounted(() => {
  getStorage()
  memberFirebase.array().then((res: User[]) => {
    res.filter((item) => filter.value[0].options!.push({ value: item.email!, text: item.email! }))
  })
})
</script>

<template>
  <div class="grid">
    <div class="col-12 px-2">
      <div class="card">
        <div class="mb-2">
          <Toolbar class="mb-2">
            <template v-slot:start>
              <div class="my-2">
                <Button
                  v-role="['storage:d']"
                  label="刪除"
                  icon="pi pi-trash"
                  class="p-button-danger"
                  @click="confirmDeleteSelected"
                  :disabled="!selectedStorages || !selectedStorages.length"
                />
              </div>
            </template>
          </Toolbar>

          <FileUpload
            v-role="['storage:c']"
            name="demo[]"
            @uploader="upload"
            @select="selectFile($event)"
            :fileLimit="10"
            :multiple="true"
            accept="image/*"
            :maxFileSize="3000000"
            customUpload
            chooseLabel="選擇"
            uploadLabel="上傳"
            cancelLabel="取消"
          >
            <template #empty>
              <p>將檔案拖移到此處上傳</p>
            </template>
          </FileUpload>
        </div>

        <universal-table
          ref="dt"
          :data="storages"
          :columns="columns"
          v-model:selection="selectedStorages"
          header="貯存管理"
          :checkbox="true"
          :filter="filter"
          sortField="createdAt"
          tableStyle="min-width:1000px;"
          fixed
          resizableColumns
        >
          <template #footer>
            <Column :style="'min-width:2rem'" header="操作" alignFrozen="right" frozen>
              <template #body="slotProps">
                <Button
                  icon="pi pi-eye"
                  class="p-button-rounded p-button-success mr-2"
                  @click="read(slotProps.data)"
                />
                <Button
                  v-role="['storage:d']"
                  icon="pi pi-trash"
                  class="p-button-rounded p-button-warning"
                  @click="confirmDeleteStorage(slotProps.data)"
                />
              </template>
            </Column>
          </template>
        </universal-table>

        <Dialog
          v-model:visible="deleteStorageDialog"
          :style="{ width: '450px' }"
          header="Confirm"
          :modal="true"
        >
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span
              >你確定要刪除 <b>{{ storage?.id }}</b> 嗎?</span
            >
          </div>
          <template #footer>
            <Button
              label="No"
              icon="pi pi-times"
              class="p-button-text"
              @click="deleteStorageDialog = false"
            />
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteStorage" />
          </template>
        </Dialog>

        <Dialog
          v-model:visible="deleteStoragesDialog"
          :style="{ width: '450px' }"
          header="Confirm"
          :modal="true"
        >
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>你確定要刪除所選的檔案嗎?</span>
          </div>
          <template #footer>
            <Button
              label="No"
              icon="pi pi-times"
              class="p-button-text"
              @click="deleteStoragesDialog = false"
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              class="p-button-text"
              @click="deleteSelectedStorages"
            />
          </template>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
