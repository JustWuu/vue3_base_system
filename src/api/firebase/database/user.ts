import Database from './database'
import { getDatabase, ref, set, update } from 'firebase/database'
import { getAuth } from 'firebase/auth'

const db = getDatabase()

const auth = getAuth()
let user

let profile = {
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
  newPhoneNumber: ''
}

let publicProfile = {
  displayName: '',
  photoURL: '',
  uid: '',
  // 上面是auth資料，下面是data
  level: '',
  info: ''
}

class UserFirebase extends Database {
  constructor() {
    super('user')
  }

  //新註冊創建資料
  async createUserProfile(role) {
    let today = new Date()
    user = auth.currentUser
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
      // 上面是auth資料，下面是data
      updateAt: today.getTime(),
      level: 1,
      physicalPower: 10,
      skillPoints: 1,
      experience: 0,
      maxExperience: 100,
      healthPoints: 20,
      maxHealthPoints: 20,
      manaPoint: 10,
      maxManaPoint: 10,
      info: '',
      role: [...role]
    }
    publicProfile = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid,
      // 上面是auth資料，下面是data
      level: 1,
      info: ''
    }
    set(ref(db, `${this.child}/${profile.uid}/profile`), profile)
    update(ref(db, `${this.child}/${profile.uid}/publicProfile`), publicProfile)
  }
  //使用者更新資料
  async updateUserProfile(profileData) {
    let today = new Date()
    user = auth.currentUser
    profile = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      uid: user.uid,
      state: 'using',
      // 上面是auth資料，下面是data
      updateAt: today.getTime(),
      level: profileData.level,
      physicalPower: profileData.physicalPower,
      skillPoints: profileData.skillPoints,
      experience: profileData.experience,
      maxExperience: profileData.maxExperience,
      healthPoints: profileData.healthPoints,
      maxHealthPoints: profileData.maxHealthPoints,
      manaPoint: profileData.manaPoint,
      maxManaPoint: profileData.maxManaPoint,
      info: profileData.info,
      role: profileData.role
    }
    if (profileData) {
      publicProfile = {
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
        // 上面是auth資料，下面是data
        level: profileData.level,
        info: profileData.info
      }
    } else {
      publicProfile = {
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid
      }
    }
    update(ref(db, `${this.child}/${profile.uid}/profile`), profile)
    update(ref(db, `${this.child}/${profile.uid}/publicProfile`), publicProfile)
  }
}

export default UserFirebase
