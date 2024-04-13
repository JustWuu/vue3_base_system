<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Auth } from '@/api'
import { useRouter } from 'vue-router'
import { Storage, Encryp, success, error } from '@/utils'
import { InputTextFloat, InputPasswordFloat } from '@/components'

const router = useRouter()

const storage = new Storage()
const encryp = new Encryp()

// firebase
const auth = new Auth()

//data
const signinAccount = ref({
  email: '',
  password: '',
  checked: false,
  keepSignIn: true
})

// const displayConfirmation = ref(false)

//methods
const signin = () => {
  if (signinAccount.value.keepSignIn) {
    auth
      .keepSignIn(signinAccount.value.email, signinAccount.value.password)
      .then((res) => {
        if (res) {
          setLocalStorage(res)
        }
      })
      .catch((e) => {
        error(e)
      })
  } else {
    auth
      .signIn(signinAccount.value.email, signinAccount.value.password)
      .then((res) => {
        if (res) {
          setLocalStorage(res)
        }
      })
      .catch((e) => {
        error(e)
      })
  }
}
function setLocalStorage(response: any) {
  if (signinAccount.value.checked) {
    signinAccount.value.password = encryp.aesEncryp(signinAccount.value.password)
    storage.setLocalStorage('account', signinAccount.value)
  } else {
    storage.removeLocalStorage('account')
  }
  success(`${response}`)
  router.push('/')
}

// const signInAnonymously = () => {
//   displayConfirmation.value = false
//   auth
//     .signInAnonymously()
//     .then((res) => {
//       if (res) {
//         emit('showSuccess', '登入成功')
//         message.sendSystemMail(mail.value)
//         router.push('/')
//       }
//     })
//     .catch((error) => {
//       emit('showError', error)
//     })
// }

// const openConfirmation = () => {
//   displayConfirmation.value = true
// }

// const closeConfirmation = () => {
//   displayConfirmation.value = false
// }

// onMounted
onMounted(() => {
  if (storage.getLocalStorage('account')) {
    signinAccount.value = storage.getLocalStorage('account')
    signinAccount.value.password = encryp.aesDecrypt(signinAccount.value.password)
    signinAccount.value.keepSignIn = true
  }
})
</script>

<template>
  <div
    class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"
  >
    <div class="flex flex-column align-items-center justify-content-center w-11 md:w-auto">
      <img src="@/assets/logo.svg" alt="Image" class="mb-5 w-6rem flex-shrink-0" />
      <div
        class="w-11 md:w-auto"
        style="
          border-radius: 56px;
          padding: 0.3rem;
          background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%);
        "
      >
        <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
          <div class="text-center mb-4">
            <div class="text-900 text-3xl font-medium mb-3">帳戶登入</div>
            <router-link
              class="font-medium no-underline ml-0 text-right cursor-pointer"
              style="color: var(--primary-color)"
              to="/auth/login"
              >帳戶登入</router-link
            >
            <router-link
              class="font-medium no-underline ml-2 text-right cursor-pointer"
              style="color: var(--primary-color)"
              to="/auth/register"
              >帳戶註冊</router-link
            >
          </div>

          <div>
            <div class="field mt-6">
              <input-text-float
                label="信箱"
                v-model="signinAccount.email"
                name="email1"
                rules="required|email"
                input-class="md:w-30rem"
              />
            </div>
            <div class="field mt-6">
              <input-password-float
                label="密碼"
                v-model="signinAccount.password"
                name="password1"
                rules="required"
                :feedback="false"
                input-class="md:w-30rem"
              />
            </div>

            <div class="flex align-items-center justify-content-between my-4 gap-5">
              <div class="flex align-items-center">
                <Checkbox
                  v-model="signinAccount.checked"
                  id="rememberme1"
                  binary
                  class="mr-1"
                ></Checkbox>
                <label for="rememberme1" class="mr-3">記住帳密</label>
                <Checkbox
                  v-model="signinAccount.keepSignIn"
                  id="rememberme1"
                  binary
                  class="mr-1"
                ></Checkbox>
                <label for="rememberme1">保持登入狀態</label>
              </div>
              <router-link
                class="font-medium no-underline ml-2 text-right cursor-pointer"
                style="color: var(--primary-color)"
                to="/auth/forget"
                >忘記密碼?</router-link
              >
            </div>
            <Button label="登入" class="w-full p-3 text-xl mb-2" @click="signin"></Button>
            <!-- <Button
              label="以訪客身份登入"
              class="w-full p-3 text-xl"
              @click="openConfirmation"
            ></Button> -->
          </div>
        </div>
      </div>

      <!-- <Dialog
        header="確認"
        v-model:visible="displayConfirmation"
        :style="{ width: '350px' }"
        :modal="true"
      >
        <div class="flex align-items-center justify-content-center flex-wrap">
          <p class="w-full">訪客帳號在瀏覽器關閉時將會遺失，登入後請儘速至個人資料頁完成註冊。</p>
          <p>是否以訪客身份登入？</p>
        </div>
        <template #footer>
          <Button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text" />
          <Button
            label="Yes"
            icon="pi pi-check"
            @click="signInAnonymously()"
            class="p-button-text"
          />
        </template>
      </Dialog> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
