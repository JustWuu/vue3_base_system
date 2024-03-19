export interface User {
  displayName: string | null
  email: string | null
  emailVerified: string | null
  isAnonymous: string | null
  phoneNumber: string | null
  photoURL: string | null
  uid: string | null
  nickName: string | null
  state: string
  createdAt: number | null
  role: string[] | null
  updateAt: number
  operateAt: number
}
