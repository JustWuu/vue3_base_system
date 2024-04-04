<script setup lang="ts">
import { ref, onMounted, type VNodeRef } from 'vue'
import { useRouter } from 'vue-router'
import { UniversalTable } from '@/components/table'
import { SyslogFirebase } from '@/api'
import type { Syslog, Filter } from '@/interface'
import { error } from '@/utils'

const router = useRouter()

// interface
type NewVNodeRef = VNodeRef & {
  exportCSV: Function
}

// firebase
const syslogFirebase = new SyslogFirebase()

// data
const dt = ref<NewVNodeRef>()
const columns = ref([
  {
    field: 'collection',
    header: '集合',
    sortable: true,
    headerStyle: 'width:75%; min-width:10rem;'
  },
  {
    field: 'document',
    header: '文件',
    sortable: true,
    headerStyle: 'width:75%; min-width:10rem;'
  },
  {
    field: 'methods',
    header: '操作',
    sortable: true,
    headerStyle: 'width:75%; min-width:10rem;'
  },
  {
    field: 'useremail',
    header: '操作者',
    sortable: true,
    headerStyle: 'width:75%; min-width:10rem;'
  },
  {
    field: 'useruid',
    header: '操作者UID',
    sortable: true,
    headerStyle: 'width:75%; min-width:10rem;'
  },
  {
    field: 'userip',
    header: '操作者IP',
    sortable: true,
    headerStyle: 'width:75%; min-width:10rem;'
  },
  {
    field: 'userip',
    header: '操作者IP',
    sortable: true,
    headerStyle: 'width:75%; min-width:10rem;'
  },
  {
    type: 'date',
    field: 'timestamp',
    header: '操作時間',
    sortable: true,
    headerStyle: 'width:14%; min-width:10rem;'
  }
  // {
  //   type: 'tag',
  //   tag: [
  //     { value: 'enable', severity: 'success', text: '啟用' },
  //     { value: 'disabled', severity: 'danger', text: '停用' }
  //   ],
  //   field: 'state',
  //   header: '狀態',
  //   sortable: true,
  //   headerStyle: 'width:25%; min-width:10rem;'
  // }
])

const filter = ref<Filter[]>([
  {
    type: 'Dropdown',
    options: [
      { value: 'enable', text: '啟用' },
      { value: 'disabled', text: '停用' }
    ],
    placeholder: '狀態',
    class: 'mr-1 w-4',
    field: 'state'
  },
  {
    type: 'InputText',
    placeholder: 'Search...',
    class: 'w-4',
    field: 'displayName'
  }
])

const syslogs = ref<Syslog[]>([])
// const syslog = ref<Syslog>()
const selectedSyslogs = ref<Syslog[]>([])

// const deleteSyslogDialog = ref(false)

// onMounted
onMounted(() => {
  syslogFirebase
    .array()
    .then((res: Syslog[]) => {
      syslogs.value = res
    })
    .catch((e) => {
      error(e)
    })
})

// methods
// const add = () => {
//   router.push('/system/syslog/add')
// }
// const edit = (editSyslog: Syslog) => {
//   router.push(`/system/syslog/edit/${editSyslog.id}`)
// }

// dialog
// const confirmDeleteSyslog = (editSyslog: Syslog) => {
//   syslog.value = editSyslog
//   deleteSyslogDialog.value = true
// }
// 確定刪除
// const deleteSyslog = () => {
//   // syslogs.value = syslogs.value.filter((val: Syslog) => val.uid !== syslog.value.uid)
//   deleteSyslogDialog.value = false
// }

const exportCSV = () => {
  dt.value!.exportCSV()
}
</script>

<template>
  <div class="grid">
    <div class="col-12 px-2">
      <div class="card">
        <Toolbar class="mb-4">
          <!-- <template v-slot:start>
            <div class="my-2">
              <Button label="新增" icon="pi pi-plus" class="p-button-success mr-2" @click="add" />
              <Button
                label="刪除"
                icon="pi pi-trash"
                class="p-button-danger"
                @click="confirmDeleteSelected"
                :disabled="!selectedSyslogs || !selectedSyslogs.length"
              />
            </div>
          </template> -->
          <template v-slot:end>
            <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV()" />
          </template>
        </Toolbar>

        <universal-table
          ref="dt"
          :data="syslogs"
          :columns="columns"
          v-model:selection="selectedSyslogs"
          header="操作紀錄"
          :checkbox="true"
          :filter="filter"
        >
          <!-- <template #footer>
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
                  @click="confirmDeleteSyslog(slotProps.data)"
                />
              </template>
            </Column>
          </template> -->
        </universal-table>

        <!-- <Dialog
          v-model:visible="deleteSyslogDialog"
          :style="{ width: '450px' }"
          header="Confirm"
          :modal="true"
        >
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span
              >你確定要刪除 <b>{{ syslog?.displayName }}</b> 嗎?</span
            >
          </div>
          <template #footer>
            <Button
              label="No"
              icon="pi pi-times"
              class="p-button-text"
              @click="deleteSyslogDialog = false"
            />
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSyslog" />
          </template>
        </Dialog> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
