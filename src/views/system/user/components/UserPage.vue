<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Auth, UserFirebase } from '@/api'
import {
  InputPasswordFloat,
  InputTextFloat,
  RoleDropdownFloat,
  StateDropdownFloat,
  FloatText,
  DebounceButton
} from '@/components'
import { UserObject } from '@/interface'
import type { User } from '@/interface'
import { useRoute, useRouter } from 'vue-router'
import { success, error, ConvertDate } from '@/utils'

const route = useRoute()
const router = useRouter()

const convertDate = new ConvertDate()
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

const user = ref<User>({ ...UserObject })

//methods
const submit = async (params: User) => {
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
      .updateUser(params)
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
      user.value = res
    })
  }
})
</script>

<template>
  <div class="grid">
    <div class="col-12 px-2">
      <VForm ref="signupForm" @submit="submit(user)">
        <div class="card p-fluid">
          <div class="flex">
            <div class="flex align-items-center">
              <h5 v-if="mode === 'add'">新增帳號</h5>
              <h5 v-else-if="mode === 'edit'" class="m-0">編輯帳號</h5>
            </div>
            <div v-if="mode === 'edit'" class="flex-1">
              <div class="flex justify-content-end align-items-center">
                <span class="mr-1">{{ user.emailVerified ? '已驗證信箱' : '未驗證信箱' }}</span>

                <i
                  id="emailVerified"
                  class="pi"
                  :class="{
                    'pi-check-circle text-green-500': user.emailVerified,
                    'pi-times-circle text-red-400': !user.emailVerified
                  }"
                ></i>
              </div>
              <div class="flex justify-content-end">
                <span>上次登入時間 {{ convertDate.convertDate(user.operateAt) }}</span>
              </div>
            </div>
          </div>

          <div class="grid p-fluid mt-3">
            <div class="col-12 md:col-6">
              <input-text-float
                v-if="mode === 'add'"
                label="信箱"
                v-model="user.email"
                name="email"
                rules="required|email"
              />
              <float-text v-if="mode === 'edit'" label="信箱" :content="user.email" />
            </div>
            <div class="col-12 md:col-6">
              <input-password-float
                v-if="mode === 'add'"
                label="密碼"
                v-model="user.password"
                name="password"
                rules="required"
              />
              <float-text v-if="mode === 'edit'" label="UID" :content="user.uid" />
            </div>
            <div class="col-12 md:col-6">
              <input-text-float
                label="名稱"
                v-model="user.displayName"
                name="displayName"
                rules="required"
              />
            </div>
            <div class="col-12 md:col-6">
              <input-text-float
                label="照片"
                v-model="user.photoURL"
                name="photoURL"
                rules="required"
              />
            </div>
            <div class="col-12 md:col-6">
              <state-dropdown-float v-model="user.state" name="state" rules="required" />
            </div>
            <div v-role="['role:r']" class="col-12 md:col-6">
              <role-dropdown-float v-model="user.role" name="role" rules="required" />
            </div>
          </div>
          <debounce-button label="送出" type="submit" />
        </div>
      </VForm>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
