import Database from './database'
import { getDatabase, ref, set, update } from 'firebase/database'
import { getAuth } from 'firebase/auth'
const db = getDatabase()
const auth = getAuth()

interface Profile {
  displayName: string | null
  email: string | null
  emailVerified: string | null
  isAnonymous: string | null
  phoneNumber: string | null
  photoURL: string | null
  uid: string | null
  metadata: string | null
  state: string | null
  role: string[] | null
  updateAt: number
}

let user: Profile

let profile: Profile = {
  displayName: '',
  email: '',
  emailVerified: '',
  isAnonymous: '',
  phoneNumber: '',
  photoURL: '',
  uid: '',
  metadata: null,
  // 上方auth值
  state: '',
  role: [],
  updateAt: 0
}

class UserFirebase extends Database {
  constructor() {
    super('user')
  }

  //新註冊創建資料
  async createUserProfile(role: string) {
    let today = new Date()
    user = auth.currentUser as unknown as Profile
    profile = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      uid: user.uid,
      metadata: user.metadata,
      state: 'using',
      role: [...role],
      updateAt: today.getTime()
    }
    set(ref(db, `${this.child}/${profile.uid}/profile`), profile)
  }
  //使用者更新資料
  async updateUserProfile(profileData: Profile) {
    let today = new Date()
    user = auth.currentUser as unknown as Profile
    profile = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      uid: user.uid,
      metadata: user.metadata,
      state: profileData.state,
      role: profileData.role,
      updateAt: today.getTime()
    }
    update(ref(db, `${this.child}/${profile.uid}/profile`), profile)
  }
}

export default UserFirebase
