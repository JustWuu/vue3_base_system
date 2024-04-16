import Database from './database'
import type { User } from '@/interface'

let profile: User

class UserFirebase extends Database {
  constructor() {
    super('user')
  }
  //新註冊創建資料
  async setUser(user: any, account: User) {
    let today = new Date()
    profile = {
      uid: user.uid,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      phoneNumber: user.phoneNumber,
      createdAt: today.getTime(),
      updateAt: today.getTime(),
      operateAt: today.getTime(),
      roles: [],
      // 註冊時可當下設定的值
      displayName: account.displayName,
      email: user.email,
      photoURL: account.photoURL,
      state: account.state,
      role: account.role
    }
    return this.set(user.uid, profile)
      .then((res) => {
        return res
      })
      .catch((error) => {
        throw error
      })
  }
  // 修改使用者資料
  async updateUser(user: User) {
    let today = new Date()
    profile = {
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      state: user.state,
      role: user.role,
      updateAt: today.getTime()
    }
    return this.update(user.uid!, profile)
      .then((res) => {
        return res
      })
      .catch((error) => {
        throw error
      })
  }
  // 使用者更新自己資料
  async updateAccount(user: User) {
    let today = new Date()
    profile = {
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      updateAt: today.getTime()
    }
    return this.update(user.uid!, profile)
      .then((res) => {
        return res
      })
      .catch((error) => {
        throw error
      })
  }
}

export default UserFirebase
