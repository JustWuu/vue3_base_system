<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { Auth, UserFirebase, MemberFirebase } from '@/api'
import {
  InputTextFloat,
  RoleDropdownFloat,
  StateDropdownFloat,
  FloatText,
  DebounceButton,
  MemberDropdownFloat
} from '@/components'
import { UserObject } from '@/interface'
import type { User, Member } from '@/interface'
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
const memberFirebase = new MemberFirebase()

//data
const id = ref('')
const user = ref<User>({ ...UserObject })
const member = ref<Member>()

const displayConfirmation = ref(false)

//methods
const submit = async (params: User) => {
  if (props.mode === 'add') {
    auth
      .membersBecomeUser(member.value!, params)
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

const sendPassword = () => {
  auth
    .sendPassword(user.value.email!)
    .then((res) => {
      if (res) {
        displayConfirmation.value = false
        success('重設密碼信件已寄出')
      }
    })
    .catch((e) => {
      displayConfirmation.value = false
      error(e)
    })
}

const openConfirmation = () => {
  displayConfirmation.value = true
}

const closeConfirmation = () => {
  displayConfirmation.value = false
}

// onMounted
onMounted(() => {
  if (props.mode === 'edit') {
    id.value = route.params.id as string
    userFirebase.get(id.value).then((res) => {
      user.value = res
    })
  }
})

// watchEffect
watchEffect(async () => {
  if (member.value) {
    const data = await memberFirebase.getPublic(member.value.uid!)
    user.value.uid = data.uid
    user.value.displayName = data.displayName
    user.value.photoURL = data.photoURL
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
              <member-dropdown-float
                v-if="mode === 'add'"
                v-model="member"
                name="email"
                rules="required"
              />
              <float-text v-if="mode === 'edit'" label="信箱" :content="user.email" />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="UID" :content="user.uid" />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="名稱" :content="user.displayName" />
            </div>
            <div class="col-12 md:col-6">
              <input-text-float label="照片" v-model="user.photoURL" name="photoURL" />
            </div>
            <div class="col-12 md:col-6">
              <state-dropdown-float v-model="user.state" name="state" rules="required" />
            </div>
            <div v-role="['role:r']" class="col-12 md:col-6">
              <role-dropdown-float v-model="user.role" name="role" rules="required" />
            </div>
            <div class="md:col-6"></div>
            <div class="col-12 md:col-6">
              <debounce-button
                v-if="mode === 'edit'"
                label="重設密碼"
                type="button"
                severity="warning"
                @click="openConfirmation()"
              />
            </div>
          </div>
          <debounce-button label="送出" type="submit" />
        </div>
      </VForm>
    </div>
  </div>

  <Dialog
    header="確認"
    v-model:visible="displayConfirmation"
    :style="{ width: '350px' }"
    :modal="true"
  >
    <div class="flex align-items-center justify-content-center">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span>是否發送重設密碼信件？</span>
    </div>
    <template #footer>
      <Button
        label="No"
        icon="pi pi-times"
        @click="closeConfirmation"
        class="p-button-text"
        autofocus
      />
      <Button label="Yes" icon="pi pi-check" @click="sendPassword()" class="p-button-text" />
    </template>
  </Dialog>
</template>

<style lang="scss" scoped></style>
