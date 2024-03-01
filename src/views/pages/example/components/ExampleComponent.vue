<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

//define
const props = defineProps({
  src: {
    type: String,
    default: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg'
  },
  title: {
    type: String,
    default: '討論區'
  },
  content: {
    type: String,
    default: '點擊該文章標題可以查看文章。'
  }
})

// const router = useRouter()

// firebase

//data
const data = ref([])

//methods

// useFirebase

// watchEffect
</script>

<template>
  <div class="grid">
    <div class="col-12 py-0 px-2">
      <div class="card">
        <h5>{{ title }}</h5>
        <p>{{ content }}</p>
        <DataTable
          :value="data"
          :paginator="true"
          class="p-datatable-gridlines w-full"
          :rows="10"
          dataKey="uid"
          :rowHover="true"
          responsiveLayout="scroll"
          :sortOrder="-1"
        >
          <template #empty> No customers found. </template>

          <Column
            header="主題"
            field="theme"
            sortable
            dataType="theme"
            style="width: 10%"
            class="white-space-nowrap"
          >
            <template #body="{ data }">
              {{ data.theme.name }}
            </template>
          </Column>

          <Column
            header="發布者"
            field="author"
            sortable
            dataType="author"
            style="width: 30%"
            class="white-space-nowrap"
          >
            <template #body="{ data }">
              <div class="flex align-items-center justify-content-start">
                <div class="p-avatar p-component p-avatar-image p-avatar-circle p-avatar-lg">
                  <img
                    :alt="data.name"
                    :src="data.author.photoURL"
                    width="32"
                    style="vertical-align: middle"
                  />
                </div>
                <span style="margin-left: 0.5em; vertical-align: middle" class="image-text">{{
                  data.author.displayName
                }}</span>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// ::v-deep(.p-inputtext) {
//   background-color: white !important;
// }
</style>
