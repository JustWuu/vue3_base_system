import Database from './database'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import type { User } from '@/interface'

const db = getFirestore()
const auth = getAuth()

let user: User
let profile: User

class UserFirebase extends Database {
  constructor() {
    super('user')
  }

  //新註冊創建資料
  async setUser(user: any, role: string) {
    let today = new Date()
    profile = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      uid: user.uid,
      // enable,disabled,
      state: 'enable',
      createdAt: today.getTime(),
      role: role,
      roles: [],
      updateAt: today.getTime(),
      operateAt: today.getTime()
    }
    setDoc(doc(db, this.child, user.uid), profile)
  }
  // 使用者更新資料
  async updateUser(profileData: User) {
    let today = new Date()
    user = auth.currentUser as unknown as User
    profile = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      uid: user.uid,
      state: profileData.state,
      createdAt: profileData.createdAt,
      role: profileData.role,
      roles: profileData.roles,
      updateAt: today.getTime(),
      operateAt: today.getTime()
    }
    // update(ref(db, `${this.child}/${profile.uid}`), profile)
  }
}

export default UserFirebase
