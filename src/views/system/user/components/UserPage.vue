<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Auth, UserFirebase } from '@/api'
import {
  InputPasswordFloat,
  InputTextFloat,
  InputDropdownFloat,
  RoleDropdownFloat
} from '@/components/form'
import type { Account } from '@/interface'
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
const auth = new Auth()
const userFirebase = new UserFirebase()

//data
const id = ref('')

const account = ref<Account>({
  displayName: '',
  email: '',
  password: '',
  state: 'enable',
  role: { displayName: '無', id: '' },
  photoURL: ''
})

//methods
const submit = async (params: Account) => {
  if (props.mode === 'add') {
    auth
      .createUser(params)
      .then((res) => {
        if (res) {
          success(res)
          router.push('/system/user/list')
        }
      })
      .catch((e) => {
        error(e)
      })
  } else if (props.mode === 'edit') {
    userFirebase
      .update(id.value, params)
      .then((res) => {
        success(res)
        router.push('/system/user/list')
      })
      .catch((e) => {
        error(e)
      })
  }
}

// onMounted
onMounted(() => {
  if (props.mode === 'edit') {
    id.value = route.params.id as string
    userFirebase.get(id.value).then((res) => {
      console.log(res)
      account.value = res
    })
  }
})
</script>

<template>
  <div class="grid">
    <div class="col-12 px-2">
      <VForm ref="signupForm" @submit="submit(account)" :key="account">
        <div class="card p-fluid">
          <h5 v-if="mode === 'add'">新增帳號</h5>
          <h5 v-else-if="mode === 'edit'">編輯帳號</h5>
          <div class="grid p-fluid mt-3">
            <div class="col-12 md:col-6">
              <input-text-float
                label="名稱"
                v-model="account.displayName"
                name="displayName"
                rules="required"
              />
            </div>
            <div class="col-12 md:col-6">
              <input-text-float
                label="照片"
                v-model="account.photoURL"
                name="photoURL"
                rules="required"
              />
            </div>
            <div class="col-12 md:col-6">
              <input-text-float
                label="信箱"
                v-model="account.email"
                name="email"
                rules="required|email"
              />
            </div>
            <div class="col-12 md:col-6">
              <input-password-float
                v-if="mode === 'add'"
                label="密碼"
                v-model="account.password"
                name="password"
                rules="required"
              />
            </div>
            <div class="col-12 md:col-6">
              <input-dropdown-float
                label="狀態"
                :options="StateArray"
                v-model="account.state"
                name="state"
                rules="required"
              />
            </div>
            <div class="col-12 md:col-6">
              <role-dropdown-float
                label="權限"
                v-model="account.role"
                name="role"
                rules="required"
              />
            </div>
          </div>
          <Button label="送出" type="submit"></Button>
        </div>
      </VForm>
    </div>
  </div>

  <!-- <div class="grid">
    <div v-role="['user:c']" class="col-12 md:col-6 px-2">
      <div v-if="mode === 'add'" class="card p-fluid">
        <VForm ref="signupForm" @submit="submit(account)">
          <h5>登入信箱及密碼</h5>
          <div class="field mt-5">
            
          </div>
          <div class="field mt-5">
            
          </div>
          <div class="field mt-5">
            
          </div>
          <Button label="建立" type="submit"></Button>
        </VForm>
      </div>
    </div>
  </div> -->
</template>

<style lang="scss" scoped></style>
