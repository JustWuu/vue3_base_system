import Database from './database'
import type { User } from '@/interface'

interface Role {
  displayName: string | null
  id: string
}

let profile: User

class UserFirebase extends Database {
  constructor() {
    super('user')
  }

  //新註冊創建資料
  async setUser(user: any, role: Role) {
    let today = new Date()
    profile = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      uid: user.uid,
      state: 'enable',
      createdAt: today.getTime(),
      role: role,
      roles: [],
      updateAt: today.getTime(),
      operateAt: today.getTime()
    }
    this.set(user.uid, profile)
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
    this.update(profileData.uid, profile)
  }
}

export default UserFirebase
