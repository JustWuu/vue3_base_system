<script setup lang="ts">
import { ref, onBeforeMount, type PropType } from 'vue'
import { FilterMatchMode } from 'primevue/api'
import type { Columns, TypeItem, Filter } from '@/interface'
import { ConvertDate } from '@/utils'

const convertDate = new ConvertDate()

// props
const props = defineProps({
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
  },
  filter: {
    type: Array as PropType<Filter[]>,
    default() {
      return []
    }
  },
  tableStyle: {
    type: String,
    default: ''
  },
  fixed: {
    type: Boolean,
    default: false
  },
  sortField: {
    type: String,
    default: ''
  },
  resizableColumns: {
    type: Boolean,
    default: false
  }
})
// data
const filters = ref<any>({})
const style = ref('')
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

// onBeforeMount
onBeforeMount(() => {
  if (props.filter.length !== 0) {
    for (const filter of props.filter) {
      filters.value[filter.field] = { value: null, matchMode: FilterMatchMode.CONTAINS }
    }
  }
  if (props.fixed) {
    style.value = 'table-layout: fixed;' + props.tableStyle
  } else {
    style.value = props.tableStyle
  }
})
</script>

<template>
  <DataTable
    ref="dt"
    :value="data"
    :paginator="paginator"
    :rows="rows"
    :filters="filters"
    :paginatorTemplate="paginatorTemplate"
    :rowsPerPageOptions="rowsPer"
    currentPageReportTemplate="{first} - {last} 共 {totalRecords} 項目"
    responsiveLayout="scroll"
    :responsive="true"
    :tableStyle="style"
    :sortField="sortField"
    :sortOrder="-1"
    :resizableColumns="resizableColumns"
  >
    <template #header>
      <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
        <h5 class="m-0 w-8rem">{{ header }}</h5>
        <div
          class="flex flex-column flex-wrap w-full md:flex-row md:justify-content-end md:align-items-center"
        >
          <template v-for="obj of filter" :key="obj.field">
            <Dropdown
              v-if="obj.type === 'Dropdown'"
              v-model="filters[obj.field].value"
              :options="obj.options"
              :placeholder="obj.placeholder"
              class="mt-2 md:mt-0"
              :class="obj.class"
              optionLabel="text"
              optionValue="value"
              showClear
            >
            </Dropdown>
            <span
              v-if="obj.type === 'InputText'"
              :class="obj.class"
              class="block mt-2 md:mt-0 p-input-icon-left"
            >
              <i class="pi pi-search" />
              <InputText
                v-model="filters[obj.field].value"
                :placeholder="obj.placeholder"
                class="w-full"
              />
            </span>
          </template>
        </div>
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
        :style="col.style"
        :class="[col.class, { 'text-overflow-ellipsis overflow-hidden': fixed }]"
      ></Column>
      <Column
        v-if="col.type === 'date'"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable"
        :style="col.style"
        :class="[col.class, { 'text-overflow-ellipsis overflow-hidden': fixed }]"
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
        :style="col.style"
        :class="[col.class, { 'text-overflow-ellipsis overflow-hidden': fixed }]"
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
        :style="col.style"
        :class="[col.class, { 'text-overflow-ellipsis overflow-hidden': fixed }]"
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

<style scoped lang="scss">
@media screen and (min-width: 768px) {
  ::v-deep() {
    th.p-frozen-column {
      z-index: 1 !important;
      position: sticky;
    }
    td.p-frozen-column {
      z-index: 1 !important;
      position: sticky;
      background: inherit;
    }
  }
}
</style>
