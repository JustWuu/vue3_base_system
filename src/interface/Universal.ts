// 大家都用的到的放這邊
export interface StringObject {
  [key: string]: string
}

export const StateArray: object[] = [
  { name: '啟用', value: 'enable' },
  { name: '停用', value: 'disabled' }
  // { name: '刪除', value: 'delete' }
]
/**
 * 系統操作紀錄
 */
export class Syslog {
  collection: string
  methods: any
  timestamp: any
  useremail: any
  userip: any
  useruid: any
  constructor(
    collection: string,
    methods: string,
    timestamp: number,
    useruid: string,
    useremail: string,
    userip: string
  ) {
    this.collection = collection
    this.methods = methods
    this.timestamp = timestamp
    this.useruid = useruid
    this.useremail = useremail
    this.userip = userip
  }
}
