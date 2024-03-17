<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Auth, CRUDFirebase } from '@/api/firebase'
import { Storage, Encryp } from '@/utils'
import InputTextFloat from '@/components/form/InputTextFloat.vue'
import InputPasswordFloat from '@/components/form/InputPasswordFloat.vue'

const storage = new Storage()
const encryp = new Encryp()
// firebase
const auth = new Auth()
const crudFirebase = new CRUDFirebase()

//data
const signupAccount = ref({
  email: '',
  password: ''
})

const signinAccount = ref({
  email: '',
  password: '',
  checked: false
})

const uidText = ref('')

interface CRUDTest {
  doc: string
  obj: {
    [key: string]: string | number
  }
  array: object[]
}

const curdTest = ref<CRUDTest>({
  doc: '',
  obj: {
    a: '',
    b: '',
    c: '',
    d: 0
  },
  array: []
})

//methods
const signup = () => {
  auth
    .createUser(signupAccount.value.email, signupAccount.value.password)
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

const signOut = () => {
  auth
    .signOut()
    .then((res) => {
      if (res) {
        console.log(res)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

const getUid = (uid: string) => {
  crudFirebase.get(uid).then((res) => {
    uidText.value = res.uid
  })
}

const getArray = () => {
  crudFirebase.array().then((res) => {
    curdTest.value.array = res
    console.log(curdTest.value.array)
  })
}

const get = (doc: string) => {
  crudFirebase.get(doc).then((res) => {
    console.log('資料：', res)
  })
}

// crud
const set = (id: string, params: object) => {
  if (id === '') {
    crudFirebase
      .add(params)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  } else {
    crudFirebase.set(id, params)
  }
}

const update = (id: string, params: object) => {
  crudFirebase.update(id, params)
}

const remove = (id: string) => {
  crudFirebase.delete(id)
}

// 下方onSnapshot寫法，必須搭配一個callback
const onSnapshot = (id: string, callback: Function) => {
  crudFirebase.onSnapshot(id, callback)
}
function callback(snapshot: any) {
  curdTest.value.obj = snapshot
}

const arrayOnSnapshot = (callback: Function, id: string = '') => {
  crudFirebase.arrayOnSnapshot(callback, id)
}
function callback2(snapshot: any) {
  console.log(snapshot)
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
        <VForm ref="signupForm" @submit="signup()">
          <h5>註冊</h5>
          <div class="field mt-5">
            <input-text-float
              label="信箱"
              v-model="signupAccount.email"
              name="email0"
              rules="required|email"
            />
          </div>
          <div class="field mt-5">
            <input-password-float
              label="密碼"
              v-model="signupAccount.password"
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
              :feedback="false"
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
        <VForm ref="formRef" @submit="signOut()">
          <h5>當前用戶</h5>
          <div>
            <p class="mb-0">asd</p>
            <p class="mb-0">qwdqwd</p>
            <p class="mb-0">qwdqwd</p>
          </div>
          <Button label="登出" severity="danger" type="submit"></Button>
        </VForm>
      </div>

      <div class="card p-fluid">
        <VForm ref="signupForm" @submit="getUid(uidText)">
          <h5>撈取指定用戶資料</h5>
          <div class="field mt-5">
            <input-text-float label="UID" v-model="uidText" name="uid" rules="required" />
          </div>
          <Button label="取得" type="submit"></Button>
        </VForm>
      </div>
      <div class="card p-fluid">
        <h5>CRUD</h5>
        <div class="field mt-5">
          <input-text-float label="DOC" v-model="curdTest.doc" name="doc" rules="required" />
        </div>
        <div class="field mt-5">
          <input-text-float label="A" v-model="curdTest.obj.a" name="a" rules="required" />
        </div>
        <div class="field mt-5">
          <input-text-float label="B" v-model="curdTest.obj.b" name="b" rules="required" />
        </div>
        <div class="field mt-5">
          <input-text-float label="C" v-model="curdTest.obj.c" name="c" rules="required" />
        </div>
        <div class="field mt-5">
          <input-text-float
            label="D"
            v-model="curdTest.obj.d"
            name="d"
            rules="required"
            type="number"
          />
        </div>
        <Button
          label="新增"
          type="submit"
          class="mb-1"
          severity="success"
          @click="set(curdTest.doc, curdTest.obj)"
        ></Button>
        <Button label="取得陣列" type="submit" class="mb-1" @click="getArray()"></Button
        ><Button label="取得單一" type="submit" class="mb-1" @click="get(curdTest.doc)"></Button>
        <Button
          label="修改"
          type="submit"
          class="mb-1"
          severity="warning"
          @click="update(curdTest.doc, curdTest.obj)"
        ></Button>
        <Button
          label="刪除"
          type="submit"
          class="mb-1"
          severity="danger"
          @click="remove(curdTest.doc)"
        ></Button>
        <Button
          label="監聽"
          type="submit"
          class="mb-1"
          severity="danger"
          @click="onSnapshot(curdTest.doc, callback)"
        ></Button>
        <Button
          label="監聽陣列"
          type="submit"
          class="mb-1"
          severity="danger"
          @click="arrayOnSnapshot(callback2)"
        ></Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
