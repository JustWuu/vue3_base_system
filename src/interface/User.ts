export interface User {
  displayName: string | null
  email: string | null
  emailVerified: string | null
  isAnonymous: string | null
  phoneNumber: string | null
  photoURL: string | null
  uid: string | null
  state: string
  createdAt: number | null
  role: string
  roles: string[]
  updateAt: number
  operateAt: number
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
  role: '',
  roles: [],
  updateAt: 0,
  operateAt: 0
}
