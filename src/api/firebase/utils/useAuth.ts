import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
  // deleteUser,
  // reauthenticateWithCredential,
  // EmailAuthProvider,
  // updateProfile,
  // updatePassword,
  // sendEmailVerification,
  // sendPasswordResetEmail,
  // signInAnonymously,
  // linkWithCredential
} from 'firebase/auth'
import { UserProfileStores } from '@/stores/userProfile'
import { storeToRefs } from 'pinia'
import { UserFirebase } from '@/api/firebase'
import type { StringObject } from '@/interface'

const userFirebase = new UserFirebase()

const userProfileStores = UserProfileStores()

const auth = getAuth()
let user = auth.currentUser

const authMessage: StringObject = {
  'auth/user-not-found': '找不到該電子郵件',
  'auth/email-already-in-use': '該電子郵件已在使用中',
  'auth/invalid-email': '無效的電子郵件',
  'auth/wrong-password': '密碼錯誤',
  'auth/weak-password': '密碼複雜度過低',
  'auth/too-many-requests': '與先前發送間隔過短',
  'auth/missing-email': '請輸入信箱',
  'auth/user-not-7': '找不到該帳號',
  'auth/user-disabled': '該帳號已停權',
  'auth/invalid-credential': '無效憑證'
}

class Auth {
  constructor() {}
  //創建帳戶
  async createUser(email: string, password: string) {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user
        console.log(`${user.email} create OK`)
        userFirebase.setUser(user, ['client'])
        return userCredential.user
      })
      .catch((error) => {
        const errorCode = error.code
        console.log(errorCode)
        throw authMessage[`${errorCode}`]
        // ..
      })
  }
  //登入
  async signIn(email: string, password: string) {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user
        return userCredential.user
      })
      .catch((error) => {
        const errorCode = error.code
        throw authMessage[`${errorCode}`]
      })
  }
  //登出
  async signOut() {
    return await signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        const errorMessage = error.message
        return errorMessage
      })
  }
  // //重新驗證帳戶(進行敏感操作時)
  // async reauthenticate(password) {
  //   user = auth.currentUser
  //   const credential = EmailAuthProvider.credential(user.email, password)
  //   return await reauthenticateWithCredential(user, credential)
  //     .then((userCredential) => {
  //       console.log(`${user.email} reauthenticate OK`)
  //       return userCredential.user
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       throw authMessage[`${errorCode}`]
  //     })
  // }
  // //變更密碼
  // async updatePassword(newPassword) {
  //   user = auth.currentUser
  //   return await updatePassword(user, newPassword)
  //     .then(() => {
  //       console.log(`${user.email} updatePassword OK`)
  //       return true
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       throw authMessage[`${errorCode}`]
  //     })
  // }
  // //修改帳戶資料
  // async update(profile) {
  //   user = auth.currentUser
  //   return await updateProfile(user, profile)
  //     .then(() => {
  //       userProfileStores.user = null
  //       userProfileStores.user = { ...profile, ...user }
  //       if (userProfileStores.user.displayName === null) {
  //         userProfileStores.user.displayName = userProfileStores.user.email
  //       }
  //       console.log(`${user.email} update OK`)
  //       userFirebase.updateUserProfile(profile)
  //       return true
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       throw authMessage[`${errorCode}`]
  //     })
  // }
  // //刪除帳號，刪除帳號並不會連同資料一起刪除
  // //而是會在資料上備註已刪除
  // async deleteUser() {
  //   const today = new Date()
  //   user = auth.currentUser
  //   const uid = user.uid
  //   return await deleteUser(user)
  //     .then(() => {
  //       userFirebase.update(`${uid}/profile`, { state: 'delete', updateAt: today })
  //       return true
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       throw authMessage[`${errorCode}`]
  //     })
  // }
  // //信箱驗證
  // async sendEmail() {
  //   user = auth.currentUser
  //   return await sendEmailVerification(user)
  //     .then(() => {
  //       console.log(`${user.email} send email OK`)
  //       return true
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       throw authMessage[`${errorCode}`]
  //     })
  // }
  // //忘記密碼
  // async sendPassword(email) {
  //   return await sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       console.log(`${email} send password OK`)
  //       return true
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       throw authMessage[`${errorCode}`]
  //     })
  // }
  // //訪客登入
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
  // //訪客註冊
  // async anonymouslyRegister(email, password) {
  //   const credential = EmailAuthProvider.credential(email, password)
  //   user = auth.currentUser
  //   return await linkWithCredential(user, credential)
  //     .then((userCredential) => {
  //       userProfileStores.user = null
  //       userProfileStores.user = user
  //       console.log(`${user.email} anonymous account upgraded OK`)
  //       userFirebase.updateUserProfile()
  //       return userCredential.user
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       throw authMessage[`${errorCode}`]
  //     })
  // }
  //取得當前用戶
  //storeToRefs只會淺監聽，所以改裡面得值並不會重給值
  //需設成null再從給值才能監聽到變化，ex：修改帳戶資料
  getUser() {
    return storeToRefs(userProfileStores)
  }
}

export { Auth as default }
