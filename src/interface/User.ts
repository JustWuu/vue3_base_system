interface Role {
  displayName: string | null
  id: string
}
export interface User {
  displayName: string
  email?: string
  emailVerified?: boolean
  isAnonymous?: boolean
  phoneNumber: string | null
  photoURL: string
  uid?: string
  state?: 'enable' | 'disabled' | 'delete' | ''
  createdAt?: number | null
  role?: Role
  roles?: string[]
  updateAt: number
  operateAt?: number
  password?: string
  stateValue?: string
}

export const UserObject: User = {
  displayName: '',
  email: '',
  emailVerified: false,
  isAnonymous: false,
  phoneNumber: '',
  photoURL: '',
  uid: '',
  state: 'enable',
  createdAt: 0,
  role: { displayName: '無', id: '' },
  roles: [],
  updateAt: 0,
  operateAt: 0
}
