<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { Auth, UserFirebase } from '@/api'
import { InputPasswordFloat, FloatText } from '@/components'
import { success, error } from '@/utils'
import { type User, UserObject } from '@/interface'

// firebase
const auth = new Auth()
const userFirebase = new UserFirebase()
const { user } = auth.getUser()

//data
const account = ref<User>({
  ...UserObject
})

const password = ref({
  oldPassword: '',
  newPassword: ''
})

//methods
const sendEmail = () => {
  auth
    .sendEmail()
    .then((res) => {
      if (res) {
        success('驗證信已送出')
      }
    })
    .catch((e) => {
      error(e)
    })
}
const updatePassword = (oldPassword: string, newPassword: string) => {
  if (oldPassword === '') {
    return error('請輸入舊密碼')
  } else if (newPassword === '') {
    return error('請輸入新密碼')
  }
  auth
    .updatePassword(oldPassword, newPassword)
    .then(() => {
      success('密碼變更成功')
    })
    .catch((e) => {
      error(e)
    })
}

// watchEffect
watchEffect(() => {
  if (user.value.uid) {
    userFirebase.get(user.value.uid!).then((res) => {
      account.value = res
    })
  }
})
</script>

<template>
  <div class="col-12 md:col-6 px-2">
    <div class="card p-fluid">
      <h5>信箱認證狀態</h5>
      <div class="field mt-5">
        <float-text label="信箱" :content="account.email" />
        <small v-if="account.emailVerified">信箱已認證</small>
        <small v-else>尚未認證信箱，請點擊按鈕發送驗證信件</small>
      </div>
      <Button v-if="!account.emailVerified" label="送出驗證信" @click="sendEmail"></Button>
    </div>
  </div>

  <div class="col-12 md:col-6 px-2">
    <div class="card p-fluid">
      <h5>變更密碼</h5>
      <div class="field mt-5">
        <input-password-float
          label="舊密碼"
          v-model="password.oldPassword"
          name="password"
          rules="required"
          :feedback="false"
        />
      </div>
      <div class="field mt-5">
        <input-password-float
          label="新密碼"
          v-model="password.newPassword"
          name="newPassword"
          rules="required"
        />
      </div>
      <Button
        label="變更"
        @click="updatePassword(password.oldPassword, password.newPassword)"
      ></Button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
