<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { FilterMatchMode } from 'primevue/api'
import type { Columns, TypeItem } from '@/interface'
import { ConvertDate } from '@/utils'

const convertDate = new ConvertDate()

// props
defineProps({
  data: {
    type: [Object, Array] as PropType<any>
  },
  columns: {
    type: Array as PropType<Columns[]>,
    default() {
      return []
    }
  },
  header: {
    type: String,
    default: ''
  },
  paginator: {
    type: Boolean,
    default: true
  },
  rows: {
    type: Number,
    default: 10
  },
  rowsPer: {
    type: Array as PropType<number[]>,
    default() {
      return [5, 10, 25]
    }
  },
  paginatorTemplate: {
    type: String,
    default:
      'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'
  },
  checkbox: {
    type: Boolean,
    default: false
  }
})
// data
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})
const dt = ref()
// methods
const exportCSV = () => {
  dt.value.exportCSV()
}

const getValue = (field: string, tag: TypeItem[] | undefined): string => {
  const foundItem = tag!.find((item: TypeItem) => item.value === field)
  return foundItem?.text || '資料有誤，請檢查'
}

const getSeverity = (field: string, tag: TypeItem[] | undefined): string => {
  const foundItem = tag!.find((item: TypeItem) => item.value === field)
  return foundItem?.severity || 'danger'
}
// expose
defineExpose({
  exportCSV
})
</script>

<template>
  <DataTable
    ref="dt"
    :value="data"
    tableStyle="min-width: 50rem"
    :paginator="paginator"
    :rows="rows"
    :filters="filters"
    :paginatorTemplate="paginatorTemplate"
    :rowsPerPageOptions="rowsPer"
    currentPageReportTemplate="{first} - {last} 共 {totalRecords} 項目"
    responsiveLayout="scroll"
  >
    <template #header>
      <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
        <h5 class="m-0">{{ header }}</h5>
        <span class="block mt-2 md:mt-0 p-input-icon-left">
          <i class="pi pi-search" />
          <InputText v-model="filters['global'].value" placeholder="Search..." />
        </span>
      </div>
    </template>
    <Column v-if="checkbox" selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <slot name="header"></slot>
    <template v-for="col of columns" :key="col.field">
      <Column
        v-if="!col.type"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable"
        :headerStyle="col.headerStyle"
      ></Column>
      <Column
        v-if="col.type === 'date'"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable"
        :headerStyle="col.headerStyle"
        class="white-space-nowrap"
      >
        <template #body="{ data }">
          {{ convertDate.convertDate(data[col.field]) }}
        </template>
      </Column>
      <Column
        v-if="col.type === 'boolean'"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable"
        :headerStyle="col.headerStyle"
        dataType="boolean"
      >
        <template #body="{ data }">
          <i
            class="pi"
            :class="{
              'pi-check-circle text-green-500': data[col.field],
              'pi-times-circle text-red-400': !data[col.field]
            }"
          ></i>
        </template>
      </Column>
      <Column
        v-if="col.type === 'tag'"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable"
        :headerStyle="col.headerStyle"
      >
        <template #body="{ data }">
          <Tag
            :value="getValue(data[col.field], col.tag)"
            :severity="getSeverity(data[col.field], col.tag)"
          />
        </template>
      </Column>
    </template>

    <slot name="footer"></slot>
  </DataTable>
</template>

<style scoped lang="scss"></style>
