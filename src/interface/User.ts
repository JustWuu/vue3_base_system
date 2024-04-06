interface Role {
  displayName: string | null
  id: string
}
export interface User {
  displayName: string | null
  email: string
  emailVerified: string | null
  isAnonymous: string | null
  phoneNumber: string | null
  photoURL: string | null
  uid: string
  state: 'enable' | 'disabled' | 'delete' | ''
  createdAt: number | null
  role: Role
  roles: string[]
  updateAt: number
  operateAt: number
}

export interface Account {
  displayName: string
  email: string
  photoURL: string
  state: 'enable' | 'disabled' | 'delete' | ''
  role: Role
  password: string
}

export const UserObject: User = {
  displayName: '',
  email: '',
  emailVerified: '',
  isAnonymous: '',
  phoneNumber: '',
  photoURL: '',
  uid: '',
  state: '',
  createdAt: 0,
  role: { displayName: '', id: '' },
  roles: [],
  updateAt: 0,
  operateAt: 0
}
