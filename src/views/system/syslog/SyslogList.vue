<script setup lang="ts">
import { ref, onMounted, type VNodeRef } from 'vue'
import { useRouter } from 'vue-router'
import { UniversalTable } from '@/components/table'
import { SyslogFirebase, UserFirebase } from '@/api'
import type { Syslog, User, Filter } from '@/interface'

const router = useRouter()

// interface
type NewVNodeRef = VNodeRef & {
  exportCSV: Function
}

// firebase
const syslogFirebase = new SyslogFirebase()
const userFirebase = new UserFirebase()

// data
const syslogs = ref<Syslog[]>([])
const selectedSyslogs = ref<Syslog[]>([])

const dt = ref<NewVNodeRef>()
const columns = ref([
  {
    field: 'collection',
    header: '集合',
    sortable: true,
    style: 'min-width:6rem;'
  },
  {
    field: 'document',
    header: '文件',
    sortable: true,
    style: 'min-width:10rem;'
  },
  {
    field: 'methods',
    header: '操作',
    sortable: true,
    style: 'min-width:8rem;'
  },
  {
    field: 'useremail',
    header: '操作者帳號',
    sortable: true,
    style: 'min-width:12rem;'
  },
  {
    field: 'useruid',
    header: '操作者UID',
    sortable: true,
    style: 'min-width:10rem;'
  },
  {
    type: 'date',
    field: 'timestamp',
    header: '操作時間',
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
    field: 'useremail'
  },
  {
    type: 'InputText',
    placeholder: 'Search...',
    class: 'md:w-3',
    field: 'displayName'
  }
])

// onMounted
onMounted(() => {
  getSyslogs()
  userFirebase.array().then((res: User[]) => {
    res.filter((item) => filter.value[0].options!.push({ value: item.email!, text: item.email! }))
  })
})

// methods
const getSyslogs = () => {
  syslogFirebase.array().then((res: Syslog[]) => {
    syslogs.value = res
  })
}

const read = (syslog: Syslog) => {
  router.push(`/system/syslog/read/${syslog.id}`)
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
          :checkbox="false"
          :filter="filter"
          sortField="timestamp"
          tableStyle="min-width:1000px;"
          fixed
          resizableColumns
        >
          <template #footer>
            <Column headerStyle="'min-width:2rem'" header="操作" alignFrozen="right" frozen>
              <template #body="slotProps">
                <div class="flex justify-content-center">
                  <Button
                    icon="pi pi-eye"
                    class="p-button-rounded p-button-success mr-2"
                    @click="read(slotProps.data)"
                  />
                </div>
              </template>
            </Column>
          </template>
        </universal-table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
