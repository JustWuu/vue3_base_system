<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { FilterMatchMode } from 'primevue/api'
import type { Columns } from '@/interface'

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
    <Column
      v-for="col of columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      :sortable="col.sortable"
      :headerStyle="col.headerStyle"
    ></Column>
    <slot name="footer"></slot>
  </DataTable>
</template>

<style scoped lang="scss"></style>
