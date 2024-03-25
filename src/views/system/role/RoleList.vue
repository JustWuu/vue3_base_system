<script setup lang="ts">
import { ref, onMounted, type VNodeRef } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import UniversalTable from '@/components/table/UniversalTable.vue'
import { RoleFirebase } from '@/api/firebase'
import type { Role } from '@/interface'

const toast = useToast()
const router = useRouter()
// interface
type NewVNodeRef = VNodeRef & {
  exportCSV: Function
}

// firebase
const roleFirebase = new RoleFirebase()

// data
const dt = ref<NewVNodeRef>()
const columns = ref([
  {
    field: 'displayName',
    header: '名稱',
    sortable: false,
    headerStyle: 'width:35%; min-width:10rem;'
  },
  {
    field: 'roles',
    header: '頁面權限',
    sortable: false,
    headerStyle: 'width:50%; min-width:10rem;'
  },
  // 晚點要在table元件製作針對role的轉換
  // {type: 'role',
  //   field: 'roles',
  //   header: '頁面權限',
  //   sortable: false,
  //   headerStyle: 'width:50%; min-width:10rem;'
  // },
  {
    type: 'tag',
    tag: [
      { value: 'enable', severity: 'success', text: '啟用' },
      { value: 'disabled', severity: 'danger', text: '停用' }
    ],
    field: 'state',
    header: '狀態',
    sortable: true,
    headerStyle: 'width:15%; min-width:10rem;'
  }
])

const roles = ref<Role[]>([])
const role = ref<Role>()
const selectedRoles = ref<Role[]>([])

const deleteRoleDialog = ref(false)
const deleteRolesDialog = ref(false)

// onMounted
onMounted(() => {
  roleFirebase.array().then((res: Role[]) => {
    roles.value = res
    console.log(res)
  })
})

// methods
const add = () => {
  router.push('/system/role/add')
}
const edit = (editRole: Role) => {
  router.push(`/system/role/edit/${editRole.key}`)
}

// dialog
const confirmDeleteRole = (editRole: Role) => {
  role.value = editRole
  deleteRoleDialog.value = true
}
// 確定刪除
const deleteRole = () => {
  // roles.value = roles.value.filter((val: Role) => val.uid !== role.value.uid)
  deleteRoleDialog.value = false
  toast.add({ severity: 'success', summary: 'Successful', detail: 'Role Deleted', life: 3000 })
}

const confirmDeleteSelected = () => {
  deleteRolesDialog.value = true
}
const deleteSelectedRoles = () => {
  roles.value = roles.value.filter((val) => !selectedRoles.value.includes(val))
  deleteRolesDialog.value = false
  selectedRoles.value = []
  toast.add({ severity: 'success', summary: 'Successful', detail: 'Roles Deleted', life: 3000 })
}
</script>

<template>
  <div class="grid">
    <div class="col-12 px-2">
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
                :disabled="!selectedRoles || !selectedRoles.length"
              />
            </div>
          </template>
        </Toolbar>

        <universal-table
          ref="dt"
          :data="roles"
          :columns="columns"
          v-model:selection="selectedRoles"
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
                  @click="confirmDeleteRole(slotProps.data)"
                />
              </template>
            </Column>
          </template>
        </universal-table>

        <Dialog
          v-model:visible="deleteRoleDialog"
          :style="{ width: '450px' }"
          header="Confirm"
          :modal="true"
        >
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span
              >你確定要刪除 <b>{{ role?.displayName }}</b> 嗎?</span
            >
          </div>
          <template #footer>
            <Button
              label="No"
              icon="pi pi-times"
              class="p-button-text"
              @click="deleteRoleDialog = false"
            />
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteRole" />
          </template>
        </Dialog>

        <Dialog
          v-model:visible="deleteRolesDialog"
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
              @click="deleteRolesDialog = false"
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              class="p-button-text"
              @click="deleteSelectedRoles"
            />
          </template>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
