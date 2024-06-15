<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RoleFirebase } from '@/api'
import { InputTextFloat, InputDropdownFloat, FloatText, DebounceButton } from '@/components'
import type { TreeNode, TreeSelectionKeys } from 'primevue/tree'
import type { Role } from '@/interface'
import { StateArray } from '@/interface'
import { useRoute, useRouter } from 'vue-router'
import { success, error } from '@/utils'

const route = useRoute()
const router = useRouter()
// props
const props = defineProps({
  mode: {
    type: String,
    default: ''
  }
})

// firebase
const roleFirebase = new RoleFirebase()

//data
const id = ref('')

const role = ref<Role>({
  displayName: '',
  roles: [],
  id: '',
  state: 'enable'
})
const treeValue = ref<TreeNode[]>([
  {
    key: 'front',
    label: '前台',
    data: 'front',
    icon: 'pi pi-fw pi-inbox',
    children: [
      {
        key: 'news',
        label: '公告管理',
        data: 'news',
        icon: 'pi pi-fw pi-users',
        children: [
          {
            key: 'news:c',
            label: '新增',
            icon: 'pi pi-fw pi-file',
            data: 'news:c'
          },
          {
            key: 'news:r',
            label: '查看',
            icon: 'pi pi-fw pi-eye',
            data: 'news:r'
          },
          {
            key: 'news:u',
            label: '更新',
            icon: 'pi pi-fw pi-pencil',
            data: 'news:u'
          },
          {
            key: 'news:d',
            label: '刪除',
            icon: 'pi pi-fw pi-trash',
            data: 'news:d'
          }
        ]
      },
      {
        key: 'recommend',
        label: '每周推薦',
        data: 'recommend',
        icon: 'pi pi-fw pi-users',
        children: [
          {
            key: 'recommend:c',
            label: '新增',
            icon: 'pi pi-fw pi-file',
            data: 'recommend:c'
          },
          {
            key: 'recommend:r',
            label: '查看',
            icon: 'pi pi-fw pi-eye',
            data: 'recommend:r'
          },
          {
            key: 'recommend:u',
            label: '更新',
            icon: 'pi pi-fw pi-pencil',
            data: 'recommend:u'
          },
          {
            key: 'recommend:d',
            label: '刪除',
            icon: 'pi pi-fw pi-trash',
            data: 'recommend:d'
          }
        ]
      },
      {
        key: 'member',
        label: '會員管理',
        data: 'member',
        icon: 'pi pi-fw pi-users',
        children: [
          {
            key: 'member:c',
            label: '新增',
            icon: 'pi pi-fw pi-file',
            data: 'member:c'
          },
          {
            key: 'member:r',
            label: '查看',
            icon: 'pi pi-fw pi-eye',
            data: 'member:r'
          },
          {
            key: 'member:u',
            label: '更新',
            icon: 'pi pi-fw pi-pencil',
            data: 'member:u'
          },
          {
            key: 'member:d',
            label: '刪除',
            icon: 'pi pi-fw pi-trash',
            data: 'member:d'
          }
        ]
      }
    ]
  },
  {
    key: 'system',
    label: '系統',
    data: 'system',
    icon: 'pi pi-fw pi-inbox',
    children: [
      {
        key: 'user',
        label: '帳號管理',
        data: 'user',
        icon: 'pi pi-fw pi-user',
        children: [
          {
            key: 'user:c',
            label: '新增',
            icon: 'pi pi-fw pi-file',
            data: 'user:c'
          },
          {
            key: 'user:r',
            label: '查看',
            icon: 'pi pi-fw pi-eye',
            data: 'user:r'
          },
          {
            key: 'user:u',
            label: '更新',
            icon: 'pi pi-fw pi-pencil',
            data: 'user:u'
          },
          {
            key: 'user:d',
            label: '刪除',
            icon: 'pi pi-fw pi-trash',
            data: 'user:d'
          }
        ]
      },
      {
        key: 'role',
        label: '權限管理',
        data: 'role',
        icon: 'pi pi-fw pi-sitemap',
        children: [
          {
            key: 'role:c',
            label: '新增',
            icon: 'pi pi-fw pi-file',
            data: 'role:c'
          },
          {
            key: 'role:r',
            label: '查看',
            icon: 'pi pi-fw pi-eye',
            data: 'role:r'
          },
          {
            key: 'role:u',
            label: '更新',
            icon: 'pi pi-fw pi-pencil',
            data: 'role:u'
          },
          {
            key: 'role:d',
            label: '刪除',
            icon: 'pi pi-fw pi-trash',
            data: 'role:d'
          }
        ]
      },
      {
        key: 'syslog',
        label: '操作紀錄',
        data: 'syslog',
        icon: 'pi pi-fw pi-wrench',
        children: [
          {
            key: 'syslog:c',
            label: '新增',
            icon: 'pi pi-fw pi-file',
            data: 'syslog:c'
          },
          {
            key: 'syslog:r',
            label: '查看',
            icon: 'pi pi-fw pi-eye',
            data: 'syslog:r'
          },
          {
            key: 'syslog:u',
            label: '更新',
            icon: 'pi pi-fw pi-pencil',
            data: 'syslog:u'
          },
          {
            key: 'syslog:d',
            label: '刪除',
            icon: 'pi pi-fw pi-trash',
            data: 'syslog:d'
          }
        ]
      }
    ]
  }
])
const selectedTreeValue = ref<TreeSelectionKeys>({})

//methods
const submit = async (params: object) => {
  if (props.mode === 'add') {
    role.value.roles = keysWithTrueChecked()
    roleFirebase
      .add(params)
      .then((res) => {
        success(res)
        router.push('/system/role/list')
      })
      .catch((e) => {
        error(e)
      })
  } else if (props.mode === 'edit') {
    role.value.roles = keysWithTrueChecked()
    roleFirebase
      .update(id.value, params)
      .then((res) => {
        success(res)
        router.push('/system/role/list')
      })
      .catch((e) => {
        error(e)
      })
  }
}

// 轉換tree已選參數
const keysWithTrueChecked = () => {
  const keysWithTrueChecked = []
  for (var key in selectedTreeValue.value) {
    if (
      Object.prototype.hasOwnProperty.call(selectedTreeValue.value, key) &&
      selectedTreeValue.value[key].checked === true
    ) {
      keysWithTrueChecked.push(key)
    }
  }
  return keysWithTrueChecked
}

// onMounted
onMounted(() => {
  if (props.mode === 'edit') {
    id.value = route.params.id as string
    roleFirebase.get(id.value).then((res) => {
      role.value = res
      // 設定tree已選項目
      // 處理具有冒號的字串
      for (var i = 0; i < res.roles.length; i++) {
        if (res.roles[i].includes(':')) {
          var key = res.roles[i].split(':')[0]
          if (!selectedTreeValue.value[key]) {
            selectedTreeValue.value[key] = { checked: false, partialChecked: true }
          }
        }
      }
      // 處理所有字串
      for (var x = 0; x < res.roles.length; x++) {
        selectedTreeValue.value[res.roles[x]] = { checked: true, partialChecked: false }
      }
    })
  }
})
</script>

<template>
  <div class="grid">
    <div class="col-12 px-2">
      <VForm ref="signupForm" @submit="submit(role)">
        <div class="card p-fluid">
          <h5 v-if="mode === 'add'">新增權限身分</h5>
          <h5 v-else-if="mode === 'edit'">編輯權限身分</h5>
          <div class="grid p-fluid mt-3">
            <div class="col-12 md:col-6">
              <input-text-float
                v-if="mode === 'add'"
                label="名稱"
                v-model="role.displayName"
                name="displayName"
                rules="required"
              />
              <float-text v-if="mode === 'edit'" label="名稱" :content="role.displayName" />
            </div>
            <div class="col-12 md:col-6">
              <input-dropdown-float
                label="狀態"
                :options="StateArray"
                v-model="role.state"
                name="state"
                rules="required"
              />
            </div>
            <div class="col-12">
              <h5>權限設定</h5>
              <Tree
                :value="treeValue"
                selectionMode="checkbox"
                v-model:selectionKeys="selectedTreeValue"
                :expandedKeys="{ system: true, user: true, role: true, syslog: true }"
              ></Tree>
            </div>
          </div>
          <debounce-button label="送出" type="submit" />
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
