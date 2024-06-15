<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { Auth, UserFirebase } from '@/api'
import { InputTextFloat, FloatText, DebounceButton } from '@/components'
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

//methods
const update = () => {
  // 更新auth及data
  auth
    .update({ displayName: account.value.displayName })
    .then((res) => {
      success(`${res}`)
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
      <h5>大頭照</h5>
      <div class="field">
        <div class="flex justify-content-center .p-avatar.p-avatar-circle p-avatar-circle">
          <Image :src="account?.photoURL" alt="" width="200" height="200" />
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 md:col-6 px-2">
    <div class="card p-fluid">
      <VForm ref="signinForm" @submit="update()">
        <h5>帳戶資料</h5>
        <div class="field mt-5">
          <input-text-float
            label="名稱"
            v-model="account.displayName"
            name="displayName"
            rules="required"
          />
        </div>
        <div class="field mt-5">
          <float-text label="信箱" :content="account.email" />
        </div>
        <div class="field mt-5">
          <float-text label="UID" :content="account.uid" />
        </div>
        <div class="field mt-5">
          <float-text label="權限" :content="account.role!.displayName!" />
        </div>
        <div class="field mt-5">
          <float-text label="狀態" :content="account.stateValue" />
        </div>
        <debounce-button label="送出" type="submit" />
      </VForm>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
