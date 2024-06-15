export interface Member {
  displayName: string
  email?: string
  emailVerified?: boolean
  isAnonymous?: boolean
  phoneNumber: string | null
  photoURL: string
  bannerURL: any
  uid?: string
  state?: 'enable' | 'disabled' | 'delete' | ''
  createdAt?: number | null
  updateAt: number
  operateAt?: number
  password?: string
  stateValue?: string
  about?: string
  // 清單是否公開
  animes?: boolean
  follow?: boolean
}

export interface MemberPublic {
  displayName: string
  photoURL: string
  bannerURL: string
  uid?: string
  about?: string
  animes?: boolean
  follow?: boolean
}

export const MemberObject: Member = {
  displayName: '',
  email: '',
  emailVerified: false,
  isAnonymous: false,
  phoneNumber: '',
  photoURL: '',
  bannerURL: '',
  uid: '',
  state: 'enable',
  createdAt: 0,
  updateAt: 0,
  operateAt: 0,
  about: '',
  animes: true,
  follow: true
}
