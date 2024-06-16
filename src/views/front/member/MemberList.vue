<script setup lang="ts">
import { ref, onMounted, type VNodeRef } from 'vue'
import { useRouter } from 'vue-router'
import { UniversalTable } from '@/components/table'
import { MemberFirebase } from '@/api'
import type { User, Filter } from '@/interface'

const router = useRouter()
// interface
type NewVNodeRef = VNodeRef & {
  exportCSV: Function
}

// firebase
const memberFirebase = new MemberFirebase()

// data
const dt = ref<NewVNodeRef>()
const columns = ref([
  {
    field: 'email',
    header: '帳號',
    sortable: false,
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
    type: 'date',
    field: 'createdAt',
    header: '註冊時間',
    sortable: true,
    style: 'min-width:10rem;'
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
    placeholder: 'Search UID...',
    class: 'md:w-3',
    field: 'uid'
  }
])

const members = ref<User[]>([])
const selectedUsers = ref<User[]>([])

// onMounted
onMounted(() => {
  memberFirebase.array().then((res: User[]) => {
    members.value = res
  })
})

// methods
const add = () => {
  router.push('/system/user/add')
}
const edit = (editUser: User) => {
  router.push(`/front/member/edit/${editUser.uid}`)
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
              <Button
                v-role="['member:c']"
                label="新增"
                icon="pi pi-plus"
                class="p-button-success mr-2"
                @click="add"
              />
            </div>
          </template>

          <template v-slot:end>
            <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV()" />
          </template>
        </Toolbar>

        <universal-table
          ref="dt"
          :data="members"
          :columns="columns"
          v-model:selection="selectedUsers"
          header="會員管理"
          :filter="filter"
        >
          <template #footer>
            <Column headerStyle="min-width:2rem;" header="操作" alignFrozen="right" frozen>
              <template #body="slotProps">
                <Button
                  v-role="['member:u']"
                  icon="pi pi-pencil"
                  class="p-button-rounded p-button-success mr-2"
                  @click="edit(slotProps.data)"
                />
              </template>
            </Column>
          </template>
        </universal-table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
