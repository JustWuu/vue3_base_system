<script setup lang="ts">
import { ref, onMounted, type VNodeRef } from 'vue'
import { useRouter } from 'vue-router'
import { UniversalTable } from '@/components/table'
import { UserFirebase } from '@/api'
import type { User, Filter } from '@/interface'
import { success, error } from '@/utils'

const router = useRouter()
// interface
type NewVNodeRef = VNodeRef & {
  exportCSV: Function
}

// firebase
const userFirebase = new UserFirebase()

// data
const dt = ref<NewVNodeRef>()
const columns = ref([
  {
    field: 'email',
    header: '帳號',
    sortable: false,
    style: 'min-width:10rem;'
  },
  {
    field: 'displayName',
    header: '名稱',
    sortable: false,
    style: 'min-width:10rem;'
  },
  {
    field: 'role.displayName',
    header: '權限身分',
    sortable: true,
    style: 'min-width:10rem;'
  },
  { field: 'uid', header: 'UID', sortable: true, style: 'min-width:10rem;' },
  {
    type: 'boolean',
    field: 'emailVerified',
    header: '信箱驗證',
    sortable: true,
    style: 'min-width:8rem;'
  },
  {
    type: 'tag',
    tag: [
      { value: 'enable', severity: 'success', text: '啟用' },
      { value: 'xxx', severity: 'warning', text: '異常' },
      { value: 'disabled', severity: 'danger', text: '停用' }
    ],
    field: 'state',
    header: '狀態',
    sortable: true,
    style: 'min-width:6rem;'
  },
  {
    type: 'date',
    field: 'operateAt',
    header: '上次操作時間',
    sortable: true,
    style: 'min-width:10rem;'
  }
])

const filter = ref<Filter[]>([
  {
    type: 'Dropdown',
    options: [
      { value: 'true', text: '已驗證' },
      { value: 'false', text: '未驗證' }
    ],
    placeholder: '信箱驗證',
    class: 'md:mr-1 md:w-3',
    field: 'emailVerified'
  },
  {
    type: 'Dropdown',
    options: [
      { value: 'enable', text: '啟用' },
      { value: 'disabled', text: '停用' }
    ],
    placeholder: '狀態',
    class: 'md:mr-1 md:w-3',
    field: 'state'
  },
  {
    type: 'InputText',
    placeholder: 'Search...',
    class: 'md:w-3',
    field: 'displayName'
  }
])

const users = ref<User[]>([])
const user = ref<User>()

const deleteUserDialog = ref(false)

// onMounted
onMounted(() => {
  getUsers()
})

// methods
const getUsers = () => {
  userFirebase.array().then((res: User[]) => {
    users.value = res
  })
}

const add = () => {
  router.push('/system/user/add')
}
const edit = (editUser: User) => {
  router.push(`/system/user/edit/${editUser.uid}`)
}

// dialog
const confirmDeleteUser = (editUser: User) => {
  user.value = editUser
  deleteUserDialog.value = true
}

// 確定刪除
const deleteUser = async () => {
  await userFirebase
    .update(user.value!.uid!, { state: 'delete' })
    .then((res) => {
      success(res)
      router.push('/system/user/list')
    })
    .catch((e) => {
      error(e)
    })
  getUsers()
  deleteUserDialog.value = false
}

const exportCSV = () => {
  dt.value!.exportCSV()
}
</script>

<template>
  <div class="grid">
    <div class="col-12 px-2">
      <div class="card">
        <Toolbar class="mb-4">
          <template v-slot:start>
            <div class="my-2">
              <Button label="新增" icon="pi pi-plus" class="p-button-success mr-2" @click="add" />
            </div>
          </template>

          <template v-slot:end>
            <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV()" />
          </template>
        </Toolbar>

        <universal-table
          ref="dt"
          :data="users"
          :columns="columns"
          header="帳號管理"
          :filter="filter"
        >
          <template #footer>
            <Column headerStyle="min-width:10rem;" header="操作" alignFrozen="right" frozen>
              <template #body="slotProps">
                <Button
                  icon="pi pi-pencil"
                  class="p-button-rounded p-button-success mr-2"
                  @click="edit(slotProps.data)"
                />
                <Button
                  icon="pi pi-trash"
                  class="p-button-rounded p-button-warning mt-2"
                  @click="confirmDeleteUser(slotProps.data)"
                />
              </template>
            </Column>
          </template>
        </universal-table>

        <Dialog
          v-model:visible="deleteUserDialog"
          :style="{ width: '450px' }"
          header="Confirm"
          :modal="true"
        >
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span
              >你確定要刪除 <b>{{ user?.displayName }}</b> 嗎?</span
            >
          </div>
          <template #footer>
            <Button
              label="No"
              icon="pi pi-times"
              class="p-button-text"
              @click="deleteUserDialog = false"
            />
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteUser" />
          </template>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
