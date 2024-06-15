import Database from './database'
import { type MemberPublic } from '@/interface'

class MemberFirebase extends Database {
  constructor() {
    super('member')
  }

  // 取得會員公開資料
  async getPublic(uid: string): Promise<MemberPublic> {
    return this.get(`${uid}/public/${uid}`)
      .then((res) => {
        return res
      })
      .catch((error) => {
        throw error
      })
  }
}

export default MemberFirebase
