import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateProfile,
  updatePassword,
  sendEmailVerification,
  sendPasswordResetEmail
  // signInAnonymously,
  // linkWithCredential
} from 'firebase/auth'
import { UserStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { UserFirebase } from '@/api'
import { type StringObject, type User } from '@/interface'
import { LoadingStore } from '@/stores'

const loadingStore = LoadingStore()

// 註冊使用
import { initializeApp } from 'firebase/app'

const userFirebase = new UserFirebase()

const userStore = UserStore()

const auth = getAuth()
let user = auth.currentUser

const authMessage: StringObject = {
  'auth/user-not-found': '找不到該電子郵件',
  'auth/email-already-in-use': '該電子郵件已在使用中',
  'auth/invalid-email': '無效的電子郵件',
  'auth/wrong-password': '密碼錯誤',
  'auth/weak-password': '密碼複雜度過低',
  'auth/too-many-requests': '請求過於頻繁',
  'auth/missing-email': '請輸入信箱',
  'auth/user-not-7': '找不到該帳號',
  'auth/user-disabled': '該帳號已停權',
  'auth/invalid-credential': '無效憑證'
}

class Auth {
  constructor() {}
  // 管理帳號使用(不需依當前登入的帳號來做動)
  // 創建帳戶(不會直接登入)
  async createUser(account: User) {
    loadingStore.debounce = true
    // 建立臨時實例
    const config = {
      apiKey: import.meta.env.VITE_API_KEY,
      authDomain: import.meta.env.VITE_AUTH_DOMAIN
    }
    const secondaryApp = initializeApp(config, 'Secondary')
    const secondaryAuth = getAuth(secondaryApp)
    // 開始建立帳戶
    return await createUserWithEmailAndPassword(secondaryAuth, account.email!, account.password!)
      .then((userCredential) => {
        user = userCredential.user
        console.log(`${user.email} create OK`)
        // userFirebase.setUser(user, account)
        signOut(secondaryAuth)
        return userFirebase.setUser(user, account)
      })
      .catch((error) => {
        const errorCode = error.code
        console.log(errorCode)
        throw authMessage[`${errorCode}`]
      })
  }
  // 創建帳戶(創建完成會登入該帳戶)
  // async createUser(email: string, password: string) {
  //   return await createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       user = userCredential.user
  //       console.log(`${user.email} create OK`)
  //       userFirebase.setUser(user, ['client'])
  //       return userCredential.user
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       console.log(errorCode)
  //       throw authMessage[`${errorCode}`]
  //       // ..
  //     })
  // }

  // 以下為當前帳號使用(需依當前登入的帳號來做動)
  // 登入
  async signIn(email: string, password: string) {
    loadingStore.debounce = true
    return await setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            user = userCredential.user
            loadingStore.debounce = false
            return `Sign-in ${userCredential.user.email}`
          })
          .catch((error) => {
            const errorCode = error.code
            loadingStore.debounce = false
            throw authMessage[`${errorCode}`]
          })
      })
      .catch((error) => {
        const errorCode = error.code
        loadingStore.debounce = false
        throw authMessage[`${errorCode}`]
      })
  }
  // 登入
  async keepSignIn(email: string, password: string) {
    loadingStore.debounce = true
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user
        loadingStore.debounce = false
        return `Sign-in ${userCredential.user.email}`
      })
      .catch((error) => {
        const errorCode = error.code
        loadingStore.debounce = false
        throw authMessage[`${errorCode}`]
      })
  }
  // 登出
  async signOut() {
    loadingStore.debounce = true
    return await signOut(auth)
      .then(() => {
        loadingStore.debounce = false
        return 'Sign-out successful'
      })
      .catch((error) => {
        const errorMessage = error.message
        loadingStore.debounce = false
        return errorMessage
      })
  }
  // 重新驗證帳戶(進行敏感操作時)
  async reauthenticate(password: string) {
    user = auth.currentUser
    const credential = EmailAuthProvider.credential(user!.email!, password)
    return await reauthenticateWithCredential(user!, credential)
      .then((userCredential) => {
        return userCredential.user
      })
      .catch((error) => {
        const errorCode = error.code
        throw authMessage[`${errorCode}`]
      })
  }
  // 變更密碼
  async updatePassword(password: string, newPassword: string) {
    user = auth.currentUser
    loadingStore.debounce = true
    return await this.reauthenticate(password)
      .then(() => {
        return updatePassword(user!, newPassword)
          .then(() => {
            console.log(`${user!.email} update-password`)
            return true
          })
          .catch((error) => {
            const errorCode = error.code
            throw authMessage[`${errorCode}`]
          })
      })
      .catch((error) => {
        const errorCode = error.code
        loadingStore.debounce = false
        throw authMessage[`${errorCode}`]
      })
  }
  // 修改帳戶資料
  async update(profile: any) {
    loadingStore.debounce = true
    user = auth.currentUser
    // 先修改auth中的資料
    return await updateProfile(user!, profile)
      .then(async () => {
        // 在修改資料庫
        try {
          await userFirebase.updateAccount(user!.uid, profile)
          const newUser = await userFirebase.get(user!.uid)
          userStore.user = { ...newUser, roles: userStore.user.roles }
          console.log(`${user!.email} update-profile`)
          return '帳戶資料更新成功'
        } catch (error) {
          console.log(error)
          throw '帳戶資料庫更新失敗'
        }
      })
      .catch(() => {
        throw '帳戶資料更新失敗'
      })
  }
  // 刪除帳號，刪除帳號並不會連同資料一起刪除
  // 而是會在資料上備註已刪除
  async deleteUser() {
    const today = new Date()
    user = auth.currentUser
    const uid = user!.uid
    return await deleteUser(user!)
      .then(() => {
        userFirebase.update(uid, { state: 'delete', updateAt: today })
        return true
      })
      .catch((error) => {
        const errorCode = error.code
        throw authMessage[`${errorCode}`]
      })
  }
  // 信箱驗證
  async sendEmail() {
    user = auth.currentUser
    return await sendEmailVerification(user!)
      .then(() => {
        console.log(`${user!.email} send-email-verification OK`)
        return true
      })
      .catch((error) => {
        const errorCode = error.code
        throw authMessage[`${errorCode}`]
      })
  }
  // 忘記密碼
  async sendPassword(email: string) {
    return await sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log(`${email} send-password-reset-email OK`)
        return true
      })
      .catch((error) => {
        const errorCode = error.code
        throw authMessage[`${errorCode}`]
      })
  }
  // // 訪客登入
  // async signInAnonymously() {
  //   return await signInAnonymously(auth)
  //     .then((userCredential) => {
  //       userFirebase.createUserProfile(['anonymously'])
  //       return userCredential.user
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       throw authMessage[`${errorCode}`]
  //     })
  // }
  // // 訪客註冊
  // async anonymouslyRegister(email, password) {
  //   const credential = EmailAuthProvider.credential(email, password)
  //   user = auth.currentUser
  //   return await linkWithCredential(user, credential)
  //     .then((userCredential) => {
  //       userStore.user = null
  //       userStore.user = user
  //       console.log(`${user.email} anonymous account upgraded OK`)
  //       userFirebase.updateUserProfile()
  //       return userCredential.user
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       throw authMessage[`${errorCode}`]
  //     })
  // }
  // 取得當前用戶
  // storeToRefs只會淺監聽，所以改裡面得值並不會重給值
  // 需設成null再從給值才能監聽到變化，ex：修改帳戶資料
  // 使用storeToRefs可以確保資料為響應式，資料皆為最新的值
  getUser() {
    return storeToRefs(userStore)
  }
}

export { Auth as default }
