<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Auth } from '@/api/firebase'
import InputTextFloat from '@/components/form/InputTextFloat.vue'

// props
const props = defineProps({
  mode: {
    type: String,
    default: ''
  }
})

// firebase

//data
const signupAccount = ref({
  email: '',
  password: ''
})
const treeValue = ref<any>([
  {
    key: 'system',
    label: '系統',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
      {
        key: 'user',
        label: '帳號管理',
        data: 'Work Folder',
        icon: 'pi pi-fw pi-users',
        children: [
          {
            key: 'user:c',
            label: '新增',
            icon: 'pi pi-fw pi-file',
            data: 'Expenses Document'
          },
          {
            key: 'user:r',
            label: '查看',
            icon: 'pi pi-fw pi-eye',
            data: 'Resume Document'
          },
          {
            key: 'user:u',
            label: '更新',
            icon: 'pi pi-fw pi-pencil',
            data: 'Resume Document'
          },
          {
            key: 'user:d',
            label: '刪除',
            icon: 'pi pi-fw pi-trash',
            data: 'Resume Document'
          }
        ]
      },
      {
        key: 'role',
        label: '權限管理',
        data: 'Home Folder',
        icon: 'pi pi-fw pi-sitemap',
        children: [
          {
            key: 'role:c',
            label: '新增',
            icon: 'pi pi-fw pi-file',
            data: 'Expenses Document'
          },
          {
            key: 'role:r',
            label: '查看',
            icon: 'pi pi-fw pi-eye',
            data: 'Resume Document'
          },
          {
            key: 'role:u',
            label: '更新',
            icon: 'pi pi-fw pi-pencil',
            data: 'Resume Document'
          },
          {
            key: 'role:d',
            label: '刪除',
            icon: 'pi pi-fw pi-trash',
            data: 'Resume Document'
          }
        ]
      }
    ]
  }
])
const selectedTreeValue = ref<any>({
  'role:c': { checked: true, partialChecked: false },
  role: { checked: false, partialChecked: true },
  system: { checked: false, partialChecked: true },
  'role:r': { checked: true, partialChecked: false },
  'role:u': { checked: true, partialChecked: false }
})

//methods
</script>

<template>
  <div class="grid">
    <div class="col-12 px-2">
      <VForm ref="signupForm" @submit="console.log('ok')">
        <div v-if="mode === 'add'" class="card p-fluid">
          <h5>新增權限身分</h5>
          <div class="grid p-fluid mt-3">
            <div class="field col-12 md:col-6">
              <input-text-float
                label="名稱"
                v-model="signupAccount.email"
                name="email0"
                rules="required|email"
              />
            </div>
            <div class="field col-12 md:col-6">
              <input-text-float
                label="狀態"
                v-model="signupAccount.email"
                name="email0"
                rules="required|email"
              />
            </div>
            <div class="field col-12">
              <h5>權限設定</h5>
              <Tree
                :value="treeValue"
                selectionMode="checkbox"
                v-model:selectionKeys="selectedTreeValue"
              ></Tree>
            </div>
          </div>
          {{ selectedTreeValue }}
          <Button label="建立" type="submit"></Button>
        </div>
      </VForm>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-tree {
  border: 0 none;
  padding: 0;
}
</style>
