<script setup lang="ts">
import { ref, onMounted, type VNodeRef } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import UniversalTable from '@/components/table/UniversalTable.vue'
import { UserFirebase } from '@/api/firebase'
import type { User } from '@/interface'

const toast = useToast()
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
  { field: 'uid', header: 'UID', sortable: true, headerStyle: 'width:14%; min-width:10rem;' },
  {
    field: 'email',
    header: '帳號',
    sortable: false,
    headerStyle: 'width:14%; min-width:10rem;'
  },
  {
    field: 'displayName',
    header: '名稱',
    sortable: false,
    headerStyle: 'width:14%; min-width:10rem;'
  },
  {
    type: 'boolean',
    field: 'emailVerified',
    header: '信箱驗證',
    sortable: true,
    headerStyle: 'width:14%; min-width:10rem;'
  },
  {
    type: 'tag',
    tag: [
      { value: 'enable', severity: 'success', text: '啟用' },
      { value: 'xxx', severity: 'warning', text: '異常' },
      { value: 'disabled', severity: 'danger', text: '停用' }
    ],
    field: 'state',
    header: '帳號狀態',
    sortable: true,
    headerStyle: 'width:14%; min-width:10rem;'
  },
  {
    type: 'date',
    field: 'operateAt',
    header: '上次操作時間',
    sortable: true,
    headerStyle: 'width:14%; min-width:10rem;'
  }
])

const users = ref<User[]>([])
const user = ref<User>()
const selectedUsers = ref<User[]>([])

const userDialog = ref(false)
const deleteUserDialog = ref(false)
const deleteUsersDialog = ref(false)

// onMounted
onMounted(() => {
  userFirebase.array().then((res: User[]) => {
    users.value = res
  })
})

// methods
const add = () => {
  // router.push到add頁
  router.push('/system/user/add')
}
const edit = (editUser: User) => {
  // router.push到edit頁
  router.push(`/system/user/edit/${editUser.uid}`)
  user.value = { ...editUser }
  console.log(user)
  userDialog.value = true
}

// dialog
const confirmDeleteUser = (editUser: User) => {
  user.value = editUser
  deleteUserDialog.value = true
}
// 確定刪除
const deleteUser = () => {
  // users.value = users.value.filter((val: User) => val.uid !== user.value.uid)
  deleteUserDialog.value = false
  toast.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 })
}

const exportCSV = () => {
  dt.value!.exportCSV()
}

const confirmDeleteSelected = () => {
  deleteUsersDialog.value = true
}
const deleteSelectedUsers = () => {
  users.value = users.value.filter((val) => !selectedUsers.value.includes(val))
  deleteUsersDialog.value = false
  selectedUsers.value = []
  toast.add({ severity: 'success', summary: 'Successful', detail: 'Users Deleted', life: 3000 })
}
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <Toast />
        <Toolbar class="mb-4">
          <template v-slot:start>
            <div class="my-2">
              <Button label="新增" icon="pi pi-plus" class="p-button-success mr-2" @click="add" />
              <Button
                label="刪除"
                icon="pi pi-trash"
                class="p-button-danger"
                @click="confirmDeleteSelected"
                :disabled="!selectedUsers || !selectedUsers.length"
              />
            </div>
          </template>

          <template v-slot:end>
            <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV()" />
          </template>
        </Toolbar>

        {{ selectedUsers }}

        <universal-table
          ref="dt"
          :data="users"
          :columns="columns"
          v-model:selection="selectedUsers"
          header="帳號管理"
          :checkbox="true"
        >
          <template #footer>
            <Column headerStyle="min-width:10rem;">
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

        <Dialog
          v-model:visible="deleteUsersDialog"
          :style="{ width: '450px' }"
          header="Confirm"
          :modal="true"
        >
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>你確定要刪除所選的帳號嗎?</span>
          </div>
          <template #footer>
            <Button
              label="No"
              icon="pi pi-times"
              class="p-button-text"
              @click="deleteUsersDialog = false"
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              class="p-button-text"
              @click="deleteSelectedUsers"
            />
          </template>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
