import Database from './database'
import type { User, Account } from '@/interface'

let profile: User

class UserFirebase extends Database {
  constructor() {
    super('user')
  }
  //新註冊創建資料
  async setUser(user: any, account: Account) {
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
  // 使用者更新資料
  async updateUser(profileData: User) {
    let today = new Date()
    profile = {
      displayName: profileData.displayName,
      email: profileData.email,
      emailVerified: profileData.emailVerified,
      isAnonymous: profileData.isAnonymous,
      phoneNumber: profileData.phoneNumber,
      photoURL: profileData.photoURL,
      uid: profileData.uid,
      state: profileData.state,
      createdAt: profileData.createdAt,
      role: profileData.role,
      roles: profileData.roles,
      updateAt: today.getTime(),
      operateAt: today.getTime()
    }
    return this.update(profileData.uid, profile)
      .then((res) => {
        return res
      })
      .catch((error) => {
        throw error
      })
  }
}

export default UserFirebase
