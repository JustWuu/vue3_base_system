<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Auth } from '@/api/firebase'
import { Storage, Encryp } from '@/utils'
import InputTextFloat from '@/components/form/InputTextFloat.vue'
import InputPasswordFloat from '@/components/form/InputPasswordFloat.vue'

const storage = new Storage()
const encryp = new Encryp()
// firebase
const auth = new Auth()

//data
const registerAccount = ref({
  email: '',
  password: ''
})

const signinAccount = ref({
  email: '',
  password: '',
  checked: false
})

//methods
const update = () => {
  console.log('ok')
}

const register = () => {
  auth
    .createUser(registerAccount.value.email, registerAccount.value.password)
    .then((res) => {
      if (res) {
        console.log(res)
        // emit('showSuccess', '完成註冊，登入成功')
        // message.sendSystemMail(mail.value)
        // router.push('/')
      }
    })
    .catch((error) => {
      console.log(error)
      // emit('showError', error)
    })
}

const signin = () => {
  auth
    .signIn(signinAccount.value.email, signinAccount.value.password)
    .then((res) => {
      if (res) {
        console.log(res)
        if (signinAccount.value.checked) {
          signinAccount.value.password = encryp.aesEncryp(signinAccount.value.password)
          storage.setLocalStorage('account', signinAccount.value)
        } else {
          storage.removeLocalStorage('account')
        }
        // emit('showSuccess', '登入成功')
        // router.push('/')
      }
    })
    .catch((error) => {
      console.log(error)
      // emit('showError', error)
    })
}

// onMounted
onMounted(() => {
  if (storage.getLocalStorage('account')) {
    signinAccount.value = storage.getLocalStorage('account')
    signinAccount.value.password = encryp.aesDecrypt(signinAccount.value.password)
  }
})
</script>

<template>
  <div class="grid">
    <div class="col-12 md:col-6 px-2">
      <div class="card p-fluid">
        <VForm ref="registerForm" @submit="register()">
          <h5>註冊</h5>
          <div class="field mt-5">
            <input-text-float
              label="信箱"
              v-model="registerAccount.email"
              name="email0"
              rules="required|email"
            />
          </div>
          <div class="field mt-5">
            <input-password-float
              label="密碼"
              v-model="registerAccount.password"
              name="password0"
              rules="required"
            />
          </div>
          <Button label="註冊" type="submit"></Button>
        </VForm>
      </div>
      <!--  -->
      <div class="card p-fluid">
        <VForm ref="signinForm" @submit="signin()" :key="signinAccount">
          <h5>登入</h5>
          <div class="field mt-5">
            <input-text-float
              label="信箱"
              v-model="signinAccount.email"
              name="email1"
              rules="required|email"
            />
          </div>
          <div class="field mt-5">
            <input-password-float
              label="密碼"
              v-model="signinAccount.password"
              name="password1"
              rules="required"
            />
          </div>
          <div class="flex align-items-center justify-content-between mb-4 gap-5">
            <div class="flex align-items-center">
              <Checkbox
                v-model="signinAccount.checked"
                id="rememberme1"
                binary
                class="mr-2"
              ></Checkbox>
              <label for="rememberme1">記住帳密</label>
            </div>
            <router-link
              class="font-medium no-underline ml-2 text-right cursor-pointer"
              style="color: var(--primary-color)"
              to="/auth/forget"
              >忘記密碼?</router-link
            >
          </div>
          <Button label="登入" type="submit"></Button>
        </VForm>
      </div>
    </div>

    <div class="col-12 md:col-6 px-2">
      <div class="card p-fluid">
        <VForm ref="formRef" @submit="update()">
          <h5>當前用戶</h5>

          <Button label="登出" severity="danger" type="submit"></Button>
        </VForm>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
